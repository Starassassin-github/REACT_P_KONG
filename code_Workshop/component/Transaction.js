import Item from "./Item"
import './Transaction.css'
import DataContext from "../data/DataContext"
import { useContext } from "react"

const Transaction = (props) => {
    const {item} = props
    
    return (
      <div>
        <ul className="item-list">             
        {item.map((element) =>{
        //return <Item title={element.title} amount={element.amount}/>
        return <Item {...element} key = {element.id}/>  // ลดรูป
        })}   
        </ul>
      </div>
    );
}

export default Transaction
