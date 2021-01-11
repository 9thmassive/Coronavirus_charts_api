import './App.css'
import CountryAllGrid from './ChartsWW/CountryAllGrid'
import Header from './Header'
import LinerCHart from './ChartsWW/LinerChart'
import PiChart from './ChartsWW/PieChart'
import React, { useEffect, useState } from 'react'

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
            forPieDeath = forPieDeath.splice(0, 5)
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
        <div className="App">
            <Header />
            <div className="totalCharts">
                <div className="miniCHarts">
                    <LinerCHart name="Ttotal Covid Data" data={wwPerDay} />
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
        </div>
    )
}

export default App
