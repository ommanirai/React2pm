import React from 'react'
import './Header.component.css'
import { Link } from 'react-router-dom'


// const HeaderComponent = () =>{
//     return(

//     )
// }
// jsx => javascript extended syntax

function HeaderComponent(props) {
    // console.log('props: ', props)
    var navbar = props.isLoggedIn
        ? <ul className='list-style'>
            <li className='list-item'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='list-item'>
                <Link to={'/about'}>About</Link>
            </li>
            <li className='list-item'>
                <Link to={'/blogs'}>Blogs</Link>
            </li>
            <li className='list-item '>
                <Link to={'/contact'}>Contact</Link>
            </li>
            <li className='list-item logout'>
                <Link to={'/logout'}>Logout</Link>
            </li>
        </ul>
        : <ul className='list-style'>
            <li className='list-item'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='list-item'>
                <Link to={'/datafetch'}>DataFetch</Link>
            </li>
            <li className='list-item'>
                <Link to={'/products'}>Products</Link>
            </li>
            <li className='list-item'>
                <Link to={'/usestate'}>UseState</Link>
            </li>
            <li className='list-item'>
                <Link to={'/useeffect'}>UseEffect</Link>
            </li>
            <li className='list-item '>
                <Link to={'/contact'}>Contact</Link>
            </li>
            <li className='list-item'>
                <Link to={'/about'}>About</Link>
            </li>
            <li className='list-item'>
                <Link to={'/blogs'}>Blogs</Link>
            </li>
            <li className='list-item logout'>
                <Link to={'/register'}>Register</Link>
            </li>
            <li className='list-item logout'>
                <Link to={'/login'}>Login</Link>
            </li>
        </ul>

    return (
        <div className='list'>
            {navbar}
        </div>
    )
}

export default HeaderComponent

