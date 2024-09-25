/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: objectId
 *           description: Identificador único del usuario.
 *         name:
 *           type: string
 *           description: Nombre del usuario.
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario.
 *         password:
 *           type: string
 *           description: Contraseña cifrada del usuario.
 *         groups:
 *           type: array
 *           items:
 *             type: string
 *           description: Array de referencias a los grupos a los que pertenece el usuario.
 *         notificationPreferences:
 *           type: object
 *           description: Preferencias de notificación del usuario.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del usuario.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización del usuario.
 *       example:
 *         id: 60d0fe4f5311236168a109ca
 *         name: Juan Perez
 *         email: juan.perez@example.com
 *         password: password123
 *         groups: ["60d0fe4f5311236168a109cb", "60d0fe4f5311236168a109cc"]
 *         notificationPreferences: {}
 *         createdAt: 2023-08-27T14:48:00.000Z
 *         updatedAt: 2023-08-27T14:48:00.000Z
 *
 *     Group:
 *       type: object
 *       required:
 *         - name
 *         - createdBy
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador único del grupo.
 *         name:
 *           type: string
 *           description: Nombre del grupo.
 *         members:
 *           type: array
 *           items:
 *             type: string
 *           description: Array de referencias a los usuarios que pertenecen al grupo.
 *         expenses:
 *           type: array
 *           items:
 *             type: string
 *           description: Array de referencias a los gastos registrados en el grupo.
 *         createdBy:
 *           type: string
 *           description: Referencia al usuario que creó el grupo.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del grupo.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización del grupo.
 *       example:
 *         id: 60d0fe4f5311236168a109cb
 *         name: Roomies 2023
 *         members: ["60d0fe4f5311236168a109ca", "60d0fe4f5311236168a109cc"]
 *         expenses: ["60d0fe4f5311236168a109cd"]
 *         createdBy: 60d0fe4f5311236168a109ca
 *         createdAt: 2023-08-27T14:48:00.000Z
 *         updatedAt: 2023-08-27T14:48:00.000Z
 *
 *     Expense:
 *       type: object
 *       required:
 *         - groupId
 *         - description
 *         - amount
 *         - paidBy
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador único del gasto.
 *         groupId:
 *           type: string
 *           description: Referencia al grupo al que pertenece el gasto.
 *         description:
 *           type: string
 *           description: Descripción del gasto.
 *         amount:
 *           type: number
 *           description: Monto total del gasto.
 *         paidBy:
 *           type: string
 *           description: Referencia al usuario que realizó el pago.
 *         splitBetween:
 *           type: array
 *           items:
 *             type: string
 *           description: Array de referencias a los usuarios que deben contribuir al gasto.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del gasto.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización del gasto.
 *       example:
 *         id: 60d0fe4f5311236168a109cd
 *         groupId: 60d0fe4f5311236168a109cb
 *         description: Supermercado
 *         amount: 100.50
 *         paidBy: 60d0fe4f5311236168a109ca
 *         splitBetween: ["60d0fe4f5311236168a109ca", "60d0fe4f5311236168a109cc"]
 *         createdAt: 2023-08-27T14:48:00.000Z
 *         updatedAt: 2023-08-27T14:48:00.000Z
 *
 *     Payment:
 *       type: object
 *       required:
 *         - expenseId
 *         - payer
 *         - amount
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador único del pago.
 *         expenseId:
 *           type: string
 *           description: Referencia al gasto relacionado con el pago.
 *         payer:
 *           type: string
 *           description: Referencia al usuario que realiza el pago.
 *         amount:
 *           type: number
 *           description: Monto del pago.
 *         status:
 *           type: boolean
 *           description: Estado del pago (pendiente o completado).
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del pago.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización del pago.
 *       example:
 *         id: 60d0fe4f5311236168a109ce
 *         expenseId: 60d0fe4f5311236168a109cd
 *         payer: 60d0fe4f5311236168a109ca
 *         amount: 50.25
 *         status: false
 *         createdAt: 2023-08-27T14:48:00.000Z
 *         updatedAt: 2023-08-27T14:48:00.000Z
 *
 *     Notification:
 *       type: object
 *       required:
 *         - userId
 *         - message
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador único de la notificación.
 *         userId:
 *           type: string
 *           description: Referencia al usuario destinatario de la notificación.
 *         message:
 *           type: string
 *           description: "Contenido de la notificación."
 *         type:
 *           type: string
 *           description: "Tipo de notificación (por ejemplo: recordatorio de pago, nuevo gasto)."
 *         read:
 *           type: boolean
 *           description: Estado de la notificación (leída o no leída).
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la notificación.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización de la notificación.
 *       example:
 *         id: 60d0fe4f5311236168a109cf
 *         userId: 60d0fe4f5311236168a109ca
 *         message: Recordatorio de pago de renta
 *         type: recordatorio
 *         read: false
 *         createdAt: 2023-08-27T14:48:00.000Z
 *         updatedAt: 2023-08-27T14:48:00.000Z
 *
 *     Session:
 *       type: object
 *       required:
 *         - userId
 *         - token
 *         - expiresAt
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador único de la sesión.
 *         userId:
 *           type: string
 *           description: Referencia al usuario asociado con la sesión.
 *         token:
 *           type: string
 *           description: Token JWT para la sesión.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la sesión.
 *         expiresAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de expiración de la sesión.
 *         status:
 *           type: boolean
 *           description: Estado de la sesión (activa o cerrada).
 *       example:
 *         id: 60d0fe4f5311236168a109d0
 *         userId: 60d0fe4f5311236168a109ca
 *         token: abcdefghijklmnopqrstuvwxyz
 *         createdAt: 2023-08-27T14:48:00.000Z
 *         expiresAt: 2023-08-28T14:48:00.000Z
 *         status: true
 *
 *     UserGroup:
 *       type: object
 *       required:
 *         - userId
 *         - groupId
 *       properties:
 *         userId:
 *           type: string
 *           description: Referencia al usuario que pertenece al grupo.
 *         groupId:
 *           type: string
 *           description: Referencia al grupo.
 *         joinedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de ingreso al grupo.
 *         role:
 *           type: string
 *           description: "Rol del usuario en el grupo (por ejemplo: admin, member)."
 *       example:
 *         userId: 60d0fe4f5311236168a109ca
 *         groupId: 60d0fe4f5311236168a109cb
 *         joinedAt: 2023-08-27T14:48:00.000Z
 *         role: admin
 *
 *     ExpenseUser:
 *       type: object
 *       required:
 *         - expenseId
 *         - userId
 *         - amountOwed
 *       properties:
 *         expenseId:
 *           type: string
 *           description: Referencia al gasto relacionado.
 *         userId:
 *           type: string
 *           description: Referencia al usuario que debe contribuir al gasto.
 *         amountOwed:
 *           type: number
 *           description: Monto que debe el usuario.
 *         paid:
 *           type: boolean
 *           description: Estado del pago (si el usuario ha pagado o no).
 *       example:
 *         expenseId: 60d0fe4f5311236168a109cd
 *         userId: 60d0fe4f5311236168a109ca
 *         amountOwed: 50.25
 *         paid: false
 */
