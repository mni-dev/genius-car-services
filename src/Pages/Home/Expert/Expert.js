import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="card col-sm-12 col-md-6 col-lg-4" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#" className='btn-btn-primary'></a>
            </div>
        </div>
    );
};

export default Expert;