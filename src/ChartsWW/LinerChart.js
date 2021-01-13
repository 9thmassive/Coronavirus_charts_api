import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Chart, LineAdvance } from 'bizcharts'

function LinerCHart(props) {
    return (
        <div className="linerChart">
            <span>{props.name}</span>
            <Chart
                padding={[10, 20, 50, 40]}
                autoFit
                height={200}
                data={props.data}
            >
                <LineAdvance
                    shape="smooth"
                    point
                    area
                    position={`NewConfirmed*TotalConfirmed`}
                />
            </Chart>
        </div>
    )
}
export default LinerCHart
