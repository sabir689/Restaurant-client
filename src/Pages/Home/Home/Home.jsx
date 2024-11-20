import React from 'react';
import Banner from '../banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Cover from '../cover/Cover';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>
                    Lorenzo's Dine || Home
                </title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <Cover></Cover>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;