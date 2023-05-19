import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Data from './Data'

const DataFetch = () => {
    const [user, setUser] = useState([])
    const [limit, setLimit] = useState(10)


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            // .then(response => { return setUser(response.data) })
            .then(response => setUser(response.data.slice(0, limit)))
            .catch(error => console.log(error))
    }, [limit])


    const viewMore = e => {
        e.preventDefault()
        setLimit(limit + 10)
    }

    const viewLess = e => {
        e.preventDefault()
        setLimit(limit - 10)
    }

    return (
        <>
            {
                user.map((item, index) => {
                    // return <h5 key={item.id}>{item.title}</h5>
                    return <Data item={item} />
                })
            }
            <div className='text-center m-3'>
                {
                    limit < 100 &&
                    <button className='me-3 btn btn-info' onClick={viewMore}>View More</button>
                }
                {
                    limit > 10 &&
                    <button className='btn btn-info' onClick={viewLess}>View Less</button>
                }
            </div>


        </>
    )
}

export default DataFetch