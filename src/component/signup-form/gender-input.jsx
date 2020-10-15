import React from 'react';
import PropTypes from 'prop-types';

const GenderInput = props => (
    <label className={props.labelclassName} >
        <input className={props.className} type={props.type} name={props.name} value={props.value} onChange={props.onChange} />{props.value}
    </label>
);
GenderInput.defaultProps = {
    labelclassName: '',
    className: ''
}
GenderInput.propTypes = {
    labelclassName: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.string
}
export default GenderInput;