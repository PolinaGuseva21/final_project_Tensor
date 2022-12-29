import { HeadPlayer } from "./HeadPlayer";
import { NavigationBar } from "./NavigationBar";

export const Header = () => {
    return (
      <header className="header">     
        <HeadPlayer />
          <a href="/musicTrends">
            <div className="header__logo">
            </div>
          </a>
        <NavigationBar />                
    </header>
    );
};