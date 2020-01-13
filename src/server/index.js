var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

// 引入静态资源文件, 其目的是为了设置一个可供浏览器访问的目录。 只有这个目录下的文件，浏览器才能访问到。
// app.use(express.static(__dirname + '/../../dist'))
app.use(express.static('dist'))
// “__dirname” 是 node.js 中的一个全局变量，它指向当前脚本所在的目录
console.log(__dirname)
// 下面这个可以不写
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})