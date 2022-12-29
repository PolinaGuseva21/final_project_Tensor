import { IAlbumOrTrack } from "../../Interfaces/Interfaces";
import { AlbumItem } from "./AlbumItem";

export const AlbumsResList = ({albums}: {albums: IAlbumOrTrack[]}) => {
    return (
        <div className="artist__section">
            <div className="block__title">
                <span className="block__title__text text">Albums</span>
                <a href="#" className="block__title__more content__subtitle__text">
                    <span className="block__title__more">More Albums</span>
                    <div className="block__title__more__image"></div>
                </a>
            </div>
            <div className="artists__block">
                { 
                albums.length !== 0 
                ? albums.map((item, index) => 
                    <AlbumItem album={item} key={index}/>)
                : <></>
                }                    
            </div>
         </div>
    );
};