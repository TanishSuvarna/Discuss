import Express from "express";
import {
  getAllUsers,
  login,
  signup,
  getUserData,
  deleteUser,
  updateUserReminder,
  getQuestionsByid,
  getUserByid,
} from "../controller/user-controller";

const router = Express.Router();

router.get("/", getAllUsers);
router.get("/userData/:leetcodeId", getUserData);
router.get("/:id", getUserByid);
router.post("/signup", signup);
router.post("/login", login);
router.delete("/:id", deleteUser);
router.put("/reminderUpdate/:id", updateUserReminder);
router.get("/questions/:id", getQuestionsByid);
export default router;
