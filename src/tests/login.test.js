import request from 'supertest'
import app from '../app.js'

describe('User Login', () => {
    describe('given valid login credentials', () => {
      test("should respond with a 200 status code", async () => {
        const res = await request(app).post('/api/auth/login').send({
          email: "admin@company.com",
          password: 'Test1234*'
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('token')
      })
    })

    describe('given invalid login credentials', () => {
      test("should respond with a 401 status code", async () => {
        const res = await request(app).post('/api/auth/login').send({
          email: "admin@company.com",
          password: "invalidpassword"
        })
        expect(res.statusCode).toEqual(401)
        expect(res.body).toHaveProperty('message')
        expect(res.body.message).toEqual("The email or password you entered is incorrect")
      })
    })
})