
const funcionContenedor = document.querySelector(".Comienzo");
let funcion = ''

funcion += `
// funcion Base
<pre>
    <code>
    <span class="Comentario">// Primero se define</span>
    <span class="Var">function</span> hola() {
        console.log(<span>"Acá la función hola"</span>);
    };
    <span class="Comentario">// Luego se llama a la función</span>
    <span class="Dato">hola</span>();
    </code>
</pre>

// Consola Base
<pre>
    <code>
    > Acá la función hola
    </code>
</pre>

// Funcion en Variable

<pre>
    <code>
    <span class="Var">let</span> alumno = <span class="Var">function</span>(<span class="Dato">apellido</span>) {
    console.log(<span>"Alumno apellido ___"</span>, apellido);
    }
    <span class="Dato">alumno</span>(<span>"Gonzales"</span>);
    </code>
</pre>
// Consola funcion en variable
<pre>
    <code>
    > Alumno apellido ___ Gonzales
    </code>
</pre>

// Funcion con return

<pre>
    <code>
    <span class="Var">function</span> sumar(<span class="Dato">a</span>, <span class="Dato">b</span>) {
        <span class="Var">return</span> <span class="Dato">a</span> + <span class="Dato">b</span>;
    }
    
    console.log(<span class="Dato">sumar</span>(<span>2</span>, <span>5</span>));
    </code>
</pre>
<pre>
function sumar(a, b) {
    return a + b;
}

console.log(sumar(2,5));
</pre>

// Consola funcion con return
<pre>
    <code>
     7
    </code>
</pre>
`;
funcionContenedor.innerHTML = funcion;