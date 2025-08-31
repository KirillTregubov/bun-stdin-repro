# process SIGWINCH bug report:

On Windows 11...

Using Bun to run this code and resizing the terminal window will not result in any output.

Using Node.js v22.19 (current LTS) to run this code and resizing the terminal window will result in the following output:

```
SIGWINCH 130 36
SIGWINCH 131 36
SIGWINCH 132 36
SIGWINCH 133 36
SIGWINCH 134 37
SIGWINCH 135 37
...
```

Using Bun on WSL to run this code also produces the correct output:

```
SIGWINCH 145 37
SIGWINCH 145 37
SIGWINCH 146 37
SIGWINCH 146 38
SIGWINCH 147 38
...
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
