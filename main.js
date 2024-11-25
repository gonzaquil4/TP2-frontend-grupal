/*  Instrucciones del TPO2
    - Respondan a las preguntas por orden
    - Se valorará un código limpio, bien comentado, separado por comentarios en bloques, etc 
*/

//array de productos//
let productosFruteria = [
    {id: 1, nombre: "arandano", precio: 3000, img:"img/arandanos.jpg"},
    {id: 2, nombre: "anana", precio: 3300, img:"img/anana.jpg"},
    {id: 3, nombre: "banana", precio: 1600, img:"img/banana.jpg"},
    {id: 4, nombre: "frambuesa", precio: 4200, img:"img/frambuesa.jpg"},
    {id: 5, nombre: "frutilla", precio: 3800, img:"img/frutilla.jpg"},
    {id: 6, nombre: "kiwi", precio: 1000, img:"img/kiwi.jpg"},
    {id: 7, nombre: "mandarina", precio: 1500, img:"img/mandarina.jpg"},
    {id: 8, nombre: "manzana", precio: 2600,img:"img/manzana.jpg"},
    {id: 9, nombre: "naranja", precio: 1300,img:"img/naranja.jpg"},
    {id: 10, nombre: "pera", precio: 2600, img:"img/pera.jpg"},
    {id: 11, nombre: "pomelo-amarillo", precio: 1800, img:"img/pomelo-amarillo.jpg"},
    {id: 12, nombre:"pomelo-rojo", precio: 2000, img:"img/pomelo-rojo.jpg"},
    {id: 13, nombre:"sandia", precio: 1100, img:"img/sandia.jpg"},
];



    //variables//
    let cuadriculaProductos = document.querySelector(".productogrid");
    let barraBusqueda = document.querySelector(".search.bar");
    let botonesCarrito = document.querySelectorAll(".add-to-cart");
    let objetosCarrito = document.getElementById("cart-items");
    let precioCarrito = document.getElementById("total-prize");
    let contadorCarrito = document.getElementById("cart-count");
    let nombreGrupo = docment.querySelector ("nombre-Grupo");

    let carrito = [];

//mostrar productos//
function mostrarProductos(array){
    let cartaProducto = ""; //vamos a llenar nuestro string vacio//

    for(let i = 0; i < Array.length; i++){
        cartaProducto += "";
        <div class="product-card">
            <img src="${array(i).img}"></img> alt="{array(i).nombre}"
            <h3>${array(i).nombre}</h3>
            <p>$$ {array(i).precio}</p>
            <button class="add-to-cart">Agregar a carrito</button>
        </div>
        }
        cuadriculaProductos.innerHTML =cartaProducto;

    }

