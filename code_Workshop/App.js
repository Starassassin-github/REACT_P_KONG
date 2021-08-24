import Transaction from "./components/Transaction";
import FormComponents from "./components/FormComponents";
import './App.css'
import { useState,useEffect, useReducer } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { element } from "prop-types";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"


const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

function App() {
  const design = {color:"red",textAlign:"center",fontSize:"1.5rem"}
 
  const initData = [
    {id:1,title:"ค่าเช่าบ้าน",amount:-3000},
    {id:2,title:"เงินเดือน",amount:70000}
  ]
  const [items, setItem] = useState(initData)

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [newItem,...prevItem]
    })
  }
  useEffect(() => {
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = -1 * (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))
    
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])

  // reducer state
  const[showReport, setShowReport] = useState(false)
  // const reducer = (state, action) =>{
  //     switch(action.type){
  //       case "SHOW":
  //         return setShowReport(true)
  //       case "HIDE":
  //         return setShowReport(false)
  //     }
  // }

  // const [result,dispatch] = useReducer(reducer,showReport)
  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>โปรแกรมบัญชี รายรับ-รายจ่าย</h1> 
        <Router>
        <div>
          <ul className="horizontal-menu">
            <li>
              <Link to="/">ข้อมูลบัญชี</Link>
            </li>
            <li>
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact>
              <ReportComponent/>
            </Route>
            <Route path="/insert">
              <FormComponents onAddItem = {onAddNewItem}/>
              <Transaction item = {items}/> 
            </Route>
          </Switch>
        </div>
        </Router>
        {/* {showReport && <ReportComponent/>} */}
        
        <Description/>
        
        {/* <div align="center">
        <h1>{result}</h1>
        <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
        <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
        </div> */}
      </div>
    </DataContext.Provider>
  );
    
}

export default App;
