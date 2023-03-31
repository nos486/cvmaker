# Use nginx as the base image
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80




