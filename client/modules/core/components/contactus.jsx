import React from 'react';

class Contactus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container">
        <div className="col-lg-12 col-md-12">
            <div className="form-area">

                <form role="form">
                  <br />
                  <h3>Contact Form</h3>

<div className="form-group">
<input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
</div>

<div className="form-group">
	<input type="text" className="form-control" id="email" name="email" placeholder="Email"
      required />
</div>
<div className="form-group">
	<input type="text" className="form-control" id="mobile" name="mobile"
  placeholder="Mobile Number" required />
</div>
<div className="form-group">
	<input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
</div>
<div className="form-group">
  <textarea className="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
  <span className="help-block"><p id="characterLeft" className="help-block ">You have reached the limit</p></span>
</div>

<button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Submit Form</button>
                </form>

                <br/>

            </div>
        </div>
      </div>
    );
  }
}

export default Contactus;
