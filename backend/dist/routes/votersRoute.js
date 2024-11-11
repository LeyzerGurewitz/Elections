"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const votersController_1 = require("../controllers/votersController");
const router = express_1.default.Router();
router.route('/candidates').get(votersController_1.getAllCandidates);
exports.default = router;
