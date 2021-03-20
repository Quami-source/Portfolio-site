import React from 'react'
import emails from 'emailjs-com';

export default function Contact({title}) {

    const sendEmail = (e) => {
        e.preventDefault()

        emails.sendForm('service_d55j5go', 'template_53t20k9', e.target, "user_LB9XEs57kY6vPIyxojZJW")
            .then((result) => {
                alert("Thank you for reaching me!")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='about-container' id= 'contact'>
            <h3>Contact me</h3>
            <p style={{fontStyle:'italic', paddingRight:50}}>Send me an email with the link below.</p>
            <div className='h-rule'/>
            <form onSubmit={sendEmail} >
                <div class="row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="email" className="form-control" placeholder="Your Email" name ="email" />
                    </div>
                    <div class="col">
                        <input type="number" className="form-control" placeholder="Phone number"/>
                    </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="message" rows="4" placeholder="Body of email">
                       
                    </textarea>
                </div>
                <input type = "submit" className="btn btn-info" value="Submit" style={{marginBottom:50}}/>
            </form>
        </div>
    )
}
