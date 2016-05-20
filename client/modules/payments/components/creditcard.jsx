import React from 'react';

class Creditcard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

                <div className="panel panel-default credit-card-box">
                    <div className="panel-heading display-table" >
                        <div className="row display-tr" >
                            <h3 className="panel-title display-td" >Payment Details</h3>
                            <div className="display-td" >
                                <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png" />
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <form role="form" id="payment-form" method="POST" action="javascript:void(0);">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="cardNumber">CARD NUMBER</label>
                                        <div className="input-group">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="cardNumber"
                                                placeholder="Valid Card Number"
                                                autocomplete="cc-number"
                                                required autofocus
                                            />
                                            <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-7 col-md-7">
                                    <div className="form-group">
                                        <label for="cardExpiry"><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="cardExpiry"
                                            placeholder="MM / YY"
                                            autocomplete="cc-exp"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-5 col-md-5 pull-right">
                                    <div className="form-group">
                                        <label for="cardCVC">CV CODE</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="cardCVC"
                                            placeholder="CVC"
                                            autocomplete="cc-csc"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="couponCode">COUPON CODE</label>
                                        <input type="text" className="form-control" name="couponCode" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <button className="subscribe btn btn-success btn-lg btn-block" type="button">Start Subscription</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
      </div>
    );
  }
}

export default Creditcard;
