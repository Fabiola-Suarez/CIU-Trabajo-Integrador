const generar = document.querySelector(".Comienzo");
let deporte ='${deporte}';
let nombre = '<span class="Dato">${<span class="Var">this</span>.nombre}</span>';
let titulo = '<span class="Dato">${<span class="Var">this</span>.titulo}</span>';
let arma = '<span class="Dato">${<span class="Var">this</span>.arma}</span>';
let generarhtml= `
<pre>
<code>
//Forma Tradicional

    <span class="Var">let</span> deportes_olimpicos = ["Remo","Lucha Libre","Tenis de mesa"];

    <span class="Comentario">// Vemos el array</span>
    console.log(<span class="Dato">deportes_olimpicos</span>);
   
    <span class="Var">const</span> contenedor = document.<span class="Var">querySelector</span>("#app");
    <span class="Var">let</span> html = '';

    <span class="Comentario">// Hay varias maneras, (while - for)
    // Vamos a usar por ejemplo el forEach
    // Itera sobre los elementos del array y la variable "deporte" va tomando el valor
    // de esos elementos.</span>
    <span class="Dato">deportes_olimpicos</span>.<span class="Var">forEach</span>(<span class="Dato">deporte</span> <span class="Var">=></span> {
        <span class="Dato">html</span> += '< li> ${deporte} < /li>';
    });
    <span class="Comentario">// Lo "renderizamos" con innerHTML</span>
    <span class="Dato">contenedor</span>.<span class="Var">innerHTML</span> = <span class="Dato">html</span>;

//Usando map

    <span class="Dato">deportes_olimpicos</span>.<span class="Var">map</span>(<span class="Dato">deporte</span> <span class="Var">=></span> {
    <span class="Dato">html</span> += '< li> ${deporte} < /li>';

//Generamos con object keys con el ejemplo obi wan

    <span class="Var">const</span> obiWan = {
    <span class="Dato">nombre</span>: "Obi Wan Kenobi",
    <span class="Dato">titulo</span>: "Master Jedi",
    <span class="Dato">armado</span>:  true,
    <span class="Dato">arma</span>: "Sable laser",
    <span class="Var">descripcion</span>(){
        console.log('El personaje ${nombre} es ${titulo} y está armado con ${arma}');
    }
}

<span class="Comentario">// Pido solo las claves</span>
console.log(<span>Object</span>.<span class="Var">keys</span>(<span class="Dato">obiWan</span>))

//Console

    > Array(5)
    0: "nombre"
    1: "titulo"
    2: "armado"
    3: "arma"
    4: "descripcion"
    length: 5
    __proto__: Array(0)
</code>
</pre>
`;
generar.innerHTML = generarhtml;