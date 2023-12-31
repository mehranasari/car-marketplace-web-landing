FROM registry.menobuzz.com/node:16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY . ./
RUN yarn install
RUN yarn run build

# production environment
FROM registry.menobuzz.com/nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/node_modules /usr/share/nginx/node_modules
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
