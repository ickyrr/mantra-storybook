import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Paypal from "../paypal.jsx";

/**
 * Defining 'stories' for Payment
 */
storiesOf('Paypal', module)

  .add('Paypal form', () => (
    <Paypal />
  ))
  .add('Paypal valid', () => (
    <Paypal />
  ))
  .add('Paypal with errors', () => (
    <Paypal />
  ))

;
