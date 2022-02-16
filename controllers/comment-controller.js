const { Comment, Pizza } = require('../models');

const commentController = {

    addComment({ params, body }, res) {
        console.log(body);
        Comment.create(body)
            .then(({ _id }) => {
                console.log(_id);
            })
    },

    removeComment() {

    }
};

module.exports = commentController;