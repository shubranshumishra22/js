// Data types divided on the basis of how it is acessed from the memory, namely two types Primitive and non-primitive
// call by value and call by name
//7 types : String, num, boolean, null, undefined, symbol, BigInt
//refernece types(Non-primitive) : objects, Array, functions
const Id = Symbol('123')
const newId = Symbol('123')
console.log(Id === newId)