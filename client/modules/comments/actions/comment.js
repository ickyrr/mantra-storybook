export default {

  hitMe({Models, LocalState}, newMessage) {

    const newComment = new Models.Comment();

    newComment.set('message', newMessage);
    newComment.set('createdAt', new Date());

    newComment.validate(function (err) {

      if (err) {
        return LocalState.set('SAVING_ERRORS', err.details);
      }

      newComment.save();

    });

  },

  clearError({LocalState}) {

    return LocalState.set('SAVING_ERRORS', null);

  },

};
