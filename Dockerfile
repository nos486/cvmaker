# Use nginx as the base image
FROM nginx:latest

# Copy the static site content to the container
COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
