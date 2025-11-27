import fs from "node:fs";
import path from "node:path";

function getVersion(): string {
  try {
    const pkgPath = path.join(process.cwd(), "package.json");
    const content = fs.readFileSync(pkgPath, "utf-8");
    const pkg = JSON.parse(content);
    return pkg.version ?? "unknown";
  } catch {
    // Fallback: try relative to the bundled file location
    try {
      const fallbackPath = path.join(path.dirname(process.argv[1] ?? ""), "..", "package.json");
      const content = fs.readFileSync(fallbackPath, "utf-8");
      const pkg = JSON.parse(content);
      return pkg.version ?? "unknown";
    } catch {
      return "unknown";
    }
  }
}

export function runVersion(): void {
  console.log(`v${getVersion()}`);
}
