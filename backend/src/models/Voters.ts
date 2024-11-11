import mongoose, { Schema, Document, Types } from "mongoose";


export interface IUserVote{
    _id: Types.ObjectId;
    userName: string;
    password: string;
    sAdmin: boolean;
    hasVoted: boolean;
    votedFor?: Types.ObjectId;
};

const UserVoteSchema = new Schema<IUserVote>(
    {
        userName:{
            type: String,
            required: [true, "Please upload your name"],
            minlength: [3,  "user must least 3 chars "],
            maxLength: [30, "userName ca"],
        },
        password:{
            type: String,
            required: [true, "Please enter an password"],
          },
          sAdmin:{
            type:Boolean,
          },
          hasVoted:{
            type:Boolean,
          },
          votedFor:{
            type: Schema.Types.ObjectId,
            ref: "Candidate"
          }
    },
    {timestamps: true}
);

export default mongoose.model<IUserVote>("user-vote", UserVoteSchema);