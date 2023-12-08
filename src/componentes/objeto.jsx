import React from "react";
import '../stylesheets/objeto.css'
function Objeto(props){
    return(
        <div className="objeto">
            <p className="date-object">
                Fecha: {props.date}
            </p>
            <p className="states-object">
                Estados: {props.states}

            </p>
            <p className="deaths">
                Muertes: {props.deaths}
            </p>
            <p className="hospitalaized">
                Hospitalizados: {props.hospitalaized}
            </p>
        </div>
    )
}

export default Objeto