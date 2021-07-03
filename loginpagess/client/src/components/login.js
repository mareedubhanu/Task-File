import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import fir from '../firebase/firebaseconfig';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 0,
            name: "",
            password: "",
            redirect: false
        }
        this.HandleInputChange = this.HandleInputChange.bind(this);
        this.HandlerClick = this.HandlerClick.bind(this);
    }

    HandlerClick() {
        fir.child('logins').on('value', snapshot => {
            snapshot.forEach((childsnapshot) => {
                if (childsnapshot.val() != null) {
                    if (childsnapshot.val().name == this.state["name"] && childsnapshot.val().password == this.state["password"]) {

                        this.setState({ role: childsnapshot.val().role });
                        localStorage.setItem('role', this.state.role);
                        window.location.assign("/task");
                        return;
                    }
                }
            })
        })


    }


    HandleInputChange(e) {

        const { name, value } = e.target;

        this.setState({

            [name]: value
        });
    };




    render() {

        //-------------------------------------------------------return input--------------------------------------------
        
        return (

            <div className="card">
                <h2 className="title"> Login</h2>



                <div className="email-login">
                    <label htmlFor="username">Username:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["name"]} name="name" id="username" /><br />
                    <label htmlFor="pass">Password:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["password"]} id="pass" name="password" />

                </div>
                <button className="cta-btn" id="login" onClick={this.HandlerClick}>Login</button>
                


            </div>

        )




    }
}
export default Login;