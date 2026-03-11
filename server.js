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

app.get('/contact', (req, res) => {
    let title = "Trang Liên Hệ";
    res.send("<h1>" + title + "</h1><p>Đang xây dựng</p>");
    // B them route contact 1
    // B them route contact 2
});

app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'));