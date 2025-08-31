# process.stdin bug report:

On Windows 11...

Using Bun to run this code and pressing Tab followed by Shift + Tab will result in the following output:

```
Received key: "\t"
Received key: "\t"
```

Using Node.js v22.19 (current LTS) to run this code and pressing Tab followed by Shift + Tab will result in the following output:

```
Received key: "\t"
Received key: "\u001b[Z"
```

This bug also is not present when run using Bun on WSL 2. That output is:

```
Received key: "\t"
Received key: "\u001b[Z"
```

## How to run

To install dependencies:

```bash
bun install
```

To run on Bun:

```bash
bun run index.ts
```

To run on Node.js v22.18+:

```bash
node index.ts
```

If you have an older verison of Node.js, run:

```bash
npm i -g ts-node
ts-node index.ts
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
