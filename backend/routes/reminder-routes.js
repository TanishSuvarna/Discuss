import Express from "express";
import {
  deleteReminder,
  getAllReminders,
  getById,
  updateReminder,
  getAllReminderByUserId,
} from "../controller/reminder-controller.js";
import { addReminder } from "../controller/reminder-controller.js";
import reminder from "../models/reminder.js";
const reminderRouter = Express.Router();

reminderRouter.get("/", getAllReminders);
reminderRouter.post("/add", addReminder);
reminderRouter.put("/update/:id", updateReminder);
reminderRouter.get("/:id", getById);
reminderRouter.delete("/:id", deleteReminder);
reminderRouter.get("/user/:id", getAllReminderByUserId);
export default reminderRouter;
