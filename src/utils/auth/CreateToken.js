'use server'

const jwt = require('jsonwebtoken')

export async function CreateToken(user) {
    const payload = {
        id: user.id,
        nome: user.name,
        email: user.email,
    
    }
    
    const secretKey = process.env.SECRET_KEY
    
    const token = jwt.sign(payload, secretKey, {
        expiresIn: '1h',
      })
    
    return token
}