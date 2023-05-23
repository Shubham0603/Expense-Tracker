import React,{ useContext, useState } from "react";
import { GlobalContext } from "./Context/GlobalState";

export default function AddTransaction(){
    let id =5
    const {addNewTransaction} = useContext(GlobalContext)

    const[text,setText] = useState()
    const[amount,setAmount] = useState()
    let realNum = Number(amount)
    const newTransaction ={
        id:Math.floor(Math.random() * 100000000),
        text,
        amount: +amount   
    }


    
    const onSubmit = (e) => {e.preventDefault();
            addNewTransaction(newTransaction)
    }

    return(<>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type="submit" className="btn" >Add transaction</button>
      </form>
    
      </>
    )
}