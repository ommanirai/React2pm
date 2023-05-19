import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card.component'

const Products = () => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
                    <Card image="mobile_img/img1.jpg" title="Real Me" description="Best phone in the market" />

                    <Card image="mobile_img/img2.jpg" title="Samsung" description="Best smartphone now"></Card>

                    <Card image="mobile_img/img3.jpg" title="RedMe" description="new phone in the market"></Card>
                    
                    <Card image="mobile_img/img1.jpg" title="RedMe" description="new phone in the market"></Card>
                </div>
            </div>


        </>
    )
}

export default Products