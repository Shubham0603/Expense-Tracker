import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

export default function IncomeExpenses(){
    
    const {transactions} = useContext(GlobalContext);

    

    const income = transactions.map(transaction => transaction.amount>0?transaction.amount:0).reduce((total,item) => (total = total + item))
    console.log(income)

    const expense = transactions.map(transaction => transaction.amount<0?transaction.amount:0).reduce((total,item) => (total = total + item))


    

    return(
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">${expense}</p>
        </div>
      </div>
    )
}