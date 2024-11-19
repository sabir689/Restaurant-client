import React from 'react';
import Banner from '../banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Cover from '../cover/Cover';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Cover></Cover>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
        </div>
    );
};

export default Home;