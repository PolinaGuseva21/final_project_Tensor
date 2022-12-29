export interface IList {
    id: number,
    text: string
}

export interface ILinkList {
    id: number,
    link: string,
    text: string
}

export interface IFooterColInfo {
    title: string,
    links: ILinkList[]
}

export interface IImage {
    [key: string]: string
}

export interface IArtist  {
    name: string,
    url: string,
    image: IImage[],
    listeners? : number
}

export interface ITag {
    name: string,
    url: string
}

export interface ITrack {
    name: string,
    url: string,    
    artist: IArtist,
    image: IImage[]
}

export interface IAlbumOrTrack {
    name: string,
    url: string,    
    artist: string,
    image: IImage[]
}