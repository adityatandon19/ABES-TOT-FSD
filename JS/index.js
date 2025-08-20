// const data = () => {
//     return "Hi, Welcome to FSD";
// };
// console.log(data());

// const sum = (a, b) => {
//     return a + b;
// };
// console.log(sum(10, 20));

// const add = (a, b) => a + b;  // single-line shorthand
// console.log(add(23, 40));

// (()=>{
//      console.log("hello, how are you")
// })();

// function greet(msg="hello"){
//      return "Hi"+msg
// }
// console.log(greet("Welcome"))

function selectLanguage(lang) {
     let data
     
     if(lang == "java"){
          function javaCompiler(){
               console.log("Java Compiler is being executed")
          }
          data = javaCompiler()
     }
     else if(lang == "C"){
          function cCompiler(){
               console.log("C compiler is bring executed")
          }
          data = cCompiler()
     }
     else {
          console.log("Selected language compile is not found")
     }
}
selectLanguage("python")