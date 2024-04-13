import React, { useState, useEffect } from "react";
import DisplayList from "./DisplayBookedList";

const DisplayBookedBus = (props) => {
    const data = props.data;
    const [filteredData, setFilteredData] = useState(data);
    const [filteredValue, setFilterdValue] = useState('all')
     
    const handleChange = (event) => {
        const { value } = event.target;
        setFilterdValue(value)
    };
    useEffect(() => {
        if (filteredValue === 'all') {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item => item.busNumber === filteredValue);
            setFilteredData(filtered);
        }
    }, [data, filteredValue])
    
    const displayItems = filteredData.map((item, index) => (
        <DisplayList 
        key={index} 
        data={item}
        onDeleteItem={props.onDelete}
        onEditItem={props.onEdit}
        />
    ));

    return (
        <> 
        <div style={{textAlign:"center"}} >
           <label htmlFor="showlist">Filter :</label>
            <select  
            id="showlist"
            onChange={handleChange}
            >
                <option value='all'>All</option>
                <option value="Bus1">Bus 1</option>
                <option value="Bus2">Bus 2</option>
                <option value="Bus3">Bus 3</option>
                <option value="Bus4">Bus 4</option>

            </select>
            </div>
            <ol>
            {displayItems}
            </ol>
        </>
    );
};

export default DisplayBookedBus;
