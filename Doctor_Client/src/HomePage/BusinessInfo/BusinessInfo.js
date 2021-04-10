import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Houses',
        description: 'We are Open 7 Business Day!',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Dhanmondi, Dhaka 1209, Bangladesh',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us Now',
        description: '+88 096 2452 3251',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="container d-flex justify-content-center">
            <div className="w-60 row">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;