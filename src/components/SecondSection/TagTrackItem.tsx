import { ITag } from "../../Interfaces/Interfaces";

export const TagTrackItem = ({item}: {item: ITag}) => {
    return (
        <li className="track__txt__thin text genre">
            <a className="track__txt__thin text genre" href={item.url}>{item.name}</a>
        </li>
    )
};