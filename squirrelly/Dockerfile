FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
RUN useradd appuser && echo "flag{CVE_2021_32819}" > /flag

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 49008

# USER appuser:appuser
# CMD [ "node", "app.js" ]
