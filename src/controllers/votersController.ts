import { NextFunction, Request, Response } from "express";
import { getAllCandidatesService,addVoteToCandidate,deleteVoteFromCandidate, } from '../service/votersService'

export const getAllCandidates =async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> =>{
    try {
        
        const candidates = await getAllCandidatesService();
        res.status(200).json(candidates)
    } catch (error) {
        next(error)
    }
}

export const addVote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { candidateId } = req.params;
      const { userId } = req.body; // מניחים ש-id המשתמש נשלח בבקשה
  
      if (!candidateId || !userId) {
        res.status(400).json("לא נמצא candidateId או userId");
        return;
      }
  
      const result = await addVoteToCandidate(userId, candidateId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteAVote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { candidateId } = req.params;
      const { userId } = req.body;
  
      if (!candidateId || !userId) {
        res.status(400).json("לא נמצא candidateId או userId");
        return;
      }
  
      const result = await deleteVoteFromCandidate(userId, candidateId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };