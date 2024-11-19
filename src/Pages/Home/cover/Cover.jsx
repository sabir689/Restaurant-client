import React from 'react';
import chef from '../../../assets/home/chef-service.jpg'

const Cover = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${chef})`,
            }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className=' mr-24 ml-24 -mb-20 text-black  border-2 bg-white p-28'>
                <h2
                    className="text-center text-4xl mb-10 uppercase"
                    style={{ fontFamily: 'Cinzel, serif' }}>
                    BISTRO BOSS
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore commodi sint ut necessitatibus laborum,Quasi dolore commodi sint ut necessitatibus laborum Quasi dolore commodi sint ut necessitatibus laborum quis fugiat?
                    <span className=' flex justify-center'>Voluptate eum, et nam itaque, commodi ducimus dolor ullam culpa.</span></p>

            </div>
        </div>
    );
};

export default Cover;