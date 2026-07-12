import { Db } from "mongodb";
import { UserCollection } from "./user.db";

export const users = new UserCollection();
export const adminUsers = new UserCollection();

export async function initializeCollections(db: Db) {
    
    await users.initialize(db);
    await adminUsers.initialize(db);
}