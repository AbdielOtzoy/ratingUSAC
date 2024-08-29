import mongoose from "mongoose";

const MOGNO_URI = process.env.MONGO_URI;

let cached = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MOGNO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    );
  }

  cached =
    cached.promise ||
    mongoose.connect(MOGNO_URI, {
      dbName: "RatingUsac",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
