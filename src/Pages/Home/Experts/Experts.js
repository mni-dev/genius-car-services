import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';
import './Experts.css'

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Stephen Rock', img: expert2 },
    { id: 3, name: 'Batista Stone', img: expert3 },
    { id: 4, name: 'Robin Hook', img: expert4 },
    { id: 5, name: 'William Seal', img: expert5 },
    { id: 6, name: 'Caxton Iron', img: expert6 },
]

const Experts = () => {
    return (
        <div>
            <div className="row">
            <h2 className='text-primary text-center'>Our Experts</h2>      
                <div  className='experts-container'>
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;