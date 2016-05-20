import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Stripe from "../stripe.jsx";

/**
 * Defining 'stories' for Payment
 */
storiesOf('Stripe Payment', module)

  .add('Stripe form', () => (
    <div>
      <br/>
      <Stripe />
    </div>
  ))
  .add('Stripe valid', () => (

    <div>
    <div className="alert alert-success">
      <strong>Success!</strong>
    </div>

          <Stripe />
    </div>
  ))
  .add('Stripe with errors', () => (
    <div>
      <div className="alert alert-danger">
        <strong>Error!</strong>
      </div>

        <Stripe />
    </div>
  ))

;
