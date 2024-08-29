# Buy Better React Admin UI

## Overview
Buy Better Admin UI is built with React using Mantine component library. Desktop first approach.
This project also contain e2e testing under `tests` directory

`NOTE: This project is for learning purpose and not fully complete yet`

![img](https://github.com/opplieam/bb-admin-ui/blob/main/ss.png?raw=true)

## Development
This project require [backend](https://github.com/opplieam/bb-admin-api)
Start server with `make server-up` Then run `npm run dev`

## End-to-End test
End-to-end test also required backend server
`npx playwright test --project=chromium --ui`

## Dependencies
- Mantine for component UI
- React query for server state management
- React router
- Playwright for E2E test
