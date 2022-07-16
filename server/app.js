import 'dotenv/config'
import express from 'express'
import { engine } from 'express-handlebars'
import session from 'express-session'
import { connectDB } from './db/db.js'

const app = express()

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
app.set("port", (process.argv[3] || process.env.PORT))

app.use(session({
    name: 'AuthCookie',
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const firebaseConfig = {
    "type": "service_account",
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_AUTH_URI,
    "token_uri": process.env.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
}

connectDB(firebaseConfig)

export { app }





