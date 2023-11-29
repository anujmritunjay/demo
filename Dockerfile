FROM nginx:latest

WORKDIR /console

COPY . .

COPY /dist/demo /usr/share/nginx/html

EXPOSE 80
