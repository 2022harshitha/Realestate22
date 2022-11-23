import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    return <div>
    <div className='navbar'>
        <nav className='app-nav'>
            <ul>
                <li><NavLink className={({isActive}) => {
                    
                    return isActive ? 'active' : ''
                }} to="/basicinfo">Basic Info</NavLink></li>
                <li><NavLink className={({isActive}) => {

                    return isActive ? 'active' : ''
                }} to="/propertydetail">Property Detail</NavLink></li>
                <li><NavLink className={({isActive}) => {

                    return isActive ? 'active' : ''
                }} to="/generalinfo">General Info</NavLink></li>
                <li><NavLink className={({isActive}) => {
                    return isActive ? 'active' : ''
                }} to="/locationinfo">Location Info</NavLink></li>
            </ul>
        </nav>   
    </div>
    <div className='secondbox'>
    
    </div>
    </div>
}

