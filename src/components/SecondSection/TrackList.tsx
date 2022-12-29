import { ITag, ITrack } from "../../Interfaces/Interfaces";
import { TrackItem } from "./TrackItem";

export const TrackList = ({trackList, trackTags}: {trackList: ITrack[], trackTags: ITag[][]}) => {
    return (
        <div className="track__list">
            {
                trackList.map((item, index) => 
                <TrackItem track={item} key={index} tags={trackTags[index]}/>
                )
            }
        </div>
    );
};