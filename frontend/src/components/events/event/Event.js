import React, {useState, useEffect} from "react";
import {useHistory } from "react-router-dom";
import "./Event.css";
import eventServices from "../../../frontend/event-services";

const Event = ({event, isAdmin, isLoggedIn}) => {
    const history = useHistory();

    const handleEdit = (e) => {
        const id = e.currentTarget.id;
        history.push('/edit/' + id);
    }

    const handleDelete = (e) => {
        const id = e.currentTarget.id;
        eventServices.delete(id).then(() => {
            history.push('/');
        }).catch(err => console.log(err));
    }

    const showDetails = (e) => {
        const id = e.currentTarget.id;
        eventServices.details(id).then(() => {
            history.push('/details/' + id);
        }).catch(err => console.log(err));
    }

    return (
        <div className="Event" key={event._id}>
            {
                isLoggedIn ?
                    <img src={event.imageURL} alt="alt" className="details" onClick={showDetails} id={event._id}/> :
                    <img src={event.imageURL} alt="alt" id={event._id}/>
            }
            <p className="name">{event.name}</p>
            <p className="description">{event.description}</p>
            { event.admin.firstName ?
                <div className="creator">
                    <span>Creator: </span>
                    {event.admin.firstName + ' ' + event.admin.lastName}
                </div> : null
            }
                {!isAdmin ?
                    <div></div>
                :
                <div className="buttons">
                <button className="links" id={event._id} onClick={handleEdit}>Edit</button>
                <button className="links" id={event._id} onClick={handleDelete}>Delete</button>
                </div>}
        </div>
    )
}

export default Event;