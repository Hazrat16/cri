import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    return (
        <div className="px-1">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;