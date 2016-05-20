import React from 'react';

class Stripe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="container">
          <div className="col-xs-12 col-md-12 col-lg-12">
              <div className="panel panel-primary">
                  <div className="panel-heading">
                      <h3 className="panel-title">First Notice Of Loss</h3>
                      <a className="btn btn-sm btn-info pull-right" href="#"><span className="glyphicon glyphicon-search"></span>  Search</a>
                  </div>
                  <div className="panel-body">
                      <form role="form">
                          <div className="row">
                              <div className="col-xs-12">
                                  <div className="form-group">
                                      <label for="cardNumber">CLAIMS REFERENCE NUMBER</label>
                                      <div className="form-group">
                                          <input type="text" className="form-control" name="cardNumber" placeholder="Claims Reference Number" required autofocus />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-xs-12">
                                  <button className="btn btn-success" type="submit">Resume</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Stripe;
