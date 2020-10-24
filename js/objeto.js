
const objetoContenedor = document.querySelector("#objectLiteral")
let objHtml = `
<pre>
<code>
    <span>//Definicion de un objeto</span>
    <span class="Var">const</span> deportista = {
        <span class="Dato">nombre</span>: <span>"Valentino"</span>,
        <span class="Dato">deporte</span>: <span>"Motociclismo"</span>
    };
    <span class="Comentario">// Definición de algo que no tiene objeto</span>
    <span class="Var">let</span> nombreDeportista = <span>"Collin Mc Rae"</span>;
    <span class="Var">let</span> nombreDeporte = <span>"rally"</span>;
    <span class="Comentario">// Mirar las diferencias en la consola, 
    // Cómo los muestra diferentes.</span>
    console.log(<span class="Dato">deportista</span>);
    console.log(<span class="Dato">nombreDeportista</span>);
    console.log(<span class="Dato">nombreDeporte</span>);

    //Console object literal

    > Object
        deporte: "Motociclismo"
        nombre: "Valentino"
    > __proto__: Object
    > Collin Mc Rae
    > rally

    //Accediendo a los valores

    <span class="Comentario">// Se puede acceder a los valores colocando nombreDelObjeto.valor</span>
    console.log(<span class="Dato">deportista</span>.<span class="Var">nombre</span>);
    console.log(<span class="Dato">deportista</span>.<span class="Var">deporte</span>);
    <span class="Comentario">// Otra manera de acceder</span> 
    console.log(<span class="Dato">deportista</span>[<span>'nombre'</span>])

    //Console con los valores puestos

    > Valentino
    > Motociclismo
    > Valentino

    //Creamos otro objeto con la misma estructura

    <span class="Var">const</span> deportista_otro = {
        <span class="Dato">nombre</span>: <span>"Cristiano Ronaldo"</span>,
        <span class="Dato">deporte</span>: <span>"Fútbol</span>"
    };
    <span class="Comentario">// Accedemos a los valores</span>
    console.log(<span class="Dato">deportista_otro</span>.<span class="Var">nombre</span>);
    console.log(<span class="Dato">deportista_otro</span>.<span class="Var">deporte</span>);

    //Console del otro objeto

    > Cristiano Ronaldo
    > Futbol
</code>
</pre>
`;
objetoContenedor.innerHTML = objHtml;

const objetoConstructor = document.querySelector("#objectConstructor")
let constructorHtml = `
<pre>
<code>
    <span class="Var">function</span> Guerrero(<span class="Dato">nombre</span>, <span class="Dato">bando</span>, <span class="Dato">locacion</span>){
    <span class="Var">this</span>.nombre = <span class="Dato">nombre</span>;
    <span class="Var">this</span>.bando = <span class="Dato">bando</span>;
    <span class="Var">this</span>.locacion = <span class="Dato">locacion</span>;
    }
    <span class="Var">const</span> protagonista1 = <span class="Var">new</span> <span class="Dato">Guerrero</span>(<span>'Uthred'</span>, <span>'Sajones'</span>, <span>'Bebbanbourg'</span>);
    <span class="Var">const</span> protagonista2 = <span class="Var">new</span> <span class="Dato">Guerrero</span>(<span>'Kanut'</span>, <span >'Vikingo'</span>);
    console.log (<span class="Dato">protagonista1</span>);
    console.log (<span class="Dato">protagonista2</span>);
    <span class="Comentario">// Accediendo a los valores</span>
    console.log(<span class="Dato">protagonista1</span>.<span class="Var">nombre</span>);

    //Console Object Constructor

        > Guerrero
        bando: "Sajones"
        locacion: "Bebbanbourg"
        nombre: "Uthred"
        > __proto__: Object
    > Guerrero
        bando: "Vikingo"
        locacion: undefined
        nombre: "Kanut"
        >__proto__: Object
    > Uthred
</pre>
</code>
`;
objetoConstructor.innerHTML = constructorHtml;

