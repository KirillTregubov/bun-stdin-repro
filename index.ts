if (process.stdin.setRawMode) {
  process.stdin.setRawMode(true);
}
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (key: Buffer) => {
  console.log("Received key:", JSON.stringify(key));

  // Ctrl+C to exit
  if (key.toString() === "\u0003") {
    process.nextTick(() => {
      process.exit();
    });
    return;
  }
});

console.log("Press Tab, then Shift + Tab");
console.log("Press Ctrl+C to exit\n");
