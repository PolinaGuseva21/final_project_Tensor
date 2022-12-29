import { useEffect, useState } from "react";
import { getTagesForArtist, getTrackList } from "../../DataFromApi";
import { ITag, ITrack } from "../../Interfaces/Interfaces";
import { TrackList } from "./TrackList";

export const SecondSection = () => {
  const [trackList, setTrackList] = useState<ITrack[]>([]);
    useEffect(() => {
        getTrackList().then((result) => setTrackList(result));
    },[])

    const [tagesTrackList, setTagesTrackList] = useState<ITag[][]>([]);
    useEffect(() => {
        Promise.all(trackList.map(async(track) =>
          await getTagesForArtist(track.artist.name))).then((result) => setTagesTrackList(result));             
    },[trackList])        

    return (
      <div className="content__second__section">
        <div className="content__subtitle text content__subtitle__margin">
          <span className="content__subtitle__text"><b>Popular tracks</b></span>
          <hr className="content__subtitle__red__line"/>
        </div>
        {trackList.length !== 0 && tagesTrackList.length !== 0
            ? <TrackList trackList={trackList} trackTags={tagesTrackList} />
            : <span className="content__title content__title__margin text">Information is loading ...</span>
            }        
      </div>
    );
};