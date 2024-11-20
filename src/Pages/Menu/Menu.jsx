import React from 'react';
import { Helmet } from 'react-helmet-async';
import MenuCover from '../Shared/Menu_Cover/MenuCover';
import menuImg from '../../assets/menu/menu-bg.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Lorenzo's Dine || Menu
                </title>
            </Helmet>
            <MenuCover img={menuImg} title={"our menu"}></MenuCover>
            <PopularMenu></PopularMenu>
            <Helmet>
                <title>
                    Lorenzo's Dine || Menu
                </title>
            </Helmet>
            <MenuCover img={menuImg} title={"our menu"}></MenuCover>
            <PopularMenu></PopularMenu>
            <Helmet>
                <title>
                    Lorenzo's Dine || Menu
                </title>
            </Helmet>
            <MenuCover img={menuImg} title={"our menu"}></MenuCover>
            <PopularMenu></PopularMenu>

        </div>
    );
};

export default Menu;