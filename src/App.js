import './App.css'
import CountryAllGrid from './ChartsWW/CountryAllGrid'
import Header from './Header'
import LinerCHart from './ChartsWW/LinerChart'
import React, { useEffect, useState } from 'react'

function App() {
    const [wwData, setWwData] = useState([
        {
            Country: 'noData',
            NewConfirmed: 'noData',
            TotalConfirmed: 'noData',
            NewDeaths: 'noData',
            TotalDeaths: 'noData',
            NewRecovered: 'noData',
            TotalRecovered: 'noData',
        },
    ])

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then((response) => response.json())
            .then((data) => {
                setWwData(() => data.Countries)
            })
        console.log('useEffect loaded')
    }, [])

    return (
        <div className="App">
            <Header />
            <div className="totalCharts">
                <div className="miniCHarts">
                    <LinerCHart />
                    <LinerCHart />
                    <LinerCHart />
                </div>

                <CountryAllGrid wwData={wwData} />
            </div>
        </div>
    )
}

export default App
