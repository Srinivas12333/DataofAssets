import React,{useState} from 'react';
import "./App.css"
import axios from 'axios'


function Postdata() {  
  const [employeename,setEmployeeName]=useState("");
  const [employeeid,setEmployeeId]=useState("");
  const [location,setLocation]=useState("");
  const [client,setClient]=useState("");
  const [designation,setDesignation]=useState("");
  const [laptoptypemodel,setLaptopTypeModel]=useState("");
  const [processor,setProcessor]=useState("");
  const [ram,setRam]=useState("");
  const [storagetype,setStorageType]=useState("");
  const [serialnumber,setSerialNumber]=useState("");
  const [adaptorserialnumber,setAdaptorSerialNumber]=useState("");
  const [softwares,setSoftwares]=useState("");
  const [officialemail,setOfficialEmail] = useState("");
  const [licenses,setLincenses]=useState("");
  const [department,setDepartment]=useState("");
  const [contactnumber,setContactNumber]=useState("");
  const [assetcode,setAssetCode]=useState("");
  const [assetowner,setAssetOwner]=useState("");
  const [assethandoverdate,setAssetHandoverDate]=useState("");
  const [operatingsystem,setOperatingSystem]=useState("");
  const [keyboard,setKeyboard]=useState("");
  const [mouse,setMouse] = useState("");
  const [status,setStatus]=useState("");
  const [recivedfrom,setReceivedFrom]=useState("");
  const [remarks,setRemarks]=useState("");

  const postData = async (e) => {
    e.preventDefault()
    console.log('fired')
    var data = JSON.stringify({
      "employeeName": "Michel Jackson",
      "employeeId": "MG180269",
      "location": "Hyderabad",
      "client": "mind-graph",
      "designation": "Developer",
      "laptopTypeModel": "68732hjwd",
      "processor": "7832nbdjw",
      "ram": "16GB",
      "storageType": "200HDD",
      "serialNumber": "783ehjwd",
      "adaptorSerialNumber": "7328ewjd",
      "softwares": "BAsic",
      "officialEmail": "srinivas.p@mindgraph.com",
      "licenses": "8739wj",
      "department": "IT",
      "contactNumber": "8008917840",
      "assetCode": "mg01",
      "assetOwner": "mg",
      "assetHandOverDate": "2022-06-20T04:58:38.964Z",
      "operatingSystem": "windows",
      "keyBoard": "NA",
      "mouse": "NA",
      "status": "Active",
      "receivedfrom": "Abacus",
      "remarks": "No remarks"
    });
    
    var config = {
      method: 'post',
      url: 'https://localhost:44334/api/data',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      // alert("Posted Succesfully")
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      
    });
  }
  return (
    <div className='information'>
    <div className='title'>Asset Information Form</div>
    <form>
      <div className='user-details'>
         <div className='input-box '>
          <span className='details'>Employee Name</span>
          <input type='text' placeholder='Enter employee name' value={employeename}
           onChange={(e)=>{setEmployeeName(e.target.value)}} />
         </div>

         <div className='input-box '>
          <span className='details'>Employee Id</span>
          <input type='text' placeholder='Enter employee id'  value={employeeid}
           onChange={(e)=>{setEmployeeId(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Location</span>
          <input type='text' placeholder='Enter employee location'  value={location}
           onChange={(e)=>{setLocation(e.target.value)}} />
         </div>

         <div className='input-box '>
          <span className='details'>Client</span>
          <input type='text' placeholder='Enter client name'  value={client}
           onChange={(e)=>{setClient(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Designation</span>
          <input type='text' placeholder='Enter employee designation'  value={designation}
           onChange={(e)=>{setDesignation(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Laptop Type&Model</span>
          <input type='text' placeholder='laptop details' value={laptoptypemodel}
           onChange={(e)=>{setLaptopTypeModel(e.target.value)}}  />
         </div>
         <div className='input-box '>
          <span className='details'>Processor</span>
          <input type='text' placeholder='processor details'  value={processor}
           onChange={(e)=>{setProcessor(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Ram</span>
          <input type='text' placeholder='Enter ram size'  value={ram}
           onChange={(e)=>{setRam(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Storage Type</span>
          <input type='text' placeholder='Enter storage & type' value={storagetype}
           onChange={(e)=>{setStorageType(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Serial Number</span>
          <input type='text' placeholder='Enter serial number' value={serialnumber}
           onChange={(e)=>{setSerialNumber(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Adaptor Serialnumber</span>
          <input type='text' placeholder='Adaptor serialnumber'  value={adaptorserialnumber}
           onChange={(e)=>{setAdaptorSerialNumber(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Softwares</span>
          <input type='text' placeholder='Enter softwares'  value={softwares}
           onChange={(e)=>{setSoftwares(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Official Email</span>
          <input type='email' placeholder='Enter email'value={officialemail}
           onChange={(e)=>{setOfficialEmail(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Licenses</span>
          <input type='text' placeholder='Enter licenses' value={licenses}
           onChange={(e)=>{setLincenses(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Department</span>
          <input type='text' placeholder='Type of department'value={department}
           onChange={(e)=>{setDepartment(e.target.value)}} />
         </div>

         <div className='input-box '>
          <span className='details'>Contact Number</span>
          <input type='text' placeholder='Enter contact number'value={contactnumber}
           onChange={(e)=>{setContactNumber(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Asset Code</span>
          <input type='text' placeholder='Enter asset code'value={assetcode}
           onChange={(e)=>{setAssetCode(e.target.value)}}  />
         </div>

         <div className='input-box '>
          <span className='details'>Asset Owner</span>
          <input type='text' placeholder='Enter asset owner'value={assetowner}
           onChange={(e)=>{setAssetOwner(e.target.value)}}  />
         </div>

        <div className='input-box '>
          <span className='details'>Asset Handover Date</span>
          <input type='date' value={assethandoverdate} 
           onChange={(e)=>{setAssetHandoverDate(e.target.value)}}/>
         </div> 

         <div className='input-box '>
          <span className='details'>Operating system</span>
          <input type='text' placeholder='Type of operating system' value={operatingsystem}
           onChange={(e)=>{setOperatingSystem(e.target.value)}} />
         </div>

         <div className='input-box '>
          <span className='details'>Keyboard</span>
          <input type='text' placeholder='Keyboard'value={keyboard}
           onChange={(e)=>{setKeyboard(e.target.value)}}/>
         </div>

         <div className='input-box '>
          <span className='details'>Mouse</span>
          <input type='text' placeholder='Mouse' value={mouse}
           onChange={(e)=>{setMouse(e.target.value)}} />
          
         </div>

         <div className='input-box '>
          <span className='details'>Status</span>
          <input type='text'placeholder='Active or Inactive'value={status}
           onChange={(e)=>{setStatus(e.target.value)}} />
         </div>

         <div className='input-box '>
          <span className='details'>Received From</span>
          <input type='text'placeholder='Company name'value={recivedfrom}
           onChange={(e)=>{setReceivedFrom(e.target.value)}} />
         </div>

         <div className='input-box '>
          <span className='details'>Remarks</span>
          <input type='text' placeholder='Any remarks' value={remarks}
           onChange={(e)=>{setRemarks(e.target.value)}}/> 
         </div>
      </div>
       <div className='button'>
          <input type='submit'onClick={postData} value='submit data'/>
        
         </div> 
    </form>

 </div>    
 )
}
export default Postdata
