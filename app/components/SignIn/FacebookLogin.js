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

  render() {
    var shit = () => {
      var id = this.props.socialId;
      console.log(id);
      return {
        __html: `
        <div class="fb-send-to-messenger"
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
        <div dangerouslySetInnerHTML={shit()}></div>
      </div>
    );
  }
}
