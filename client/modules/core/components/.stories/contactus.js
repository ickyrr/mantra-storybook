import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ContactUs from '../contactus.jsx';

storiesOf('Contact Us', module)
  .add('content', () => (
    <div>
      <ContactUs />
    </div>
));
