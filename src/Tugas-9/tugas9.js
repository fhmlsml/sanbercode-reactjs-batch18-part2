import React from 'react';

function Tugas9() {
  return (
    <div className="App">
      <div style={{"border-radius":"solid 1px"}}>
      
      {/* Form */}
        <form style={{border:"solid black 2px", borderRadius:"20px" , margin:"100px 720px 100px 720px", fontFamily:"Times New Roman"}}> 
          <h1>Form Pembelian Buah</h1>
          <br/>

          {/* Data Pelanggan */}
          <div style={{display:"flex", paddingLeft:"20px", fontWeight:"bold"}}>
            <label for="nama">Nama Pelanggan</label>
            <input type="names" names="nama" style={{marginLeft:"60px"}}/>
          </div>
          <br/>
          
          {/* Data Item */}
          <div style={{display:"flex"}}>
            <label for="daftaritem" style={{paddingLeft:"20px", paddingTop:"85px", fontWeight:"bold"}}>Daftar Item</label>
          
            {/* List Item Buah */}
            <div class="listbuah">
              <div style={{marginLeft:"97px"}}>
                <input type="checkbox" names="semangka"/>
                <label for="semangka">Semangka</label>
              </div>

              <div style={{marginLeft:"65px"}}>
                <input type="checkbox" names="jeruk"/>
                <label for="jeruk">Jeruk</label>
              </div>

              <div style={{marginLeft:"71px"}}>
                <input type="checkbox" names="nanas"/>
                <label for="nanas">Nanas</label>
              </div>

              <div style={{marginLeft:"65px"}}>
                <input type="checkbox" names="salak"/>
                <label for="salak">Salak</label>
              </div>

              <div style={{marginLeft:"80px"}}>
                <input type="checkbox" names="anggur"/>
                <label for="anggur">Anggur</label>
              </div>
            </div>
            
          </div>
          
          {/* Submit */}
          <div style={{paddingLeft:"20px"}}>
          <br/>
          <button type="submit" class="submit-btn" style={{display:"flex", borderRadius:"20px"}}>Kirim</button>
          <br/>
          </div>
                  
        </form>
      
      </div>
      {/* End */}
    </div>
  );
}

export default Tugas9;