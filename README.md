🔐 JWTUtil.java - JSON Web Token Utility
JWTUtil klassi Spring Boot ilovalarida JWT (JSON Web Token) tokenlarini yaratish, imzolash va tekshirish uchun yordamchi metodlarni taqdim etadi.

1️⃣ getSigningKey()
Vazifasi:
JWT tokenlarini imzolash va tekshirish uchun Key obyektini hosil qiladi.

Tafsilot:
Secret string UTF-8 formatida baytlarga aylantiriladi va Keys.hmacShaKeyFor() yordamida HMAC-SHA kaliti yaratiladi. Ushbu kalit tokenlarni xavfsiz imzolashda ishlatiladi.

2️⃣ generateToken(User user, long expirationTime)
Vazifasi:
Berilgan foydalanuvchi uchun JWT tokenini generatsiya qiladi.

Tafsilot:
Token quyidagi ma’lumotlarni o‘z ichiga oladi:

username

email

role

Token quyidagi atributlar bilan yaratiladi:

issuedAt: token yaratilgan vaqti

expiration: amal qilish muddati

signature: HS256 algoritmida imzolanadi

Natijada kompakt JWT string (access yoki refresh token) hosil bo‘ladi.

generateTokens(User user)
Vazifasi:
Foydalanuvchi uchun accessToken va refreshToken generatsiya qiladi.

Tafsilot:

accessToken – 15 daqiqa amal qiladi.

refreshToken – 7 kun amal qiladi.

Ikkala token generateToken() yordamida yaratiladi va Map<String, String> ko‘rinishida qaytariladi:

4️⃣ validateToken(String token)
Vazifasi:
JWT tokenning haqiqiyligini tekshiradi.

Tafsilot:

Jwts.parserBuilder() yordamida token parsing qilinadi.

Imzo tekshiriladi va muddati o‘tmagan bo‘lsa true qaytariladi.

Agar token noto‘g‘ri yoki muddati tugagan bo‘lsa, false qaytariladi.

5️⃣ extractUsername(String token)
Vazifasi:
Token ichidan foydalanuvchining nomini (username) ajratib oladi.

Tafsilot:

Token parsing qilinadi.

subject maydonidan foydalanuvchi nomi olinadi.

Agar token noto‘g‘ri bo‘lsa, Exception yuzaga kelishi mumkin.

Ushbu util klass autentifikatsiya va avtorizatsiya jarayonlarida xavfsiz JWT ishlov berishni ta’minlaydi. Spring Security bilan integratsiyada keng qo‘llaniladi.
