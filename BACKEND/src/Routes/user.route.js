// import {Router} from "express";
// import { register } from "../Controllers/user.controller.js";
// const router = Router();
// router.route(`/register`).post(register);
// export default router;

import { Router } from "express";
import { register } from "../Controllers/user.controller.js"; 
import { login } from "../Controllers/user.controller.login.js"; 
import { saveNote, getNotes } from "../Controllers/save.notes.js";
const router = Router();
router.route("/login").post(login);

router.route("/register").post(register);

router.route("/notes").post(saveNote).get(getNotes);

export default router;