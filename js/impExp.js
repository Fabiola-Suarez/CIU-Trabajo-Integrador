const impExp = document.querySelector(".Comienzo");
let anio ='<span class="Dato">${anio}</span>';
let circunstancia ='<span class="Dato">${circunstancia}</span>';
let marca ='<span class="Dato">${this.marca}</span>';
let pais ='<span class="Dato">${this.pais}</span>';
let impExpHtml= `
<pre>
<code>
//Exportar

    <span class="Var">export</span> <span class="Var">const</span> materia = "Construcción de Interfases de Usuario";

    <span class="Comentario">// También hay una exportación por default
    // que no requiere mantener el nombre</span>
    <span class="Var">const</span> universidad = "Universidad Nacional de Hurlingham";
    <span class="Var">export</span> <span class="Var">default</span> <span class="Dato">universidad</span>;

    <span class="Comentario">// Claro que puedo exportar un objeto</span>
    <span class="Var">export</span> <span class="Var">const</span> diaClase = {
        <span class="Dato">dia</span>: "Jueves",
        <span class="Dato">hora</span>: "18:00"
    };

    <span class="Comentario">// Y una función entera</span>
    <span class="Var">export</span> <span class="Var">const</span> recordar = (<span class="Dato">anio</span>, <span class="Dato">circunstancia</span>) <span class="Var">=></span> {
        <span class="Var">return</span> 'El año ${anio} será recordado por ${circunstancia}'</span>;
    };

    <span class="Comentario">// Y por supuesto una clase también!</span>
    <span class="Var">export</span> <span class="Var">class</span> Auto { <span class="Var">constructor</span> (<span class="Dato">marca</span>, <span class="Dato">pais</span>) {
        <span class="Var">this</span>.<span class="Dato">marca</span> = <span class="Dato">marca</span>;
        <span class="Var">this</span>.<span class="Dato">pais</span> = <span class="Dato">pais</span>
    }
    };

    <span class="Comentario">// Y por supuesto la clase con método </span>
    <span class="Var">export</span> <span class="Var">class</span> Moto { <span class="Var">constructor</span> (<span class="Dato">marca</span>, <span class="Dato">pais</span>) {
        <span class="Var">this</span>.<span class="Dato">marca</span> = <span class="Dato">marca</span>;
        <span class="Var">this</span>.<span class="Dato">pais</span>= <span class="Dato">pais</span>
    }
    <span class="Var">describir</span>() {
        <span class="Var">return</span> 'La moto ${marca} es originaria de ${pais}';
    }
    };

//Importar

    <span class="Comentario">// Primero realizamos los import que deseemos</span>
    <span class="Var">import</span> <span class="Dato">{materia}</span> <span class="Var">from</span> './importar.js';
    <span class="Var">import</span> <span class="Dato">miFacu</span> <span class="Var">from</span>'./importar.js;
    <span class="Var">import</span> <span class="Dato">{diaClase}</span> <span class="Var">from</span> './importar.js
    <span class="Var">import</span> <span class="Dato">{recordar}</span> <span class="Var">from</span> './importar.js;
    <span class="Var">import</span> <span class="Dato">{Auto}</span> <span class="Var">from</span>'./importar.js;
    <span class="Var">import</span> <span class="Dato">{Moto}</span> <span class="Var">from</span> './importar.js;

    <span class="Comentario">// Acá imprimo la variable que traje con el mismo nombre</span>
    console.log(<span class="Dato">materia</span>);

    <span class="Comentario">// Y acá importé el default, por eso puedo poner el nombre que quiera</span>
    console.log(<span class="Dato">miFacu</span>);
    
    <span class="Comentario">// Imprimo el objeto importado</span>
    console.log(<span class="Dato">diaClase</span>);

    <span class="Comentario">// Uso una función importada</span>
    <span class="Var">const</span> anioActual = <span class="Var">recordar</span>("2020", "pandemia");
    console.log(<span class="Dato">anioActual</span>);

    <span class="Comentario">// Y una clase también</span>
    <span class="Var">const</span> auto1 = <span class="Var">new</span> Auto("Ferrari", "Italia");
    console.log(<span class="Dato">auto1</span>);
    
    <span class="Comentario">// Y por supuesto una clase con método</span>
    <span class="Var">const</span> moto1 = <span class="Var">new</span> Moto("Ducati", "Italia");
    <span class="Var">const</span> salida = <span class="Dato">moto1</span>.<span class="Var">describir</span>();
    console.log(<span class="Dato">salida</span>);

//Console
    
    > Construcción de Interfases de Usuario
    > Universidad Nacional de Hurlingham
    > {dia: "Jueves", hora: "18:00"}
    > El año 2020 será recordado por pandemia
    > Auto {marca: "Ferrari", pais: "Italia"}
    > La moto Ducati es originaria de Italia
</pre>
</code>
`;
impExp.innerHTML = impExpHtml;