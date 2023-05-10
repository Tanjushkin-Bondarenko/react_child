import React from 'react';

export const SecondChildComponent = ({ hide }) => {
    if (hide) return null;
    return <div className='childTwo'>
        <h4>this is second child</h4>
    </div>
}