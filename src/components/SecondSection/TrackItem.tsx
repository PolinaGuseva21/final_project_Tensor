import { ITag, ITrack } from "../../Interfaces/Interfaces";
import { TagTrackList } from "./TagTrackList";

export const TrackItem = ({track, tags}: {track: ITrack, tags: ITag[]}) => {
    return (
        <div className="track">
            <a href={track.url}><img className="track__image" src={track.image[3]['#text']} alt="Track"/></a>
            <div className="track__txt content__subtitle__text text">
                <a href={track.artist.url} className="artists__profile__text__bold track__link text">{track.artist.name}</a>
                <a href={track.url} className="track__artist__name track__link text">{track.name}</a>
                <TagTrackList tags={tags}/>
            </div>
        </div>
    );
};