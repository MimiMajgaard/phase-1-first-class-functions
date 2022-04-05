// const receivesAFunction = function(callbackFunction){
// return callbackFunction()
// }
function receivesAFunction(callbackFunction){
    return callbackFunction()
}
const returnsANamedFunction = function(){
    return function aNamedFunction() {

    }
}
function returnsAnAnonymousFunction(){
   return function(){

   } 
}