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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserService = exports.createUserService = void 0;
const userDAL_1 = require("../DAL/userDAL");
const Voters_1 = __importDefault(require("../models/Voters"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserService = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newClass = yield (0, userDAL_1.findUserName)(userName);
    const hashedPassword = bcrypt_1.default.hashSync(password, 10);
    const user = new Voters_1.default({
        userName: userName,
        password: hashedPassword,
        sAdmin: false,
        hasVoted: false,
    });
    const newTeacher = yield (0, userDAL_1.createUser)(user);
    return newTeacher;
});
exports.createUserService = createUserService;
const findUserService = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userFind = yield (0, userDAL_1.findUserInDB)(userName);
    if (!userFind) {
        throw new Error("Invalid username or password.");
    }
    const passwordMatch = bcrypt_1.default.compareSync(password, userFind.password);
    if (!passwordMatch) {
        throw new Error("Invalid username or password.");
    }
    return userFind;
});
exports.findUserService = findUserService;
