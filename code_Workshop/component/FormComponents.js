import { useState,useEffect } from 'react'
import './FormComponents.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {
    

    const [title, setTile] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid,SetFormValid] = useState(false)

    const inputTitle = (event) => {
        setTile(event.target.value) //แสดงค่าที่ป้อนเข้ามา
    }

    const inputAmount = (event) => {
        setAmount(event.target.value); //แสดงค่าที่ป้อนเข้ามา
    }

    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTile("")
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount !== 0
        SetFormValid(checkData)
    },[title,amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder = "ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent