import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <footer className="Footer">
          Telegram: <a className={"button"} href="tg://resolve?domain=kauzlein">@kauzlein</a>
      </footer>
    );
  }
}

export default Footer;
