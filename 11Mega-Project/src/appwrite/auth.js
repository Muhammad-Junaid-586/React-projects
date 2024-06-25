import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
  client = new Client();
  account;

  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl) // Your API Endpoint
    .setProject(conf.appwriteProjectId);    

    this.account = new Account(this.client)
  }

  async createAccount ({email, name ,id}){
 try {
  let userAccount = await this.account.create(ID.unique(), email, name, id);
  if (userAccount) {
   return this.logIn({email, password})
  } else {
   return  userAccount
  }
     
 } catch (error) {
  throw error
 }
}

async logIn ({email,password}){
  try {
   return await this.account.createEmailSession(email,password)
    
  } catch (error) {
    throw error
  }

}

async getCurrentUser(){

  try {
     await this.account.get()
  } catch (error) {
    throw error
  }
  return null
}


async logOut(){
  try {
    await this.account.deleteSessions()
  } catch (error) {
    throw error
  }
}
}

const authService = new AuthService();

export default authService