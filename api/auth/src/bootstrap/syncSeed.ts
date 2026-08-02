import adminData from "../../data/admin/admin.json";
import { logger } from "../utils/logger";

import { adminUsers } from "../db";
import { generatePassword } from "../utils/generatePassword";
import { AdminSeed, adminSeedSchema } from "../schema";

import { v4 as uuidv4 } from 'uuid';

async function seedAdmin(admin: AdminSeed): Promise<void> {
  try {
    const password: string = generatePassword();
    await adminUsers.findOrCreate({
      id: uuidv4(),
      name: admin.name,
      email: admin.email,
      password: password,
      isActive: true,
      refreshToken: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      addedBy: null,
      resetPassword: true
    });
    logger.info("Admin created", { email: admin.email, password });
  } catch (error) {
    logger.warn("Admin creation failed", { admin, error });
  }
}

export async function syncSeed(): Promise<void> {
  const admins = adminSeedSchema.parse(adminData.admins);

  await Promise.all(admins.map(seedAdmin));
}
