import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../common/Button/Button.component'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { error } from '../../notify';

const Card = (props) => {
    console.log("props in Card: ", props)

    const handleClick = event => {
        event.preventDefault()
        error.ShowSuccess("Item added to cart")
        // toast.success("Item added to cart!", {
        //     position: toast.POSITION.TOP_RIGHT
        // });

    }

    return (
        <>
            {/* <ToastContainer/> */}
            <div className="col mb-3">
                <div className="card shadow-lg">
                    <div className="card-img-container">
                        <img src={props.image} className="card-img-top custom-card-img" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text text-truncate">{props.description}</p>
                        {/* <Button
                            onClick={handleClick}
                            enabledLabel="Add to Cart"
                        >
                        </Button> */}
                        <button className='btn btn-warning' onClick={handleClick}>Add to cart</button>
                        <Link to={'/view_details/id'} className="btn btn-warning  ms-3">View Details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card