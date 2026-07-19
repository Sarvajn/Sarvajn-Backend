import { MongoCollection } from "@sarvajn/mongo";
import { AdminUser, AdminUserSchema } from "@sarvajn/schema";

import bcrypt from "bcrypt";

export class AdminUserCollection extends MongoCollection<
  AdminUser,
  typeof AdminUserSchema
> {
  constructor() {
    super("admin_users", AdminUserSchema, [
      { keys: { id: 1 }, options: { unique: true } },
      { keys: { email: 1 }, options: { unique: true } },
    ]);
  }

  public async create(user: AdminUser) {
    const validated = this.validate(user);

    if (user.password) {
      validated.password = await bcrypt.hash(user.password, 10);
    }

    return this.collection.insertOne(validated);
  }

  public async findByEmail(email: string) {
    return this.collection.findOne({ email });
  }
}
