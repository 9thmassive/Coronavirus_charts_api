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
    const dataTest = [
        //for liner chart example
        {
            day: '20.01.2020',
            city: 'WW',
            count: 200,
        },
        {
            month: '21.01.2020',
            city: 'WW',
            count: 300,
        },
        {
            month: '23.01.2020',
            city: 'WW',
            count: 600,
        },
    ]
    return (
        <>
            <div className="App">
                <Header />
                <Router>
                    <ol>
                        <li>
                            <Link to="/"> no path</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/users">User</Link>
                        </li>
                    </ol>
                    <Switch>
                        <Route path="/">
                            <div className="totalCharts">
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
                                <CountryAllGrid wwData={wwData} />
                            </div>
                        </Route>
                        <Route path="/about">
                            <h1> about 1111111111111</h1>
                        </Route>
                        <Route path="/users">
                            <h1>User </h1>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    )
}

export default App
