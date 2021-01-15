import './App.css'
import CountryAllGrid from './ChartsWW/CountryAllGrid'
import Header from './Header'
import LinerCHart from './ChartsWW/LinerChart'
import PiChart from './ChartsWW/PieChart'
import LessRouting from './Routing/LessRouting'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch,
    useLocation,
    useHistory,
} from 'react-router-dom'

function App() {
    const [wwData, setWwData] = useState(null)
    const [wwPerDay, setWwPerDAy] = useState('')
    const [pieDeath, setPieDeath] = useState('')
    const [pieInfected, setPieInfected] = useState('')
    const [path, setPath] = useState('')

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then((response) => response.json())
            .then((data) => {
                setWwData(() => data.Countries)
            })
    }, [])
    useEffect(() => {
        fetch(`https://api.covid19api.com/world`)
            .then((response) => response.json())
            .then((data) => {
                setWwPerDAy(() => data)
            })
        if (wwData) {
            let forPieDeath = wwData.sort((a, b) => b.NewDeaths - a.NewDeaths)
            forPieDeath = forPieDeath.splice(0, 10)
            setPieDeath(forPieDeath)
            let forPieInfected = wwData.sort(
                (a, b) => b.NewConfirmed - a.NewConfirmed
            )
            forPieInfected = forPieInfected.splice(0, 5)
            setPieInfected(forPieInfected)
        }
        console.log(pieDeath)
    }, [wwData])

    useEffect(() => {
        console.log(path, 'useEffect')
    }, [path])
    function changePath(e) {
        setPath(() => e.value)
    }

    return (
        <>
            <div className="App">
                <Header />
                <Router>
                    <div className="totalCharts">
                        <Switch>
                            <Route exact path="/">
                                <div className="miniCHarts">
                                    <LinerCHart
                                        name="Ttotal Covid Data"
                                        data={wwPerDay}
                                    />
                                    <PiChart
                                        title="Top 10 country"
                                        description="By death today"
                                        dataValue="NewDeaths"
                                        PieDataChart={pieDeath}
                                    />
                                    <PiChart
                                        title="Top 5 country"
                                        description="By confirmed today"
                                        dataValue="NewConfirmed"
                                        PieDataChart={pieInfected}
                                    />
                                </div>
                                <Link to='/country'>
                                    <CountryAllGrid
                                        cellCLick={changePath}
                                        wwData={wwData}
                                    />
                                </Link>
                            </Route>
                            <Route
                                path='/country'
                                component={<LessRouting title={path} />}
                            ></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </>
    )
}

export default App
