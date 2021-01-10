import './App.css'
import CountryAllGrid from './ChartsWW/CountryAllGrid'
import Header from './Header'
import LinerCHart from './ChartsWW/LinerChart'
import React, { useEffect, useState } from 'react'

function App() {
    const [wwData, setWwData] = useState(false)
    const [wwPerDay, setWwPerDAy] = useState('')

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
    }, [wwData])
    const dataTest = [
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
                    <LinerCHart />
                    <LinerCHart />
                </div>
                <CountryAllGrid wwData={wwData} />
            </div>
        </div>
    )
}

export default App
