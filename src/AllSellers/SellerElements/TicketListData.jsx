import React from 'react'

function TicketListData(props) {
  return (
    <tr class="contact-card-table-row">
    <td class="contact-card-table-data" style={{ color: "#646464" }}>
        {props.id}
    </td>
    <td class="contact-card-table-data" style={{ color: "#646464" }}>
        {props.date}
    </td>
    <td class="contact-card-table-data" style={{ color: "#1F2124" }}>
        {props.compRep}
    </td>
    <td class="contact-card-table-data" style={{ color: "#1F2124" }}>
        {props.module}
    </td>
    <td class="contact-card-table-data" style={{ color: "#646464" }}>
        {props.comment}
    </td>
</tr>
  )
}

export default TicketListData