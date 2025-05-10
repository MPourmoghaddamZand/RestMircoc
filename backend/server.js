const express = require('express');
const multer = require('multer');
const app = express();
const port = 5000;
const menu = require('./data/menu.json');
const categories = require('./data/category.json');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const menuPath = path.join(__dirname, './data/menu.json');
const authRoutes = require('./routes/auth'); // این خط اضافه بشه




// مسیر ذخیره‌سازی تصاویر آپلود شده
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// تنظیمات multer برای ذخیره‌سازی فایل
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // ذخیره تصاویر در پوشه uploads
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, 'image-' + uniqueSuffix + ext); // نام منحصر به فرد برای فایل
    }
});

const upload = multer({ storage });

// Middlewares
app.use(express.json()); // برای اینکه بتونی JSON دریافت کنی
app.use(cors());
app.use(express.static('public')); // برای دسترسی به تصاویر
app.use('/api', authRoutes);

// Endpoint برای دریافت کتگوری‌ها
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Endpoint برای دریافت محصولات
app.get('/api/menu', (req, res) => {
    res.json(menu);
});

// Endpoint برای آپلود تصویر
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        console.log("هیچ فایلی آپلود نشد");
        return res.status(400).json({ error: 'فایل ارسال نشده است' });
    }

    console.log("فایل آپلود شد: ", req.file);
    const relativePath = `/uploads/${req.file.filename}`; // مسیر ذخیره‌سازی تصویر
    res.status(200).json({ imagePath: relativePath }); // ارسال مسیر به کلاینت
});

// برای اضافه کردن کتگوری جدید
app.post('/api/categories', (req, res) => {
    const { name } = req.body;
    const newCategory = { id: categories.length + 1, name };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

// برای اضافه کردن محصول جدید
app.post('/api/menu', (req, res) => {
    const { name, detail, price, category, image } = req.body;
    const newProduct = {
        id: menu.length + 1,
        name,
        detail,
        price,
        category,
        image
    };

    menu.push(newProduct);

    fs.writeFile(menuPath, JSON.stringify(menu, null, 2), (err) => {
        if (err) {
            console.error('خطا در نوشتن فایل:', err);
            return res.status(500).json({ message: 'خطا در ذخیره محصول' });
        }

        res.status(201).json(newProduct);
    });
});

// شروع سرور
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
