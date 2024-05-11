import React,{useState} from 'react'

function NewCustomer({props}) {

  const [companyName , setCompanyName] = useState("");
  const [GSTINNumber, setGSTINNumber] = useState("");
  const [importExportCode , setImportExportCode] = useState("");
  const [phoneNumber , setPhoneNumber] = useState("");
  const [emailId , setEmailId] = useState("");
  const [webSite , setWebSite] = useState("");

  const [addressLine1Data , setAddressLine1Data] = useState("");
  const [addressLine2Data , setAddressLine2Data] = useState("");
  const [city , setCity] = useState("");
  const [state , setState] = useState("");
  const [pincode , setPincode] = useState("");

  const [pocName , setPocName] = useState("");
  const [jobTitle , setJobTitle] = useState("");
  const [contactNumber1 , setContactNumber1] = useState("");
  const [contactNumber2 , setContactNumber2] = useState("");
  const [contactEmailId , setContactEmailId] = useState("");

  const [authPersonName , setAuthPersonName] = useState("");
  const [authPersonDesign , setAuthPersonDesign] = useState("");
  const [authContactNumber1 , setAuthContactNumber1] = useState("");
  const [authContactNumber2 , setAuthContactNumber2] = useState("");

  function addNewCustomerData(){
      if (companyName === "" || GSTINNumber === "" || importExportCode === "" || phoneNumber === ""
      || emailId === ""  || webSite === "" || addressLine1Data === "" || addressLine2Data === "" ||
      city === "" || state === "" || pincode === "" || pocName === "" || jobTitle === "" || contactNumber1 === "" ||
      contactNumber2 === "" || contactEmailId === "" || authPersonName === "" || authPersonDesign === "" ||
      authContactNumber1 === "" || authContactNumber2 === ""){
            alert("Please fill all deatils!")
      }else {
            let payload = {
                  customerId: `ABSCUST0${props.data.length+1}`,
                  customerCompany: companyName,
                  phoneNumber: phoneNumber,
                  emailId: contactEmailId,
                  address: addressLine1Data,
                  authorisedPerson: authPersonName
             }
          props.setData([...props.data , payload])
          props.setAddNewClicked(false)
      }
  }
  

  return (
    <div className = "formContaner">
          <div className = "progressBox">
                <div>
                       <div>COMPANY DETAILS</div>
                       <div>BILLING & SHIPPPING DETAILS</div>
                       <div>KYC DOCUMENTS</div>
                </div>
                <div className ="progressBarLine">
                     <div></div>
                </div>
          </div>

          <div className = "inputLabel">Company Details</div>
          <div className = "inputBox">
                <input placeholder = "Company Name" type="text" value = {companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                <input placeholder = "GSTIN Number" type="text" value = {GSTINNumber} onChange={(e) => setGSTINNumber(e.target.value)} />
                <input placeholder = "Import Export Code" type="text" value = {importExportCode} onChange={(e) => setImportExportCode(e.target.value)} />
                <input placeholder = "Phone Number" type="text" value = {phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input placeholder = "Email ID" type="text" value = {emailId} onChange={(e) => setEmailId(e.target.value)}/>
                <input placeholder = "Website" type="text" value = {webSite} onChange={(e) => setWebSite(e.target.value)}/>
          </div>

          <div className = "inputLabel">Address Details</div>
          <div className = "inputBox">
                <input style = {{width:"46%",height:"88px"}} placeholder = "Address Line1" type="text" value = {addressLine1Data} onChange={(e) => setAddressLine1Data(e.target.value)} />
                <input style = {{width:"46%",height:"88px"}} placeholder = "Address Line2" type="text" value = {addressLine2Data} onChange={(e) => setAddressLine2Data(e.target.value)}/>
                <input placeholder = "City" type="text" value = {city} onChange={(e) => setCity(e.target.value)}/>
                <input placeholder = "State" type="text" value = {state} onChange={(e) => setState(e.target.value)}/>
                <input placeholder = "Pincode" type="text" value = {pincode} onChange={(e) => setPincode(e.target.value)}/>
          </div>

          <div className = "inputLabel">Contact Person</div>
          <div className = "inputBox">
                <input placeholder = "POC Name" type="text" value = {pocName} onChange={(e) => setPocName(e.target.value)}/>
                <input placeholder = "JOB Title" type="text" value = {jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                <input placeholder = "Contact Number1" type="text" value = {contactNumber1} onChange={(e) => setContactNumber1(e.target.value)} />
                <input placeholder = "Contact Number2" type="text" value = {contactNumber2} onChange={(e) => setContactNumber2(e.target.value)} />
                <input placeholder = "Contact Email ID" type="text" value = {contactEmailId} onChange={(e) => setContactEmailId(e.target.value)}/>
          </div>

          <div className = "inputLabel">Address Details</div>
          <div className = "inputBox">
                <input style = {{width:"30%"}} placeholder = "Authorised Person Name" type="text" value = {authPersonName} onChange={(e) => setAuthPersonName(e.target.value)}/>
                <input style = {{width:"30%"}}placeholder = "Authorised Person Designation" type="text" value = {authPersonDesign} onChange={(e) => setAuthPersonDesign(e.target.value)} />
                <input style = {{width:"30%"}}placeholder = "Authorised Person Contact Number" type="text" value = {authContactNumber1} onChange={(e) => setAuthContactNumber1(e.target.value)} />
                <input style = {{width:"30%"}}placeholder = "Authorised Person Contact Number" type="text" value = {authContactNumber2} onChange={(e) => setAuthContactNumber2(e.target.value)} />
          </div>

          <div style = {{display:"flex", 
                 alignItems:"center", justifyContent:"center" , 
                 margin:"30px 0px" ,gap:"20px" , fontSize:"18px" , 
                 fontWeight:"600", fontFamily:"sans-serif"}}>
                <div style = {{borderRadius:"4px", 
                    border:"1px solid black",padding:"10px",
                    cursor:"pointer"}} 
                    onClick = {() => props.setAddNewClicked(false)}>cancel</div>
              <div style={{backgroundColor:"black", 
                    color:"white" ,
                    borderRadius:"4px",
                    padding:"10px", 
                    cursor:"pointer"}}
                    onClick = {() => addNewCustomerData()}
              >save & continue</div>
          </div>
    </div>
  )
}

export default NewCustomer