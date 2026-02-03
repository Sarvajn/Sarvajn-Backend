# Sarvajn-Backend

Monorepo framework available for Sarvajn Backend, powered by [TurboRepo](https://turborepo.org/) and manages versioning with [Lerna](https://lerna.js.org/).

## 🏗 Architecture

The project contains 4 microservices and 2 shared libraries, organized as follows:

### Microservices (`api/`)

| Service | Path | Default Port | Description |
| :--- | :--- | :--- | :--- |
| **Auth** | `api/auth` | `1000` | Authentication & User Management |
| **App** | `api/app` | `2000` | Main Application Logic |
| **Admin** | `api/admin` | `3000` | Admin Dashboard Backend |
| **Quiz** | `api/quiz` | `4000` | Quiz Management Engine |

### Shared Libraries (`packages/`)

| Package | Path | Description |
| :--- | :--- | :--- |
| **@sarvajn/interface** | `packages/interface` | Shared Types & Interfaces |
| **@sarvajn/types** | `packages/types` | Common DTOs & Schemas |

---

## 🚀 Usage

### 1. Installation

Install all dependencies for the entire monorepo from the root:

```sh
yarn install
```

### 2. Development

Run all microservices in parallel with a single command:

```sh
yarn dev
```

This will start:
- Auth: http://localhost:1000
- App: http://localhost:2000
- Admin: http://localhost:3000
- Quiz: http://localhost:4000

### 3. Build

Build all projects (using Turbo caching):

```sh
yarn build
```

---

## 📦 Versioning & Release (Lerna)

We use [Lerna](https://lerna.js.org/) for independent versioning of packages based on [Conventional Commits](https://www.conventionalcommits.org/).

### How it works
1.  Make changes to your code.
2.  Commit with convenient messages (e.g., `feat: login api`, `fix: token bug`).
3.  Run the release script.

### Create Release

To bump versions, generate changelogs, and create git tags:

```sh
yarn lerna:bump
```

This will:
1.  Analyze your commits since the last tag.
2.  Update `package.json` version for changed packages (and their dependents).
3.  Update `CHANGELOG.md`.
4.  Create a git tag (e.g., `sarvajn-auth@1.1.0`).

---

## ⚙️ Configuration

### Environment Variables

Each microservice has its own `.env` file configuration.
Store your `.env` file in the root of the respective service directory:

- `api/auth/.env`
- `api/app/.env`
- `api/admin/.env`
- `api/quiz/.env`

Example `.env`:
```env
PORT=1000
DATABASE_URL=...
```

---

## 📦 Dependency Management

### Adding a Dependency to a **Sub-Project** (Microservice)

To add a package (e.g., `axios`) to a specific service (e.g., `api/auth`):

```sh
yarn workspace sarvajn-auth add axios
```
_Or navigate to the directory and run yarn add:_
```sh
cd api/auth
yarn add axios
```

### Adding a Dependency to the **Workspace Root** (Dev Tools)

To add a tool available to the entire repo (e.g., `husky`, `eslint`):

```sh
yarn add -D -W husky
```
_The `-W` flag allows installing in the workspace root._

### Internal Dependencies

To use a shared package (e.g., using `@sarvajn/interface` inside `api/auth`):
1.  Ensure `@sarvajn/interface` is listed in `package.json` of `api/auth`.
2.  Run `yarn install`.
