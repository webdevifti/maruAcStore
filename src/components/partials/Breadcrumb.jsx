import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <nav className='breadcrumb-divider' aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Air Conditioner</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb