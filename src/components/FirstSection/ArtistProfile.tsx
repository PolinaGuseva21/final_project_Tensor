import { IArtist, ITag } from "../../Interfaces/Interfaces";
import { TagList } from "./TagList";

export const ArtistProfile = ({artist, tags}: {artist: IArtist, tags: ITag[]}) => {
    return (
            <a href={artist.url} className="artists__profile">
            <img alt="artists__profile__image" className="artists__profile__image" src={artist.image[4]['#text']}/>
            <div className="artists__profile__text">
                <span className="artists__profile__text__bold content__subtitle__text text">{artist.name}</span>
                <TagList tags={tags}/>
            </div>
            </a>
    );
};