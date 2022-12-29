import { IAlbumOrTrack } from "../../Interfaces/Interfaces";

export const AlbumItem = ({album}: {album: IAlbumOrTrack}) => {
    return (
        <a href={album.url} className="artist__block" style={{backgroundImage: `url(${album.image[3]["#text"]})`}}>
            <div className="artists__block__text content__subtitle__text text">
                <span className="artists__profile__text__bold">{album.name}</span>
                <span className="artistName">{album.artist}</span>
            </div>
        </a>
    );
};