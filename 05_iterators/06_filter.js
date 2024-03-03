//const coding = ["js" , "ruby" , "java" , "c++" , "python"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })

//console.log(newNums)


const books = [
    {title: 'Book 1' , genre: 'Fiction' , publish: 2001 , edition: 1981},
    {title: 'Book 2' , genre: 'Non-Fiction' , publish: 2002 , edition: 1992},
    {title: 'Book 3' , genre: 'History' , publish: 2003 , edition: 1999},
    {title: 'Book 4' , genre: 'Non-Fiction' , publish: 2004 , edition: 1989},
    {title: 'Book 5' , genre: 'Science' , publish: 2005 , edition: 2009},
    {title: 'Book 6' , genre: 'Fiction' , publish: 2006 , edition: 1987},
    {title: 'Book 7' , genre: 'History' , publish: 2007 , edition: 1986},
    {title: 'Book 8' , genre: 'Science' , publish: 2008 , edition: 2001},
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => {return bk.edition >= 1995})
userBooks = books.filter( (bk) => {
    return bk.edition >= 1995 && bk.genre === 'History'
})
console.log(userBooks);