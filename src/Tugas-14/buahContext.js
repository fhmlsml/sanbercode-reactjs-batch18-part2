import React, { useState,useEffect, createContext } from "react";
import axios from 'axios'

export const DaftarBuahContext = createContext();

export const DaftarBuahProvider = props => {

    const [daftarBuah, setDaftarBuah] =  useState(null)

    useEffect( () => {
        if (daftarBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
          })
        }
      }, [daftarBuah])
  
    const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})
  
    return (
      <DaftarBuahContext.Provider value={[daftarBuah, setDaftarBuah, input, setInput]}>
        {props.children}
      </DaftarBuahContext.Provider>
    );
  };
