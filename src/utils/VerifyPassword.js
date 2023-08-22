'use server'

export const VerifyPassword = async(password) => {
    console.log(password)
    if(password == process.env.PASSWORD) {
        return true
    }
    else {
        return false
    }
}
