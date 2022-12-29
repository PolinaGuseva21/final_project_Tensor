import { ITag } from "../../Interfaces/Interfaces";

export const TagItem = ({item}: {item: ITag}) => {
    return (
        <li className="header__menu__text text genre">
            <a className="header__menu__text text genre" href={item.url}>{item.name}</a>
        </li>
    )
};