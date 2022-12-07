import 'dotenv/config';
import express from 'express';
import { engine } from 'express-handlebars';
import session from 'express-session';
import connectDB from './db/db.js';
import userModel from './models/user.model.js';

const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('port', process.argv[3] || process.env.PORT);

app.use(
  session({
    name: 'AuthCookie',
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
userModel.find();

export { app };

