"use server";

import fs from "fs";
import path from "path";

export async function getSkillContent(filePath: string) {
    try {
        // Simple security check to prevent directory traversal
        if (filePath.includes("..") || (!filePath.startsWith(".agent/skills") && !filePath.startsWith(".claude/skills"))) {
            throw new Error("Invalid path");
        }
        const fullPath = path.join(process.cwd(), filePath);
        const content = fs.readFileSync(fullPath, "utf-8");
        return content;
    } catch (e) {
        console.error(e);
        return null;
    }
}
