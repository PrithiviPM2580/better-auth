import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import {bearer} from "better-auth/plugins"

const mongoClient = new MongoClient(process.env.MONGODB_URI!);
const db = mongoClient.db();

const auth = betterAuth({
	database: mongodbAdapter(db), // Remove the client option
    plugins: [bearer()],
	emailAndPassword: {
		enabled: true,
	},
    advanced:{
        disableOriginCheck:true
    },
	secret: process.env.BETTER_AUTH_SECRET!,
	baseURL: process.env.BETTER_AUTH_URL!,
	basePath: "/api/v1/auth",
});

export default auth;