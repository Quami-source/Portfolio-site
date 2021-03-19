import React from 'react';
import me from '../../../image02.png';

const Body = ({title})=>{
    return(
        <div className='body-container' id = {title}>
            <div className='img-container'>
                <div className='backrop'/>

                <div className='imagedrop'>
                    <img src={me} className='image-style' alt="Quami"/>
                </div>

            </div>
            <div className='text-container'>
                <div className='text'>
                    <div className='h-rule'/>
                    <h2>Emmanuel Amoako</h2>
                    <p style = {{color:'#6a6a6a',textTransform:'uppercase'}}>Software Developer</p>
                    <p style = {{marginTop:30}} >I believe the wants and needs of every person is unlimited in relation to their problems. Hence, I like to learn and explore technologies capable of solving some of these problems. </p>
                    <div className='social-media'>
                        <div className='media-icon'>
                            <a href="https://twitter.com/QuamiSource?s=09"><i class="fa fa-twitter"></i></a>
                        </div>
                        <div className='media-icon'>
                            <a href="https://www.instagram.com/invites/contact/?i=sdwsgopstyyw&utm_content=10reyeq"><i class="fa fa-instagram"></i></a>
                        </div>
                        <div className='media-icon'>
                            <a href="https://www.linkedin.com/in/emmanuel-amoako-352a7819b"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Body;