import React from "react";

function AddTransaction({ AppTask}) {
 
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState(0);


function handleSubmit(e) {
  e.preventDefault()
  AppTask(text,number)
  setText("")
  setNumber(0)
  
}
  
  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={handleSubmit}   >
        <div className="form-control">
          <label htmlFor="desc">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount (negative is expense, positive is income)
          </label>
          <input
            type="number"
            placeholder={number === 0 ? "Enter amount..." : ""}
            value={number}
            onChange={(e)=>{ setNumber (e.target.value)}}
            
          />
        </div>

        <button className="btn">Add Transcation</button>
      </form>
    </>
  );
}

export default AddTransaction;
