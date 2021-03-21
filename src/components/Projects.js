import React from 'react'
import web from '../web-programming.png';
import flylog from '../web-design.png';
import model from '../3d-model.png';

export default function Projects() {
    return (
        <div className="projects-main" id="projects">
            <div className='projects-container'>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <h3 style={{textTransform:'uppercase'}}>Projects</h3>
                    <p >These projects consists of mobile and web app development, graphic designs including illustration, logos and flyers.</p>
                    <div style={{width: 70,
                                height: 3,
                                backgroundColor: 'crimson',
                                marginBottom: 40}}/>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <div className="project-items">
                        <h4>Mobile & Web Apps</h4>
                        <p>Link to various projects undertaken.</p>
                        <img src = {web} width={150} height={150} alt="web-programming" />
                        <button type="button" class="btn btn-info">Go to</button>
                    </div>
                    <div className="project-items">
                        <h4>Flyers and logo</h4>
                        <p>Client logos, flyers and other designs</p>
                        <img src = {flylog} width={150} height={150} alt="flyer" />
                        <button type="button" class="btn btn-info" style={{backgroundColor:'crimson !important'}}>Go to</button>
                    </div>
                    <div className="project-items">
                        <h4>Illustrations</h4>
                        <p>Digital drawings and cartoons of people</p>
                        <img src = {model} width={150} height={150} alt="illust" />
                        <button type="button" class="btn btn-info">Go to</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
