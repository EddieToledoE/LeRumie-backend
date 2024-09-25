# LeRumie Backend

## Descripción

**LeRumie App** es una aplicación diseñada para facilitar la gestión de gastos compartidos entre compañeros de vivienda (roomies). La aplicación permite a los usuarios crear grupos dentro de su hogar, asignar gastos comunes, registrar pagos realizados, y enviar recordatorios para los gastos pendientes. LeRumie ofrece una solución práctica y transparente para asegurar que todos los miembros de la casa estén al tanto de sus responsabilidades financieras.

## Funcionalidades

- **Gestión de Grupos:** Crea y gestiona grupos para cada hogar, invitando a los compañeros de vivienda a unirse.
- **Registro de Gastos:** Registra gastos compartidos como alimentos, suministros, alquiler, servicios públicos, etc., y asigna los gastos a los miembros del grupo.
- **Seguimiento de Pagos:** Visualiza quién ha pagado y quién debe dinero por un gasto específico.
- **Recordatorios Automáticos:** Recibe recordatorios automáticos para los pagos pendientes como la renta y los servicios.
- **Cálculo de Saldos:** Calcula automáticamente los saldos netos de cada miembro del grupo para saber cuánto se debe o cuánto te deben.
- **Notificaciones en Tiempo Real:** Recibe notificaciones instantáneas sobre nuevos gastos o recordatorios de pagos.
- **Panel de Control y Resumen Financiero:** Visualiza un resumen mensual de los gastos e ingresos del hogar.

## Tecnologías Utilizadas

- **Backend:**

  - Node.js: Entorno de ejecución para JavaScript en el servidor.
  - Express.js: Framework web utilizado para crear la API REST.
  - MongoDB: Base de datos NoSQL utilizada para almacenar información de usuarios, grupos, gastos, y pagos.
  - WebSockets: Para manejar las notificaciones en tiempo real.

- **Control de Versiones:**
  - Git & GitHub: Para el control de versiones y la colaboración en el desarrollo del proyecto.
  - Husky: Para gestionar hooks de Git, asegurando la calidad del código antes de cada commit.
  - ESLint: Utilizado para mantener un estilo de código consistente según las reglas de Google.

## Documentación

Para más detalles sobre la estructura de la base de datos, consulta el archivo [`DATABASE.md`](./DATABASE.md).
