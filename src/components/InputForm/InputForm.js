import React, {useState, useEffect } from "react";


const UserInputForm = (probs) => {
    const [formData, setformData] = useState(probs.defaultBookData)
    const { name, email, phone, busNumber } = formData
    
    const handelChange = (event) => {
        const { name, value } = event.target
        setformData(p => {
            return {
                ...p,
                [name]: value
            }
        })
    }


     useEffect(()=>{
      setformData(probs.defaultBookData)
     },[probs.defaultBookData])

    const submitHandler = (event) => {
      event.preventDefault();
      probs.submitForm(formData)
      setformData({
        name: '',
        email: '',
        phone: '',
        busNumber: 'Bus1'
      })
    }

    return <>
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label >Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <label >Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <label >Phone:</label>
                    <input
                        value={phone}
                        type="text"
                        name="phone"
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <label htmlFor="busNumber" >Bus Number:</label>
                    <select
                        value={busNumber}
                        id='busNumber'
                        name="busNumber"
                        onChange={handelChange}
                    >
                        <option value="Bus1">Bus 1</option>
                        <option value="Bus2">Bus 2</option>
                        <option value="Bus3">Bus 3</option>
                        <option value="Bus4">Bus 4</option>
                    </select>
                </div>
                <button type="submit">Book</button>
            </form>
        </>    </>
}

export default UserInputForm