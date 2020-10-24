const prototype = document.querySelector(".Comienzo")
let nombre = '${<span class="Var">this</span>.<span class="Dato">nombre</span>}';
let ocupacion = '${<span class="Var">this</span>.<span class="Dato">ocupacion</span>}';
let prototypeHTML = `
<pre>
<code>
    <span class="Comentario">// Definimos un objeto mediante Object Constructor</span>
    <span class="Var">function</span> Personaje(<span class="Dato">nombre</span>, <span class="Dato">ocupacion</span>){
        <span class="Var">this</span>.nombre = <span class="Dato">nombre</span>;
        <span class="Var">this</span>.ocupacion = <span class="Dato">ocupacion</span>;
    }
    <span class="Comentario">// Y armamos un Prototype para este objeto
    // anteponiendo su nombre y "prototype"</span>

    <span class="Dato">Personaje</span>.<span class="Var">prototype</span>.<span class="Dato">describirPersonaje</span> = <span class="Var">function</span>(){
        <span class="Var">return</span> <span>'El personaje es ${nombre} y su ocupación es ${ocupacion}'</span>;
    
    //Instanciamos los objetos

    <span class="Var">const</span> personaje1 = <span class="Var">new</span> <span class="Dato">Personaje</span>(<span >"Dr. Emmet Brown"</span>, <span >"Científico"</span>);
    <span class="Var">const</span> personaje2 = <span class="Var">new</span> <span class="Dato">Personaje</span>(<span >"Marthy Mc Fly"</span>, <span >"Viajero en el tiempo"</span>);
    <span class="Comentario">// Acá accedemos a los datos a través del Prototype que creamos</span>
    <span class= "Var">let</span> doc = <span class="Dato">personaje1</span>.<span class="Var">describirPersonaje</span>();
    console.log(<span class="Dato">doc</span>);
    <span class="Var">let</span> marthy = <span class="Dato">personaje2</span>.<span class="Var">describirPersonaje</span>();
    console.log(<span class="Dato">marthy</span>);

    //Console

    > El personaje es Dr. Emmet Brown y su ocupación es Científico
    > El personaje es Marthy Mc Fly y su ocupación es Viajero en el tiempo
</pre>
</code>
`;
prototype.innerHTML = prototypeHTML;