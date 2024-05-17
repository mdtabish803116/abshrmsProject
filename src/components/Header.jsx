import React from 'react'
import unsplashIcon from "../images/unsplash.png";
import toggleIcon from "../images/Toggle.png";
import searchIcon from "../images/search.png";
import bellIcon from "../images/bell.png";
import ABSLogoBlack from "../images/ABSLogoBlack.png";
import settingBlackIcon from "../images/settingBlackIcon.png";
import downArrowIcon from "../images/chevron-down.png";


import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'


function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div className = "header">
      <div className = "toggleSearchBox">
            <div>
                 <img  ref = {btnRef} src = {ABSLogoBlack} onClick={onOpen}/>
            </div>
            <div>
               <img src = {toggleIcon} alt="Logo"/>
            </div>
            <div className = "inputSearchBox">
               <img src = {searchIcon} alt="Logo"/>
               <input placeholder="Search"></input>
            </div>
      </div>

      <Drawer placement="left" 
      onClose={onClose} 
      isOpen={isOpen}
      >
      <DrawerOverlay />
        <DrawerContent>
           <DrawerCloseButton />
          <DrawerBody className = "drawerBody" >
             <p>Dashboard</p>
             <p>Leads</p>
             <p>Customer</p>
             <p>Supplier</p>
             <p>Vendor</p>
             <p>Category</p>
             <p>Inventory</p>
             <p>Settings</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <div className = "settingUserBox">
            <div className = "hidden">
               <img src = {bellIcon} alt="Logo"/>
            </div>
            <div className = "hidden">
               <img src = {settingBlackIcon} alt="Logo"/>
            </div>
            <div className = "ABSLogoBox hidden">
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