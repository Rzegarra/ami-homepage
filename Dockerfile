# Create image from nodejs base image
FROM node:6

# Clone the repo from github
RUN git clone https://github.com/Rzegarra/homeAm.git && cd homeAm && npm install

# Expose port
EXPOSE 3000

# Run the application
CMD ["node", "index"]