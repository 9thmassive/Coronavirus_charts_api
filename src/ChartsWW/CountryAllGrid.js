import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

function CountryAllGrid(props) {
    return (
        <div className="agGridd">
            <button>Sorted by New Confrimed</button>
            <button>Sorted by Total Confirmed</button>
            <button>Sorted by New Deaths</button>
            <button>Sorted TotalDeaths</button>
            <button>Sorted by TotalRecovered"</button>
            <br />
            <div
                className="ag-theme-alpine"
                style={{ height: 600, width: 800 }}
            >
                <AgGridReact rowData={props.wwData}>
                    <AgGridColumn field="Country"></AgGridColumn>
                    <AgGridColumn field="NewConfirmed"></AgGridColumn>
                    <AgGridColumn field="TotalConfirmed"></AgGridColumn>
                    <AgGridColumn field="NewDeaths"></AgGridColumn>
                    <AgGridColumn field="TotalDeaths"></AgGridColumn>
                    <AgGridColumn field="NewRecovered"></AgGridColumn>
                    <AgGridColumn field="TotalRecovered"></AgGridColumn>
                </AgGridReact>
            </div>
        </div>
    )
}
export default CountryAllGrid
