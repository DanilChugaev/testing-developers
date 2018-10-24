import schema from './schema/index'

export default (app) => {
  schema.applyMiddleware({
    app
  })
}
