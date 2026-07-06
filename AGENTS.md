# AGENTS.md - Shaadi.com Clone

## Project Overview
Full-stack matrimony platform with React frontend (CRA + Craco) and FastAPI backend. MongoDB for persistence.

## Commands

### Frontend (from `frontend/`)
| Command | Description |
|---------|-------------|
| `yarn start` | Dev server (port 3000) |
| `yarn build` | Production build to `build/` |
| `yarn test` | Run tests (Jest + React Testing Library) |
| `yarn test --watch` | Watch mode |
| `yarn test --testNamePattern="<name>"` | Run single test by name |
| `yarn test <path/to/test.jsx>` | Run single test file |

### Backend (from `backend/`)
| Command | Description |
|---------|-------------|
| `python -m uvicorn server:app --reload --port 8000` | Dev server |
| `pytest` | Run all tests |
| `pytest tests/test_<module>.py` | Run single test file |
| `pytest -k "<test_name>"` | Run single test by name |
| `black .` | Format code |
| `isort .` | Sort imports |
| `flake8` | Lint |
| `mypy .` | Type check |

### Full Stack
| Command | Description |
|---------|-------------|
| `docker-compose up` | Run both services |

## Code Style

### Frontend (JavaScript/React)
- **Imports**: Use `@/` alias for `src/` (configured in craco). Group: React, third-party, local components, utils, styles
- **Components**: Functional with hooks. PascalCase for components, camelCase for props/hooks
- **Formatting**: ESLint (Airbnb-ish) + Prettier. Single quotes, trailing commas, 2-space indent
- **Naming**: `kebab-case` for files, `PascalCase` for components, `camelCase` for variables/functions
- **State**: `useState` for local, Context for global. Avoid prop drilling beyond 2 levels
- **Styling**: Tailwind CSS. Use `cn()` utility (clsx + tailwind-merge) for conditional classes
- **Error Handling**: Try/catch in async handlers. Toast notifications via Sonner
- **Types**: JSDoc comments for complex props. No TypeScript yet

### Backend (Python/FastAPI)
- **Imports**: stdlib → third-party → local. `isort` enforces this
- **Formatting**: `black` (line length 88). `flake8` for lint
- **Types**: Full type hints required. Pydantic v2 models for request/response
- **Naming**: `snake_case` for functions/variables, `PascalCase` for classes/models
- **Error Handling**: HTTPException with proper status codes. Custom exception handlers for validation
- **Async**: Use `async/await` for all DB operations (Motor). Sync only for CPU-bound
- **Models**: Pydantic `BaseModel` with `ConfigDict(extra="ignore")` for MongoDB docs

### Shared Conventions
- **Environment**: `.env` files (never commit). Use `python-dotenv` / `process.env`
- **Git**: Conventional commits. Branch names: `feat/`, `fix/`, `chore/`
- **API**: RESTful. Version prefix `/api/v1/` (currently `/api/`). JSON responses
- **Database**: MongoDB with Motor async driver. Collection names: plural snake_case

## Project Structure
```
shaadi/
├── frontend/                 # React app
│   ├── src/
│   │   ├── components/       # UI components (sections, modals, ui/)
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utilities (cn, etc.)
│   │   ├── data/             # Mock data (to replace with API)
│   │   ├── App.js            # Root component
│   │   └── index.js          # Entry point
│   ├── craco.config.js       # CRA override (aliases, plugins)
│   └── package.json
├── backend/                  # FastAPI app
│   ├── server.py             # Main app + routes
│   ├── requirements.txt
│   └── .env
├── tests/                    # Python tests (empty)
└── contracts.md              # API contracts
```

## Key Files to Know
- `frontend/craco.config.js` - Webpack aliases, ESLint rules, dev plugins
- `frontend/src/lib/utils.js` - `cn()` class helper
- `backend/server.py` - FastAPI app, models, routes
- `contracts.md` - API endpoint specifications

## Testing Notes
- Frontend: Jest + React Testing Library. Tests live in `src/**/*.test.jsx`
- Backend: pytest. Tests in `tests/`. Use `AsyncClient` for API testing
- No CI configured yet. Run tests locally before pushing

## Common Patterns
- **Frontend API calls**: Axios instance with base URL from env. Interceptors for auth tokens
- **Backend DB**: `db.collection` via Motor. Always serialize datetime to ISO for Mongo
- **Auth**: JWT in httpOnly cookies (planned). Currently mock modals only
- **Forms**: React Hook Form + Zod validation (frontend). Pydantic validation (backend)