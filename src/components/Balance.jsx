import React  from 'react'


const Balance = ({info}) => {
    const total = info
    
    .reduce((total, transaction) => total + parseInt( transaction.number), 0)
   
   

    return (
        <>
            <h4>Your Balance:</h4>
            <h1> ${total>0? total: 0  }</h1>
        </>
    )
    }

export default Balance
