import React, { Component } from 'react'
import { Button } from '../../common/Button/Button.component';
import { Link } from 'react-router-dom'


const defaultForm = {
    username: '',
    password: '',
    usernameErr: '',
    passwordErr: '',
}

// class based component
export class Login extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                ...defaultForm
            },
            error: {
                ...defaultForm
            },
            isSubmitting: false,
            isValidForm: false
        }
    }

    componentDidMount(){
        const sesssion = localStorage.getItem('user')
        console.log('session: ', sesssion)
    }


    handleChange = (e) => {
        // console.log('event is: ', e.target)
        // const { name, value } = e.target;
        // console.log('name is: ', name)
        // console.log('value is: ', value)
        // this.setState({
        //     [name]: value
        // }, () => {
        //     // console.log('this.state now: ', this.state)
        //     this.validateForm(name)
        // })
        const { name, value } = e.target;

        this.setState((previous) => ({
            data: {
                ...previous.data,
                [name]: value
            }
        }), () => {
            // console.log('state now is: ', this.state)
            this.validateForm(name)
        })
    }

    validateForm = fieldName => {
        let errMsg = this.state.data[fieldName]
            ? ''
            : 'required field'

        // let errField = fieldName + 'Err'
        // this.setState({
        //     [errField]: errMsg
        // })
        this.setState((pre) => ({
            error: {
                ...pre.error,
                [fieldName]: errMsg
            }
        }), () => {
            var errors = Object
                .values(this.state.error)
                .filter(err => err)
            //    .filter(function(err){
            //     if(err){
            //         return err;
            //     }
            //    })
            // console.log('errors: ', errors)
            this.setState({
                isValidForm: errors.length === 0
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log('button submit', this.state)
        this.setState({
            isSubmitting: true
        })
        // API call
        // send data to servers
        setTimeout(() => {
            this.setState({
                isSubmitting: false
            })
            localStorage.setItem('user',JSON.stringify(this.state.data))
        }, 3000);
    }


    render() {
        // ui logic goes here

        return (
            <div className='w-50'>
                <h2> Login </h2>
                <p>Please login to start your session</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input className='form-control' type='text' name='username' id='username' placeholder='Enter your Username' onChange={this.handleChange} />
                    <p className='text-danger'>{this.state.error.usernameErr}</p>
                    <br />

                    <label htmlFor='password'>Password</label>
                    <input className='form-control' type='text' name='password' id='password' placeholder='Enter your password here' onChange={this.handleChange} />
                    <p className='text-danger'>{this.state.error.passwordErr}</p>
                    {/* {btn} */}
                    <Button
                        isSubmitting={this.state.isSubmitting}
                        disabeledLabel='Loginingin...'
                        enabledLabel='Login'
                        isDisabled={!this.state.isValidForm}
                    // isDisabled={!(this.state.username && this.state.password)}
                    ></Button>
                    <p>Don't have an account? <Link to="/register">Register here</Link> </p>
                </form>
            </div>
        )
    }
}

// export const LogIn = Login