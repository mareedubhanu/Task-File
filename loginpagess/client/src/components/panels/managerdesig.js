import React, { useCallback } from 'react';


class Managerdesig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            designation: ""
        }
        this.HandleInputChange = this.HandleInputChange.bind(this);
        this.HandlerClick = this.HandlerClick.bind(this);
    }

    HandlerClick() {
        localStorage.setItem('name2',this.state["name"]);
        localStorage.setItem('designation',this.state["designation"]);
        window.location.assign("/task/manager");

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
                <h2 className="title"> Manager info</h2>



                <div className="email-login">
                    <label htmlFor="username">name:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["name"]} name="name" id="username" /><br />
                    <label htmlFor="designation">Designation:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["designation"]} id="designation" name="designation" />

                </div>
                <button className="cta-btn" id="Managerdesig" onClick={this.HandlerClick}>Submit</button>
                


            </div>

        )




    }
}
export default Managerdesig;