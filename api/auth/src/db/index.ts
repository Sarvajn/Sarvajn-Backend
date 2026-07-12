import { Db } from "mongodb";
import { UserCollection } from "./user.db";
import { AdminUserCollection } from "./adminUser.db";

export const users = new UserCollection();
export const adminUsers = new AdminUserCollection();

export async function initializeCollections(db: Db) {

    await users.initialize(db);
    await adminUsers.initialize(db);
}