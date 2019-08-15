const fs = require('fs');

let listadoPorHAcer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHAcer);
    fs.writeFile('db/data.json' , data , (err)=>{
        if (err) throw new Error('no se pudo guardar' , err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHAcer = require('../db/data.json');
        
    } catch (error) {
        listadoPorHAcer = [];
    }

}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado : false
    };

    listadoPorHAcer.push(porHacer);
    guardarDB();
    return porHacer;
}



const actualizar = (descripcion,completado= true) => {

    cargarDB();

    let index = listadoPorHAcer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >=0){

        listadoPorHAcer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}


const borrar = (descripcion) =>{
    cargarDB();
    let nuevoListado = listadoPorHAcer.filter( tarea => tarea.descripcion !== descripcion);

    if (listadoPorHAcer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHAcer = nuevoListado;
        guardarDB();
        return true;
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHAcer;

}
module.exports = {
    crear,
    actualizar,
    borrar,
    getListado
}