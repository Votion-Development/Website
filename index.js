const fastify = require('fastify')({
    logger: true,
})
const axios = require('axios').default;
const path = require('path')

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/', // optional: default '/'
})

fastify.get('/blacklisted/:ip', async (request, reply) => {
    const temp = await axios.get('https://raw.githubusercontent.com/Votion-Development/Website/main/blacklisted.json')
    const blacklistedJson = temp.data
    const IP = request.params.ip
    const blacklisted = blacklistedJson[IP]

    if (!blacklisted) return reply.send(false)

    reply.send(true)
})

fastify.get('/blacklisted/reason/:ip', async (request, reply) => {
    const temp = await axios.get('https://raw.githubusercontent.com/Votion-Development/Website/main/blacklisted.json')
    const blacklistedJson = temp.data
    const IP = request.params.ip
    const blacklisted = blacklistedJson[IP]

    if (!blacklisted) return reply.send(false)

    reply.send(blacklisted.reason)
})

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})