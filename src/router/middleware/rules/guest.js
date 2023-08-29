export default (to, from, next) => {
  if (localStorage.getItem("token")) {
    next({ name: "recipes" });
  } else {
    next();
  }
};
