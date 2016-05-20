import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Creditcard from "../creditcard.jsx";

  storiesOf('Credit Card', module)
    .add('Credit card form', () => (

      <div>
        <br />
        <Creditcard />
      </div>

    ))
    .add('Credit card valid', () => (

      <div>
          <br/><br/>
          <div className="container">
            <div className="alert alert-success">
              <strong>Success!</strong> Indicates a successful or positive action.
            </div>
          </div>
          <Creditcard />
      </div>
    ))
    .add('Credit card invalid', () => (

      <div>
          <br/><br/>
          <div className="container">
            <div className="alert alert-danger">
              <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
            </div>

          </div>

          <Creditcard />
      </div>

    ))
;
