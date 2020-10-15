import React, { Component } from 'react';

class Inputs extends React.Component {
    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: false,
        skills: []
    }
    handleCahnge = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCheckBox = event => {
        this.setState({
            agree: event.target.checked
        })
    }
    handleSkillChange = event => {
        if (event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        } else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({ skills })
        }
    }
    render() {
        const { name, country, bio, birthDay, agree, skills } = this.state
        return (
            <div>
                <input className='form-control my-2' type="text" name='name' placeholder='Hamza' onChange={this.handleCahnge} value={name} />
                <select className='form-control my-2' name="country" onChange={this.handleCahnge} value={country} >
                    <option>Select Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="SaudiArabia">SaudiArabia</option>
                    <option value="india">india</option>
                </select>
                <textarea className='form-control my-2' name="bio" placeholder='Tell Me About Yourself' onChange={this.handleCahnge} value={bio}></textarea>
                <input className='form-control my-2' type="date" name='birthDay' onChange={this.handleCahnge} value={birthDay} />
                <div>
                    <input type="radio" name='gender' value='Male' onChange={this.handleCahnge} />Male
                    <input type="radio" name='gender' value='Female' onChange={this.handleCahnge} />Female
                    <input type="radio" name='gender' value='Other' onChange={this.handleCahnge} />Other
                </div>
                <div>
                    Skills: <br />
                    <input type="checkbox" name='skills' value="Java" checked={skills.includes("Java")} onChange={this.handleSkillChange} />Java
                    <input type="checkbox" name='skills' value="Javascript" checked={skills.includes("Javascript")} onChange={this.handleSkillChange} />Javascript
                    <input type="checkbox" name='skills' value="Python" checked={skills.includes("Python")} onChange={this.handleSkillChange} />Python
                </div>
                <div>
                    <input type="checkbox" name='agree' checked={agree} onChange={this.handleCheckBox} />
                    i agree to all terms and conditions
                </div>
                <button onClick={() => console.log(this.state)}>
                    Show Data
                </button>
            </div>
        );
    }
}
export default Inputs;