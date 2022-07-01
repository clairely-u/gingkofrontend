import { FormEvent, useEffect, useState, ChangeEvent } from "react";
import { Moment } from "../models/momentmodel";

interface Props {
    onSubmit: (moment: Moment) => void;
    //well hopefully this will submit a moment to the database lol
}

export default function MomentForm ({onSubmit}: Props) {
    //showForm needs to be moved to main!
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    /*
    function handleNewTitle(e:ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    };

    function handleNewDate(e:ChangeEvent<HTMLInputElement>) {
        setDate(e.target.value);
    };
    maybe dont need these...? going to try to put it all inline.
    */

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        const newMoment: Moment = {
            title: title,
            date: date,
        }
        onSubmit(newMoment);
        setTitle("");
        setDate("")
    };

    return (
        <div className="MomentFormContainer">
        
                <form id="MomentForm" onSubmit={handleSubmit}>
                    <label htmlFor="Callback__title">title:</label>
                    <input id="Callback__title" type ="text" required value={title} onChange = {e => setTitle(e.target.value)}/>
                    
                    <label htmlFor="Callback__date">date:</label>
                    <input id="Callback__date"  type="text" required value={date} onChange={e => setDate(e.target.value)}/>

                    <input type="submit" value="Submit"/>
                </form>
            
        </div>
    )
}