import { model, models, Schema } from "mongoose";

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Post = models.Post || model("Post", PostSchema);
export const Comment = models.Comment || model("Comment", CommentSchema);
