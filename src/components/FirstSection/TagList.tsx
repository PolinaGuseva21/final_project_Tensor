import { ITag } from "../../Interfaces/Interfaces";
import { TagItem } from "./TagItem";

export const TagList = ({tags}: {tags: ITag[]}) => {
    return (
        <ul className="header__menu__text text tagList" tabIndex={1}>
            {tags.map((item, index) => 
                <TagItem item={item} key={index}/>
            )}
        </ul>
    );
};