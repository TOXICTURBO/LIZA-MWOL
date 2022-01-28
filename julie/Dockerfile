FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXICTURBO/LIZA-MWOL /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/TOXICTURBO/media

CMD ["node", "bot.js"]
