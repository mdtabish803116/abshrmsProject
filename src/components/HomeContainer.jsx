import React from 'react'
import {useReactToPrint} from "react-to-print";
import Header from './Header'
import IconTitleBox from './IconTitleBox'
import frameUserIcon from "../images/frameUserIcon.png"
import userCheckIcon from "../images/user-check.png"
import userXIcon from "../images/user-x.png"
import rupeeIcon from "../images/rupeeIcon.png"
import searchIcon from "../images/search.png"
import downloadIcon from "../images/download.png"
import printerIcon from "../images/printer.png"
import uploadIcon from "../images/upload.png"
import plusIcon from "../images/plus.png"
import NewCustomer from './NewCustomer';

function HomeContainer() {
  const documentData = React.useRef();
  const [addNewClicked , setAddNewClicked] = React.useState(false)
  const [data , setData] = React.useState([
    {
      customerId: "ABSCUST01",
      customerCompany: "ABShrms",
      phoneNumber: "6862498345",
      emailId: "info@abshrms.com",
      address: "ABS North Phase industrial Estate , 42 , 5th c",
      authorisedPerson: "Augustin Gems"
    },
    {
      customerId: "ABSCUST02",
      customerCompany: "CPRms",
      phoneNumber: "6867498345",
      emailId: "info@CPRms.com",
      address: "ABS North Phase industrial Estate , 42 , 5th c",
      authorisedPerson: "Augustin Gems"
    },
    {
      customerId: "ABSCUST03",
      customerCompany: "CPRms",
      phoneNumber: "6867498345",
      emailId: "info@CPRms.com",
      address: "ABS North Phase industrial Estate , 42 , 5th c",
      authorisedPerson: "Augustin Gems"
    },
    {
      customerId: "ABSCUST04",
      customerCompany: "CPRms",
      phoneNumber: "6867498345",
      emailId: "info@CPRms.com",
      address: "ABS North Phase industrial Estate , 42 , 5th c",
      authorisedPerson: "Augustin Gems"
    }
  ])

const handleDownLoad = useReactToPrint({
    content: () => documentData.current,
    documentTitle:"UserData",
})

  return (
    <div className = "homeContainer">
      <Header/>
      <div style = {{padding:"10px 20px 0px", fontFamily:"sans-serif", fontWeight:"700", fontSize:"16px"}}>Customer Creation</div>
       {
        addNewClicked ? 
        <> 
         <NewCustomer props = {{setAddNewClicked,data,setData}}/>
        </> : 
        <>
           <div className = "iconTitleBoxContainer">
            <IconTitleBox props = {{icon:frameUserIcon , title:"Total Customers" , count: "0"}}/>
            <IconTitleBox props = {{icon:userCheckIcon , title:"Active Customers" , count: "0"}}/>
            <IconTitleBox props = {{icon:userXIcon , title:"InActive Customers" , count: "0"}}/>
            <IconTitleBox props = {{icon:rupeeIcon , title:"Credit Customers" , count: "0"}}/>
            <IconTitleBox props = {{icon:rupeeIcon , title:"Cash In Advance" , count: "0"}}/>
     </div>
     <div className = "searchDownloadBox">
          <div>
                <div className = "inputSearchBox ">
                   <img src = {searchIcon} alt="Logo"/>
                   <input placeholder="Search"></input>
                </div>
                <div className = "plusIconBox box" onClick={() => {
                   setAddNewClicked(true)
                }}>
                    <img src = {plusIcon} alt="Logo"/>
                    <span>Add New Customer</span>
                </div>
                <div style = {{backgroundColor:"black"}}className = "importCustomerBox box">
                    <img src = {uploadIcon} alt="Logo"/>
                    <span style = {{color:"white"}}>Import Customers</span>
                </div>
          </div>
          <div>
                 <div className = "printerBox box" onClick = {handleDownLoad}>
                   <img src = {printerIcon} alt="Logo"/>
                    <span>Print</span>
                 </div>
                 <div className = "downloadBox box" onClick = {handleDownLoad}>
                   <img src = {downloadIcon} alt="Logo"/>
                    <span>Download</span>
                 </div>
          </div>
     </div>

     <div ref = {documentData} className = "dataConatiner">
           <table className="table">
                 <thead>
                        <tr>
                             <th>
                                 <input style = {{width:"20px" , height:"20px"}} 
                                 type="checkbox" 
                                 className="inputCheckBox" 
                                 ></input>
                             </th>
                             <th>Customer ID</th>
                             <th>Customer Company</th>
                             <th>Phone Number</th>
                             <th>E-mail ID</th>
                             <th>Address</th>
                             <th>Authorized Person</th>
                        </tr>
                 </thead>
                 <tbody>
                     {
                      data.map((item , index) => ( 
                       <tr key = {index}>
                          <td>
                            <input style = {{width:"20px" , height:"20px"}} 
                            type="checkbox" 
                            className="inputCheckBox"></input>
                          </td>
                          <td>{item.customerId}</td>
                          <td>{item.customerCompany}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.emailId}</td>
                          <td>{item.address}</td>
                          <td>{item.authorisedPerson}</td>
                     </tr>
                      ))
                      }
                 </tbody>
           </table>
       </div>
      </>
      }

    </div>
  )
}

export default HomeContainer