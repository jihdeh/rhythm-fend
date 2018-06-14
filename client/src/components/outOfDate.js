import React, { Component } from "react";

class OutOfDate extends Component {
  render() {
    let title;
    if (this.props.browser.name !== "ie") {
      title = <span>{this.props.browser.name} is out of date</span>;
    } else {
      title = <span>Internet Explorer is not supported</span>;
    }

    let consider_chrome_or_firefox;

    if (this.props.browser.name === "edge") {
      consider_chrome_or_firefox = (
        <span>
          To use SoundIT Africa and improve your experience elsewhere on the
          web, please download{" "}
          <a
            className="upgrade_link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/chrome"
          >
            Google Chrome
          </a>{" "}
          or{" "}
          <a
            className="upgrade_link"
            href="https://www.mozilla.org/en-US/firefox/new/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>.
        </span>
      );
    } else if (this.props.browser.name === "chrome") {
      consider_chrome_or_firefox = (
        <span>
          To use SoundIT Africa and improve your experience elsewhere on the
          web, please{" "}
          <a
            className="upgrade_link"
            href="https://support.google.com/chrome/answer/95414?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            upgrade Google Chrome to its most current version
          </a>.
          {this.props.browser.os === "Android OS" ? (
            <span>
              <a
                style={{
                  color: "red",
                  lineHeight: 3,
                  padding: "0 10px",
                  textDecoration: "underline"
                }}
                href="https://play.google.com/store/apps/details?id=com.android.chrome"
              >
                Android Click Here to upgrade
              </a>
            </span>
          ) : null}
        </span>
      );
    } else if (this.props.browser.name === "firefox") {
      consider_chrome_or_firefox = (
        <span>
          To use SoundIT Africa and improve your experience elsewhere on the
          web, please
          <a
            className="upgrade_link"
            href="https://support.mozilla.org/en-US/kb/update-firefox-latest-version"
            target="_blank"
            rel="noopener noreferrer"
          >
            upgrade Firefox to its most current version
          </a>.{" "}
        </span>
      );
    } else {
      consider_chrome_or_firefox = (
        <span>
          To use SoundIt Africa and improve your experience elsewhere on the
          web, please consider upgrading your web browser or download{" "}
          <a
            className="upgrade_link"
            href="https://www.google.com/chrome"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>{" "}
          or{" "}
          <a
            className="upgrade_link"
            href="https://www.mozilla.org/en-US/firefox/new/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>.
        </span>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="columns small-12">
            <p
              style={{
                margin: "30px auto 0",
                textAlign: "center",
                fontSize: 30
              }}
            >
              {title}
            </p>
            <p>
              SoundIT Africa requires an up-to-date web browser.
              {consider_chrome_or_firefox}
              For more help, send a whatsapp message to +234 (80) 3298 8276
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default OutOfDate;
