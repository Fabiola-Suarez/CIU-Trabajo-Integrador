// Funcion Tradicional
const arrowFunction = document.querySelector(".Comienzo");
const pintor = '${pintor}';
let eleccion = '${eleccion}';
let eleccion1 = "${eleccion1}";
let eleccion2 = "${eleccion2}";
let arrow = `
<pre>
<code>
    tradicional = <span class="Var">function</span>(<span class="Dato">pintor</span>){
        console.log(<span>'Mi pintor favorito es <span class="Dato">${pintor}</span>'</span>);
    }
    tradicional(<span>"Michelangelo Buonarotti"</span>)

// Console

    > Mi pintor favorito es Michelangelo Buonarotti

    <span class="Comentario">// La función pierde el nombre y va solo el parámetro</span>
    <span class="Comentario">// si es un solo parámetro, puede ir sin paréntesis</span>
    <span class="Comentario">// Aqui  el parametro es "pintor" y el "=>" indica que es una funcion.</span>
    <span class="Var">let</span> obra = <span class="referencia">pintor</span> <span class="var">=></span> {
        <span class="Var">return</span> <span>'Mi pintor favorito es <span class="Dato">${pintor}</span>'</span>;
    }
    <span class="Comentario">// Opcion 1</span>
    <span class="Var">let</span> favorito = <span class="Dato">obra</span>(<span>"Álvaro Castagnet"</span>);
    console.log(<span class="Dato">favorito</span>); 
    <span class="Comentario">// Opcion 2</span>
    console.log(<span class="Dato">obra</span>(<span>"Leonardo da Vinci"</span>));

// Console

    > Mi pintor favorito es Álvaro Castagnet
    > Mi pintor favorito es Leonardo da Vinci

// function en una linea

    <span class="Comentario">// para hacer más simple, se sacan las llaves</span>
    <span class="Var">let</span> ciudad_favorita = <span class="Dato">eleccion</span> <span class="Var">=></span> console.log(<span >'Me encantaría vivir en <span class="Dato">${eleccion}</span>'</span>);
    <span class="Comentario">// Opcion 1</span>
    <span class="Dato">ciudad_favorita</span>(<span>"Roma"</span>);
    <span class="Comentario">// Opcion 2</span>
    <span class="Var">let</span> elegida = <span class="referencia">ciudad_favorita</span>(<span class="string">"Florencia"</span>);

// console en linea

    > Me encantaría vivir en Roma
    > Me encantaría vivir en Florencia

// Arrow function con mas de un parametro y sin parametros

    <span class="Comentario">// Con dos o mas parametros</span>
    <span class="Var">let</span> favorita_city = (<span class="Dato">eleccion1</span>, <span class="Dato">eleccion2</span>) <span class="Var">=></span> console.log(
        <span>'Me encantaría vivir en <span class="Dato">${eleccion1}</span> o en <span class="Dato">${eleccion2}</span>'</span>
        );
    
    <span class="Dato">favorita_city</span>(<span>"Montevideo", "Berlín"</span>);
    <span class="Comentario">// Sin parametros</span>
    <span class="Var">let</span> favorita = () <span class="Var">=></span> console.log(<span>'Me encantaria vivir en Mendoza'</span>);
    <span class="Dato">favorita</span>();

// Console extra

    > Me encantaría vivir en Montevideo o en Berlín
    > Me encantaria vivir en Mendoza


</code>
</pre>
`;


arrowFunction.innerHTML = arrow