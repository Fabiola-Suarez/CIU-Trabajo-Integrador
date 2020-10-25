const metodo = document.querySelector(".Comienzo");
let nombre = '<span class="Dato">${<span class="Var">this</span>.nombre}</span>';
let titulo = '<span class="Dato">${<span class="Var">this</span>.titulo}</span>';
let arma = '<span class="Dato">${<span class="Var">this</span>.arma}</span>';
let metodohtml = `
<pre>
<code>
    <span class="Var">const</span> oviWan = {
        <span class="Dato">nombre</span>: Obi Wan Kenobi",
        <span class="Dato">titulo</span>: "Master Jedi",
        <span class="Dato">armado</span>: true,
        <span class="Dato">arma</span>: "Sable laser",
        <span class="Var">descripcion</span>(){
            console log(
                'El personaje ${nombre} es ${titulo} y esta armado con ${arma});
        };
    }
    <span class="Dato">obiWan</span>.<span class="Var">descripcion</span>();
    //Console

        >El personaje de Obi Wan Kenobi es Master jedi y esta armado con sable laser.
    
    //Otra forma de llamarlo

    <span class="Dato">descripcion</span>: <span class="Var">function</span>(){
        console.log(
            'El personaje ${nombre} es ${titulo} y está armado con ${arma}'
        );
    }
</pre>
</code>
`;
metodo.innerHTML = metodohtml;
   
    