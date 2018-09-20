

// Using References (Normalization) -> CONSISTENCY

let author = {
    name : 'Gaurav'
}

let course = {
    author: 'id'
}

// Using Embedded Documents (Denormalization) -> PERFORMANCE
let course = {
    author:{
        name:'Gaurav'
    }
}

// Hybrid

let author = {
    name: 'Gaurav',
    //50 other properties
}

let course = {
    author: {
        id:'ref',
        name:'Gauarv'
    }
}