import React from "react";

class Sdk extends React.Component {
  //   componentDidUpdate() {
  //     if (this.props.businessId != "") {
  //       window.HaptikSDK.destroy();
  //       window.haptikInitSettings = {
  //         "business-id": this.props.businessId,
  //         "client-id": this.props.clientId,
  //         "base-url": this.props.baseUrl,
  //       };
  //     }
  //   }
  render() {
    var url = `/bot.html?business-id=${this.props.businessId}&client-id=${this.props.clientId}&base-url=${this.props.baseUrl}`;
    console.log(url);
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe src=${url} />`,
          }}
        />
        {this.props.businessId}
        {this.props.clientId}
        {this.props.baseUrl}
      </div>
    );
  }
}

export default Sdk;
