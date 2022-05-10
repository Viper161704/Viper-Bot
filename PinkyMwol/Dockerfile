FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/Viper161704/Viper-Bot /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/HMser/uploads
RUN git clone https://github.com/HMser/Media-1
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
RUN npm install supervisor -g
CMD ["node", "bot.js"]
