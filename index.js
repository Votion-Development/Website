const fastify = require('fastify')()
const axios = require('axios').default;
const path = require('path')

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/', // optional: default '/'
})

fastify.get('/blacklisted/:ip', (request, reply) => {
    const blacklistedJson = axios.get('')
    const IP = request.params.ip
    const blacklisted = blacklistedJson[IP]

    if (!blacklisted) return reply.send(false)
})

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})