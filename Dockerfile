# ベースイメージ
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 本番ビルドしてみる（←重要！）
RUN npm run build

# EXPOSEとCMDはあってもなくてもOK（本番サーバーにしないなら）
