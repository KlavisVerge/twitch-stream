import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class TwitchStreamApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
          text-align: center;
        }
      </style>
      <iron-image src="[[thumbnailurl]]"></iron-image>
      <paper-item>Title: [[title]]</paper-item>
      <paper-item>Viewer Count: [[viewercount]]</paper-item>
    `;
  }
  static get properties() {
    return {
      thumbnailurl: {
        type: String
      },
      title: {
        type: String
      },
      viewercount: {
        type: String
      }
    };
  }
}

window.customElements.define('twitch-stream-app', TwitchStreamApp);
