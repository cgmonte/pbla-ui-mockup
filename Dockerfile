FROM nginx:1.19.6-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/pbla-ui /usr/share/nginx/html