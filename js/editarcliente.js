 import {obtenerClienteId, editarCliente} from './API.js';
 import { mostrarAlerta, validar } from "./funciones.js";

(function (){

    //campos de formulario
    const nombreInput = document.querySelector('#nombre');
    const empresaInput = document.querySelector('#empresa');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async ()  =>{
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCLiente = parametrosURL.get('id');

        const cliente = await obtenerClienteId(idCLiente);

        mostrarCliente(cliente);

        //submit de fomriulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarFormulario);
    })

    function mostrarCliente(cliente){
        const {nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;
        emailInput.value = email;
        idInput.value = id;
    }


    function validarFormulario(e){
        e.preventDefault();
        
        const cliente={
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        };
    
        if(validar(cliente)){
           // mostrar mensaje
           mostrarAlerta('Todos los campos son obligatorios');
           return;
        }

        //Reescribir objeto cliente
        editarCliente(cliente);
    }

})();