import React from "react";

import FormInput from "../../components/Form-input/FormInput.component";
import CustomButton from "../../components/Custom-button/CustomButton.component";

import "./Signin.styles.scss";

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: "" });
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="Email"
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="Password"
                    />

                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
        );
    }
}

export default Signin;
