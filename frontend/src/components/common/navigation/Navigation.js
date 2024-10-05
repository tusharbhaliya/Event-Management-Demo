import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="Navigation">
                <Link to="/" className="logo">
                    <p>Event Management System</p>
                </Link>
                <ul>
                    {!this.props.isLoggedIn && <Link to="/register" className="links">Register</Link>}
                    {!this.props.isLoggedIn && <Link to="/login" className="links">Login</Link>}
                    {this.props.isLoggedIn && <Link to="/create" className="links">Create</Link>}
                    {this.props.isLoggedIn && <Link to="/profile" className="links">Profile</Link>}
                    {this.props.isLoggedIn && <Link to="/logout" className="links">Logout</Link>}
                </ul>
            </nav>
        )
    }
}

export default Navigation;