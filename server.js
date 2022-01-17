require('dotenv').config()

const Hapi = require('@hapi/hapi')

const init = async () => {

  const server = Hapi.server({
    port: process.env.PORT,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello World!'
    }
  })

  await server.start()

  console.log(`Live at http://localhost:${process.env.PORT}`)
}

process.on('unhandledRejection', (err) => {

  console.log(err)
  process.exit(1)
})

init()