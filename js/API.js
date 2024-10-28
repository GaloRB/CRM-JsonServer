const url = 'http://localhost:4000/clientes';

// agregar cliente
export const nuevoCliente = async cliente => {
   
    try {
     await fetch(url, {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
            'Content-Type': 'application/json'
        }
     })
     window.location.href = 'index.html';
   } catch (error) {
    console.log(error);
   }

}   

// obtener clientes
export const obtenerCliente = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error)
    }
} 

// eliminar cliente
export const eliminarCliente = async id =>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
         });
        }
    catch(error){
        console.log(error);
    }
}

//obtener cliente por id
export const obtenerClienteId = async id =>{
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// editar registro
export const editarCliente = async cliente =>{
    console.log(cliente);
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'appliacation/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error)
    }
}