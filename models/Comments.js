const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var CommentSchema = new Schema({
 
  content: String,
  date: Date,

  User: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  Post: [
    {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
]


});

const Comments = mongoose.model("Comments", CommentSchema);

module.exports = Comments;