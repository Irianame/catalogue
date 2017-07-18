const sayHello = require( './my-module' );

require( './styles/main.scss' );

sayHello( 'Иван Иванов', document.querySelector( 'h2' ) );