export default {

  removeComment({Models, LocalState}, commentID) {

    Models.Comment.remove(commentID);

  },


};
