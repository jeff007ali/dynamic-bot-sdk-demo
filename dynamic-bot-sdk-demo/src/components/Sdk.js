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
            __html: `<iframe height=500 width=400 src=${url} />`,
          }}
        />
      </div>
    );
  }
}

export default Sdk;
