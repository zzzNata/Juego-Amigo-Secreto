<h1>Juego del amigo secreto</h1>
<h2>Version inicial</h2>
Estado del programa: Desarrollando
<p>El juego se basa en la adición de varios amigos (mediante el boton añadir), los cuales luegos se sortearan y se eligirá uno.<br/>
La versión inicial del juego cuenta con una lógica básica. De acuerdo a los parametros establecidos en el Challenge el juego contiene:<br/>
+ Arrays:    nombreAmigos= [ ];  <br/>  
1. Funciones:<br/> 
                 - agregarAmigo (); = realiza la función la de agregar el nombre a la lista mediante el boton añadir, en caso de querer añadir <br/>
                                          sin escribir un nombre, muestra una alerta solicitando la adición de un nombre válido<br/>
                - limpiarCaja(); =   limpia la caja donde se agrega el nombre [esta función esta integrada a agregarAmigo()<br/>
                - sortearAmigo(); =  encargada de sortear el amigo secreto mediante el botón el sortear, verificando previamente si en la lista existen
                                          nombres, si no hay nombres, mediante un mensaje solicita que se agreguen. En caso de de que haya nombres en la lista
                                          realiza un sorteo y mediante un mensaje muestra el nombre seleccionado.<br/>
                - reiniciarJuego();= Función encargada de reinciar el juego del amigo secreto. La función que realiza es, eliminar la lista de amigos que se
                                          muestran en pantalla, elimina el mensaje del amigo ganador y reinicia a cero el array<br/>
                - reincioArrays(); = función integrada en la función reinciar juego, lo que hace es dejar vacio el array para que al iniciar un juego nuevo
                                         no se tengan en cuenta los nombres anteriormente añadidos.<br/>
                                         

                                         
Se prentende sumar algunas nuevas funciones antes de la entrega del proyecto.

Version actualización 1
  + Se realizó la modificación del color del texto del nombre ganador.

Versión: Actualización 2
  + Se agregó un nuevo botón para reiniciar el juego, no siendo necesario actualizar la página para volver a jugar.
        -el boton realiza las siguientes funciones: + elimina los amigos añadidos
                                                    + elimina el mensaje de amigo ganador
                                                    + reinicia el arrays, es decir pone el array a 0

