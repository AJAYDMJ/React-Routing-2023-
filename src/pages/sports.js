import React from 'react';
import './css/sports.css'
import { useOutletContext } from 'react-router-dom';

const Sports = (props) => {
    const data = useOutletContext();
    const sports = data.data.sports;

    return (
        <div className="sports">
        {
            Object.keys(sports).map((item) => {
                return (
                    <div key={item}>
                        <div>
                            {item}
                        </div>
                        <div>
                            {sports[item] > 0 ? 'Position ' + sports[item] : 'Participated'}
                        </div>
                    </div>
                )
            })
        }
    </div>
    );
}

export default Sports;
