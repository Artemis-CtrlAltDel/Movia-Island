import React, { useEffect, useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)
    const [inp,setInp] = useState("")
    const [items,setItems] = useState([...new Array(10).keys()])
    const handleChange = e => {
        setInp(e.target.value)
    }

    useEffect(()=>{
        setCount(Number(inp))
    },[inp])

    
    const rendredItems = items.map(i => (<div>Item {i}</div>))
    return (
    <div>
        <input type="number" value={inp} onChange={handleChange}/>
        <button onClick={() => setCount(count+1)}>
            {count}
            </button>
            {rendredItems}
            <button onClick={() => setItems(items.slice(1,items.length))}>remove</button>
    </div>
    )
}



export default Counter;