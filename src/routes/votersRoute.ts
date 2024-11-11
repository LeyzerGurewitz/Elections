import express, {Router} from 'express';
import {getAllCandidates, addVote, deleteAVote } from '../controllers/votersController'
import {verifyToken} from "../middleware/voteMiddleware"
const router:Router = express.Router();

router.use(verifyToken)

router.route('/candidates').get(getAllCandidates)
router.route('/vote/:candidateId').post( addVote);
router.route('/vote/:candidateId').delete(deleteAVote);

export default router; 