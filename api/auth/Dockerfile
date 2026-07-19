FROM node:24-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock turbo.json lerna.json ./

COPY api/admin/package.json ./api/admin/
COPY api/app/package.json ./api/app/
COPY api/auth/package.json ./api/auth/
COPY api/quiz/package.json ./api/quiz/

COPY packages/config/package.json ./packages/config/
COPY packages/logger/package.json ./packages/logger/
COPY packages/mongo/package.json ./packages/mongo/
COPY packages/schema/package.json ./packages/schema/

RUN yarn install --frozen-lockfile

COPY packages/ ./packages/
COPY api/admin/ ./api/admin/
COPY api/app/ ./api/app/
COPY api/auth/ ./api/auth/
COPY api/quiz/ ./api/quiz/

RUN yarn typecheck

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder --chown=node:node /app/package.json /app/yarn.lock ./
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/packages ./packages
COPY --from=builder --chown=node:node /app/api/auth ./api/auth

USER node

WORKDIR /app/api/auth
EXPOSE 5000

CMD ["yarn", "start"]
