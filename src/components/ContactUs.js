import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">Feel free to contact me:</p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Email: leefamilyof4@gmail.com</h4>
              <h4>Phone: (925) 216-3250</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}