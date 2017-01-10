FROM node:7.4-alpine

WORKDIR /usr/local/client
# COPY . /usr/local/client
# RUN npm install
# RUN npm run build
VOLUME [ "/usr/local/client" ]


# Define default command.
CMD [ "npm", "run", "start-prod"]

# Expose API webhook listener port.
EXPOSE 80