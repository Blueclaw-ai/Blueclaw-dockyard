FROM node:20-slim
WORKDIR /app
COPY package.json tsconfig.json ./
COPY src ./src
COPY agents ./agents
COPY data ./data
COPY docker/healthcheck.sh ./docker/healthcheck.sh
RUN npm install --omit=dev && npm run build
EXPOSE 8787
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s CMD ["/app/docker/healthcheck.sh"]
CMD ["node", "dist/index.js"]
