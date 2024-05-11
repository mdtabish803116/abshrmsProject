import React from 'react'
import unsplashIcon from "../images/unsplash.png";
import toggleIcon from "../images/Toggle.png";
import searchIcon from "../images/search.png";
import bellIcon from "../images/bell.png";
import ABSLogoBlack from "../images/ABSLogoBlack.png";
import settingBlackIcon from "../images/settingBlackIcon.png";
import downArrowIcon from "../images/chevron-down.png";


function Header() {
  return (
    <div className = "header">
      <div className = "toggleSearchBox">
            <div>
               <img src = {toggleIcon} alt="Logo"/>
            </div>
            <div className = "inputSearchBox">
               <img src = {searchIcon} alt="Logo"/>
               <input placeholder="Search"></input>
            </div>
      </div>

      <div className = "settingUserBox">
            <div>
               <img src = {bellIcon} alt="Logo"/>
            </div>
            <div>
               <img src = {settingBlackIcon} alt="Logo"/>
            </div>
            <div className = "ABSLogoBox">
                  <div>
                    <img src = {ABSLogoBlack} alt="Logo"/>
                    <span>ABS erp</span>
                  </div>
                  <div>
                   <img src = {downArrowIcon} alt="Logo"/> 
                  </div>
            </div>
            <div className = "ABSLogoBox">
                <div>
                    <img src = {unsplashIcon} alt="Logo"/>
                    <span>Manoj Kumar</span>
                  </div>
                  <div>
                   <img src = {downArrowIcon} alt="Logo"/> 
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Header