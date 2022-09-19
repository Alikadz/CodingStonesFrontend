FROM node:18-alpine AS build

WORKDIR /code
COPY ./ ./
RUN touch /code/.env.production
RUN echo "BASE_URL=https://stg-coding-stones-api.zendev.se" > /code/.env.production
RUN npm ci --omit=dev
RUN npm run build

FROM nginx:stable-alpine AS deploy

COPY --from=build /code/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
