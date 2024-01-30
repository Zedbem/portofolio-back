const express = require('express');
const cors = require('cors');


const port = 3000;
const app = express();
app.use(cors());

const projects = [{
    name: "Telegram-бот Кобаяши",
    description: "Бот-органайзер с возможностью подсчета дневных КБЖУ",
    image: "static/kobayashi.jpg"
}, {
    name: "Война Вирусов",
    description: "Стратегическая игра, в которой игроки сражаются за контроль над виртуальным миром при помощи вирусов",
    image: "static/viruswar.jpg"
}]

app.get('/projects', (req, res) => {
    res.send(projects);
});

app.listen(port, ()=>{
    console.log(`App is listening http://localhost:${port}/`);
})