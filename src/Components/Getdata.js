import axios from 'axios'
import React,{useEffect,useState} from 'react'



function Getdata() {
    const [data,setData] = useState([]);
    const [updateId, setUpdateId] = useState(null)
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
    const [detailData, setDetailData] = useState(null)

    useEffect(() =>{
      getDataDB()
    },[])


    const getDataDB = () => {
      axios.get('https://localhost:44334/api/data').then(
        responce =>setData(responce.data)
     )
    }


    const getById = (id) => {
      
      axios.get(`https://localhost:44334/api/data/${id}`)
      .then(res => {
        let output = res.data
        setDetailData(res.data)
        console.log(output.employeeName)
        setEmployeeName(output.employeeName)
      })
    }

    console.log(detailData)

    const updateData = (e) => {
      e.preventDefault()
      let data = {
        "employeeName": employeename,
        "employeeId": employeeid,
        "location": location,
        "client": client,
        "designation": designation,
        "laptopTypeModel": laptoptypemodel,
        "processor": processor,
        "ram": ram,
        "storageType": storagetype,
        "serialNumber": serialnumber,
        "adaptorSerialNumber": adaptorserialnumber,
        "softwares": softwares,
        "officialEmail": officialemail,
        "licenses": licenses,
        "department": department,
        "contactNumber": contactnumber,
        "assetCode": assetcode,
        "assetOwner": assetowner,
        "assetHandOverDate":assethandoverdate,
        "operatingSystem": operatingsystem,
        "keyBoard": keyboard,
        "mouse": mouse,
        "status": status,
        "receivedfrom":recivedfrom,
        "remarks": remarks
      }
      axios.put(`https://localhost:44334/api/data/${updateId}` ,data)
      .then(res => getDataDB())
    }

  function deleted(employeeId){

    console.log(employeeId)
    axios.delete(`https://localhost:44334/api/data/${employeeId}`)
    .then(
        responce =>{
          console.log(responce)
          getDataDB()
        }
     )
     .catch(err => console.log(err))
  }
  
    
  return (
    <>
        <table class="table table-bordered table-hover table-responsive table-info">
          <thead class='table-warning'>
            <tr>
                        <th>Employee&nbsp;Name</th>
                        <th>Employee&nbsp;Id</th>
                        <th>Location</th>
                        <th>Client</th>
                        <th>Designation</th>
                        <th>laptopType&nbsp;Model</th>
                        <th>Processor</th>
                        <th>Ram</th>
                        <th>Storage&nbsp;Type</th>
                        <th>SerialNumber</th>
                        <th>Adaptor&nbsp;SerialNumber</th>
                        <th>Softwares</th>
                        <th>Official&nbsp;Email</th>
                        <th>Licenses</th>
                        <th>Department</th>
                        <th>Contact&nbsp;Number</th>
                        <th>Asset&nbsp;Code</th> 
                        <th>Asset&nbsp;Owner</th>
                        <th>AssetHandOver&nbsp;Date</th>
                        <th>Operating&nbsp;System</th>
                        <th>Keyboard</th>
                        <th>Mouse</th>
                        <th>Status</th>
                        <th>Received&nbsp;From</th>
                        <th>Remarks</th>
                        <th>Update</th>
                        <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
              {data.map((item,i) => {
                return (
                  <tr key={i}>
                    <td>{item.employeeName}</td>
                    <td>{item.employeeId}</td>
                    <td>{item.location}</td>
                    <td>{item.client}</td>
                    <td>{item.designation}</td>
                    <td>{item.laptopTypeModel}</td>
                    <td>{item.processor}</td>
                    <td>{item.ram}</td>
                    <td>{item.storageType}</td>
                    <td>{item.serialNumber}</td>
                    <td>{item.adaptorSerialNumber}</td>
                    <td>{item.softwares}</td>
                    <td>{item.officialEmail}</td>
                    <td>{item.licenses}</td>
                    <td>{item.department}</td>
                    <td>{item.contactNumber}</td>
                    <td>{item.assetCode}</td>
                    <td>{item.assetOwner}</td>
                    <td>{item.assetHandOverDate}</td>
                    <td>{item.operatingSystem}</td>
                    <td>{item.keyBoard}</td>
                    <td>{item.mouse}</td>
                    <td>{item.status}</td>
                    <td>{item.receivedfrom}</td>
                    <td>{item.remarks}</td>

                    <td>
                      <button className='btn btn-info btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                        getById(item.employeeId)
                        setUpdateId(item.employeeId)
                      }}>Update</button>
                    </td>
                    <td>
                      <button className='btn btn-danger btn-sm' onClick={() => deleted(item.employeeId)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            
            
          </tbody>
        </table>
        
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="" className='row' onSubmit={updateData} >
                  <div className="col-lg-12">
                    
                      {
                        detailData !== null
                        ?
                        <>
                                <div className='user-details'>
                                  <div className='input-box '>
                                    <span className='details'>Employee Name</span>
                                    <input type='text' placeholder='Enter employee name' 
                                            defaultValue={detailData.employeeName}
                                            onChange={(e)=>{setEmployeeName(e.target.value)}} />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Employee Id</span>
                                    <input type='text' placeholder='Enter employee id'  defaultValue={detailData.employeeId}
                                    onChange={(e)=>{setEmployeeId(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Location</span>
                                    <input type='text' placeholder='Enter employee location'  defaultValue={detailData.location}
                                    onChange={(e)=>{setLocation(e.target.value)}} />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Client</span>
                                    <input type='text' placeholder='Enter client name'  defaultValue={detailData.client}
                                    onChange={(e)=>{setClient(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Designation</span>
                                    <input type='text' placeholder='Enter employee designation'  defaultValue={detailData.designation}
                                    onChange={(e)=>{setDesignation(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Laptop Type&Model</span>
                                    <input type='text' placeholder='laptop details' defaultValue={detailData.laptopTypeModel}
                                    onChange={(e)=>{setLaptopTypeModel(e.target.value)}}  />
                                  </div>
                                  <div className='input-box '>
                                    <span className='details'>Processor</span>
                                    <input type='text' placeholder='processor details'  defaultValue={detailData.processor}
                                    onChange={(e)=>{setProcessor(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Ram</span>
                                    <input type='text' placeholder='Enter ram size'  defaultValue={detailData.ram}
                                    onChange={(e)=>{setRam(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Storage Type</span>
                                    <input type='text' placeholder='Enter storage & type' defaultValue={detailData.storageType}
                                    onChange={(e)=>{setStorageType(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Serial Number</span>
                                    <input type='text' placeholder='Enter serial number' defaultValue={detailData.serialNumber}
                                    onChange={(e)=>{setSerialNumber(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Adaptor Serialnumber</span>
                                    <input type='text' placeholder='Adaptor serialnumber'  defaultValue={detailData.adaptorSerialNumber}
                                    onChange={(e)=>{setAdaptorSerialNumber(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Softwares</span>
                                    <input type='text' placeholder='Enter softwares'  defaultValue={detailData.softwares}
                                    onChange={(e)=>{setSoftwares(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Official Email</span>
                                    <input type='email' placeholder='Enter email'defaultValue={detailData.officialEmail}
                                    onChange={(e)=>{setOfficialEmail(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Licenses</span>
                                    <input type='text' placeholder='Enter licenses' defaultValue={detailData.licenses}
                                    onChange={(e)=>{setLincenses(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Department</span>
                                    <input type='text' placeholder='Type of department'defaultValue={detailData.department}
                                    onChange={(e)=>{setDepartment(e.target.value)}} />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Contact Number</span>
                                    <input type='text' placeholder='Enter contact number'defaultValue={detailData.contactNumber}
                                    onChange={(e)=>{setContactNumber(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Asset Code</span>
                                    <input type='text' placeholder='Enter asset code'defaultValue={detailData.assetCode}
                                    onChange={(e)=>{setAssetCode(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Asset Owner</span>
                                    <input type='text' placeholder='Enter asset owner'defaultValue={detailData.assetOwner}
                                    onChange={(e)=>{setAssetOwner(e.target.value)}}  />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Asset Handover Date</span>
                                    <input type='date' defaultValue={detailData.assethandOverDate} placeholder='dd-mm-yyyy'
                                    onChange={(e)=>{setAssetHandoverDate(e.target.value)}}/>
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Operating system</span>
                                    <input type='text' placeholder='Type of operating system' defaultValue={detailData.operatingSystem}
                                    onChange={(e)=>{setOperatingSystem(e.target.value)}} />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Keyboard</span>
                                    <input type='text' placeholder='Keyboard'defaultValue={detailData.keyboard}
                                    onChange={(e)=>{setKeyboard(e.target.value)}}/>
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Mouse</span>
                                    <input type='text' placeholder='Mouse' defaultValue={detailData.mouse}
                                    onChange={(e)=>{setMouse(e.target.value)}} />
                                    
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Status</span>
                                    <input type='text'placeholder='Active or Inactive'defaultValue={detailData.status}
                                    onChange={(e)=>{setStatus(e.target.value)}} />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Received From</span>
                                    <input type='text'placeholder='Received From'defaultValue={detailData.receivedfrom}
                                    onChange={(e)=>{setReceivedFrom(e.target.value)}} />
                                  </div>

                                  <div className='input-box '>
                                    <span className='details'>Remarks</span>
                                    <input type='text' placeholder='Any remarks' defaultValue={detailData.remarks}
                                    onChange={(e)=>{setRemarks(e.target.value)}}/> 
                                  </div>
                                </div>
                        </>
                        :
                        null
                      }
                        

                    
                  </div>
                  <div className="col-lg-12 text-center">
                    <button className="btn btn-success mt-4" data-bs-dismiss="modal" type="submit">Update</button>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
    </>
  ) 
}

export default Getdata
