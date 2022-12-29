import { useState, useEffect } from "react";
import { IAlbumOrTrack } from "../../Interfaces/Interfaces";

export const TrackSearchItem = ({item, duration}: {item: IAlbumOrTrack, duration: string}) => {
    const [currentReaction, setCurrentReaction] = useState<string>("like");
    const clickLike = (e: React.MouseEvent<HTMLButtonElement> ) => {
        currentReaction === "like"
        ? setCurrentReaction("dislike")
        : setCurrentReaction("like")
    };
    useEffect(() => {
        setCurrentReaction("dislike");
    },[item])
    return (
        <div className="tracks__line text">
            <div className="tracks__line__buttons">
                <button className="controls__button play__track__button">
                </button>
                <a href={item.url} className="tracks__line__icon" style={{backgroundImage: `url(${item.image[3]["#text"]})`}}>
                </a>
                <button className={`controls__button ${currentReaction}`} tabIndex={1} onClick={clickLike}>
                </button>
                <a href={item.url} className="content__subtitle__text artists__profile__text__bold track__link text">{item.name}</a>
            </div>
            <div className="about__track">
                <a href={item.url.split("/").slice(0,5).join("/")} className="track__link text">{item.artist}</a>
                <span>{duration}</span>
            </div>
        </div>
    );
};