const objetoDesestructuracion = document.querySelector("#objectDestructuring")
let primeraComputadora = '<span class="Dato">${primeraComputadora}</span>';
let deseada = '<span class="Dato">${deseada}</span>';
let desestructuracionHtml =  `
<pre>
<code>
    <span class="Comentario">// Definimos el objeto</span>
    <span class="Var">const</span> computadorasOchentosas = {
        <span class="Dato">sinclair</span>: {
            <span class="Dato">inicial</span>: <span>"zx-81"</span>,
            <span class="Dato">evolucion</span>: <span>"spectrum"</span>,
            <span class="Dato">final</span>: <span>"2068"</span>
        },
        <span class="Dato">otras</span>: [<span>"Commodore 64"</span>, <span>"Atari Amiga"</span>, <span>"Texas TI-99 4A"</span>]
    }
    <span class="Comentario">// Acá vemos cómo se ha definido el objeto</span>
    console.log (<span class="Dato">computadorasOchentosas</span>);
    <span class="Comentario">// Y accedemos</span>
    <span class="Var">let</span> primeraComputadora = computadorasOchentosas.<span class="Dato">sinclair</span>.<span class="Dato">inicial</span>;
    <span class="Var">let</span> deseada = computadorasOchentosas.<span class="referencia">otras</span>[0];
    console.log(<span>'Mi primera computadora fue una ${primeraComputadora} y todos deseábamos
    la ${deseada}'</span>);

    // Console forma clasica

        > Object
        > otras: (3) ["Commodore 64", "Atari Amiga", "Texas TI-99 4A"]
        > sinclair: {inicial: "zx-81", evolucion: "spectrum", final: "2068"}
        > __proto__: Object
    > Mi primera computadora fue una zx-81 y todos deseábamos la Commodore 64

    // Con Destructuring

    <span class="Var">let</span> <span class="Dato">{inicial}</span> = computadorasOchentosas.<span class="Dato">sinclair</span>;
    console.log(<span>'Esto es usando Object Destructuring y traigo ${inicial}'</span>);

    //Console

    > Esto es usando Object Destructuring y traigo zx-81
</pre>
</code>
`;
objetoDesestructuracion.innerHTML = desestructuracionHtml;

const objetoEnhacement = document.querySelector("#literalEnhacement")
let enhacement = `

<pre>
<code>
    //Forma antigua

    <span class="Comentario">// Definimos las variables</span>
    <span class="Var">let</span> director = <span >"Quentin Tarantino"</span>;
    <span class="Var">let</span> genero = <span >"Acción"</span>;
    <span class="Var">let</span> peliculas = [<span>"Kill Bill"</span>, <span class="string">"Death Proof"</span>, <span class="string">"Jackie Brown"</span>];
    <span class="Comentario">// Unimos las variables al objeto</span>
    <span class="Var">const</span> quentin = {
        <span class="Dato">nombre</span>: <span class="Dato">director</span>,
        <span class="Dato">genero</span>: <span class = "Dato>genero</span>,
        <span class="Dato">pelis</span>: <span class= "Dato">peliculas</span>
    };
    console.log(<span class="Dato">quentin</span>);

    // Console

    > Object
        genero: "Acción"
        nombre: "Quentin Tarantino"
        > pelis: (3) ["Kill Bill", "Death Proof", "Jackie Brown"]
        > __proto__: Object
    
    //Ahora con OLE

    <span class="Comentario">// Definimos las variables</span>
    <span class="Var">let</span> director = <span >"Quentin Tarantino"</span>;
    <span class="Var">let</span> genero = <span >"Acción"</span>;
    <span class="Var">let</span> peliculas = [<span>"Kill Bill"</span>, <span >"Death Proof"</span>, <span>"Jackie Brown"</span>];
    <span class="Comentario">// Unimos las variables al objeto con Object Literal Enhacement</span>
    <span class="Var">const</span> quentin = {<span class="Dato">director</span>, <span class="Dato">genero</span>, <span class="Dato">peliculas</span>};
    console.log(<span class="Dato">quentin</span>);

    //Console

    > Object
        director: "Quentin Tarantino"
        genero: "Acción"
        > peliculas: (3) ["Kill Bill", "Death Proof", "Jackie Brown"]
        > __proto__: Object
</pre>
</code>
`;
objetoEnhacement.innerHTML = enhacement;

