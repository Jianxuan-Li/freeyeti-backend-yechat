FROM node:18 as builder

WORKDIR /app
COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM node:18-alpine as production

WORKDIR /app
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/dist /app/dist

RUN npm install -g pnpm
RUN pnpm install --prod

CMD ["node", "dist/main.js"]