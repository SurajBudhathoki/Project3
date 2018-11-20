const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var PostSchema = new Schema({
  title: String,
  body: String,
  tags: Array,
  date: Date,

  User: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],



});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;