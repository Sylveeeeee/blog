# ใช้ Node.js เป็น Base Image
FROM node:18-alpine AS builder

# กำหนด Working Directory
WORKDIR /app

# คัดลอกไฟล์ที่จำเป็น
COPY package.json package-lock.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมด
COPY . .

# Build Next.js Project
RUN npm run build

# ใช้ Base Image สำหรับรัน Production
FROM node:18-alpine AS runner

# กำหนด Working Directory
WORKDIR /app

# คัดลอกไฟล์ที่สร้างจาก Stage ก่อนหน้า
COPY --from=builder /app ./

# เปิด Port สำหรับ Next.js
EXPOSE 3000

# คำสั่งรัน Container
CMD ["npm", "run", "start"]
