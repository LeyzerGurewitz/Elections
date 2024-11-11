import {findCandidatesArr, findCandidateById, incrementCandidateVotes, updateUserVote, decrementCandidateVotes} from '../DAL/votersDAL'
import User from '../models/Voters'
export const getAllCandidatesService = async () => {
    
    const candidates = await findCandidatesArr();

    if (!candidates ) {
        throw new Error("No candidates found");
    }

    return candidates; 
}

export const addVoteToCandidate = async (userId: string, candidateId: string) => {
    const candidate = await findCandidateById(candidateId);
    if (!candidate) throw new Error("המתמודד לא נמצא");
  
    const userVote = await User.findById(userId);
    if (!userVote || userVote.hasVoted) throw new Error("המשתמש כבר הצביע");
  
    await incrementCandidateVotes(candidateId);
    return await updateUserVote(userId, candidateId, true);
  };
  
  export const deleteVoteFromCandidate = async (userId: string, candidateId: string) => {
    const candidate = await findCandidateById(candidateId);
    if (!candidate) throw new Error("המתמודד לא נמצא");
  
    const userVote = await User.findById(userId);
    if (!userVote || !userVote.hasVoted) throw new Error("המשתמש לא הצביע");
  
    await decrementCandidateVotes(candidateId);
    return await updateUserVote(userId, null, false);
  };

  
