import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <h2 className=""><FontAwesomeIcon icon={faUserMd} /> Doctor Bari</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link  mr-2 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  mr-2" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  mr-3" aria-current="page" href="#">Dental Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  mr-3 text-white" aria-current="page" href="#">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  mr-3 text-white" aria-current="page" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  mr-3 text-white" aria-current="page" href="#">Contact Us</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;