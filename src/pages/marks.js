import React from 'react';
import './css/marks.css';
import { useOutletContext } from 'react-router-dom';

const Marks = (props) => {
    const data = useOutletContext();
    const marks = data.data.marks;

    // using destructure
    // const {marks} = useOutletContext();

    const terms = ['Term 1', 'Term 2', 'Term 3', 'Term 4', 'Term 5'];
    return (
        <div className='marks'>
            <div></div>
            {
            
                terms.map((item) => {
                    return (
                        <span key={item}>
                            {item}
                        </span>
                    );
                })
            }
            {
            Object.keys(marks).map((subj) => {
                const values = marks[subj];
                const items = [subj, ...values];
                return items.map((item, i) => {
                    return (
                        <span key={i}>
                            {item}
                        </span>
                    );
                });
            })
        }
        </div>
    );
}

export default Marks;
