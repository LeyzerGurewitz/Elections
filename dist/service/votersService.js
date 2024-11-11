"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCandidatesService = void 0;
const votersDAL_1 = require("../DAL/votersDAL");
const getAllCandidatesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const candidates = yield (0, votersDAL_1.findCandidatesArr)();
    if (!candidates) {
        throw new Error("No candidates found");
    }
    return candidates;
});
exports.getAllCandidatesService = getAllCandidatesService;
