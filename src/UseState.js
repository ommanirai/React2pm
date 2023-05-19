import React, { useState, useEffect } from 'react'


const UseState = (props) => {
    const [count, setCount] = useState(0)

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
        </div>
    )
}

export default UseState