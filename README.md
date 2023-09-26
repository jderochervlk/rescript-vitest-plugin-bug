# Bug
When running vitest with coverage unit tests time out.
```
close timed out after 10000ms
Tests closed successfully but something prevents Vite server from exiting
You can try to identify the cause by enabling "hanging-process" reporter. See https://vitest.dev/config/#reporters
```
- Unit tests are written in TypeScript to test files compiled by ReScript
- To see error run `npm run test`
- To remove the error comment out `createReScriptPlugin()` in `vite.config.js`