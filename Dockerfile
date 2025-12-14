FROM node:bullseye-slim

WORKDIR /app

ENV PNPM_VERSION=10.25.0

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm","start" ]