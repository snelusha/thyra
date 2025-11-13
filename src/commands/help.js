export function runHelp(exitCode) {
  console.log(`
thyra - Quick shortcut manager for project folders

Usage:
  thyra config <name> <folder_path>   Save a folder path
  thyra open <name>                   Open folder in your editor
  thyra list                          Show all saved paths
  thyra help                          Show this help

Examples:
  thyra config my-app ~/projects/my-app
  thyra open my-app

Environment:
  THYRA_EDITOR                        Editor command (default: "code")
`);

  if (typeof exitCode === "number") {
    process.exit(exitCode);
  }
}
