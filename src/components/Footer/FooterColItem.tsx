import { ILinkList } from "../../Interfaces/Interfaces";

export const FooterColItem = ({item}: {item: ILinkList}) => {
    return (
        <a href={item.link} className="footer__navigation__content text">{item.text}</a>
        );
    
};