const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role,firstName,secondName) => {
    return jwt.sign(
        {id, email, role,firstName,secondName},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, firstName, secondName, role} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный email или password'))
            }
            if(!firstName || !secondName){
                return next (ApiError.badRequest('Были некорректно введены  Имя или Фамилия'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, role, firstName, secondName, password: hashPassword})
            const basket = await Basket.create({userId: user.id})
            const token = generateJwt(user.id, user.email, user.role,user.firstName,user.secondName)
            return res.json({data:token})
        } catch (error) {
            console.log(error)
        }
        
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.firstName,user.secondName, user.role)
        const {firstName, secondName, id,} = user
        return res.json({data:token, dataUser:{firstName,secondName,email:user.email,id}} ) 
        } catch (error) {
            console.log(error)
        }
       
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.firstName, req.user.SecondName, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
