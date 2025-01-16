# API de Usuarios

## Descripción

Este es un proyecto de ejemplo para una API RESTful construida con Express.js, PostgreSQL y Swagger para la documentación de la API. La API permite registrar usuarios y validar la entrada de datos utilizando express-validator.

---

![Diagrama-Secuencia](https://github.com/user-attachments/assets/a09a5bc9-7ac5-4c3f-93b4-7d040973c890)

---

## Características principales:
- **Registro de usuarios:** Permite registrar usuarios con un nombre, correo electrónico y edad.
- **Validación de datos:** Utiliza express-validator para garantizar que los datos enviados sean correctos (por ejemplo, que el correo electrónico sea válido y la edad sea un número positivo).
- **Base de datos PostgreSQL:** Los usuarios se almacenan en una base de datos PostgreSQL, con soporte para operaciones asincrónicas a través de `pg-pool`.
- **Documentación interactiva con Swagger:** La documentación de la API se genera automáticamente mediante Swagger, permitiendo a los desarrolladores interactuar con los endpoints de la API de forma visual y directa a través de una interfaz web.
- **Docker:** El proyecto también se puede ejecutar en contenedores Docker para facilitar la implementación y gestión tanto de la aplicación como de la base de datos.

---

![Diagrama-C4](https://github.com/user-attachments/assets/ac514ccc-69ac-4b0b-859e-498d6ee9b22d)

--- 

## Requisitos

- **Node.js** (versión 14 o superior)
- **npm** (gestor de paquetes de Node.js)
- **PostgreSQL** (o puedes usar un contenedor Docker para la base de datos)

---

## Pasos para la Instalación

### 1. Clonar el Repositorio

Primero, clona el repositorio del proyecto en tu máquina local:

```bash
git clone https://github.com/tu_usuario/users-api.git
cd users-api
```

### 4. Construir y Levantar los Contenedores
Para construir las imagenes y levantar los contenedores, ejecuta:

```bash
docker-compose up --build
```

El servidor estará disponible en http://localhost:3000/.

## Uso de la API
### Documentación de la API (Swagger)
Accede a la documentación interactiva de la API usando Swagger en: http://localhost:3000/api-docs
