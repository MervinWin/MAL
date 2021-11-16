import React, {useContext, useState, useEffect} from "react";
import ReactAudioPlayer from "react-audio-player";
import { useHistory } from "react-router";

import { UserContext } from "../../contexts/UserContext";
import { FavoriteContext } from  "../../contexts/FavoriteContext";

import "./TrackCard.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

function TrackCard({track}){

    let history = useHistory();
    
    const {user} = useContext(UserContext);
    const {tracks, dispatchTracks} = useContext(FavoriteContext);
    const [fav, setFav] = useState(false);

    useEffect(() => {
        if(user.loggedIn !== null){
            const profile = JSON.parse(localStorage.getItem(user.loggedIn));
            if(profile.favorite && profile.favorite.find((fav) => fav.id === track.id)){
                setFav(true);
            } else{
                setFav(false);
            }
        }
    },[user.loggedIn, track.id])
    

    const handleFavorite = (event) => {
        event.preventDefault();
        if(user.loggedIn === null){
            history.push("/login");
        } else {
            if(tracks.find((fav) => fav.id === track.id)){
                dispatchTracks({
                    type: "UNFAVORITE",
                    user: user.loggedIn,
                    id: track.id
                })
                setFav(false);
            } else{
                dispatchTracks({
                    type: "FAVORITE",
                    user: user.loggedIn,
                    id: track.id,
                    album:{
                        cover_small: track.album.cover_small
                    },
                    title: track.title,
                    artist:{
                        name: track.artist.name
                    },
                    preview: track.preview
                })
                setFav(true);
            }
        }
    }

    return(
    <div className="track mb-4 d-flex justify-content-between text-capitalize">
        <div className="d-flex">
            <div>
                <img src={track.album.cover_small} alt={track.title} className="track-img me-2" />
            </div>
            <div>
                <h6 className="track-name mb-0 mt-2">{track.title}</h6>
                <small className="track-artist mt-0 mb-2">{track.artist.name}</small>
                
            </div>
        </div>
        <div className="my-auto d-flex">
            <ReactAudioPlayer
                src={track.preview}
                controlsList="nodownload"
                controls
            />
            <button onClick={(e) => handleFavorite(e)}>
                <FontAwesomeIcon icon="heart" size="sm" className={`mx-3 my-auto ${fav ? "fav": "text-black"}`}/>
            </button>
        </div>
    </div>
    )
};

export default TrackCard;