import nodemailer from 'nodemailer'
import handlebars from 'handlebars'
import fs from 'fs'
import path from 'path'

export default async function sendEmail(email, subject, payload, template) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const source = fs.readFileSync(path.join(__dirname, template), 'utf8')
    const compiledTemplate = handlebars.compile(source)
    const options = () => {
      return {
        from: process.env.EMAIL_LOGIN,
        to: email,
        subject: subject,
        html: compiledTemplate(payload),
      }
    }

    transporter.sendMail(options(), (error, info) => {
      if (error) {
        return error
      } else {
        return true
      }
    })
  } catch (err) {
    return err
  }
}
