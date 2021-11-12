FROM node:16-alpine as builder

WORKDIR /opt/payplay-ui

COPY . ./

RUN yarn install \
  && yarn build \
  && rm -rf Dockerfile README.md

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder --chown=nginx:nginx /opt/payplay-ui/build/ /var/www/public

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
