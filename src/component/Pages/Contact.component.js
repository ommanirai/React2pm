import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../common/Button/Button.component'

const Contact = (props) => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [msg, setMsg] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    // console.log(email)
    useEffect(() => {
        const error = {}
        if (!email) {
            error.email = 'Email is required'
        }
        else if (!(email.includes('@') && email.includes(".com"))) {
            error.email = "Email format invalid"
        }


        if (!subject) {
            error.subject = "subject is required"
        }
        else if (subject.match(/[!@#$%^&*()_+]/)) {
            error.subject = 'does not include special characters in subject'
        }
        else if (subject.length < 5) {
            error.subject = "subject must be atleast 4 character"
        }


        if (!msg) {
            error.msg = "message is required"
        }
        else if (msg.match(/[!@#$%^&*()_+]/)) {
            error.msg = 'does not include special characters in message'
        }
        else if (msg.length < 10) {
            error.msg = "message must be greater than 10 characters"
        }

        setErrors(error)

    }, [email, subject, msg])


    const handleEmail = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handleSubject = (e) => {
        // console.log(e.target.value)
        setSubject(e.target.value)
    }

    const handleMessage = (e) => {
        // console.log(e.target.value)
        setMsg(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        navigate('/contact_submitted')

    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <form className='shadow-lg p-5' onSubmit={handleSubmit}>
                <h3>Contact Form</h3>
                <label htmlFor='email' >Email</label>
                <input type='text' onChange={handleEmail} name='email' id='email' placeholder='Email' className='form-control' ></input>
                {
                    errors.email && <span className='text-danger'>{errors.email}</span>
                }
                <br />

                <label htmlFor='subject'>Subject</label>
                <input type='text' onChange={handleSubject} className='form-control' name='subject' id='subject' placeholder='subject'></input>
                {
                    errors.subject && <span className='text-danger'>{errors.subject}</span>
                }
                <br />

                <label htmlFor='msg'>Message</label>
                <input type='text' onChange={handleMessage} className='form-control' name='msg' id='msg' placeholder='message' />
                {
                    errors.msg && <span className='text-danger'>{errors.msg}</span>
                }
                <br/>
                <Button></Button>
            </form>

        </div>
    )
}

export default Contact