import React, { Component , useState, useEffect} from 'react'
import axios from 'axios'
import "./tugas13.css";

const Tugas13 = () => {
  useEffect( () => {
     console.log(data.length)
     if(data.length <= 0){
         refreshData()
     }
   })

 const refreshData = () => {
     axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
     .then(res => {
         console.log(res)
         setData(res.data)
     })
 }

 const [defaultRowData, setDefaultRowData] = useState({
     id : '',
     name: '',
     weight: '',
     price: '',
 });

 const [selectedRow, setSelectedRow] = useState({
     id : '',
     name: '',
     weight: '',
     price: '',
 });

 const [data, setData] = useState([]);

 const handleEditClick = (index) => {
     setSelectedRow ({
         id : data[index].id,
         name:  data[index].name,
         weight: data[index].weight,
         price: data[index].price,
     })
 }

 const handleUpdateClick = () => {
     let {index} = selectedRow
     data[index] = selectedRow

     axios.put(`http://backendexample.sanbercloud.com/api/fruits/${data[index].id}`, selectedRow)
     .then(res => {
       // lakukan handle ketika sukses
       refreshData()
     })
 }

 const handleInsertClick = () => {
     http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}
     axios.post(`http://backendexample.sanbercloud.com/api/fruits`, selectedRow)
     .then(res => {
       // lakukan handle ketika sukses
       refreshData()
     })
 }

 const handleDeleteClick = (index) => {        
     axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${data[index].id}`)
     .then(res => {
       // lakukan handle ketika sukses
       refreshData()
     })
 }

 const handleChageTxtNama = (name) => {
     let thisSelectedRow = {...selectedRow}
     thisSelectedRow.name = name
     setSelectedRow(thisSelectedRow)
 }

 const handleChageTxtHarga = (price) => {
     let thisSelectedRow = {...selectedRow}
     thisSelectedRow.price = price
     setSelectedRow(thisSelectedRow)
 }

 const handleChageTxtBerat = (weight) => {
     let thisSelectedRow = {...selectedRow}
     thisSelectedRow.weight = weight
     setSelectedRow(thisSelectedRow)
 }
 
 return (
     <div  >
         <div style={{backgroundColor:"#000000"}} >
             <div style={{backgroundColor:"white"}}>
                 <div style={{textAlign: "center"}}><h1>Tabel Harga Buah</h1></div>

                 <div style={{display:"flex", alignItems: "center", flexDirection: "column"}}>
                 <table >
                     <thead>
                         <tr >
                             <th>Nama</th>
                             <th>Harga</th>
                             <th>Berat</th>
                             <th colSpan={2}>Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {data.map((el,index)=> {
                             return (
                             <tr key={index} >
                                 <td >{el.name}</td>
                                 <td >{el.price}</td>
                                 <td >{el.weight/1000} KG</td>
                                 <td > <button onClick={() => handleEditClick(index)} type="button">Edit</button> </td>
                                 <td > <button onClick={() => handleDeleteClick(index)}type="button">Delete</button> </td>
                             </tr>
                             
                             )
                         })}
                     </tbody>
                 </table>
                 </div>
                 <h1 style={{textAlign: "center"}}>Form Daftar Harga Buah</h1>
                 <br/>
                 <div style={{width: "50%", margin: "0 auto", display: "block"}}>
                 <div style={{textAlign: "left",border: "1px solid #aaa", padding: "20px"}}>
                     <label > Nama </label>
                     <input style={{float: "right"}} className="inp-text" id="txt-nama" type="text" value={selectedRow.name} onChange={(e)=>{ handleChageTxtNama(e.target.value)}}/>
                     <br/>
                     <br/>
                     <label> Harga </label>
                     <input style={{float: "right"}} className="inp-text1" id="txt-harga" type="text" value={selectedRow.price} onChange={(e)=>{ handleChageTxtHarga(e.target.value)}}/>
                     <br/>
                     <br/>
                     <label> Berat (dalam gram)  </label>
                     <input style={{float: "right"}} className="inp-text2" id="txt-berat" type="text" value={selectedRow.weight} onChange={(e)=>{ handleChageTxtBerat(e.target.value)}}/>
                     <br/>
                     <br/>
                     <button type="button" onClick={()=> handleUpdateClick()}>Update</button> <button type="button" onClick={()=> handleInsertClick()}>Insert</button>
                 </div>
                 </div>
             </div>
         </div>
     </div>
     )
}

export default Tugas13;