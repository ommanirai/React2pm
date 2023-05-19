import React, { useState, useEffect } from 'react'


const UseEffect = (props) => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(10)

    // syntax:
    // useEffect(function, [state_variable1, state_variable2, ...])
    useEffect(() => {
        window.alert("count is updated");
    })

    const IncrementCount = e => {
        e.preventDefault()
        // if (count >= 10) {
        //     setCount(0)
        // }
        // else {
        setCount(count + 1)
        // }
    }

    const DecrementCount = e => {
        e.preventDefault()
        // if (count <= 0) {
        //     setCount(10)
        // }
        // else {
        setCount(count - 1)
        // }
    }

    return (
        <div>
            <p>Count: {count} </p>
            {
                count < 20 &&
                <button onClick={IncrementCount} >Increment Count</button>
            }
            {
                count > 0 &&
                <button onClick={DecrementCount} >Decrement Count</button>
            }
            {/* <button onClick={()=>{setCount(count - 1)}} >Decrement Count</button> */}


            <p>Data: {data} </p>
            {
                data < 100 &&
                <button onClick={()=> {setData(data + 10)}} >Increment data</button>
            }
            {
                data > 0 &&
                <button onClick={() => {setData(data - 10)}} >Decrement data</button>
            }
        </div>
    )
}

export default UseEffect