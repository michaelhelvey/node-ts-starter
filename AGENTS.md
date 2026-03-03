## Tooling

- **Lint**: `pnpm lint` or `pnpm lint:fix` to automatically apply fixes. Exclusively use oxlint, not
  eslint.
- **Formatting**: `pnpm fmt` to automatically reformat code. Exclusively use `oxfmt`, not prettier.
- **Testing**: `pnpm test --run` to run tests. Do not run `pnpm test` on its, own, as this will
  enter watch mode, which will not exit. We exclusively use `vitest` as our test runner. We do not
  use vitest globals. See also `pnpm test <file>` to test individual files, or
  `pnpm test -t <pattern>` to test based on a named pattern.
- **Build**: `pnpm build`. This will build the project with tsdown, based on the config in
  `tsdown.config.ts`. This will automatically also update `package.json` with `exports`.

## Project Structure

- `./src/**`: source files
- `./dist/**`: build output
- `**/tests/*.test.ts`: test files. if you create new tests, create them in a directory called
  "tests" next to the production code, with mirrored file names. for example:

```
- ./src/
- ./src/index.ts
- ./src/tests/
- ./src/tests/index.test.ts
```

## Coding Guidance

- Always follow strict red/green TDD when making any code changes.
- After you make any change, always run `pnpm fmt` and `pnpm lint:fix` to auto-apply formatting and
  fixes. Then check the lint output, and fix any issues that you may find. You can run a full
  validation pipeline (build, lint, and test) with `pnpm validate`.
