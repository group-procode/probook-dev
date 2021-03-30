import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'
import dotenv from "dotenv";

dotenv.config();

// Criando transporter de gmail com as credencias
export const transporterRSenha = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Dizendo ao transporter qual viewEngine usar para o envio de html
transporterRSenha.use('compile', hbs({
    // Configurando a viewEngine handlebars para nodemailer
    viewEngine: {
        extName: '.handlebars',
        defaultLayout: false,
    },
    viewPath: path.resolve('./src/helpers/mails/templates'),
}))

