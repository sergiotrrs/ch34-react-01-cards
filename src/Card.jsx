
import "./card.css";

// creación de componente funcional
/*
const myStyle = {
   virtuales: {} ,
   reales: {}
};
*/
const myStyle = {
    virtual: {
        color:"green",
        fontSize: 18,
        fontFamily: "Arial"
    } ,
    real: {
        color:"purple",
        fontSize: 20,
        fontFamily: "Georgia"
    }
 };

function CardApp( prop  ) {

    //console.log( prop );
    console.log( prop.description );
   /*
    Reglas de JSX( JavaScript XML  :
     - Los componentes deben estar dentro de una etiqueta o componente
       contenedor. NO se pueden poner componentes hermanos.
     - No se renderizan los valores undefined o null
     - No se renderizan valores booleanos
     - No se renderiza NaN o Infinity
     - No se renderiza funciones o objetos

   */
    const myCard = (
        <div className="card-container" > 
            <a href= { prop.href } >
                <img src= { prop.src } /> 
                <h1> { prop.title} </h1>
            </a>
            <p style= {{ color:"green", fontFamily:"Century Gothic" }} > { prop.description} </p>
            <p style= { prop.type === "virtual"? myStyle.virtual : myStyle.real } > { prop.description} </p>
        </div> 
    );
    return myCard;
} 

// Exportación por default, es una forma de exportar 
// una única entidad desde un módulo.
export default CardApp;