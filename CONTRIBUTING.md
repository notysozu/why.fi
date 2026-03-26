# Contributing to why.fi

Thanks for contributing. This project mixes a Vite/React frontend with a FastAPI backend, so changes should keep both local development and deployment flows healthy.

## Local setup

1. Copy `.env.example` to `.env`.
2. Create a Python virtual environment and install backend dependencies:
   `python3 -m venv .venv && . .venv/bin/activate && python -m pip install -r backend/requirements.txt`
3. Install frontend dependencies:
   `cd frontend && npm ci`
4. Run the backend:
   `cd backend && ../.venv/bin/uvicorn main:app --host 0.0.0.0 --port 8001`
5. Run the frontend in a separate terminal:
   `cd frontend && npm run dev`

## Coding standards

- Keep changes focused and small when possible.
- Preserve the existing project structure unless a refactor clearly improves maintainability.
- Prefer descriptive names over abbreviations.
- Add comments only where intent is not obvious from the code.
- Keep frontend code TypeScript-safe and backend code typed when practical.

## Tests

- Run backend tests with `pytest`.
- Run frontend linting with `npm run lint`.
- Run a production frontend build with `npm run build`.

## Commit messages

Use Conventional Commits:

- `feat: add multiplayer score overlay`
- `fix: stabilize websocket reconnect flow`
- `docs: clarify Fly deployment steps`
- `test: add backend health endpoint coverage`
- `chore: clean generated cache files`

## Pull requests

1. Create a focused branch for your change.
2. Update tests or docs when behavior changes.
3. Keep pull requests scoped to one concern.
4. Include a concise summary, testing notes, and screenshots for UI changes.
