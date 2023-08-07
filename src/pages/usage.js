import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './css/usage.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Usage = () => {

const [data, setData] = useState([]);

const [seachParams, setSearchParams] = useSearchParams([]);

const navigate = useNavigate();

const searchedQuery = seachParams.get('class')
// if we pass [ dependency it will call useeffect one time only at he time of initialization]
useEffect(() => {
    axios.get('./data.json')
    .then((result) => {
       
        setData({
            userData: result.data
        })
    })
}, [])

const handleSelectChange = (evt) => {
    const value = evt.target.value;
        setSearchParams({
            class: value === 'all' ? '' : value,
        });
}

if (!data.userData) return; 

    return (
        <div className='page users'>
            <div className='options'>
                <div className='label'>
                    Select Class 
                </div>
                <div>
                    <select onChange={handleSelectChange}>
                        <option value="all">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div> 
            </div>
           {data.userData
           .filter((item) => {
            if (!searchedQuery) {
                return item
            }

            return searchedQuery === item.class
           })
           .map((item) => {
                return(
                    <div className='users-item' key={item.id}  onClick={() => navigate(`Details/${item.id}`, {
                        state: {
                            data: item
                        }
                    })}>
                        <div className='title' >
                            {/* <Link to={`/Details/${item.id}`}> {item.name} </Link> */}
                            {item.name}
                        </div>
                        <div className='address'>
                            {item.address}
                        </div>
                        <div className="descr">
                            Class: {item.class}
                        </div>  
                    </div>
                );
           })}
        </div>
    );
}

export default Usage;
