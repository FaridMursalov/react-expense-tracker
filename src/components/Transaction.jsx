import React from 'react'


const Transaction = ({inf,id}) => {


    return (
         <li className= {inf.number < 0 ?"expense": "income"}
         >
           {inf.text}
            <span> {inf.number}</span>
            <button className='delete-btn'
            onClick={()=>id(inf.id)}
                >
                X
            </button>
            
        </li>
    )
}

export default Transaction
