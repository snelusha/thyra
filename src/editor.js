import { spawn } from "node:child_process";

export function openInEditor(folderPath) {
  const editorCmd = process.env.THYRA_EDITOR || "code";

  const child = spawn(editorCmd, [folderPath], {
    stdio: "inherit",
    shell: true,
  });

  child.on("error", (err) => {
    console.error(
      `Failed to start editor "${editorCmd}". Is it installed and on your PATH?`
    );
    console.error(err.message);
    process.exit(1);
  });

  child.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Editor process exited with code ${code}.`);
      process.exit(code || 1);
    }
  });

  console.log(`Opening "${folderPath}" in "${editorCmd}"...`);
}
