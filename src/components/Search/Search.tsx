import { useState, useRef, useEffect } from "react";
import { MainSearchContent } from "../MainSearchContent/MainSearchContent";
import { SearchTrackSection } from "../SearchTrackSection/SearchTrackSection";

export const Search = () => {
    const searchInput = useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = useState<string>(!searchInput.current ? "Let's start searching!" : `Search result for "${localStorage.getItem("value")}"`);
    const [searchSection, setSearchSection] = useState<JSX.Element>(<div className="no__result block__title__text">
                                                                        <span>NO RESULT</span>
                                                                    </div>);
    const [tracksSection, setTracksSection] = useState<JSX.Element>(<></>);
    const search = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement> ) => {
        if (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.key !== "Enter") {
            return 
        }
        if(searchInput.current!!.value === "")
            return 
        changeSearchValue(searchInput.current!!.value)
        setSearchSection(<MainSearchContent changeSearchValue={changeSearchValue} searchInput={searchInput}/>)
        setTracksSection(<SearchTrackSection changeSearchValue={changeSearchValue} searchInput={searchInput}/>)
    }
    const changeSearchValue = (value: string) => {
        setSearchValue(`Search result for "${value}"`)
        localStorage.setItem("value", value);
    }
    
        return (
            <>
            <main className="content">
                <nav className="content__menu">
                    <span className="content__title content__title__margin text">{searchValue}</span>
                    <ul className="content__submenu">
                        <li><a href="#" className="content__submenu__text text content__red__submenu">Top Results</a></li>
                        <li><a href="#" className="content__submenu__text text">Artists</a></li>
                        <li><a href="#" className="content__submenu__text text">Album</a></li>
                        <li><a href="#" className="content__submenu__text text">Tracks</a></li>
                    </ul>
                    <div className="feild__input">
                        <form id="feild__input">
                        <input type="search" className="feild__input__search" placeholder="Enter the artist or track name for " ref={searchInput}></input>
                        </form>
                        <button className="feild__input__icon" onClick={search}>
                            <div className="feild__input__icon__image"></div>
                        </button>
                    </div>
                </nav>
                {searchSection}
            </main>
            {tracksSection}
            </>
            
        );
};