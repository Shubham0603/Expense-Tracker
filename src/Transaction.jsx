import React,{useContext} from "react";
import { GlobalContext } from "./Context/GlobalState";

export default function Transaction({tvalue}) {
    const {deleteTransaction} = useContext(GlobalContext);

        return (<li className={tvalue.amount>0?"plus":"minus"}>
          {tvalue.text} <span>{tvalue.amount}</span><button className="delete-btn" onClick={() => deleteTransaction(tvalue.id)} >x</button>
        </li>)
    
    
    
    
}