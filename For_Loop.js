console.log("This is For_Loop");

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i)
}


// This is for in
let obj = {
    name:"Ricky",
    role:"UI and UX",
    cod:"500",
}

for (const key in obj){
    const element = obj[key];
    console.log(key,element)
}

// This is for of
for (const c of "Ricky") {
    console.log(c);
}