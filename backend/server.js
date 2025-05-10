const express = require('express');
const app = express();
const port = 5000;
const menu = require('./data/menu.json');
const categories = require('./data/category.json');
const cors = require('cors');

app.use(express.json()); // برای اینکه بتونی JSON دریافت کنی
app.use(cors())

// Endpoint برای دریافت کتگوری‌ها
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Endpoint برای دریافت محصولات
app.get('/api/menu', (req, res) => {
    res.json(menu);
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
    const { name, categoryId, price } = req.body;
    const newProduct = { id: menu.length + 1, name, categoryId, price };
    menu.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
