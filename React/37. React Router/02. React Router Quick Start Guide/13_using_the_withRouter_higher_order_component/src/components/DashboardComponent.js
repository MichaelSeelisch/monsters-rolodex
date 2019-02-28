import React from 'react';

export const DashboardComponent = (props) => (
    <div className="dashboard">
        Inside Dashboard route <br />
        <button onClick={() => props.history.push('/user')}>
            User
        </button>
    </div>
);

export default DashboardComponent;