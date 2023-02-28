# Ecommerce construído con React

En este repositorio encontraras mi proyecto final del curso de React que curse en CoderHouse entre los meses enero/febrero/marzo del 2023. El mismo trata de un Ecommerce construído sobre React.Js - "electroJuan".

### Requerimientos

_Para poder correrlo de forma local es necesario instalar las dependencias que figuran en el package.json_

```
npm i
```

## Ejecucion

_Luego de instaladas las dependencias escriba en la consola el siguiente comando:_
```
npm start
```

_Usualmente esto abre automaticamente su navegador predeterminado y se inicializa el proyecto en la ruta del puerto 3000 pero en caso de no ocurrir vaya a su navegador y escriba la url siguiente:_

```
localhost: 3000
```

## ¿De qué sirve aprender si no se puede jugar un poco?

Entre la última clase y la entrega intenté forzarme un poco y entender más en profunidad el poder de los renderizados condicionales y la reutilización de elementos de React.Js por lo que quise intentar algunas cosas extra.

### Validación del form del checkout, campos de texto, número y repetición de Email.

Quise ver si lograba dominar un poco más el tema de las expresiones regulares y si bien el Hook Form brindaba algunas ayudas, la realidad es que no cumplían con los requisitos que implicaban los campos a completar, más bien daban un requerimiento básico. Intenté ir más a fondo.

Para el check de que los 2 emails ingresados sean iguales utilice Javascript puro y duro y lo convine con los requiered de html, más los min lenght, max lengt y un pattern de mail específico.

### Subtotal en ItemDetail.

Me pareció que estaba interesante la idea de mostrarle al usuario a cuanto ascendía el precio de lo que agregaría al carrito antes de llegar a el, a modo de que pueda decidir si es una compra que desea o no. Además de quedar vistoso, me pareció algo que aportaba a la UX del sitio.

### Posibilidad de actualizar la cantidad de items una vez en el carrito.

¿Qué pasa si el usuario cliqueo mal la cantidad desde el ItemDetail y quiere corregirlo pero sin ir hacia atrás?
Fue algo que me pregunté y me pareció que no podía faltar para mejorar de la UX del sitio.

### A celebrar se ha dicho.

Quise forzarme a experimentar un poco con elementos independientes a Toastify para ver si lograba comprender su funcionamiento con solo leer documentación en internet.

Una vez Finalizada la compra se dispara: 

```sh
· Un toast que entrega el ID de la compra. 

· Una explosión de conffeti al mejor estilo carnaval para celebrar 
y agradecer por la compra al usuario.

· Un PopUp que indica los siguientes pasos que el usuario puede tomar 
o que puede esperar luego de realizado su pedido.
```


## Técnologías implementadas

Al tratarse también de un proyecto de fin de curso de desarrollo Web, quise trabajar el proyecto y cada página en bloques de elementos, analizando su compatibilidad y fácil legibilidad 


· [React] (https://reactjs.org/) - JavaScript Framework.

· [Firebase] (https://firebase.google.com/?hl=es) - Server y base de datos.

· [Toastify] (https://fkhadra.github.io/react-toastify/introduction) - Notificaciones

· [SweetAlert2] (https://sweetalert2.github.io/) - Notificaciones y alertas

· [Canvas-Confetti] (https://www.npmjs.com/package/canvas-confetti) - Festejo de fin de compra.

· [Bootstrap] (https://getbootstrap.com/docs/5.2/getting-started/introduction/) - Estilos.

· [Bootswatch] (https://bootswatch.com/) - Estilos.

