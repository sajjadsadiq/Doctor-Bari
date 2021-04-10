import React from 'react';
import chair from '../../images/chair.png'

const HeaderContent = () => {
    return (
        <main style={{height: '500px'}} className=" row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis incidunt modi, animi error minima fugit libero expedita suscipit dicta!</p>
                <button className="btn btn-secondary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderContent;