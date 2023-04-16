// Node imports
import express from 'express'
import dotEnv from 'dotenv'

// Configurando variáveis de ambiente
dotEnv.config()

// App imports
import home from './controllers/home.js'
import registerUser from './controllers/registerUser.js'
import getUsers from './controllers/getUsers.js'
import getUser from './controllers/getUser.js'
import updateUser from './controllers/updateUser.js'
import deleteUser from './controllers/deleteUser.js'

// App e Middlewares
const app = express()
app.use(express.json())

// Rotas
app.get('/', home)
app.get('/users', getUsers)
app.get('/user/:id', getUser)
app.post('/add-user', registerUser)
app.put('/user/:id', updateUser)
app.delete('/user/:id', deleteUser)

// Iniciando servidor
app.listen(process.env.PORT)