import {getUsers,updateUser,addUser,deleteUser} from "../controllers/userController.js";

export default function(router){

// get users

router.get('/users',getUsers)

//post users

router.post('/userspost',addUser)

// //Delete user

router.delete('/usersdelete/:id',deleteUser)

// //Update
 router.put('/usersput/:id',updateUser)
}