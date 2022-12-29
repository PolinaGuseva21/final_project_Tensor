export const PlayerControls = () => {
    return (
        <div className="header__player__controls">
          <ul className="controls">
            <li><input alt='previous' className="controls__button prev__button" type="button"/></li>
            <li><input alt='play' className="controls__button play__button" type="button"/></li>
            <li><input alt='next' className="controls__button next__button" type="button"/></li>
          </ul>
        </div>
    );
};