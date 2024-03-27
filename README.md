# Instrucciones para ejecutar y probar el API
Requisitos previos:
- Tener Node.js instalado en tu ordenador.
- Tener una cuenta en GitHub.
- Tener instalado un cliente de Git, como GitKraken o la CLI de Git.

# Pasos para ejecutar el API localmente:
1. Clonar el repositorio: git clone https://github.com/sgcriollogal/backend-test.git
2. Instalar las dependencias: npm install
3. Iniciar el servidor: npm start

# Probar el API:
Puedes utilizar una herramienta como Postman para probar las diferentes operaciones del API.

Ejemplo de cómo obtener todos los usuarios:

curl http://localhost:3000/users
Ejemplo de cómo crear un nuevo usuario:

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name": "KamayTech",
    "email": "kamayuser@kamay.com",
    "age": 30,
    "password" : "cambiaelpassword"
  }' \
  http://localhost:3000/users

# RestAPI Live:
https://agile-teal-coyote.cyclic.app/
