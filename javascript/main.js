document.getElementById("recetaForm").addEventListener("submit", async function nombre(e) {
    e.preventDefault();

    const name = document.getElementById("nombre").value;
    const ingredient = document.getElementById("ingredientes").value;
    const preparation = document.getElementById("preparacion").value;
    const time = document.getElementById("tiempo").value;
    const porcions = document.getElementById("porciones").value;
    const type = document.getElementById("tipo").value;
    const dificult = document.getElementById("dificultad").value;

    const data = {
        Nombre: name,
        Ingredientes: ingredient,
        Preparacion: preparation,
        Porciones: porcions,
        Tiempo: time,
        Tipo: type,
        Dificultad: dificult
    }

    console.log(data)

    // try{
    //     const response = await fetch(localStorage.document.getElementById(".nombre"))
    //     method = "POST"
    //     headers: {
    //         "Content-Type" , "application/json" 
    //     }
    //     body: JSON.stringify(data);
    
    //     const result = await response();
    //       alert("Se ha guardado exitosamente", result);
    //     }catch(error){
    //       alert("Error al guardar la receta", error);
    //     }
});






