import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

export default function Balance(){

    const {transactions} = useContext(GlobalContext)
    
    function finalBalance(){
        
        let amount = transactions.map(transaction => (transaction.amount)).reduce((total,item) => (total =total + item))
      return amount  
        
    }

    

    return(
        <>
        <h4>Your Balance</h4>
        <h1 id="balance">${finalBalance()}</h1>
        </>
    )
}