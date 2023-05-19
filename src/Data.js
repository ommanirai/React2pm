import React from 'react'

const Data = (props) => {
// const Data = ({item}) => {
    return (
        <>
            <h1>User Id: {props.item.id}</h1>
            {/* <h1>User Id: {item.id}</h1> */}
            <h4>Title: {props.item.title}</h4>
            <p>Body: {props.item.body}</p>
            <hr />
            {/* <button>View More</button> */}
        </>
    )
}

export default Data