import React from "react";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

function Form (){
    const options = ["CEDULA", "TARJETA", "PASAPORTE"]
    return (
        <form action="">
            <Select options={options} title="Tipo de Identificación" />
            <Input type="number" placeholder="Número de identificación" title="Identificación" />
            <Input type="text" placeholder="Nombre" title="Nombre" />
            <Input type="text" placeholder="Apellido" title="Apellido" />
            <Input type="number" placeholder="Telefono" title="Telefono" />
            <Input type="email" placeholder="Correo" title="Correo" />
            <Input type="text" placeholder="LinkedIn" title="LinkedIn" />
            <Input type="text" placeholder="Github" title="Github" />
            <Button type="submit" value="Guardar" />
        </form>
    )
}

export default Form