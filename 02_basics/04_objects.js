//const tinderUser = new Object() // singleton
const tinderUser = {}   // non-singleton

tinderUser.id = "123sdfsq"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ankit",
            lastName: "Kumar"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName)


const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj4 = {5: 'e', 6: 'f'}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = {...obj1 , ...obj2}
//console.log(obj3)


const users = [
    {
        id: 1,
        email: "addfdh@gmail.com"
    },
    
    {
        id: 1,
        email: "addfdh@gmail.com"
    },
    
    {
        id: 1,
        email: "addfdh@gmail.com"
    },
    
    {
        id: 1,
        email: "addfdh@gmail.com"
    }
]

users[1].email


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



//  object de-structuring :-

const course = {
    courseName: "Js in hindi",
    price: 999,
    courseInstructor: "Ankit"
}

//course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor : instructor} = course
console.log(instructor)