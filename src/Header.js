import React, { useEffect, useState } from 'react'

import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

// installed ag grid and imported
function Header() {
    return (
        <div className="header">
            <span>Coronavirus charts WW</span>
        </div>
    )
}
export default Header
