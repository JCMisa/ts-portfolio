import '../../index.css'

import { useState } from 'react';

import Data from './Data';

export default function Card()
{
    const [data, setData] = useState(Data);

    function showRole()
    {
        setData(prevData => (
            {
                ...prevData,
                name : 'Web Developer'
            }
        ))
    }

    function showName()
    {
        setData(prevData => (
            {
                ...prevData,
                name : 'John Carlo Samodio Misa'
            }
        ))
    }

    return(
        <>
            <div className="card">
                <img className="img" src={data.image} alt='dp' />
                <span onMouseOver={showRole} onMouseLeave={showName}>{data.name}</span>
                <p className="info">{data.description}</p>
                <div className="share">
                    {data.contacts.map((item,index) => <div key={index}>{item}</div>)}
                </div>
                <button>About Me</button>
            </div>
        </>
    )
}