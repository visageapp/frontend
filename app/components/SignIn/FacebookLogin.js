import React from 'react';

export default class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var lang = this.props.language;
    (function (d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = `//connect.facebook.net/${lang}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = () => {
      FB.init({
        appId: this.props.socialId,
        pageId: this.props.pageId,
        color: 'blue',
        size: 'standard',
        xfbml: this.props.xfbml,
        cookie: this.props.cookie,
        version: this.props.version
      });
    };
  }

  redirect () {
    window.location = 'http://messenger.com'
  }

  render() {
    var shit = () => {
      var id = this.props.socialId;
      return {
        __html: `
        <div class="fb-send-to-messenger"
          style=${this.props.style}
          messenger_app_id=${id}
          page_id=${this.props.pageId}
          color="blue"
          size="standard">
        </div>
        `
      }
    }
    return (
      <div>
        <button style={{transform: 'scale(1) translateX(190%) translateY(105%)', opacity: 0}} onClick={this.redirect.bind(this)}>REDIRECT</button>
        <div style={{transform: 'scale(1) translateX(110%) translateY(50%)', opacity: 0}} dangerouslySetInnerHTML={shit()}></div>
      </div>
    );
  }
}
