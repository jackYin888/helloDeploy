var http = require('http')
    , exec = require('exec')
var express = require('express')
var app = express()

const PORT = 8091
    , PATH = '..'

app.get('/', function (req, res) {
    res.send('hello jackyin!! ');
});
app.post('/deploy', (req, res) => {
    var commands = [
        'git pull',
    ].join(' && ')
    setTimeout(function () {
        exec(commands, function (err, out, code) {
            if (err instanceof Error) {

                res.send('Server Internal Error.')
                throw err
            }
            process.stderr.write(err)
            process.stdout.write(out)
        })
    }, 0)
    res.send('Deploying.')

})

app.listen(PORT, () => {
    console.log(`listrning on ${PORT}`)
})