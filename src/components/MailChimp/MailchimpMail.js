import jsonp from "jsonp";
import PropTypes from "prop-types";
import React from "react";
import toQueryString from "to-querystring";
import SimpleEmail from "./SimpleEmail";

const getAjaxUrl = (url) => url.replace("/post?", "/post-json?");

class MailchimpMail extends React.Component {
  state = {
    status: null,
    message: null,
  };
  subscribe = (data) => {
    const params = toQueryString(data);
    const url = getAjaxUrl(this.props.url) + "&" + params;
    this.setState(
      {
        status: "sending",
        message: null,
      },
      () =>
        jsonp(
          url,
          {
            param: "c",
          },
          (err, data) => {
            if (err) {
              this.setState({
                status: "error",
                message: err,
              });
            } else if (data.result !== "success") {
              this.setState({
                status: "error",
                message: data.msg,
              });
            } else {
              this.setState({
                status: "success",
                message: data.msg,
              });
            }
          }
        )
    );
  };
  render() {
    return this.props.render({
      subscribe: this.subscribe,
      status: this.state.status,
      message: this.state.message,
    });
  }
}

MailchimpMail.propTypes = {
  render: PropTypes.func,
  url: PropTypes.string.isRequired,
};

MailchimpMail.defaultProps = {
  render: ({ subscribe, status, message }) => (
    <SimpleEmail
      status={status}
      message={message}
      onSubmit={(values) => subscribe(values)}
    />
  ),
};

export default MailchimpMail;
