import React from 'react'
import "./SellerEle.css"
import { useState } from "react";

function KYCStatus(prop) {
  
  var flag = 0;
  
  if(prop.status === "done")
    flag = 1;

  return (
    <div id="kyc-indicator" class="kycStatus-div" style={{backgroundColor: flag===0?"#E42B2B":"#5EAA22"}}>
        <p>{prop.level}</p>
    </div>
  )

  // function checkStatus()
  // {
  //   // document.getElementById("kyc-indicator").style.backgroundColor = "#5EAA22";
  //   if(prop.status === "done")
  //   {
  //     setFlag(1);
  //     document.getElementById("kyc-indicator").style.backgroundColor = "#5EAA22";
  //   }

  //   else
  //   setFlag(0);

  //   console.log(document.getElementById("kyc-indicator"));
  // }
}

export default KYCStatus