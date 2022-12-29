import { PlayerControls } from "./PlayerControls";

export const HeadPlayer = () => {
    return (
        <div className="header__player">        
            <input alt='default-album' className="header__player__album" type="button"/>
            <PlayerControls />
        </div>
    );
};