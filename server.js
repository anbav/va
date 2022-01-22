require('dotenv').config()

const Hapi = require('@hapi/hapi')
const Path = require('path')
const Inert = require('@hapi/inert')

const init = async () => {

  const server = Hapi.server({
    port: process.env.PORT,
    host: 'localhost',
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  })

  await server.register(Inert)

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.file('index.html')
    }
  })

  server.route({
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: '../js'
      }
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