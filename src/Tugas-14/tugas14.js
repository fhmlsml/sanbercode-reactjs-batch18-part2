import React from "react"
import { DaftarBuahProvider } from "./buahContext"
import DaftahBuahList from "./BuahList"
import DaftarBuahForm from "./buahSubmit"

const Tugas14 = () => {
    return(
      <DaftarBuahProvider>
          <DaftahBuahList />
          <DaftarBuahForm />
      </DaftarBuahProvider>
    );
};
  

export default Tugas14;
