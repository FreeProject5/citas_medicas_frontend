# App para gestión de citas médicas

Este repositorio contiene el código frontend del proyecto de aplicación web que permite administrar, gestionar y procesar solicitudes de citas médicas online.

- Backend -> [REST API citas médicas](https://citas-medicas-nu.vercel.app/api/v1/)
- Frontend -> [App citas médicas](https://app-citas-medicas.vercel.app/)

## Instalación y configuración 🛠️

- Instalar las depedencias del proyecto
  ```bash
  npm install
  ```
- Ejecutar el proyecto 
    ```bash
    npm start
    ```

## Funcionamiento
1. Crear usuario paciente

    <https://app-citas-medicas.vercel.app/signup>

    ![Sign up](/src/public/images/sign_up.png)

2. Login de usuarios:
    - Pacientes

    <https://app-citas-medicas.vercel.app/login>

    - Doctores

    <https://app-citas-medicas.vercel.app/login-medico>

    ![Login](/src/public/images/login_deploy.png)

3. Vista principal de pacientes

    <https://app-citas-medicas.vercel.app/paciente>

    ![Login](/src/public/images/view_patient.png)

4. Registrar un cita médica

    <https://app-citas-medicas.vercel.app/paciente/agendar-cita>

    ![Login](/src/public/images/registrar_cita.png)

5. Vista principal doctores

    https://app-citas-medicas.vercel.app/medico

    ![Login](/src/public/images/view_doctor.png)