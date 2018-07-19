import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-item/paper-item.js';

/**
 * `twitch-stream`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TwitchStream extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          text-align: center;
        }
      </style>
      <iron-image src="[[thumbnailurl]]"></iron-image>
      <paper-item>Streamer: [[streamer]]</paper-item>
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
      },
      streamer: {
        type: String
      }
    };
  }
}

window.customElements.define('twitch-stream', TwitchStream);
