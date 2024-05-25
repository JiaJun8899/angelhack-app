// utils.ts
import userSettings from "../user_settings.json";
import fs from "fs";

export type UserSettings = {
  language: string;
};

export const readUserSettings = (): UserSettings => {
  return userSettings;
};

export const updateUserSettings = (newSettings: UserSettings) => {
  fs.writeFileSync("./user_settings.json", JSON.stringify(newSettings, null, 2));
};