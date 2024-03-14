class User {
    constructor (username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return '123'
    }
}

const ankit = new User("Ankit")
//console.log(ankit.createId());

class Teacher extends User {
    constructor (username , email) {
        super(username)
        this.email = email
    }
}

const bittu  = new Teacher("bittu" , "bittu@gmail.com")
bittu.logMe()
console.log(bittu.createId());