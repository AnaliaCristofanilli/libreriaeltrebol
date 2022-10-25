import React from "react";

export default function ItemListContainer   ({Mensaje,Contenedor}) {
  return (

    <div>
        <h2  className={Contenedor}>{Mensaje}
        </h2>
    </div>
  )
}
