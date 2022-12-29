import { useEffect, useState } from "react";
import { getAlbumSearchResult, getArtistsSearchResult } from "../../DataFromApi";
import { IAlbumOrTrack, IArtist } from "../../Interfaces/Interfaces";
import { AlbumsResList } from "./AlbumsResList";
import { ArtistsResList } from "./ArtistsResList";

export const MainSearchContent = ({changeSearchValue, searchInput}:
    {changeSearchValue: (value: string) => void,
    searchInput: React.RefObject<HTMLInputElement>}) => {

    const [artistsList, setArtistsList] = useState<IArtist[]>([]);
    const [albumsList, setAlbumsList] = useState<IAlbumOrTrack[]>([]);
    useEffect(() => {
        getArtistsSearchResult(searchInput.current!!.value).then((result) => setArtistsList(result));
        getAlbumSearchResult(searchInput.current!!.value).then((result) => setAlbumsList(result));
    },[changeSearchValue, searchInput])

    return (
            <div className="artist__album__section">
                {artistsList.length !== 0 && albumsList.length !== 0 
                 ? <>
                 <ArtistsResList artistsList={artistsList} />
                 <AlbumsResList albums={albumsList}/>
                 </>
                : <div className="no__result block__title__text">
                    <span>NO RESULT</span>
                </div>
                }                
            </div>
    );
};