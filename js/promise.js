const promise = document.querySelector(".Comienzo");
let cantidad ='<span class="Dato">${cantidad}</span>';
let name = '<span class="Dato">${registro.name.first}</span>';
let lastName = '<span class="Dato">${registro.name.last}</span>';
let pais = '<span class="Dato">${registro.nat}</span>';
let img = '<span class="Dato">${registro.picture.medium}</span>';
let = promiseHtml = `
<pre>
<code>
//Simular Consulta 1

    <span class="Var">let</span> darDeBaja = <span class="Var">new</span><span class="Promise">Promise</span>((<span class="Dato">resolve</span>, <span class="Dato">reject</span>) <span class="Var">=></span> {
        <span class="Comentario">// Para simular una consulta
        // con timeout y error </span>
        setTimeout(() <span class="Var">=></span> {}
            <span class="Var">let</span> baja = true;
            <span class="Var">if</span> (<span class="Dato">baja</span>) {
                <span class="Dato">resolve</span>("Se ha dado de baja");
            }else{
                <span class="Dato">reject</span>("No se ha podido dar de baja");
            }
        },2500);
    });
    console.log (<span class="Dato">darDeBaja</span>);

//Console

    > Promise {< pending >}

<span class="Comentario">// en el caso anterior como vemos el estado es "pendiente"
// eso quiere decir que venimos planteando bien pero no estamos listos todavía
// pasemos al siguiente paso</span>

//Simular consulta 2

    <span class="Dato">darDeBaja</span>.<span class="Var">then</span>(<span class="Dato">resultado_consulta</span> <span class="Var">=></span> {
        console.log(<span class="Dato">resultado_consulta</span>);
})

//Console

    > Promise {< pending >}
    > Se ha dado de baja

//Ejemplo real

    <span class="Var">const</span> traerUsers = <span class="Dato">cantidad</span> <span class="Var">=></span> <span class="Var">new</span> <span class="Promise">Promise</span>((<span class="Dato">resolve</span>, <span class="Dato">reject</span>) <span class="Var">=></span> {
        <span class="Comentario">// Vamos por partes
        // Primero la url de la api</span>

        <span class="Var">const</span> url = <span class="Dato">'https://randomuser.me/api/?results=${cantidad}&nat=us'</span>;
        
        <span class="Comentario">// Segundo el llamado a AJAX</span>
        
        <span class="Var">const</span> xhr = <span class="Var">new</span> XMLHttpRequest();
        
        <span class="Comentario">// Tercero, abrimos la conexión
        // El "true" es si es síncrono</span>
        
        <span class="Dato">xhr</span>.<span class="Var">open</span>('GET', <span class="Dato">url</span>,true);
        
        <span class="Comentario">// Cuarto, estamos ya trayendo los registros
        // El 200 es el código que todo salió bien
        // El "results" viene del JSON de la API.
        // esta es la parte más compleja.</span>
        
        <span class="Dato">xhr</span>.<span class="Var">onload</span> = () <span class="Var">=></span> {
            <span class="Var">if</span>(xhr.<span class="Var">status</span> === 200) {
                <span class="Dato">resolve</span>(JSON.<span class="Var">parse</span>(<span class="Dato">xhr</span>.<span class="Var">responseText</span>).<span class="Var">results</span>);
            }<span class="Var">else</span>{
                <span class="Dato">reject</span>(Error(<span class="Dato">xhr</span>.<span class="Var">statusText</span>));
            };
        };

    <span class="Comentario">// Quinto opcional - On Error</span>
    
    <span class="Dato">xhr</span>.<span class="Var">onerror</span> = (<span class="Dato">error</span>) <span class="Var">=></span> <span class="Dato">reject</span>(<span class="Dato">error</span>);
    
    <span class="Comentario">// Quinto o sexto, parte final, enviarlo</span>
    
    <span class="Dato">xhr</span>.<span class="Var">send</span>();
    });

    <span class="Comentario">// Y armamos todo para sacarlo por la consola</span>
    
    <span class="Dato">traerUsers</span>(5).<span class="Var">then</span>(
        <span class="Dato">usuarios</span> <span class="Var">=></span> console.log(<span class="Dato">usuarios</span>),
        <span class="Dato">error</span> <span class="Var">=></span> console.<span class="Var">error</span>(
            <span class="Var">new</span> Error("Se produjo el error" + <span class="Dato">error</span>),

        )
    );

//Console

    > Array(5)
    > 0: {gender: "female", name: {…}, location: {…}, email: "elsie.arnold@example.com", login: 
    > 1: {gender: "female", name: {…}, location: {…}, email: "ethel.weaver@example.com", login: 
    > 2: {gender: "male", name: {…}, location: {…}, email: "wyatt.herrera@example.com", login: 
    > 3: {gender: "female", name: {…}, location: {…}, email: "jessie.harris@example.com", login: 
    > 4: {gender: "male", name: {…}, location: {…}, email: "daniel.torres@example.com", login: 
    length: 5

    <span class="Comentario">// Ahora veamos cómo se puede recorrer el array para que nos muestre 
    //cada registro cambio la traerUser por imprimirUsers y le asigno la salida a una función 
    //generarHTML en lugar de tirarlos a la consola</span>
    
    <span class="Dato">traerUsers</span>(5).<span class="Var">then</span>(
        <span class="Dato">registros</span> <span class="Var">=></span> <span class="Dato">generarHTML</span>(<span class="Dato">registros</span>),
        <span class="Dato">error</span> <span class="Var">=></span> console.<span class="Var">error</span>(
            <span class="Var">new</span> Error("Se produjo el error" + <span class="Dato">error</span>),
        )
    );

 // Ahora defino para generar un HTML
    
    <span class="Var">function</span> generarHTML(<span class="Dato">registros</span>) {
        <span class="Var">let</span> html_generado = "";    
        <span class="Dato">registros</span>.<span class="Var">forEach</span>(<span class="Dato">registro</span> <span class="Var">=></span> {
            console.log(<span class="Dato">registro</span>);
            <span class="Dato">html_generado</span> += '
                < li>
                    Nombre: ${name} ${lastName}
                    País: ${pais}
                    Imagen:
                        < img src="${img}" />
                < /li>
                ';
    <span class="Comentario">// Acordarse de la lógica "dónde lo ubico, qué ubico"</span>
            
            <span class="Var">const</span> contenedorAPI = document.<span class="Var">querySelector</span>('#app_api');
            <span class="Dato">contenedorAPI</span>.<span class="Var">innerHTML</span> = <span class="Dato">html_generado</span>; 
        })
    };

//Resultado

    span class="Dato">< !DOCTYPE html ></span>
    <span class="Dato">< html ></span>
        <span class="Dato">< head ></span>
            <span class="Dato">< meta</span> charset="utf-8"<span class="Dato">></span>
            <span class="Dato">< title></span>Users<span class="Dato">< /title ></span>
        <span class="Dato">< /head ></span>
        <span class="Dato">< body ></span>
            <span class="Dato">< div</span> id ="app_api" <span class="Dato">></span><span class="Dato"></div></span>
            <span class="Dato">< script</span> src="app.js"<span class="Dato">></span><span class="Dato"></script></span>
        <span class="Dato">< /body ></span>
    <span class="Dato">< /html ></span>
</pre>
</code>
`;
promise.innerHTML = promiseHtml;
