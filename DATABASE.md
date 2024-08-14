# Diagrama de la Base de Datos para LeRumie App

La base de datos estará diseñada para manejar la gestión de usuarios, grupos, gastos, pagos y notificaciones. Aquí te presento un diseño de base de datos utilizando **MongoDB** (NoSQL), que es flexible y permite manejar datos semiestructurados, lo cual es ideal para este tipo de aplicación.

## Colecciones Principales

- **Usuarios (`users`)**
- **Grupos (`groups`)**
- **Gastos (`expenses`)**
- **Pagos (`payments`)**
- **Notificaciones (`notifications`)**

## Esquema de la Base de Datos

### 1. Colección `users`

- **\_id:** Identificador único del usuario (ObjectId).
- **name:** Nombre del usuario (String).
- **email:** Correo electrónico del usuario (String, único).
- **password:** Contraseña cifrada (String).
- **groups:** Array de referencias a los grupos a los que pertenece el usuario (Array de ObjectId).
- **notificationPreferences:** Preferencias de notificación del usuario (Object).
- **createdAt:** Fecha de creación del usuario (Date).
- **updatedAt:** Fecha de última actualización del usuario (Date).

### 2. Colección `groups`

- **\_id:** Identificador único del grupo (ObjectId).
- **name:** Nombre del grupo (String).
- **members:** Array de referencias a los usuarios que pertenecen al grupo (Array de ObjectId).
- **expenses:** Array de referencias a los gastos registrados en el grupo (Array de ObjectId).
- **createdBy:** Referencia al usuario que creó el grupo (ObjectId).
- **createdAt:** Fecha de creación del grupo (Date).
- **updatedAt:** Fecha de última actualización del grupo (Date).

### 3. Colección `expenses`

- **\_id:** Identificador único del gasto (ObjectId).
- **groupId:** Referencia al grupo al que pertenece el gasto (ObjectId).
- **description:** Descripción del gasto (String).
- **amount:** Monto total del gasto (Number).
- **paidBy:** Referencia al usuario que realizó el pago (ObjectId).
- **splitBetween:** Array de referencias a los usuarios que deben contribuir al gasto (Array de ObjectId).
- **createdAt:** Fecha de creación del gasto (Date).
- **updatedAt:** Fecha de última actualización del gasto (Date).

### 4. Colección `payments`

- **\_id:** Identificador único del pago (ObjectId).
- **expenseId:** Referencia al gasto relacionado con el pago (ObjectId).
- **payer:** Referencia al usuario que realiza el pago (ObjectId).
- **amount:** Monto del pago (Number).
- **status:** Estado del pago (String, por ejemplo, "pendiente", "completado").
- **createdAt:** Fecha de creación del pago (Date).
- **updatedAt:** Fecha de última actualización del pago (Date).

### 5. Colección `notifications`

- **\_id:** Identificador único de la notificación (ObjectId).
- **userId:** Referencia al usuario destinatario de la notificación (ObjectId).
- **message:** Contenido de la notificación (String).
- **type:** Tipo de notificación (String, por ejemplo, "recordatorio de pago", "nuevo gasto").
- **read:** Estado de la notificación (Boolean).
- **createdAt:** Fecha de creación de la notificación (Date).
- **updatedAt:** Fecha de última actualización de la notificación (Date).

## Relaciones entre las Colecciones

- **`users` -> `groups`:** Un usuario puede pertenecer a múltiples grupos, y cada grupo tiene varios usuarios como miembros. Esta relación se maneja mediante referencias (ObjectId) en la colección `groups`.

- **`groups` -> `expenses`:** Un grupo tiene múltiples gastos asociados. Cada gasto pertenece a un grupo específico, referenciado en la colección `expenses`.

- **`expenses` -> `payments`:** Un gasto puede tener múltiples pagos asociados, y cada pago está relacionado con un gasto específico.

- **`users` -> `payments`:** Un usuario realiza pagos, que están referenciados en la colección `payments`.

- **`users` -> `notifications`:** Un usuario recibe notificaciones, que están almacenadas en la colección `notifications`.

## Diagrama de Entidad-Relación (ER) Simplificado

```
+------------------+         +------------------+         +------------------+
|     users        |         |     groups       |         |    expenses      |
|------------------|         |------------------|         |------------------|
|  _id (ObjectId)  |<------->|  _id (ObjectId)  |<--------|  _id (ObjectId)  |
|  name (String)   |         |  name (String)   |         |  groupId (ObjId) |
|  email (String)  |         |  members (Array) |         |  description     |
|  password (Str)  |         |  expenses (Array)|         |  amount (Number) |
|  groups (Array)  |         |  createdBy (ObjId)|        |  paidBy (ObjId)  |
+------------------+         +------------------+         +------------------+
                                                                 |
                                                                 |
                                                         +------------------+
                                                         |    payments      |
                                                         |------------------|
                                                         |  _id (ObjectId)  |
                                                         |  expenseId (ObjId)|
                                                         |  payer (ObjId)   |
                                                         |  amount (Number) |
                                                         |  status (String) |
                                                         +------------------+
                                                                  |
                                                                  |
                                                        +------------------+
                                                        |  notifications   |
                                                        |------------------|
                                                        |  _id (ObjectId)  |
                                                        |  userId (ObjId)  |
                                                        |  message (String)|
                                                        |  type (String)   |
                                                        |  read (Boolean)  |
                                                        +------------------+
```
