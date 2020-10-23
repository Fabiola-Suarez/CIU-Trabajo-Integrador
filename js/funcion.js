
const funcionContenedor = document.querySelector(".Comienzo");
let funcion = `


// Funcion Base
<pre>
    <code>
    <span class="Comentario">// Primero se define</span>
    <span class="Var">function</span> hola() {
        console.log(<span>"Acá la función hola"</span>);
    };
    <span class="Comentario">// Luego se llama a la función</span>
    <span class="Dato">hola</span>();

// Consola Base

    > Acá la función hola


// Funcion en Variable

    <span class="Var">let</span> alumno = <span class="Var">function</span>(<span class="Dato">apellido</span>) {
    console.log(<span>"Alumno apellido ___"</span>, apellido);
    }
    <span class="Dato">alumno</span>(<span>"Alfonso"</span>);

// Consola funcion en variable

    > Alumno apellido ___ Alfonso
 

// Funcion con return


    <span class="Var">function</span> sumar(<span class="Dato">a</span>, <span class="Dato">b</span>) {
        <span class="Var">return</span> <span class="Dato">a</span> + <span class="Dato">b</span>;
    }
    
    console.log(<span class="Dato">sumar</span>(<span>2</span>, <span>5</span>));

function sumar(a, b) {
    return a + b;
}

console.log(sumar(2,5));

// Consola funcion con return

     7
    </code>
</pre>
`;
funcionContenedor.innerHTML = funcion;