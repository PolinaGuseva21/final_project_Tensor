import { useEffect, useState } from "react";
import { getTagesForArtist, getTopArtists } from "../../DataFromApi";
import { IArtist, ITag } from "../../Interfaces/Interfaces";
import { PopularArtists } from "./PopularArtists";

export const FirstSection = () => {
    const [artistsList, setArtistsList] = useState<IArtist[]>([]);
    useEffect(() => {
        getTopArtists().then((result) => setArtistsList(result));
    },[])

    const [tagesList, setTagesList] = useState<ITag[][]>([]);
    useEffect(() => {
        Promise.all(artistsList.map((artist) =>
            getTagesForArtist(artist.name))).then((result) => setTagesList(result));             
    },[artistsList])        

    return (
        <div className="content__first__section">
            <span className="content__title content__title__margin text">Music</span>
            <div className="content__subtitle text content__subtitle__margin">
                <span className="content__subtitle__text"><b>Are trending right now</b></span>
                <hr className="content__subtitle__line"/>
            </div>
            {artistsList.length !== 0 && tagesList.length !== 0
                ? <PopularArtists artistsList={artistsList} tagList={tagesList}/>
            : <span className="content__title content__title__margin text">Information is loading ...</span>
            }               
        </div>
    )
};