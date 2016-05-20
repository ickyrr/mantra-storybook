import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import paymentModule from './modules/payments';
import commentsModule from './modules/comments';
import adminsModule from './modules/admins';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(paymentModule);
app.loadModule(commentsModule);
app.loadModule(adminsModule);
app.init();
