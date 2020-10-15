import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from './text-input'
const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name='name'
            lebel='Enter Your Name'
            placeholder='Hamza'
            value={props.values.name}
            onChange={props.handleChange}
        />
        <TextInput
            name='email'
            type='email'
            lebel='Enter Your Email'
            placeholder='Hamza@gmail.com'
            value={props.values.email}
            onChange={props.handleChange}
        />
        <TextInput
            name='password'
            type='password'
            lebel='Enter Your Password'
            placeholder='************'
            value={props.values.password}
            onChange={props.handleChange}
        />
        <button type='submit'>Submit</button>
    </form>
)
Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
export default Form;