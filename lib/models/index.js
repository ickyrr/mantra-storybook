import {Mongo} from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

const Comments = new Mongo.Collection('comments');

export const Comment = Class.create({
  name: 'Comment',
  collection: Comments,
  fields: {
    message: {
      type: String,
      validators: [ {
        type: 'minLength',
        param: 6,
        message: 'Message to short'

      },{
        type: 'maxLength',
        param: 30,
        message: 'Message to long'

      },{
        type: 'regexp',
        param: /^[a-zA-Z0-9 ]+$/,
        message: 'Accept alphanumeric only and space'
      }
    ]
    },
    createdAt: Date
  }
});
