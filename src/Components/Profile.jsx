import React from 'react';
import cat2 from '../cat2.jpg';


export const Profile = () => {
    return (
    <div style={{border:"solid (1px) black", maxWidth:"100vw"}}>

        <h1 className='title'>Rania El Haj </h1> <br/>

        <img src={cat2} width="250" alt ="cat2"/>

        <img src={process.env.PUBLIC_URL+ "/cat1.jpg"} width="250" alt="cat1" />


    </div>

    <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" >

    </video>
    );
};

