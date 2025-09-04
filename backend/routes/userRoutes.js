import express from "express";
import {
  createUser,
  getAllUsers,
  loginUser,
  logoutUser,
  getcurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);
router.route("/auth").post(loginUser);
router.route("/logout").post(logoutUser);
router
  .route("/profile")
  .get(authenticate, getcurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

//Admin Routes
router
  .route("/:id")
  .delete(authenticate, authorizeAdmin, deleteUserById)
  .get(authenticate, authorizeAdmin, getUserById)
  .put(authenticate,authorizeAdmin,updateUserById);

export default router;
