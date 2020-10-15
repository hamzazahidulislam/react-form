import React, { Component } from 'react';

class UncontrolledForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({ name: '', email: '', password: '' });
    }
    render() {
        const { name, email, password } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='form-control' type="text" name='name' placeholder='Hamza' value={name} onChange={this.handleChange} />
                    <input className='form-control' type="email" name='email' placeholder='hamza@gmail.com' onChange={this.handleChange} value={email} />
                    <input className='form-control' type="password" name='password' placeholder='**********' onChange={this.handleChange} value={password} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
export default UncontrolledForm;