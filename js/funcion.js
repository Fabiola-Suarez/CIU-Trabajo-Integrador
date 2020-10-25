
const funcionContenedor = document.querySelector(".Comienzo");
let funcion = `


// Funcion Base
<pre>
    <code>
    <span class="Comentario">// Primero se define</span>
    <span class="Var">function</span> hola() {
        console.log("Acá la función hola");
    };
    <span class="Comentario">// Luego se llama a la función</span>
    <span class="Dato">hola</span>();

// Consola Base

    > Acá la función hola


// Funcion en Variable

    <span class="Var">let</span> alumno = <span class="Var">function</span>(<span class="Dato">apellido</span>) {
    console.log("Alumno apellido ___", apellido);
    }
    <span class="Dato">alumno</span>("Alfonso");

// Consola funcion en variable

    > Alumno apellido ___ Alfonso
 

// Funcion con return


    <span class="Var">function</span> sumar(<span class="Dato">a</span>, <span class="Dato">b</span>) {
        <span class="Var">return</span> <span class="Dato">a</span> + <span class="Dato">b</span>;
    }
    
    console.log(<span class="Dato">sumar</span>(2, 5));

    <span class = "Var">function</span> sumar(a, b) {
    return a + b;
}

    console.log(sumar(2,5));

// Consola funcion con return

     7
    </code>
</pre>
`;
funcionContenedor.innerHTML = funcion;