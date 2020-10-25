
// Como definirlas
//////////////////

const comienzo = document.querySelector('.Comienzo');
let variable = ''

variable += `
<pre>
<code>
    <span // Variable</span>
    <span class="Var">var</span> miVariable = "un dato";
     // Constante
    <span class="Var">const</span> miConstante = 10;
    <span class = "Comentario">// let es una variable diferente, que se explicara luego</span>
    <span class="Var">let</span> miVarEspecial = "otro dato";
</code>
</pre>

// Diferencia entre var - let y const



<pre>
<code>
    <span class="Var">var</span> auto ="Ferrari";
    <span class="Var">let</span> moto = "Ducati";
    
    
        if(<span class="Dato">auto</span>) {
        <span class="Var">var</span> auto = "Porsche";
        <span class = "Comentario"> // Vemos por consola el dato de la variable auto adentro del if.</span>
        console.log ('Adentro del if: ', <span class="Dato">auto</span>);
    };
    <span class = "Comentario">// Vemos por consola el dato de la variable auto afuera del if.</span>
    console.log ('Afuera del if:', <span class="Dato">auto</span>);
    
    
    if(<span class="Dato">moto</span>) {
        <span class="Var">let</span> moto = "Yamaha";
        <span class = "Comentario">// Vemos por consola el dato de la variable moto adentro del if.</span>
        console.log ('Adentro del if: ', <span class="Dato">moto</span>);
    };
    <span class = "Comentario">// Vemos por consola el dato de la variable moto afuera del if.</span>
    console.log ('Afuera del if:', <span class="Dato">moto</span>);
</code>
</pre>

// Retorno

<pre>
<code>
    > Adentro del if:  Porsche
    > Afuera del if: Porsche
    > Adentro del if:  Yamaha
    > Afuera del if: Ducati
</code>
</pre>
`;
comienzo.innerHTML = variable;
