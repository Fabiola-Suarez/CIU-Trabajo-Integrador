const poo = document.querySelector(".Comienzo");
let nombre ='<span class="Dato">${this.nombre}</span>';
let posicion = '<span class="Dato">${this.posicion}</span>';
let epoca ='<span class="Dato">${this.epoca}</span>';
let pooHtml = `
<pre>
<code>
// Creamos la clase
    <span class="Var">class</span> Jugador { <span class="Var">constructor</span> (<span class="Dato">nombre</span>, <span class="Dato">posicion</span>) {
            <span class="Var">this</span>.<span class="Dato">nombre</span> = <span class="Dato">nombre</span>;
            <span class="Var">this</span>.<span class="Dato">posicion</span> = <span class="Dato">posicion</span>
        }
    };
    <span class="Var">let</span> jugador1 = <span class="Var">new</span> Jugador("Lionel Messi", "10");
    <span class="Var">let</span> jugador2 = <span class="Var">new</span> Jugador("Cristiano Ronaldo", "7");
    <span class="Var">let</span> jugador3 = <span class="Var">new</span> Jugador("Franco Armani", "Arquero");
    console.log (<span class="Dato">jugador1</span>);
    console.log (<span class="Dato">jugador2</span>);
    console.log (<span class="Dato">jugador3</span>);

//Console

    > Jugador
    nombre: "Lionel Messi"
    posicion: "10"
    > Jugador
    nombre: "Cristiano Ronaldo"
    posicion: "7"
    > Jugador
    nombre: "Franco Armani"
    posicion: "Arquero"
   
 // Ahora vamos a crear otro objeto, pero ya con un método, no solo con atributos.

   <span class="Var">class</span> JugadorLeyenda { <span class="Var">constructor</span> (<span class="Dato">nombre</span>, <span class="Dato">posicion</span>) {
    <span class="Var">this</span>.<span class="Dato">nombre</span> = <span class="Dato">nombre</span>;
    <span class="Var">this</span>.<span class="Dato">posicion</span> = <span class="Dato">posicion</span>;
    }
    <span class="Var">mostrar</span>() {
        <span class="Var">return</span> 'La leyenda ${nombre} jugaba de ${posicion}';
    }
    };
    <span class="Var">let</span> jugadorLeyenda1 = <span class="Var">new</span>JugadorLeyenda<("Diego Maradona", "El 10 eterno");
    console.log(<span class="Dato">jugadorLeyenda1</span>);
    console.log (<span class="Dato">jugadorLeyenda1</span>.<span class="Var">mostrar</span>());

//Console

    > JugadorLeyenda
    nombre: "Diego Maradona"
    posicion: "El 10 eterno"
    > __proto__:
        constructor: class JugadorLeyenda
        mostrar: ƒ mostrar()
        __proto__: Object
    > La leyenda Diego Maradona jugaba de El 10 eterno

//Creo la herencia

    <span class="Var">class</span> JugadorFracasado <span class="Var">extends</span> JugadorLeyenda<span class="Dato"> {</span>
        <span class="Var">constructor</span>(<span class="Dato">nombre</span>, <span class="Dato">posicion</span>, <span class="Dato">epoca</span>) {
            super(<span class="Dato">nombre</span>, <span class="Dato">posicion</span>);
            <span class="Var">this</span>.<span class="Dato">epoca</span> = <span class="Dato">epoca</span>;
        };
        <span class="Var">saludar</span>(){
            <span class="Var">return</span>'Hola ${nombre}, fracasado!. Te vi una vez ${epoca}.';
        }
    }
    <span class="Comentario">//Creo una instancia de esta nueva clase</span>
    <span class="Var">let</span> fracasado = <span class="Var">new</span>JugadorFracasado('Javier Castrillo','El último 11', 'en los 80');
    <span class="Comentario">// Ya heredo los métodos</span>
    console.log(<span class="Dato">fracasado</span>.<span class="Var">mostrar</span>());
    <span class="Comentario">// Y uso el nuevo</span>
    console.log(<span class="Dato">fracasado</span>.<span class="Var">saludar</span>());

//Console

    La leyenda Javier Castrillo jugaba de El último 11
    > Hola Javier Castrillo, fracasado!. Te vi una vez en los 80.
</pre>
</code>
`;
poo.innerHTML = pooHtml;
