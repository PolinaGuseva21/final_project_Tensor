import { Navigate } from "react-router-dom";
import { Search } from "../components/Search/Search";
import { TopPage } from "../components/TopPage/TopPage";
import { IFooterColInfo, ILinkList } from "../Interfaces/Interfaces"

// Мой ключ.
export const myApiKey = "502d7d64f573f4e8406b14d120b144fc";
export const navBarItems: ILinkList[] = [
    {id: 1, link: "https://www.last.fm/dashboard", text: 'Live'},
    {id: 2, link: "./index.html", text: 'Music'},
    {id: 3, link: "https://www.last.fm/charts", text: 'Charts'},
    {id: 4, link: "https://www.last.fm/events", text: 'Events'},
    {id: 5, link: "https://www.last.fm/features", text: 'Features'}
]

export const footerColInfo: IFooterColInfo[] = [
    {title: 'COMPANY', links: [
        {id: 1, link: "https://www.last.fm/about", text: 'About Last.fm'},
        {id: 2, link: "https://www.last.fm/about/contact", text: 'Contact Us'},
        {id: 3, link: "https://www.last.fm/about/jobs", text: 'Jobs'},
    ]}, 
    {title: 'HELP', links: [
        {id: 1, link: "https://www.last.fm/about/trackmymusic", text: 'Track My Music'},
        {id: 2, link: "https://support.last.fm", text: 'Community Support'},
        {id: 3, link: "https://www.last.fm/help/guidelines", text: 'Community Guidelines'},
        {id: 4, link: "https://cbsi.secure.force.com/lastfm/knowledgehome_lfm?referer=lastfm.com", text: 'Help'}
    ]},
    {title: 'GOODIES', links: [
        {id: 1, link: "https://www.last.fm/about/trackmymusic", text: 'Download Scrobbler'},
        {id: 2, link: "https://www.last.fm/api", text: 'Developer API'},
        {id: 3, link: "https://www.last.fm/music/+free-music-downloads", text: 'Free Music Downloads'},
        {id: 4, link: "https://store.last.fm", text: 'Merchandise'}
    ]},
    {title: 'ACCOUNT', links: [
        {id: 1, link: "https://www.last.fm/join", text: 'Sign Up'},
        {id: 2, link: "https://www.last.fm/login", text: 'Log In'},
        {id: 3, link: "https://www.last.fm/pro", text: 'Subscribe'},
    ]},
]

export const routes = [
    {link: '/musicTrends', element: <TopPage/>},
    {link: '/search', element:  <Search/>},
    {link: '/*', element: <Navigate to="/musicTrends" replace />},
]