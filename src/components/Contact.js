import React from 'react'

export default function Contact({title}) {
    return (
        <div className='about-container' id= 'contact'>
            <h3>Contact me</h3>
            <p style={{fontStyle:'italic', paddingRight:50}}>Send me an email with the link below.</p>
            <div className='h-rule'/>
            <form action="#" >
                <div class="row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="email" className="form-control" placeholder="email"/>
                    </div>
                    <div class="col">
                        <input type="number" className="form-control" placeholder="Phone number"/>
                    </div>
                </div>
                <input type = "text" className="form-control" placeholder="Subject"/>
                <button type = "submit" className="btn btn-info" style={{marginBottom:50}}>Submit</button>
            </form>
        </div>
    )
}
