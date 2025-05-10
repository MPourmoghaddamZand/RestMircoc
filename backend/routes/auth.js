const express = require('express');
const router = express.Router();

// اطلاعات کاربر
const adminUser = {
    username: 'admin',
    password: '123456'
};

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === adminUser.username && password === adminUser.password) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, message: 'نام کاربری یا رمز عبور اشتباه است' });
    }
});

module.exports = router;
