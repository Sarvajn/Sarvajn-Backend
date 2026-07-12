import {
    Db,
    MongoClient,
} from "mongodb";

export class MongoDatabase {
    private readonly client: MongoClient;
    private db?: Db;

    constructor(
        private readonly uri: string,
        private readonly databaseName: string
    ) {
        this.client = new MongoClient(uri);
    }

    public async connect(): Promise<void> {
        await this.client.connect();

        this.db = this.client.db(
            this.databaseName
        );
    }

    public getDatabase(): Db {
        if (!this.db) {
            throw new Error(
                "Database is not connected"
            );
        }

        return this.db;
    }

    public async disconnect(): Promise<void> {
        await this.client.close();
        this.db = undefined;
    }
}