const {watch, series, parallel,src,dest} = require("gulp");
const del = require("del");
const concat = require("gulp-concat");
const sass = require("gulp-dart-scss");
const sassdoc = require("sassdoc");
const rename = require("gulp-rename")
//Tareas
function holamundo(cb) {
    console.log("hola mundo");
    cb() //callback para terminar
}
function adiosmundo(cb) {
    console.log("adios mundo");
    cb() //callback para terminar
}

function compilar_scss(){
    return src("./styles/style.scss"). 
    pipe(sass()). 
    pipe(dest("styles/"))
}
function mover() {

}

function watch(){
    gulp.watch("./styles/*.scss", compilar_scss);
}




//Determinar tareas que se van a ejecutar
exports.holamundo = holamundo; //exports.nombre que tu quieras ponerle y igualar a la funcion que va a realizar
exports.adiosmundo = adiosmundo;

//uso de nodos 
exports.parallel = parallel(holamundo,adiosmundo);
exports.series = series(holamundo, adiosmundo);
exports.anidado = series(holamundo, parallel(holamundo, adiosmundo));