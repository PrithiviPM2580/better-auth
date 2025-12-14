import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoClient = new MongoClient(process.env.MONGODB_URI!);
const db = mongoClient.db();

const auth = betterAuth({
    database: mongodbAdapter(db, {
        client: mongoClient,
    }),
    emailAndPassword: {
        enabled: true,
    },
    secret: process.env.BETTER_AUTH_SECRET!,
    baseURL: process.env.BETTER_AUTH_URL!,
    basePath: "/api/v1/auth",
});

export default auth;