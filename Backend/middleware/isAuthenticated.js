import session from "express-session";

export const isAuthenticated = async (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};
