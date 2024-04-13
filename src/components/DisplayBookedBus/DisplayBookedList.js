import React from "react";

const DisplayList = (probs) => {
   const data = probs.data;
   const handelDeleteKey = event => {
      probs.onDeleteItem(event.target.id)
   }

   function hanelEditItem(event){
      probs.onEditItem(event.target.id)
   }

   return (
      <>
         <li
            key={data.id}
            id={data.id}
         >
            {` ${data.name} - ${data.email} - ${data.busNumber}  -`}
            <button
               id={data.id}
               onClick={hanelEditItem}
            >
               Edit
            </button>
            <button
               id={data.id}
               onClick={handelDeleteKey}
            >
               Delete
            </button>
         </li>
      </>
   )
}

export default DisplayList;