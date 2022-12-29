import { ITag } from "../../Interfaces/Interfaces";
import { TagTrackItem } from "./TagTrackItem";

export const TagTrackList = ({tags}: {tags: ITag[]}) => {
    return (
        <ul className="track__txt__thin tagList">
            {tags.map((item, index) => 
                <TagTrackItem item={item} key={index}/>
            )}
        </ul>
    );
};