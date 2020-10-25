const operArray = document.querySelector(".Comienzo")
let arrayHtml =  `
<pre>
<code>
    <span class="Comentario">// Definimos dos arreglos</span>
    heroes = ["Leia", "Han",Luke"];
    villanos = ["Jabba", "Darth Maul", "Lord Vader"];

//Forma tradicional de concatenar los arrays

    <span class="Comentario">// Forma tradicional de concatenarlos</span>
    <span class="Var">let</span> combinado = heroes.concat(villanos);
    console.log(<span class="Dato">combinado</span>); 
    <span class="Comentario">// Forma nueva con Spread Operator </span>
    <span class="Var">let</span> combinado_nuevo = [...heroes, ...villanos];
    console.log(<span class="Dato">combinado_nuevo</span>); 

//Console

    > Array(6)
    0: "Leia"
    1: "Han"
    2: "Luke"
    3: "Jabba"
    4: "Darth Maul"
    5: "Lord Vader"
    length: 6
    > __proto__: Array(0)
    > Array(6)
    0: "Leia"
    1: "Han"
    2: "Luke"
    3: "Jabba"
    4: "Darth Maul"
    5: "Lord Vader"
    length: 6
    > __proto__: Array(0)

//Mas de Spread Operator

    <span class="var">let</span> dupli_heroes = [...<span class="Dato">heroes</span>];
    console.log(<span class="Dato">dupli_heroes</span>)

//Console

    > Array(3)
    0: "Leia"
    1: "Han"
    2: "Luke"
    length: 3
    > __proto__: Array(0)

//Metodo Reverse

    <span class="Var">let</span> [editado] = <span class="Dato">heroes</span>.<span class="Var">reverse</span>();
    console.log(<span class="Dato">editado</span>);
    console.log(<span class="Dato">heroes</span>);
    <span class="Comentario">// Para que no pase esto
    // Aqui no da vuelta el array pero si me devuelve el ultimo</span> 
    <span class="Var">let</span> [editado_dos] = [...<span class="Dato">heroes</span>].<span class="Var">reverse</span>();
    console.log(<span class="Dato">editado_dos</span>);
    console.log(<span class="Dato">heroes</span>);

//Console 

    > Luke
    > Array(3)
        0: "Luke"
        1: "Han"
        2: "Leia"
        length: 3
        > __proto__: Array(0)
    >
    > Leia
    > Array(3)
        0: "Luke"
        1: "Han"
        2: "Leia"
        length: 3
        > __proto__: Array(0)

//Operaciones con Spread Operator

    <span class="Var">let</span> suma =  (<span class="Dato">primero</span>, <span class="Dato">segundo</span>, <span class="Dato">tercero</span>) <span class="Var">=></span> {
        console.log(<span class="Dato">primero</span> + <span class="Dato">segundo</span> + <span class="Dato">tercero</span>);
    };
    numeros = [4,5,6];
    <span class="Dato">suma</span>(...<span class="Dato">numeros</span>);

//Console

    >15

//Metodos con arrays

    <span class="Var">let</span> personalidades = [
        {nombre:"Mozart", area:"Música", nacio: 1756, pais:"Salzburgo"},
        {nombre:"Einstein", area:"Física", nacio: 1879, pais:"Alemania},
        {nombre: "Tesla", area: "Electricidad", nacio: 1856, pais: "Imperio Austro Húngaro"},
        {nombre: "Ada Lovelace", area:"Matemática", nacio:1815, pais:"Inglaterra"},
        {nombre: "Lola Mora", area:"Escultura", nacio:1866, pais:"Argentina"},
    ];

//Filter

    <span class="Comentario">// Con filter itera sobre todos los elementos
    // Vamos a filtrar los que el año de nacimiento
    // sea mayor a 1850</span>
    <span class="Var">const</span> mayores = <span class="Dato">personalidades</span>.<span class="Var">filter</span>(<span class="Dato">personalidad</span> <span class="Var">=></span> {
        <span class="Var">return</span> <span class="Dato">personalidad</span>.<span class="Var">nacio</span> > 1850;
    });
    console.log(<span class="Dato">mayores</span>);

//Console

    > Array(3)
    0:{
        nombre: "Einstein", 
        area: "Física", 
        nacio: 1879, 
        pais: "Alemania"
    }
    1:{
        nombre: "Tesla", 
        area: "Electricidad", 
        nacio: 1856, 
        pais: "Imperio Austro Húngaro"
    }
    2:{
        nombre: "Lola Mora", 
        area: "Escultura", 
        nacio: 1866, 
        pais: "Argentina"
    }
    length: 3
    > __proto__: Array(0)

//Find

    <span class="Comentario">// Extraigo todos los datos de Tesla</span>
        
    <span class="Car">const</span> tesla = <span class="Dato">personalidades</span>.<span class="Var">find</span>(<span class="Dato">personalidad</span> <span class="Var">=></span> {
        <span class="Var">return</span> <span class="Dato">personalidad</span>.<span class="Var">nombre</span>==="Tesla";
    });
    <span class="Comentario">// Pido solo el area</span>
    console.log("Nikola tesla se dedicó al área de " + <span class="Dato">tesla</span>.<span class="Var">area</span>);

//Console

    > Nikola tesla se dedicó al área de Electricidad

//Reduce

    <span class="Var">let</span> total_anios = <span class="Dato">personalidades</span>.<span class="Var">reduce</span>((<span class="Dato">anios_total</span>, <span class="Dato">personalidad</span>) <span class="Var">=></span> {
        <span class="Var">return</span> <span class="Dato">anios_total</span> + <span class="Dato">personalidad</span>.<span class="Var">nacio</span>;
    }, 0);
    console.log ("Si sumamos los años de nacimiento de todxs nos da " + <span class="Dato">total_anios</span> );
    console.log("El año promedio de nacimiento es " + (<span class="Dato">total_anios</span>/<span class="Dato">personalidades</span>.<span class="Var">length</span>));
    
//Console

    > Si sumamos los años de nacimiento de todxs nos da 9172
    > El año promedio de nacimiento es 1834.4
</pre>
</code>
`;
operArray.innerHTML = arrayHtml;