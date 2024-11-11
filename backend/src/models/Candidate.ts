import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICandidate {
  _id: Types.ObjectId;
  name: string;
  image: string;
  votes: number;
}

const CandidateSchema = new Schema<ICandidate>({
  name: {
    type: String,
    required: [true, "Please upload your name"],
    minlength: [3, "user must least 3 chars "],
    maxLength: [30, "userName ca"],
  },
  image:{
    type: String
  },
  votes:{
    type: Number
  },
},  { timestamps: true } );

export default mongoose.model<ICandidate>("Candidate", CandidateSchema);
