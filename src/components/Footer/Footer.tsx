import { footerColInfo } from "../../ConstData/ConstData";
import { FooterColItem } from "./FooterColItem";

export const Footer = () => {
    return (
      <footer className="footer">
      <nav className="footer__navigation">
        { footerColInfo.map((item, index) =>
          <div key={index} className="footer__navigation__group">
            <span className="footer__navigation__title">{item.title}</span>
            {
              item.links.map((linkItem) =>
              <FooterColItem item={linkItem} key={linkItem.id}/>
              )
            }        
          </div>
        )}
      </nav>
      <hr className="footer__border"/>
      <div className="comments">
        <article className="footer__comments header__menu__text">
          <span className="text"><b>English</b> current   language   Deutsch   Español   Français   Italiano   日本語   Polski Português   Русский   Svenska   Türkçe   简体中文</span>
          <span className="text">Time zone: <b>Europe/Moscow</b></span>
          <span className="text">CBS Interactive © 2022 Last.fm Ltd. All rights reserved Terms of Use Privacy Policy Legal Policies Cookies Policy Cookie Information Jobs at ViacomCBS Last.fm Music</span>
        </article>
        <div className="footer__partner">
          <span className="text"><b>Audioscrobbler</b></span>
          <div className="footer__logo"></div>
        </div>
      </div>
    </footer>
    );
};