import { configure } from '@kadira/storybook';

/* import css */
import '../client/stylesheets/bootstrap.min.css';
import '../client/stylesheets/custom.css';

import '../client/stylesheets/payment.css';

function loadStories() {

  require('../client/modules/core/components/.stories/');
  require('../client/modules/comments/components/.stories/');
  require('../client/modules/payments/components/.stories/');

}

configure(loadStories, module);