/*  PREGUNTA 1_____________
    En este TPO2 tendremos que crear un frontend de una tienda de frutas* 

    *pueden modificarlo o cambiar la temática o hacer lo que quieran libremente
    
    Para ello disponemos ya del HTML y el CSS prearmado. Entonces desde JavaScript deberemos:

    1. Almacenar nuestros datos en un objeto e imprimir el nombre del grupo en la consola y en el nav:
        <div class="nombreGrupo"></div>

    2. Crear un array de objetos a partir de las frutas de la carpeta img (o de los elementos que prefieran, temática libre)

    3. Imprimir esos objetos por pantalla, deberemos agregar esa funcion a la funcion inicializadora

    4. OPCIONAL 1 / Realizar una función filtro que mediante un evento como keyup recoja los datos del input y filtre los productos que contengan esos valores

    5. OPCIONAL 2 / Realizar la funcionalidad de carrito

    6. OPCIONAL 3 / Hacer que esa memoria sea persistente guardando los elementos del carrito en localStorage


    Como un mapa mental, escriban con sus palabras el razonamiento con el tienen pensado elaborar cada pregunta
    Qué tienen pensado hacer en cada uno de estos pasos, qué métodos van a elegir y por qué.


    ______________________

    Escriban acá su razonamiento y explicación de todo tu proceso
*/
//RESPUESTA: Paso 1: Almacenar datos en un objeto e imprimir el nombre del grupo
//Crear un objeto en JavaScript que contenga los datos, e Imprimir el nombre del grupo en la consola y en el elemento <div class="nombreGrupo"></div> dentro del nav.
//Paso 2: Crear un array de objetos
//Crear un array que contenga objetos, donde cada objeto represente una fruta, con sus atributos. Incluir imágenes.
//Paso 3: Imprimir objetos en pantalla
//Crear una función que recorra el array de objetos y genere el contenido HTML para mostrarlos. Llamar esta función desde la función inicializadora.
//Paso 4: Filtro con keyup
//Implementar un keyup en un input para filtrar las frutas por nombre. Mostrar solo los objetos que coincidan con el texto ingresado.
//Paso 5: Funcionalidad de carrito
//Implementar un botón "Agregar al carrito" en cada objeto. Crear un array para almacenar los productos seleccionados. Mostrar los productos del carrito en un área designada.
//Paso 6: Persistencia con localStorage
//Guardar el contenido del carrito para que persista entre recargas de página. Al cargar la página, recuperar los datos de y mostrarlos en el carrito.




/*  PREGUNTA 2_____________
    Elaboren un array de objetos con las 10 frutas de la carpeta imágenes (o el producto que hayamos colocado ahí)
    Deben tener como claves: id, nombre, precio y la ruta de la imagen
*/
//1.	id: Un identificador único para cada fruta.
//2.	nombre: El nombre de la fruta.
//3.	precio: El precio de cada fruta.
//4.	Ruta imagen: La ruta de la imagen de la fruta en la carpeta.



/*  PREGUNTA 3_____________
    Agreguen a la funcion inicializadora init() una función para imprimir nombre del grupo en el nav y en la consola.
*/
//1.grupo: Contiene el nombre del grupo y otros detalles como los integrantes.
//2.imprimirNombreGrupo():
//Utiliza console.log para imprimir el nombre del grupo en la consola.
//Actualiza el contenido de ese elemento con el nombre del grupo.
//3.Init():
//Llama a la función imprimirNombreGrupo para realizar las tareas al inicio.
//Es el punto de entrada para inicializar otras funcionalidades de la aplicación.



/*  PREGUNTA 4_____________
    Creen una función para imprimir en pantalla los productos del array de objetos y agreguenla a la funcion inicializadora
    El html que deben agregar debe tener el siguiente esquema (para que se apliquen los estilos)

        <div class="product-card">
            <img src="" alt="">
            <h3></h3>
            <p>$</p>
            <button class="add-to-cart">Agregar a carrito</button>
        </div>
*/




/*  OPCIONAL / PREGUNTA 5_____________
    Escriban una función filtro, por ejemplo, asociada a un evento keyup, que recoja los valores del campo input y ejecute con cada evento un filtro que actualice los productos
*/





/*  OPCIONAL / PREGUNTAS 6 y 7_____________

    1. Elaboren la funcionalidad de carrito. Agreguen funcionalidad al boton de cada producto para introducir ese elemento en un contenedor de carrito e imprimirlo en el listado con id "cart-items"" del HTML

    El HTML que deben agregar debe seguir el siguiente esquema (para que se apliquen los estilos)

    <li class="item-block">
        <p class="item-name">nombreproducto - $precioproducto</p>
        <button class="delete-button">Eliminar</button>
    </li>

    2. Se valorará que se almacenen los productos del carrito en un localStorage
*/



// Funcion inicializadora

function init() {
    // Acá irían las funciones de arranque de la aplicación. No se olviden de invocar esta app    

    console.log(productosFruteria.lengh);
    console.table(productosFruteria);
    console.log(productosFruteria);

    mostrarProductos(productosFruteria);
}
init();
