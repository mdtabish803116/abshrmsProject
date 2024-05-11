import React from 'react'
import "./Styles.css";
import absLogo from "../images/ABSLogoWhite.png";
import categoryIcon from "../images/categoryLogoWhite.png";
import customersIcon from "../images/Customers.png";
import dashboardIcon from "../images/dashboard_erp_logo_black.png";
import inventoryIcon from "../images/Inventory.png";
import leadsIcon from "../images/Leads.png";
import settingsIcon from "../images/Settings.png";
import suppliersIcon from "../images/Suppliers.png";
import vendorIcon from "../images/Vendor.png";


function Sidebar() {
  return (
    <div className = "sidebar">
        <div>
          <img src = {absLogo} alt="Logo"/>
        </div>
        <div className="sidebarIconBox">
             <div className="active">
                <img src = {dashboardIcon} alt="Logo"/>
             </div>
             <div>
                 <img src = {leadsIcon} alt="Logo"/>
             </div>
             <div>
                <img src = {customersIcon} alt="Logo"/>
             </div>
             <div>
                   <img src = {suppliersIcon} alt="Logo"/>
             </div>
             <div>
                 <img src = {vendorIcon} alt="Logo"/>
             </div>
             <div> 
                  <img src = {categoryIcon} alt="Logo"/>
             </div>
             <div>
                <img src = {inventoryIcon} alt="Logo"/>
             </div>
             <div>
                <img src = {settingsIcon} alt="Logo"/>
             </div>
        </div>
    </div>
  )
}

export default Sidebar