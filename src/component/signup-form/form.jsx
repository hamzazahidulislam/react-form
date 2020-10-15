import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input'
import GenderInput from './gender-input'
const Form = ({ values, agreement, errors, handleChange, handleAgreement, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                name='name'
                label='Name'
                placeholder='Enter Your Name'
                value={values.name}
                errors={errors.name}
                onChange={handleChange}
            />
            <TextInput
                name='email'
                type='email'
                label='Email'
                placeholder='Enter Your Email'
                value={values.email}
                errors={errors.email}
                onChange={handleChange}
            />
            <TextInput
                name='password'
                type='password'
                label='Password'
                placeholder='**********'
                value={values.password}
                errors={errors.password}
                onChange={handleChange}
            />
            <TextInput
                name='birthDate'
                type='date'
                label='BirthDate'
                value={values.birthDate}
                errors={errors.birthDate}
                onChange={handleChange}
            />
            <div className='form-group'>


                <GenderInput
                    labelclassName='mr-4'
                    className='mr-2'
                    type='radio'
                    name='gender'
                    value='Male'
                    onChange={handleChange}
                />
                <GenderInput
                    labelclassName='mr-4'
                    className='mr-2'
                    type='radio'
                    name='gender'
                    value='Female'
                    onChange={handleChange}
                />
                <GenderInput
                    labelclassName='mr-4'
                    className='mr-2'
                    type='radio'
                    name='gender'
                    value='Other'
                    onChange={handleChange}
                />
            </div>
            {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
            {/* <div className='form-group'>

                <label className='mr-4' >
                    <input className='mr-2' type="radio" name='gender' value='Male' onChange={handleChange} />Male
                </label>
                <label className='mr-4' >
                    <input className='mr-2' type="radio" name='gender' value='Female' onChange={handleChange} />Female
                </label  >
                <label className='mr-4'  >
                    <input className='mr-2' type="radio" name='gender' value='Other' onChange={handleChange} />Other
                </label>
            </div> */}
            <div className='form-group'>
                <label className='mr-4'  >
                    <input className=' mr-2' type="checkbox" name='agreement' checked={agreement} onChange={handleAgreement} />i agree
                </label>
            </div>
            <button className='btn btn-primary' type='submit' disabled={!agreement}>Create User</button>
        </form>
    );
}
Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
export default Form;