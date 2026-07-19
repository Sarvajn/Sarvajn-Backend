import adminData from "../../data/admin.json";
import { logger } from "../utils/logger";

import { adminUsers } from "../db";
import { generatePassword } from "../utils/generatePassword";
import { AdminSeed, adminSeedSchema } from "../schema";

import { randomUUID } from "node:crypto";

async function findOrCreateAdmin(admin: AdminSeed): Promise<void> {
  const existingAdmin = await adminUsers.findByEmail(admin.email);
  if (existingAdmin) {
    logger.info("Admin already exists", { admin });
    return;
  }
  try {
    await adminUsers.create({
      id: randomUUID(),
      name: admin.name,
      email: admin.email,
      password: generatePassword(),
      isActive: true,
      refreshToken: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      addedBy: null,
    });
    logger.info("Admin created", { admin });
  } catch (error) {
    logger.error("Admin creation failed", { admin, error });
  }
}

export async function syncSeed(): Promise<void> {
  const admins = adminSeedSchema.parse(adminData.admins);

  await Promise.all(admins.map(findOrCreateAdmin));
}
