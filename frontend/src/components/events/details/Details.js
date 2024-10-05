import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router";
import eventServices from "../../../frontend/event-services";
import "./Details.css";

const Details = () => {
    const [event, setEvent] = useState({});
    const {id} = useParams();
    const history = useHistory();

     useEffect(() => {
         eventServices.details(id).then(res => {
            setEvent(res);
        }).catch(err => console.log(err));
    }, []);

    const handleEdit = (e) => {
        const id = e.currentTarget.id;
        history.push('/edit/' + id);
    }

    const handleDelete = (e) => {
        const id = e.currentTarget.id;
        eventServices.delete(id).then(() => {
            history.push('/');
        }).catch(err => console.log(err));
        history.push('/');
    }

    const render = () => {
        return (
            <div className="Details">
                <img src={event.imageURL} alt="alt" id={event._id}/>
                <div className="question-answers">
                    <span className="question">What is the name of the event?</span>
                    <p className="name">{event.name}</p>
                    <span className="question">Where will the event be held?</span>
                    <p className="location">{event.location}</p>
                    <span className="question">When will the event be date?</span>
                    <p className="date">{event.date}</p>
                    <span className="question">What is the event about?</span>
                    <p className="description">{event.description}</p>
                </div>
                <div className="buttons">
                            <button className="links" id={event._id} onClick={handleEdit}>Edit</button>
                            <button className="links" id={event._id} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        )
    }

    return Object.keys(event).length  ? render() : <span>Loading...</span>
}

export default Details;