import { IArtist } from "../../Interfaces/Interfaces";
import { ArtistItem } from "./ArtistItem";

export const ArtistsResList = ({artistsList}: {artistsList: IArtist[]}) => {
    return (
        <div className="artist__section">
            <div className="block__title">
                <span className="block__title__text text">Artists</span>
                <a href="#" className="block__title__more content__subtitle__text">
                    <span className="block__title__more">More Artists</span>
                    <div className="block__title__more__image"></div>
                </a>
            </div>
            <div className="artists__block">
                { 
                artistsList.length !== 0 
                ? artistsList.map((item, index) => 
                    <ArtistItem artist={item} key={index}/>)
                : <></>
                }
                </div>
        </div>
    );
};