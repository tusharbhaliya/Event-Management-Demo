import React, {useEffect, useState} from "react";
import './Profile.css';
import userImg from '../../../images/user.png';
import userService from "../../../frontend/user-services";
import Event from "../../events/event/Event";

const Profile = () => {
    const [user, setUser] = useState({});
    const [createdEvents, setCreatedEvents] = useState([]);

    useEffect(() => {
        const userId = JSON.parse(sessionStorage.getItem('user'))._id;
        userService.get(userId).then(res => {
            setUser(res);
            setCreatedEvents(res['createdEvents']);
        }).catch(err => console.log(err));
    }, []);


    const renderCreatedEvents = () => {
        return createdEvents.map(event => {
            return (
                <Event
                    isAdmin={true}
                    key={event._id}
                    event={event}
                />
            )
        })
    }

    const render = () => {
        return (
            <div className="Profile">
               <div className="createdEvents">
                        <h1>Created Events</h1>
                        {createdEvents.length !== 0 ? renderCreatedEvents() : <span>No created events</span>}
                    </div>
                <div className="profile-data">
                    <img src={userImg} alt="alt"/>
                    <p className="name">{user.firstName.toUpperCase() + ' ' + user.lastName.toUpperCase()}</p>
                    <p className="username">{user.username}</p>
                    <p className="created-events">Created events: {user.createdEvents.length}</p>
                </div>
            </div>
        )
    }

    return Object.keys(user).length ? render() : <span>Loading...</span>

}

export default Profile;