
import conf from "../conf/conf";
import { Client, ID, Databases, Storage , Query } from "appwrite";


export class Service{
  client = new Client();
  databases;
  bucket;

  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl) // Your API Endpoint
    .setProject(conf.appwriteProjectId);    

    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async createPost({title, slug, featuredImage, userId, content, status}){

    try {
      return await this.databases.createDocument(conf.appwriteDataBaseId, conf.appwriteCollectionId,slug,{title, content, featuredImage, userId, status})
    } catch (error) {
      console.log(`appwrite service :: createPost :: error : ${error}`);
    }

  }

  async updatePost(slug,{title,  featuredImage, content, status}){

    try {
      return await this.databases.updateDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.log(`appwrite service :: updatePost :: error : ${error}`);
    }
  }



  async deletePost({slug}){
    try {
       this.databases.deleteDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
       )
       return true
    } catch (error) {
      console.log(`appwrite service :: deletePost :: error : ${error}`);
      return false
    }
  }


  async getPost({slug}){
    try {
      await this.databases.getDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log(`appwrite service :: getPost :: error : ${error}`);
      return false
    }
  }

  async getPosts(queries = [Query.equal('status' , 'active')]){
    try {
      await this.databases.listDocuments(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        queries,
       
      )
    } catch (error) {
      console.log(`appwrite service :: getPosts :: error : ${error}`);
    }
  }



  // file upload service
  async uplaodFile(file){
    try {
     return await this.bucket.createFile(
      conf.appwriteBucketId,
      ID.unique(),
      file
     )
    } catch (error) {
      console.log(`appwrite service :: uploadFile :: error : ${error}`);
      return false
    }
  }


  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
    } catch (error) {
      console.log(`appwrite service :: deleteFile :: error : ${error}`);
      return false
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }
}


const service = new Service();
export default service;