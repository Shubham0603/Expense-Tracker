import React from "react";
import "./App.css";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./incomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import {GlobalProvider} from "./Context/GlobalState"

function App() {
    
 return(<GlobalProvider>
    <Header/>
    <div className="container">
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>
    </div>
    </GlobalProvider>
    )
}

export default App;
