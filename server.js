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

app.get('/api/users', (req, res) => {
    let users = ['Khach 1', 'Khach 2', 'Khach 3'];
    res.json({ data: users, status: 200 });
    // B them route API 1
    // B them route API 2
});

// A dang tao conflict 1
// A test chuc nang login
// A test chuc nang logout
// A test chuc nang register
console.log("A is testing");

app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'));