# Chọn Node.js LTS
FROM node:18

# Tạo thư mục làm việc
WORKDIR /home/node/n8n

# Cài n8n global
RUN npm install -g n8n

# Copy project (nếu có nodes custom)
COPY . .

# Mặc định chạy n8n
ENTRYPOINT ["n8n"]
CMD ["start"]
