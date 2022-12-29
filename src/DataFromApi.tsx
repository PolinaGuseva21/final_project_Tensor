import { myApiKey } from "./ConstData/ConstData";
import { IAlbumOrTrack, IArtist, ITag, ITrack } from "./Interfaces/Interfaces";

export function getTopArtists(limit = 12) {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${myApiKey}&limit=${limit}}&format=json`)
        .then(response => response.json())
        .then(result => {
            return result.artists.artist as IArtist[];
        })
        .catch(
            (error) => {alert("Can't find data for artists! " + error);
            return [] as IArtist[];
        }           
        );
}

export function getTagesForArtist(artistName: string){
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${artistName.replaceAll(" ", "%20")}&api_key=${myApiKey}&format=json`)
    .then(response => response.json())
    .then(list => {
        return list.toptags.tag.slice(0,3) as ITag[];
    })
    .catch(
        // (error) => {alert("Can't find data for tags! " + error);
        // return [] as ITag[];}
    );   
};

export function getTrackList(limit = 20){
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${myApiKey}&limit=${limit}&format=json`)
    .then(response => response.json())
    .then(list => {
        return list.tracks.track as ITrack[]
    })
    .catch(
        (error) => {alert("Can't find data for tracks! " + error);
        return [] as ITrack[]
    }
    );
};

export function getArtistsSearchResult(searchParametr: string, limit = 6){
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchParametr}&api_key=${myApiKey}&limit=${limit}&format=json`)
    .then(response => response.json())
    .then(list => {
        return list.results.artistmatches.artist as IArtist[];
    })
    .catch(
        (error) => {alert("Can't find data for searching by artist's name! " + error);
        return [] as IArtist[];
    }
    )
}

export function getAlbumSearchResult(searchParametr: string, limit = 6){
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchParametr}&api_key=${myApiKey}&limit=${limit}&format=json`)
    .then(response => response.json())
    .then(list => {
        return list.results.albummatches.album as IAlbumOrTrack[];
    })
    .catch(
        (error) => {alert("Can't find data for searching by album! " + error);
        return [] as IAlbumOrTrack[];
    }
    )
}

export function getTrackListSearchResult(searchParametr: string, limit = 10){
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchParametr}&api_key=${myApiKey}&limit=${limit}&format=json`)
    .then(response => response.json())
    .then(list => {
        return list.results.trackmatches.track as IAlbumOrTrack[];
    })
    .catch(
        // (error) => {alert("Can't find data for searching by track! " + error);
        () => {
        return [] as IAlbumOrTrack[];
    }
    )
}

export function getTrackDuration(artistName: string, trackName: string){
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${myApiKey}&artist=${artistName}&track=${trackName}&format=json`)
    .then(response => response.json())
    .then(list => {
        return parseInt(list.track.duration);
    })
    .catch(
        // (error) => {alert("Can't find data for getting duration for this artist's track! " + error);
        () => {
        return 0;
    }
    )
}