import React, { Component } from 'react';
import classes from './app.module.css'

// import Inputs from './inputs'
// import UncontrolledForm from './forms/uncontrolled-form'
// import ControlForm from './forms/controlled-form'
// import SplitForm from './split-form'
import SignForm from './signup-form'
class App extends Component {
    state = {
        users: []
    };
    createUser = user => {
        user.id = new Date().getTime().toString()
        this.setState({
            users: [...this.state.users, user]
        })
    };
    render() {
        return (
            <div className={classes.Wrapper}>
                <h1 className={classes.Heading}>Working with Form in React</h1>
                <hr></hr>
                {/* <Inputs /> */}
                {/* <UncontrolledForm /> */}
                {/* <ControlForm /> */}
                {/* <SplitForm /> */}
                <SignForm createUser={this.createUser} />
                <div>
                    <h3 className='my-5'>All registerd users</h3>
                    <ul className='list-group'>
                        {this.state.users.map(user => (<li key={user.id} className='list-group-item'>
                            {user.name}  {user.email}
                        </li>))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default App;