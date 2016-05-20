import {Comment} from '/lib/models';
import {Meteor} from 'meteor/meteor';

export default function () {

  Meteor.publish('comment.single', function () {

    console.log(Comment);
    return Comment.find({});

  });

}
