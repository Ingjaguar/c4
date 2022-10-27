import React, { useState } from "react";
import "../styles/styleInicio.css"
import Carrito from "./clienteCarrito";
import ListaProductos from "./clienteListaProductos";
import datos from "../datos.json";

function Inicio() {
    
    let vistaInicio =  <div>
                            <h3> Pagina Inicio Cliente (inicioCliente.js) </h3>
                            <div className="fondoBarra">
                                <button onClick={IrAProductos} className="btnInicio"> Lista de Productos </button>
                                <button onClick={IrACarrito} className="btnInicio"> Carrito de Compras </button>
                            </div>
                        </div>

    // Creacion de ESTADOS para poder visualizar los componentes(useState)
    let [estado,setEstado] = useState(vistaInicio)
    let [productos,setProductos] = useState([])

    //Funciones onClick para los botones
    function IrAProductos(){
        // Usamos el "setEstado" para Inicializar el Componente dentro de la funcion
        setEstado(estado = <ListaProductos/>)
        setProductos(productos = datos)
    }
    function IrACarrito(){
        // Reemplazamos el "Estado" con lo que hay en el componente Carrito
        setEstado(estado = <Carrito/>)
        setProductos(productos=[])
    }
    
    return(
        <div>
            {/* Invocamos los Estados */}
            {estado}
            {productos.map((elementos, idx) => {
                return(
                    <div className="productos" key={elementos.id}>
                        <strong> Producto {idx+1} :</strong> {elementos.nombre + " - Precio: " + elementos.precio + " - Stock: " + elementos.stock}
                    </div>
                )
            })}
        </div>
    )    
}
export default Inicio