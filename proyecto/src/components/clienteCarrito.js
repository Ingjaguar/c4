import React, { useState } from "react";
import "../styles/styleCarrito.css"
import ListaProductos from "./clienteListaProductos";
import Inicio from "./inicioCliente";

function Carrito(){
    
    //Funciones onClick para los botones
    function irAInicio() {
        setEstadoCarrito(estadoCarrito = <Inicio/>)
    }
    function IrAProductos() {
        setEstadoCarrito(estadoCarrito = <ListaProductos/>)
    }
    
    let vistaCarrito =  <div>
                            <h3>Pagina Carrito (clienteCarrito.js)</h3>
                            <div className="fondoBarraCarrito">
                                <button onClick={irAInicio} className="btnCarrito"> Inicio </button>
                                <button onClick={IrAProductos} className="btnCarrito"> Lista de Productos </button>
                            </div>
                            
                        </div>

    // Creacion de Estados para poder visualizar los componentes(useState)
    let [estadoCarrito,setEstadoCarrito] = useState(vistaCarrito)

    return(
        <div>
            {/* Invocamos los Estados */}
            {estadoCarrito}
        </div>
    )
}
export default Carrito