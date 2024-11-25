FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/Mselachui03/MSELA-CHUI-V3/root/mselachui

WORKDIR /root/mselachui/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
