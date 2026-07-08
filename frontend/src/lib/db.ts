import mongoose from "mongoose";

interface CustomGlobal {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

const globalRef = global as unknown as CustomGlobal;

const MONGODB_URI = process.env.MONGODB_URI;

if (!globalRef.mongoose) {
  globalRef.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (!MONGODB_URI) {
    // Graceful fallback if MONGODB_URI is not set in environment
    return null;
  }

  if (globalRef.mongoose!.conn) {
    return globalRef.mongoose!.conn;
  }

  if (!globalRef.mongoose!.promise) {
    const opts = {
      bufferCommands: false,
    };

    globalRef.mongoose!.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
      return m;
    });
  }

  try {
    globalRef.mongoose!.conn = await globalRef.mongoose!.promise;
  } catch (e) {
    globalRef.mongoose!.promise = null;
    throw e;
  }

  return globalRef.mongoose!.conn;
}

export default connectDB;
