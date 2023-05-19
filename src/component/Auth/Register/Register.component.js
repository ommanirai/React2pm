import React, { Component } from 'react'
import { Button } from '../../common/Button/Button.component'
import { Link } from 'react-router-dom'

const defaultForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    permanentAddress: '',
    temporaryAddress: '',
    phone: '',
    age: '',
    dob: '',
    gender: ''


}

export class Register extends Component {
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
        console.log("constructor at first");
    }

    handleChange = e => {
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

    validateForm = (fieldName) => {
        var errMsg;
        switch (fieldName) {
            case 'username':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].length > 6
                        ? ''
                        : 'username must be 6 characters long'
                    : 'required field'
                break;
            case 'password':
                errMsg = this.state.data['confirmPassword']
                    ? this.state.data['confirmPassword'] === this.state.data[fieldName]
                        ? ''
                        : 'password didnot match'
                    : this.state.data[fieldName]
                        ? this.state.data[fieldName].length > 8
                            ? this.state.data[fieldName].match(/[!@#$%^&*()_+]/)
                                ? ''
                                : 'password must contain atleast one special character'
                            : 'weak password'
                        : 'required field'
                break;

            case 'confirmPassword':
                errMsg = this.state.data['password']
                    ? this.state.data['password'] === this.state.data[fieldName]
                        ? ''
                        : 'confirm password didnot match'
                    : this.state.data[fieldName]
                        ? this.state.data[fieldName].length > 8
                            ? this.state.data[fieldName].match(/[!@#$%^&*()_+]/)
                                ? ''
                                : 'password must contain atleast one special character'
                            : 'weak password'
                        : 'required field'
                break;

            case 'email':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].includes('@') && this.state.data[fieldName].includes('.com')
                        ? ''
                        : 'invalid email format'
                    : 'required field'


                break;
            default:
                break
        }
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
            console.log('errors: ', errors)
            this.setState({
                isValidForm: errors.length === 0
            })
        })
    }

    /*
    life cycle of component:
    1. init
    2. update
    3. destroy
    */

    //    init state
    componentDidMount() {
        console.log("init state after the execution of the render")
    }
    // update state
    componentDidUpdate(previousProps, previousState) {
        console.log('update after the init phase');
        console.log('previous state: ', previousState.data.username)
        console.log("state now: ", this.state.data.username)
    }

    // destroy state:
    componentWillUnmount(){
        console.log("destroy state");
        clearInterval()
    }
    

    render() {
        console.log("render at second")
        return (
            <div>
                <h2>Register Here</h2>
                <form className='form' onSubmit={this.handleSubmit} noValidate>
                    <label>Username</label>
                    <input type='text' className='form-control' name='username' onChange={this.handleChange} placeholder='Username' />
                    <p className='text-danger'>{this.state.error.username}</p>

                    <label>Email</label>
                    <input type='email' className='form-control' name='email' onChange={this.handleChange} placeholder='Email' />
                    <p className='text-danger'>{this.state.error.email}</p>

                    <label>Password</label>
                    <input type='text' onChange={this.handleChange} className='form-control' name='password' placeholder='Password' />
                    <p className='text-danger'>{this.state.error.password}</p>

                    <label>Confirm Password</label>
                    <input type='text' onChange={this.handleChange} className='form-control' name='confirmPassword' placeholder='Confirm Password' />
                    <p className='text-danger'>{this.state.error.confirmPassword}</p>

                    <label>Permanent Address</label>
                    <input type='text' onChange={this.handleChange} className='form-control' name='permanentAddress' placeholder='Permanent Address' />

                    <label>Temporary Address</label>
                    <input type='text' onChange={this.handleChange} className='form-control' name='temporaryAddress' placeholder='Temporary Address' />

                    <label>Phone</label>
                    <input type='text' onChange={this.handleChange} className='form-control' name='phone' placeholder='Phone' />

                    <label>Age</label>
                    <input type='text' onChange={this.handleChange} className='form-control' name='age' placeholder='Age' />

                    <label>D.O.B</label>
                    <input type='text' onChange={this.handleChange} className='form-control' name='dob' placeholder='D.O.B' />

                    <label>Gender</label>
                    <input type='text' onChange={this.handleChange} className='form-control' name='gender' placeholder='Gender' />

                    <Button
                        isSubmitting={this.state.isSubmitting}
                        isDisabled={!this.state.isValidForm}
                    ></Button>
                    <p>Already have an account? <Link to='/login'>Login Here</Link> </p>

                </form>
            </div>
        )
    }
}