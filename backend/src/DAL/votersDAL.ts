import Candidate from "../models/Candidate";
import User from "../models/Voters";

export const findCandidatesArr = async () => {
    return Candidate.find();
}

export const findCandidateById = async (candidateId: string) => {
    return await Candidate.findById(candidateId);
  };

  export const incrementCandidateVotes = async (candidateId: string) => {
    return await Candidate.findByIdAndUpdate(candidateId, { $inc: { votes: 1 } }, { new: true });
  };


  export const decrementCandidateVotes = async (candidateId: string) => {
    return await Candidate.findByIdAndUpdate(candidateId, { $inc: { votes: -1 } }, { new: true });
  };
  
  export const updateUserVote = async (userId: string, candidateId: string | null, hasVoted: boolean) => {
    return await User.findByIdAndUpdate(userId, { hasVoted, votedFor: candidateId }, { new: true });
  };  
  