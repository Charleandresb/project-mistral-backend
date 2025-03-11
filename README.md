# Servidor

Se utilizó el servicio de MongoDB Atlas para crear una
base de datos llamada "mistral" alojada en la web.

Conexión establecida al servidor de MongoDB a través de
mongoose con el método connect en el archivo de entrada
de la aplicación app.js.

## Esquemas y modelos

### 1. Esquema y modelo de usuarios:

- Cuatro campos obligatorios de tipo sting, uno para el nombre,
  otro para los apellidos, uno para el correo electrónico y
  uno más para la contraseña, los cuatro son requeridos para el
  registro. Existen ocho campos mas encargados de la información
  de contacto y dirección del usuario. El campo email emplea la
  escritura de una expresión regular para su validación. El modelo
  de este esquema fue nombrado y exportado como "user".

### 2. Esquema y modelo de productos:

- Este esquema sirve para agregar los diferentes tipos de
  productos a la base de datos enla colección cardproduct.
  Cinco campos requeridos de tipo string, los cuales registran
  la foto, el nombre, la descripción, el código, el precio y
  el tipo de producto. Por último el campo createdAt es de
  tipo Date valor por defecto Date.now que indica la fecha
  y hora en que la carta del producto fue creada. El modelo
  de este esquema fue nombrado y exportado como "cardProduct".

## Controladores de ruta:

### 1. Usuarios:

- Tres funciones para los controladores de ruta para los
  usuarios, cada una con un método especifico del modelo User.
  Estos controladores pueden crear un usuario en la base
  de datos, obtener la información del usuario creado e iniciar
  sesión con los datos del usuario registrado. Pronto el
  ususario podrá agregar una foto de perfil y completar su
  información de contacto y dirección.

### 2. Cartas de productos:

- Tres funciones para los controladores de ruta para las
  cartas de productos, cada una con un método especifico del
  modelo Card. Un controlador encargado de crear y registrar
  un producto en la coleccion de la base de datos. Los otros
  dos controladores se encargan de proporcionar la lista
  completa de un tipo de producto y/o un producto en especifico
  por medio de su código único, todo esto a través de rutas
  dinamicas de request query.

## Manejo de errores:

Cada una de estas funciones de los controladores de ruta
cuenta con su manejo de errores personalizado. Las
funciones encargadas de usuarios o cartas de productos que
ejecutan una acción de acuerdo a ellas, cuentan con una
instancia de un error correspondiente. Cada función tiene
su manejo de error personalizado, el cual si ocurre se deriva
al bloque catch donde next lo espera para ser delegado al
middleware de errores que gestiona cada uno de ellos.

## Autorización:

- La función que crea un usuario recibe el nombre, los apellidos,
  el correo y la contraseña del cliente. Al registrarse
  exitosamente se crea el usuario y queda guardado en la base de
  datos, su contraseña se guarda encriptada gracias al uso de bcrypt.

- El esquema del modelo "user" contiene una función que
  cuando el usuario inicia sesión, se comprueba que su email
  esté registrado en la base de datos, si lo está, entonces
  bcrypt compara la contraseña ingresada en la solicitud con
  la contraseña del usuario registrado, si estas coinciden, se
  habrá iniciado sesión.

- Cuando el usuario inicia sesión exitosamente se activa
  una función que genera un token, el cual es enviado al
  navegador para que lo guarde en su almacenamiento local.
  Este token es administrado por la aplicación que luego
  lo envía de vuelta al servidor para su verificación.

- Se implementó un middleware de autorización el cual recibe
  el token enviado en el encabezado de la solicitud para
  verificar su validez. Si el token es válido se guarda en la
  variable "playload" la cual se asigna a "req.user" que
  contiene el id del usuario que inició sesión, este se asigna
  a la función del controlador de rutas de usuario encargada
  de proporcionar la información del usuario. Este middleware
  se ubica en app.js justo después de los middlewares de
  registro e inicio de sesión y antes del que permite traer
  la información del usuario. Esto asegura que únicamente los
  usuarios autorizados puedan iniciarsesión
  y tener acceso a su perfil.

## CORS:

Esta tecnología evita que nuestro servidor reciba
solicitudes de dominios que no están permitidos.
Se especifican en un array los dominios que podrán enviar
solicitudes al servidor. En el middleware correspondiente
se gestionan las solicitudes simples y preliminares, donde
los métodos y encabezados permitidos dan paso a una
respuesta exitosa.

## Celebrate:

Una librería de validación que permite que las solicitudes
a las rutas tengan validez antes de pasar a los controladores,
si la solicitud no pasa la validación el controlador no se
activa en absoluto. Esto evita la sobrecarga de recursos.

## Registros:

Se ha implementado la tecnología de winston y express winston
para gestionar un registro para cada solicitud que entra al
servidor, así como también para cada error que pueda ocurrir.
Esto nos da la opción de llevar una guía para la solución
de posibles problemas con el funcionamiento de la api.

## Herramientas y tecnologías:

Express, Node, Mongodb Atlas, Nodemon, Bcrypt, Celebrate, Cors,
Dotenv, Winston, Jsonwebtoken, Eslint.

# Instalación

1. Clonar el repositorio de Github:

```bash
   git clone https://github.com/Charleandresb/project-mistral-backend.git
```

2. Instalar paquetes:

```bash
   npm install
```
