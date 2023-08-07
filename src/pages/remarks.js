import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Remarks = (props) => {
    const data = useOutletContext();
    const remarks = data.data.remarks;
    return (
        <div className="remarks">
        {
            remarks.map((item) => {
                return <div key={item}>{item}</div>
            })
        }
    </div>
    );
}

export default Remarks;
