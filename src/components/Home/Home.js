import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <div className='banner-container'>
                <div>
                    <h1>Healthy Body</h1>
                    <h1>Healthy Life </h1>
                </div>
                <div>
                    <h1>Mark Henry</h1>
                    <h3>Personal Gym Fitness Trainer</h3>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;