import React from "react";
import Sdk from "./Sdk";

class Config extends React.Component {
  state = {
    businessId: "",
    clientId: "",
    baseUrl: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      businessId: e.target.businessId.value,
      clientId: e.target.clientId.value,
      baseUrl: e.target.baseUrl.value,
    });
  };
  render() {
    return (
      <div>
        <section class="section">
          <div class="container">
            <div className="columns">
              <div className="column is-half">
                <div className="card box">
                  <div className="card-content">
                    <form onSubmit={this.handleSubmit} className="room_name">
                      <div className="field">
                        <label className="label">Business Id</label>
                        <div className="control">
                          <input
                            className="input"
                            placeholder="Please enter business id"
                            type="text"
                            name="businessId"
                            required
                          ></input>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label">Client Id</label>
                        <div className="control">
                          <input
                            className="input"
                            placeholder="Please enter client id"
                            type="text"
                            name="clientId"
                            required
                          ></input>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label">Base URL</label>
                        <div className="control">
                          <input
                            className="input"
                            placeholder="Please enter base URL"
                            type="url"
                            name="baseUrl"
                            required
                          ></input>
                        </div>
                      </div>

                      <div className="buttons is-right">
                        <button className="button is-primary">
                          Lock and Load
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <Sdk
                  businessId={this.state.businessId}
                  clientId={this.state.clientId}
                  baseUrl={this.state.baseUrl}
                ></Sdk>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Config;
