FROM node:12

WORKDIR /app

RUN apt-get update && apt-get install -y curl git

COPY start.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/start.sh

CMD ["start.sh"]
