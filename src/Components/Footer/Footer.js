import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <footer className="Footer">
          Telegram: <button color="primary" href="tg://resolve?domain=kauzlein">@kauzlein</button>
      </footer>
    );
  }
}

export default Footer;
