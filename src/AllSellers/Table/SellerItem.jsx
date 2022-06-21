import React from 'react'
import "./allSellersTable.css";

function SellerItem(prop) {
  return (
    <tbody id="row-item-body" style={{boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius:"12px"}}>
			<tr id="list-body">
				<th scope="row ">
					<p class="non-img-col">{prop.id}</p>
				</th>
				<td>
                <p class="non-img-col">{prop.company}</p>
				</td>
				<td>
					<p class="non-img-col">{prop.category}</p>
				</td>
				<td>
					<p class="non-img-col">{prop.pending}</p>
				</td>
				<td>
					<p class="non-img-col">{prop.accManger}</p>
				</td>
			</tr>
		</tbody>
  )
}

export default SellerItem