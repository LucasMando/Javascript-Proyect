let respuesta = ""
pedirRes()

function validar(){
    if (respuesta === "Qui-Gon Jinn"){
        alert("RESPUESTA CORRECTA")
    }
    else {
        switch (respuesta) {
            case `Conde Dooku`:
                {
                    alert("RESPUESTA INCORRECTA")
                    pedirRes()
                    break;
                }
            case `Anakin Skywalker`:
                {
                    alert("RESPUESTA INCORRECTA")
                    pedirRes()
                    break;
                }         
            case `Yoda`:
                {
                    alert("RESPUESTA INCORRECTA")
                    pedirRes()
                    break;
                }   
            default:
                {
                    alert("RESPUESTA INVÁLIDA")
                    pedirRes()
                    break;
                }
        }
    }
};

function pedirRes(){
    respuesta = prompt(`Quien fue el maestro de Obi-Wan Kenobi?:
        Qui-Gon Jinn
        Conde Dooku
        Anakin Skywalker
        Yoda`)
    validar()
};