import { useEffect, useState } from "react";
import { getTrackDuration, getTrackListSearchResult } from "../../DataFromApi";
import { IAlbumOrTrack } from "../../Interfaces/Interfaces";
import { TrackSearchItem } from "./TrackSearchItem";

function millisToMinutesAndSeconds(millis: number) {
    let minutes = Math.floor(millis / 60000);
    let seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

export const SearchTrackSection = ({changeSearchValue, searchInput}:
    {changeSearchValue: (value: string) => void,
        searchInput: React.RefObject<HTMLInputElement>}) => {
            
    const [trackList, setTrackList] = useState<IAlbumOrTrack[]>([]);
    const [durationList, setDurationList] = useState<string[]>([]);
    useEffect(() => {
        getTrackListSearchResult(searchInput.current!!.value).then((result) => setTrackList(result));        
    },[changeSearchValue, searchInput])

    useEffect(() => {
        Promise.all(trackList.map((track) =>  getTrackDuration(track.artist, track.name)))
        .then((result) => result.length !== 0 ? result.map((item) => millisToMinutesAndSeconds(item)): [])
        .then((durList) => setDurationList(durList));
    }, [trackList])

    return (
        <div className="content__second__section">
            <div className="tracks">
                <div className="block__title">
                    <span className="block__title__text text">Tracks</span>
                    <a href="#" className="block__title__more content__subtitle__text">
                    <span className="block__title__more">More Tracks</span>
                    <div className="block__title__more__image"></div>
                    </a>
                </div>
                {
                    trackList.length !== 0 && durationList.length !== 0
                    ? trackList.map((item, index) =>
                    <TrackSearchItem item={item} duration={durationList[index]} key={index} />
                    )
                    : <></>
                }                
                
            </div>            
        </div>
    );
};