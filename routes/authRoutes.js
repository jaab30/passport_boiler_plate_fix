const router = require("express").Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

// All routes start with: /auth

// Route: /auth/register
router.post("/register", authController.register);

// Route: /auth/register
router.post("/login", authController.login);

// Route: /auth/user
// route to get user information which is passing the middleware "auth". Auth checks if user is Authenticated before getting the information from the user.
// you can use the middleware auth to restrict access to pages to users that are not Authenticated
router.get("/user", auth, authController.user);

// Route: /auth/logout
router.get("/logout", authController.logout);

module.exports = router;