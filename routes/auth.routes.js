const {Router} = require('express');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const router = Router();
const User = require('../models/User');

// we need 2 POST query
//path : /api/auth/register
router.post(
    '/register',
    // need validation on server now
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароль - 8 символов').isLength({ min: 8 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty) {
            return res.status(400).json({ 
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            });
        }
        // we need get @ and password from user
        const {email, password} = req.body;   // from frontend
        //проверка, если ли такой уже email при регистрации
        //const candidate = await User.findOne({ email: email});
        const candidate = await User.findOne({email});
        if(candidate){
            return res.status(400).json({ message: 'Такой пользователь уже существует!'})
        };
        // Если if сверху не сработал - мы можем регистрировать нашего нового пользователя
        // для шифрования пароля используем bcryptjs
        const hashedPassword = await bcrypt.hash(password, 12);
        // create new user
        const user = new User({
            email, password: hashedPassword
        });
        await user.save();
        // save done
        res.status(201).json({ message: 'Пользователь создан!'});






    } catch (e) {
        res.status(500).json({message : "Something went wrong..."});

    }

})
//path : /api/auth/login
router.post('/login', async (req, res) => {
    try {

    } catch (e) {
        
    }
})


module.exports = router;