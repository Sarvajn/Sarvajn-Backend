import type {
  Collection,
  CreateIndexesOptions,
  Db,
  Document,
  IndexSpecification,
} from "mongodb";

import { z } from "zod";

export interface CollectionIndex {
  keys: IndexSpecification;
  options?: CreateIndexesOptions;
}

export abstract class MongoCollection<
  TDocument extends Document,
  TSchema extends z.ZodType<TDocument>,
> {
  protected readonly schema: TSchema;
  protected readonly indexes: CollectionIndex[];

  protected collection!: Collection<TDocument>;

  constructor(
    protected readonly collectionName: string,
    schema: TSchema,
    indexes: CollectionIndex[] = [],
  ) {
    this.schema = schema;
    this.indexes = indexes;
  }

  public async initialize(db: Db): Promise<void> {
    this.collection = db.collection<TDocument>(this.collectionName);

    await this.createIndexes();
  }

  protected validate(data: unknown): TDocument {
    return this.schema.parse(data);
  }

  private async createIndexes(): Promise<void> {
    if (this.indexes.length === 0) {
      return;
    }

    await Promise.all(
      this.indexes.map(({ keys, options }) =>
        this.collection.createIndex(keys, options),
      ),
    );
  }
}
