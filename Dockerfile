FROM node:21 AS base

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS development

COPY .env.development .env.development.local ./

ENV NODE_ENV=development

FROM base as build
COPY . ./
RUN pnpm run build

FROM build AS production
COPY . ./

ENV NODE_ENV=production

CMD ["pnpm", "run", "start:prod"]
