
import React, { useState } from 'react'
import InputForm from "../src/components/InputForm/InputForm"
import DisplayBookedBus from './components/DisplayBookedBus/DisplayBookedBus';
function App() {
  const [formData, setFormData] = useState([])
  const [busBookDetail, setBusBookDetail] = useState(
    {
      name: '',
      email: '',
      phone: '',
      busNumber: 'Bus1',
      id: '34'
    }
  )
  const inputformData = (obj) => {

    setFormData(arr => {
      return [...arr, { ...obj, id: Math.random().toString() }]
    })
  }

  const HandelDelete = (bookedId) => {
    setFormData((bookedData) => {
      const updatedBookedBus = bookedData.filter(data => data.id !== bookedId);
      return updatedBookedBus;
    })
  }

  const handelEdit = (bookedId) => {
    const bookData = formData.filter(data => data.id === bookedId);
    setBusBookDetail(...bookData);
    setFormData(prev => {
      return prev.filter(data => bookedId !== data.id)
    })
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'red' }}>Bus Booking App</h1>
      <InputForm
        submitForm={inputformData}
        defaultBookData={busBookDetail}
      />
      <DisplayBookedBus
        data={formData}
        onDelete={HandelDelete}
        onEdit={handelEdit}
      />
    </>
  )
}

export default App;
