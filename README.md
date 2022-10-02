# Node.js + Typescript Starter Pack

This is my personal typescript library starter kit. Here's the stack:

-   `vitest` for testing
-   `tsup` for building (ESM by default, additional CJS module via Node.js `exports`)
-   `prettier` for formatting
-   `eslint` for linting
-   `husky` for commit hooks
-   `github actions` for CI

## Installation and Running Locally

-   `pnpm dev` Run application with esbuild and `tsx`
-   `pnpm test` (or `pnpm test:coverage`) for running unit tests
-   `pnpm build` to build the library for publishing

## Authors

-   [Michael Helvey](https://michaelhelvey.dev)

## License

[MIT](./LICENSE.md)
