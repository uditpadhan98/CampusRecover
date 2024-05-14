import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  // savePost,
  // profilePosts,
  // getNotificationNumber
} from "../controllers/user.controllers.js";
import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getUsers);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
// router.post("/save", verifyToken, savePost);
router.get("/search/:id", verifyToken, getUser);
// router.get("/profilePosts", verifyToken, profilePosts);
// router.get("/notification", verifyToken, getNotificationNumber);

export default router;