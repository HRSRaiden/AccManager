import React from "react";
import "./table.css"

function RowItem(prop) {
	return (
		<tbody id="row-item-body" style={{boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius:"12px"}}>
			<tr id="list-body">
				<th scope="row ">
					<p class="non-img-col">{prop.id}</p>
				</th>
				<td>
                <p class="non-img-col">{prop.date}</p>
				</td>
				<td>
					<p class="non-img-col">{prop.company}</p>
				</td>
				<td>
					<p class="non-img-col">{prop.sellerID}</p>
				</td>
				<td>
					<p class="non-img-col">{prop.module}</p>
				</td>
				<td>
					<p class="non-img-col">{prop.details}</p>
				</td>
				<td>
					<button id="list-delete-btn">{prop.status}</button>
				</td>
                <td></td>
			</tr>
		</tbody>
	);
}

export default RowItem;
