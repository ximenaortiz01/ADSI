//Buscador de contenido

//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

        /* luego ocultamos el cuadro de busqueda*/
        if (inputSearch.value === " "){
            box_search.style.display = "none";
       } 
}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display="none";
    inputSearch.value ="";
    box_search.style.display ="none";
}

//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){

    filter = inputSearch.value.toUpperCase();/* convertimos a mayuscula el texto ingresado en el cuadro de busqueda */
    li = box_search.getElementsByTagName("li");/* obtenemos todas las etiquetas en el cuadro de busqueda */

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){ /* controlamos la longitud de las palabras que estan en las etiqutas <Li>  */

        a = li[i].getElementsByTagName("a")[0];
        /* almacenamos en una variable el contenido de cada etiqueta <a> empezando desde la posicion[0] */
        
        textValue = a.textContent || a.innerText;
        /*en la variable (textvalue)  almacenamos el contenido de la etiquta <a>  
        y su contenido (immertext) osea el texto que esta en la etiqueta <li> */

        if(textValue.toUpperCase().indexOf(filter) > -1){
        /* controlamos que el texto me acepte mayusculas para ir indexando-ordenando la busqueda
        el (-1) es un cotrol centinela para evitar ingresar datos errados ya que el (indexof)
        siempre devuelve un valor -1*/

            li[i].style.display = "";/* va mostrando las palabras que coincidan con la busqueda */
            box_search.style.display = "block";

                /* luego ocultamos el cuadro de busqueda*/
                if (inputSearch.value === " "){
                    box_search.style.display = "none";
               }

        }else{
            li[i].style.display = "none";/* oculta las palabras que NO coincidad con la busqueda  */
        }
    }
}