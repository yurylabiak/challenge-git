const tape = require('tape')
const jsonist = require('jsonist')

const PORT = process.env.PORT = process.env.PORT || require('get-PORT-sync')()
const server = require('./server')

const urlBase = `http://localhost:${PORT}`

tape('should respond hello', (t) => {
  jsonist.get(urlBase, (err, body) => {
    if (err) t.error(err)

    t.equal(body.msg, 'hello')
    t.end()
  })
})

<<<<<<< 33e41571c2ceeb0e61b456a7678753a57fc6dd91
tape('should respond user-agent', (t) => {
  const opts = { headers: { 'User-Agent': 'tape' } }
  jsonist.get(`${urlBase}/user-agent`, opts, (err, body) => {
    if (err) t.error(err)

    t.equal(body.ua, 'tape')
=======
tape('should respond b64', (t) => {
  jsonist.get(`${urlBase}/b64/hello`, (err, body) => {
    if (err) t.error(err)

    t.equal(body.b64, 'aGVsbG8=')
>>>>>>> feat: add base64 endpoint
    t.end()
  })
})

tape('cleanup', function (t) {
  server.close()
  t.end()
})
