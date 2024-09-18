import { PrismaClient as GameDateClient } from "../../../prisma/game/generated/gameDataClient/index.js";
import { PrismaClient as UserDateClient } from "../../../prisma/user/generated/userDataClient/index.js";

export const gameDataClient = new GameDateClient({
    log : ["query", "info", "warn", "error"],
    errorFormat : "pretty",
});

export const userDataClient = new UserDateClient({
    log : ["query", "info", "warn", "error"],
    errorFormat : "pretty",
});