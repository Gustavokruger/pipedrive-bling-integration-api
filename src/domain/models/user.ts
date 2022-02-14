 /**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         id: d5fE_asz
 *         email: dev@linlApi.com.br
 *         password: 050891
 */
export type UserModel = {
    id: string;
    email: string;
    password: string;
    roles: UserRoleModel[];
}

export type AddUserParams = Omit<UserModel, 'id'>

export type UserRoleModel = [
    {
        role: string
    }
]
