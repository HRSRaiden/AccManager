import React from 'react'
import "./allSellersTable.css";
import SellerItem from './SellerItem';

function AllSellersTableBody() {
  return (
    <table id="list-Table" class="table">
    <thead class="table-head-acc-manager">
        <tr>
            <th scope="col" id="list-first-item"><div class="addProduct-navbar-col">Seller ID </div></th>
            
            <th scope="col"><div class="addProduct-navbar-col">Company Name </div></th>
            <th scope="col"><div class="addProduct-navbar-col" >Category</div></th>
            <th scope="col"><div class="addProduct-navbar-col">Pending Tickets</div></th>
            <th scope="col"><div class="addProduct-navbar-col">Account Manager</div></th>
            <th></th>
        </tr>
    </thead>

    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    </table>
  )
}

export default AllSellersTableBody