const User = {
    _email : 'abcd@ai.com',
    _password: '12asww',

    get email () {
        return this._email.toUpperCase()
    },

    set email (value) {
        this._email = value
    } 
}

const rea = Object.create(User)
console.log(rea.email);