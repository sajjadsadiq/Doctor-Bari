import React from 'react';
import './Services.css'
import fluoride from '../../images/flouride.png'
import cavity from'../../images/cavity.png'
import teath from '../../images/teath.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData =[
    {
        name: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam impedit laboriosam.'
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam impedit laboriosam.'
    },
    {
        name: 'Teath Whitening',
        img: teath,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam impedit laboriosam.'
    }
]

const Services = () => {
    return (
        <div className="services">
            <div className="text-center">
                <h5>OUR SERVICES</h5>
                <h2>Services we provide</h2>  
            </div>
            <div>
            <div className="container d-flex justify-content-center">
            <div className="w-75 row">
            {
                servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
        </div>
            </div>
        </div>
    );
};

export default Services;