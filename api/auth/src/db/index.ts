import { UserCollection } from "./user.db";
import { AdminUserCollection } from "./adminUser.db";

export const users = new UserCollection();
export const adminUsers = new AdminUserCollection();