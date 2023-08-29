import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import RecipesView from "@/views/RecipesView.vue";
import RecipeView from "@/views/RecipeView.vue";
import middleware from "./middleware";

export default [
  {
    path: "/",
    name: "login",
    component: LoginView,
    beforeEnter: middleware.guest,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    beforeEnter: middleware.guest,
  },
  {
    path: "/logout",
    name: "logout",
    beforeEnter: middleware.user,
  },
  {
    path: "/recipes",
    name: "recipes",
    component: RecipesView,
    beforeEnter: middleware.user,
  },
  {
    path: "/recipes/:id",
    name: "recipe",
    component: RecipeView,
    beforeEnter: middleware.user,
  },
];
