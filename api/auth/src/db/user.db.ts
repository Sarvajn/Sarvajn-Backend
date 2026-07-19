import { MongoCollection } from "@sarvajn/mongo";
import { User, UserSchema } from "@sarvajn/schema";

import bcrypt from "bcrypt";

export class UserCollection extends MongoCollection<User, typeof UserSchema> {
  constructor() {
    super("users", UserSchema, [
      { keys: { id: 1 }, options: { unique: true } },
      { keys: { email: 1 }, options: { unique: true } },
    ]);
  }

  public async create(user: User) {
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
