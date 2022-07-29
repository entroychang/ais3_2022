FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
RUN useradd appuser && echo "flag{N1c3_C0d3_R3v13w}" > /flag

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 49007

USER appuser:appuser
CMD [ "node", "app.js" ]
