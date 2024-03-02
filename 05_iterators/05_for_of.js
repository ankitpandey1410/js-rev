const coding = ["js" , "ruby" , "java" , "c++" , "python"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item , index , arr) => {
    //console.log(item , index , arr);
})


const mycoding = [
    {
        languageName: "javaScript",
        languageFilename: "js"
    },
    {
        languageName: "c++",
        languageFilename: "cpp"
    },
    {
        languageName: "java",
        languageFilename: "java"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
})