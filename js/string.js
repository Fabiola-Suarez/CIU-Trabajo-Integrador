const diferentesStrings = document.querySelector(".Comienzo");
const nombre ="${nombre}";
const posicion ="${posicion}";
const numero = 10;
let string = `

<pre>
<code>
    <span class="Var">const</span> nombre = <span>"Maradona"</span>;
    <span class="Var">const</span> posicion = <span>"10"</span>;
    <span class="Comentario">// Primer caso</span>
    console.log (<span class="Dato">nombre</span> + <span>" juega de "</span> + <span class="Dato">posicion</span>);
    
    <span class="Comentario">// Segundo caso</span>
    console.log (<span>"${nombre} juega de ${posicion}"</span>);
    
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