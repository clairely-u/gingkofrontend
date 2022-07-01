import { Moment } from "../models/momentmodel";
import { useEffect, useState, useContext } from "react";
import { getUserMoments } from "../services/services";
import AuthContext from "../context/AuthContext";

interface Props {
    moment: Moment;
}

export default function IndvMoment({moment}: Props) {
    const [momentList, setMomentList] = useState<Moment[]>([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        getUserMoments(user!.uid).then(data => {
            setMomentList(data) //in SingleEvent for the final project, it had data.favoriteEvents, so I am worried that I need a .moments or something else here after data?
        })
    }, []) //also not entirely sure if these brackets need to be here.


    return (
        <div className="Moment">

            <h2>{moment.title}</h2>
            <p>{moment.date}</p>
            <p> later on, do a check for if description and image exist, and those will go here.</p>

        </div>

        )

}