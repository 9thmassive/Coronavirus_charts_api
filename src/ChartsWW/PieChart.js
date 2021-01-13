import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { PieChart } from 'bizcharts'

function PiChart(props) {
    return (
        <div className="pieCHart">
            <PieChart
                data={props.PieDataChart}
                title={{
                    visible: true,
                    text: props.title,
                }}
                description={{
                    visible: true,
                    text: props.description,
                }}
                radius={0.6}
                angleField={props.dataValue}
                colorField="Country"
                label={{
                    visible: true,
                    type: 'outer',
                    offset: 8,
                }}
            />
        </div>
    )
}
export default PiChart
