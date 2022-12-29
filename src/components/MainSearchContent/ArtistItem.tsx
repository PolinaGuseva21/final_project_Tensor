import { IArtist } from "../../Interfaces/Interfaces";

export const ArtistItem = ({artist}: {artist: IArtist}) => {
    return (
        <a href={artist.url} className="artist__block" style={{backgroundImage: `url(${artist.image[4]["#text"]})`}}>
            <div className="artists__block__text content__subtitle__text text">
                <span className="artists__profile__text__bold">{artist.name}</span>
                <span className="listeners">{artist.listeners} listeners</span>
            </div>
        </a>
    );
};