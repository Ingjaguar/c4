import React, { useState } from "react";
import "../styles/styleListaProductos.css"
import Carrito from "./clienteCarrito";
import Inicio from "./inicioCliente";

function ListaProductos(){
    
    //Funciones onClick para los botones
    function irAInicio(){
        setEstadoProductos(estadoProductos = <Inicio/>) //Modificamos el estado
    }
    function irACarrito() {
        setEstadoProductos(estadoProductos = <Carrito/>)
    }

    let vistaProductos =    <div>
                                <h3> Pagina Lista de Productos (clienteListaProductos.js) </h3>
                                <div className="fondoBarraListaProducto">
                                    <button onClick={irAInicio} className="btnProductos"> Inicio </button>
                                    <button onClick={irACarrito} className="btnProductos"> Carrito de Compras </button>
                                </div>
                                
                            </div>

    // Creacion de Estados para poder visualizar los componentes(useState)
    let [estadoProductos,setEstadoProductos] = useState(vistaProductos)
    
    return(
        <div>
            {/* Invocamos los Estados */}
            {estadoProductos}
        </div>
    )
}
export default ListaProductos