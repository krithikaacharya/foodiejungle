const jwt = require("jsonwebtoken");
const SECRETE_KEY = "FOOD";
const fetchAdmin = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Access denied! No token provided" });
  }
  try {
    const data = jwt.verify(token, SECRETE_KEY);
    console.log("user id:", data);
    console.log(token, "token");
    req.admin = data;
    next();
  } catch (err) {
    res.status(403).send({ message: "Invalid Token!" });
  }
};
module.exports = fetchAdmin;
