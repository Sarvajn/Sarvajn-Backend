import mongoose from "mongoose";

import logger from "./util/logger.util.js";

const log = logger({});

export const connectDB = async (uri: string) => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(uri);
    log.info("Content DB connected successfully");
  } catch (error) {
    log.error("Error connecting to Content DB", { error });
    throw error;
  }
};

export { default as AdminController } from "./controller/admin.controller.js";
