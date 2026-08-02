import { ConflictError, InternalServerError } from "@sarvajn/common";
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

  private async hashPassword(password: string){
    return await bcrypt.hash(password, 10)
  }

  public async findOrCreate(user: AdminUser) {
    const existingUser = await this.findByEmail(user.email);

    if (existingUser) {
      throw new ConflictError("User Already Exist", {
        details: {
          existingUser: {
            id: existingUser.id,
            email: existingUser.email
          }
        },
      })
    }

    const validatedData = this.validate(user);

    if (validatedData.password) {
      validatedData.password = await this.hashPassword(validatedData.password);
    }

    try {
      return await this.collection.insertOne(validatedData)
    } catch (err: unknown) {
      throw new InternalServerError("Failed to Create Admin User", {
        details: err
      })
    }
  }

  public async findByEmail(email: string) {
    return this.collection.findOne({ email });
  }
}
