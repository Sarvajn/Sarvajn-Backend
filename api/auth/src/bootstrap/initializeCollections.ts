import { Db } from "mongodb";
import { users, adminUsers } from "../db"

export async function initializeCollections(db: Db) {

    await users.initialize(db);
    await adminUsers.initialize(db);
}