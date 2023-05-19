import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './component/Auth/Login/Login.component'
import { Register } from './component/Auth/Register/Register.component'
import HeaderComponent from './component/common/Header/Header.component'
// import Home from './UseState'
import UseState from './UseState'
import UseEffect from './UseEffect'
import Contact from './component/Pages/Contact.component'
import SuccessContactForm from './component/Pages/SuccessContactForm'
import Products from './component/Pages/Products.component'
import DataFetch from './DataFetch'

const Home = (Props) => {
    return (
        <p>Home Page</p>
    )
}

const About = (Props) => {
    return (
        <p>About Page</p>
    )
}

const Blogs = (Props) => {
    return (
        <p>Blogs Page</p>
    )
}
const PageNotFound = (props) => {
    return (
        <div className='text-center'>
            <h3>Page Not Found</h3>
            <img src={'./pagenotfound.jpg'} alt='page not found image'></img>
        </div>
    )
}

export const MyRoute = (props) => {
    return (
        <BrowserRouter>
            <HeaderComponent isLoggedIn={false}></HeaderComponent>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/usestate' element={<UseState/>}/>
                <Route path='/useeffect' element= {<UseEffect/>}/>
                <Route path='/about' element={<About />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/contact_submitted' element={<SuccessContactForm/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='*' element={<PageNotFound />} />
                <Route path='/datafetch' element={<DataFetch/>}/>
            </Routes>
        </BrowserRouter>
    )
}