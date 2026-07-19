import { MongoCollection } from "@sarvajn/mongo";
import { User, UserSchema } from "@sarvajn/schema";

export class UserCollection extends MongoCollection<User, typeof UserSchema> {
  constructor() {
    super("users", UserSchema, [
      { keys: { id: 1 }, options: { unique: true } },
      { keys: { email: 1 }, options: { unique: true } },
    ]);
  }

  public async create(user: User) {
    const validated = this.validate(user);

    return this.collection.insertOne(validated);
  }

  public async findByEmail(email: string) {
    return this.collection.findOne({ email });
  }
}
