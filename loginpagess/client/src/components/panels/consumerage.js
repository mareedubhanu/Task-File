import React, { useCallback } from 'react';


class Costumerage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
        this.HandleInputChange = this.HandleInputChange.bind(this);
        this.HandlerClick = this.HandlerClick.bind(this);
    }

    HandlerClick() {
        localStorage.setItem('name',this.state["name"]);
        localStorage.setItem('age',this.state["age"]);
        window.location.assign('/task/customer');

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
                <h2 className="title"> Customer info</h2>



                <div className="email-login">
                    <label htmlFor="username">name:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["name"]} name="name" id="username" /><br />
                    <label htmlFor="age">Age:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["age"]} id="age" name="age" />

                </div>
                <button className="cta-btn" id="Costumerage" onClick={this.HandlerClick}>Submit</button>
                


            </div>

        )




    }
}
export default Costumerage;