para la insatalacion de bootstrap uso manejador de paquetes nodejs npm 
	npm install bootstrap

en el archivo index.js exprto los estilos de bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';

instalar libreria jquery y popper.js
    npm install jquery popper.js

para usar bootstrap4 en html5 es recomendable
    - crear una carpeta includes e importación
    
    - crear archivo en includes bootstrap.js
      import './jquery'
      import './popper'
      import 'bootstrap'
      import 'bootstrap/dist/css/bootstrap.min.css'

    - crear archivo en includes jquery.js
      // importaciones para el proyecto 
      import * as $ from 'jquery'
      window.jQuery = window.$ = $

    - crear archivo en includes popper.js
      import Popper from 'popper.js'
      window.Popper = Popper

    - en index.js agregar la linea 
      import './includes/bootstrap';