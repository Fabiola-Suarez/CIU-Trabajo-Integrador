const diferentesStrings = document.querySelector(".Comienzo");
const nombre ="${nombre}";
const posicion ="${posicion}";
const numero = 10;
let string = `

<pre>
<code>
    <span class="Var">const</span> nombre = "Maradona";
    <span class="Var">const</span> posicion = "10">;
    <span class="Comentario">// Primer caso</span>
    console.log (<span class="Dato">nombre</span> + " juega de " + <span class="Dato">posicion</span>);
    
    <span class="Comentario">// Segundo caso</span>
    console.log ("${nombre} juega de ${posicion}");
    
    <span class="Comentario">// Tercer caso</span>
    console.log ('<span class="Dato">${nombre}</span> juega de <span class="Dato">${posicion}</span>');

    // Consola Strings

    > Maradona juega de 10
    > ${nombre} juega de ${posicion}
    > Maradona juega de 10
</code>
</pre>
`;

diferentesStrings.innerHTML = string;