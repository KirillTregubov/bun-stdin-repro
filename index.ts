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

const sigwinchHandler = () => {
  const width = process.stdout.columns || 80;
  const height = process.stdout.rows || 24;

  console.log("SIGWINCH", width, height);
};
process.on("SIGWINCH", sigwinchHandler);

console.log("Try resizing your terminal window.");
console.log("Press Ctrl+C to exit\n");
