import { createUser, findUserName, findUserInDB } from '../DAL/userDAL';
import User, { IUserVote } from '../models/Voters'
import bcrypt from "bcrypt";


export const createUserService = async(userName :string, password: string): Promise<IUserVote> => {
    const newClass = await findUserName(userName);
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user= new User({
        userName: userName,
        password: hashedPassword,
        sAdmin: false,
        hasVoted: false,
        
    })
    const newTeacher = await createUser(user);
    return newTeacher
}

export const findUserService= async (userName: string, password: string): Promise<IUserVote> => {
   
    const userFind = await findUserInDB(userName);
  
    if (!userFind) {
      throw new Error("Invalid username or password.");
    }
  
    const passwordMatch = bcrypt.compareSync(password, userFind.password);
  
    if (!passwordMatch) {
      throw new Error("Invalid username or password.");
    }
  
    return userFind; 
  };


