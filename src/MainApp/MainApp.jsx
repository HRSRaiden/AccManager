import React from 'react'
import AppBody from '../AppBody';
import Sidebar from '../Sidebar/Sidebar';
import "./mainApp.css"

function MainApp() {
  return (
    <div id="viewport">
        <Sidebar />
        
        <div id="content">
          <div class="container-fluid" >
            <div class="content-area">
              <AppBody />
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainApp