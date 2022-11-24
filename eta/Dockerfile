FROM node:18

WORKDIR /app

COPY ./src .

RUN npm install

# Create app directory
RUN useradd appuser && echo "flag{3T@_T3mp1@t3}" > /flag

# USER appuser:appuser
EXPOSE 49009
# CMD [ "node", "app.js" ]
