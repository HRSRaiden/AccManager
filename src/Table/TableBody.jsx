import React from 'react'
import RowItem from './RowItem'
import "./table.css"

// class="shadow p-3 mb-5 bg-white rounded "
function TableBody() {
  return (
    <table id="list-Table" class="table">
    <thead class="table-head-acc-manager">
        <tr>
            <th scope="col" id="list-first-item"><div class="addProduct-navbar-col">Ticket ID </div></th>
            <th scope="col"><div class="addProduct-navbar-col" >Date</div></th>
            <th scope="col"><div class="addProduct-navbar-col">Company Name </div></th>
            <th scope="col"><div class="addProduct-navbar-col">Seller ID</div></th>
            <th scope="col"><div class="addProduct-navbar-col">Module</div></th>
            <th scope="col"><div class="addProduct-navbar-col">Details</div></th>
            <th scope="col"><div class="addProduct-navbar-col">Status</div></th>
            <th></th>
        </tr>
    </thead>

    <RowItem id="ZS3828" date="April 1, 2022" company = "CCD" sellerID = "2789" module="General" details="How to carry On?" status="Resolved"/>
    <RowItem id="ZS3828" date="April 1, 2022" company = "CCD" sellerID = "2789" module="General" details="How to carry On?" status="Resolved"/>
    <RowItem id="ZS3828" date="April 1, 2022" company = "CCD" sellerID = "2789" module="General" details="How to carry On?" status="Resolved"/>
    <RowItem id="ZS3828" date="April 1, 2022" company = "CCD" sellerID = "2789" module="General" details="How to carry On?" status="Resolved"/>
    </table>
  )
}

export default TableBody