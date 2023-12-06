const db = require('../config/db')
const timestamp = require('../middlewares/timestamp')
const validator = require('validator')
const bcrypt = require('bcrypt')
const uuid = require('uuid')

class Accounts {

    static async signUp(first_name, last_name, email, passcode) {

        const id = uuid.v4()
        const created_at = await timestamp()

        // validate email and passcode
        if (!first_name || !last_name || !email || !passcode) throw Error('All fields must be filled')
        if (!validator.isEmail(email)) throw Error("Invalid Email Address")

        // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
        if (!validator.isStrongPasscode(passcode)) throw Error("Passcode not strong enough")

        const isExist = await this.userExist(email)

        if (isExist) throw Error('User Exists')
        else {
            // to hash the passcode
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)

            let sql = `INSERT INTO accounts (id, first_name, last_name, email, passcode, created_at)
                    VALUES ('${id}', '${first_name}', '${last_name}', '${email}', '${hash}', '${created_at}')
        `

            await db.execute(sql)
        }


    }

    static async login(email, passcode) {

        // validate email and passcode
        if (!email || !passcode) throw Error('All fields must be filled')
        if (!validator.isEmail(email)) throw Error("Invalid Email Address")

        // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
        if (!validator.isStrongPasscode(passcode)) throw Error("Passcode not strong enough")

        const user = await this.userExist(email)

        if (!user) throw Error('User does not exist')
        const match = await bcrypt.compare(passcode, user.passcode)

        if (!match) throw Error('Incorrect passcode')

        return { id: user.id, first_name: user.first_name }


    }

    static async userExist(email) {
        let sql = `SELECT * FROM accounts WHERE email='${email}'`

        const [user] = await db.execute(sql)

        return user[0]
    }
}
module.exports = Accounts