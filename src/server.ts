import express from 'express'
import { env } from './env'
import{ db } from './db/database'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(routes)

const startServer = async () => {
    try {
        await db.connect();
        console.log('🟢 Banco de dados conectado com sucesso.');

        app.listen(env.PORT, () => {
            console.log(`🟢 HTTP Server Running PORT:${env.PORT}`);
        });
    }catch(error) {
        console.error('🔴 Não foi possível conectar com o banco de dados:', error);
    }
}

startServer()