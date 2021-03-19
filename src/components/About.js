import React from 'react'

export default function About({title}) {
    return (
        <div className="about-main" id={title}>
            <div className = "about-container">
                <h3>About me</h3>
                <p style={{fontStyle:'italic', paddingRight:50}}>I believe the wants and needs of every person is unlimited in relation to their problems. Hence, I like to learn and explore technologies capable of solving some of these problems.</p>
                <div className='h-rule'/>

                <div className = 'abc'>
                    <div className="professional-skills">
                        <h4>Professional skills</h4>
                        <ul>
                            <li> - reactnative</li>
                            <li> - reactjs</li>
                            <li> - graphic design</li>
                            <li> - django</li>
                            <li> - javascript</li>
                            <li> - html</li>
                            <li> - css</li>

                        </ul>
                    </div>
                    <div style={{display:'flex',flex:1, justifyContent:'center',alignItems:'center'}}>
                        <div style={{width:1, height:100, backgroundColor:'#bebebe'}}/>
                    </div>
                    <div className="education">
                        <h3>Education</h3>
                        <div style={{paddingTop:20,display:'flex',flexDirection:'row'}}>
                            <div style={{flex:1}}>
                                <h6>2017 - 2021</h6>
                                <h4>University of Ghana</h4>
                                <p style={{color:'#bebebe'}}>Bachelor of Science in Computer Sc.</p>
                                
                            </div>
                            <div style={{flex:1}}>
                                <h6>2014 - 2017</h6>
                                <h4>St. Thomas Acquinas SHS</h4>
                                <p style={{color:'#bebebe'}}>Business</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
