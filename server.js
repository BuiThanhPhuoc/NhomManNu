const express = require('express');
const path = require('path');
const app = express();

// Cài đặt EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Phục vụ file tĩnh (CSS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Route chính render trang chủ
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'));