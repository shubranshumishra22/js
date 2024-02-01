//loop in objects

const newObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in newObject) {
    //console.log(`${key} shortcut is for ${newObject[key]}`);
}

//for-in in array

//only prints index or keys, syntax below

const progm = ["js", "rb", "py", "java"]
 
for (const key in progm) {
    
    console.log(progm[key]);
    }

//** maps are not iterable    