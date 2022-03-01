import User from './model/user.model.js'

function routes(app) {
  app.get('/', async (req, res) => {
    const users = await User.find({})
    return res.status(200).json({
      message: `Hello World from port: ${process.env.PORT}`,
      author: `- ${process.env.AUTHOR}`,
      users
    })
  })

  app.get('/healthcheck', (req, res) => res.sendStatus(200))
}

export default routes
