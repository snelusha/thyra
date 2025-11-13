export function runList(store) {
  const all = store.all();
  const keys = Object.keys(all);

  if (keys.length === 0) {
    console.log("No folders saved yet.");
    console.log("Use: thyra config <name> <folder_path>");
    return;
  }

  console.log("Saved folders:");
  for (const key of keys) {
    console.log(`  ${key} -> ${all[key]}`);
  }
}
