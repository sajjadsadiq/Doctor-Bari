import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="text-center details-container">
                <img src={service.img} alt=""/>
                <h4 className="titleName">{service.name}</h4>
                <small className="text-secondary" >{service.description}</small>
            </div>
        </div>
    );
};

export default ServiceDetail;