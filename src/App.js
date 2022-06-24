import React from 'react'
import { Routes, Route} from "react-router-dom";
import Postdata from './Postdata'
import Getdata from './Components/Getdata';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Navbar/>
     <Routes>
       {/* <Route path="/" element={<Navbar />} />  */}
      <Route path="postdata" element={<Postdata />} />
      <Route path="getdata" element={<Getdata />} />
    </Routes>
   
    </>
  )
}

export default App
