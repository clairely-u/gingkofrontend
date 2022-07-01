import { useEffect, useState, useContext } from "react";
import { Moment } from "../models/momentmodel";
import IndvMoment from "./IndvMoment";
import { getUserMoments, postNewMoment, putMoments } from "../services/services";
import AuthContext from "../context/AuthContext";
import MomentForm from "./MomentForm";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useParams } from 'react-router-dom';


export default function Main(){
    const id = Number(useParams().id);
    const [momentById, setMomentById] = useState<Moment|null>(null);
    const [showForm, setShowForm] = useState(false);
    const [momentList, setMomentList] = useState<Moment[]>([]);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        getUserMoments(user!.uid).then(data => {
            setMomentList(data);
        })
    }, [])

    //wont be able to use this til the form is done I think.
    function handleAdd(moment: Moment): void {
        let newMoment = {
            id: user?.uid,
            userMoments: [moment]
        }
        getUserMoments(user!.uid).then(data => {
            console.log(data);
            if(data) {
                putMoments(user!.uid, moment).then(() => {
                    getUserMoments(user!.uid).then(() => {
                        setMomentList(prev => [...prev, moment])
                    })
                })
            } else {
                postNewMoment(moment).then(() => { //there was an issue here with instead using the newMoment, which is what I think it should have been...
                    getUserMoments(user!.uid).then(() => {
                        setMomentList(prev => [...prev, moment])
                    })
                })
            }
        })
    }

    /* function showMoments(moment: Moment): void {
            moment.id = user?.uid;
                getUserMoments(user!.uid).then(data => {
                    if(data) {
                        putMoments(user!.uid, moment)
                        .then(updatedMoments => )
                    }
                })
        } */

        return (
            <div className="Main">
                <div className="Header">
                    <h1>ginkgo</h1>

                    { user ?
                    <button id="indvNav" onClick={signOut}>sign out</button>
                    :
                    <button id="singleNav" onClick={signInWithGoogle}>you gotta log in, friend</button>
                    }
                </div>
   
                { user ?
                <div className="MainBody"> 
                        <div className="MomentForm">
                            <button className="MomentForm__button" onClick={() => setShowForm(true)}>add a new thought</button>
                            <MomentForm onSubmit={handleAdd}/>
                        </div>

                        <div className="MomentsContainer">
                                {   momentList.map((data, i) =>
                                        <IndvMoment key = {i} moment={data}/>)}
                        </div>
                    </div>
                    :
                     <p></p>}
                      
            </div>
        )
}