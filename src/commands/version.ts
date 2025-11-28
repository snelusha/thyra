import { version } from "../../package.json" assert { type: "json" };

export function runVersion(): void {
  console.log(`v${version}`);
}
