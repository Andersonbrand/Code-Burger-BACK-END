import { Router } from "express"
import multer from "multer"
import multerConfig from "./config/multer"

import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
import ProductController from "./app/controllers/ProductController"
import CategoryController from "./app/controllers/CategoryController"
import OrderController from "./app/controllers/OrderController"

import authMiddlewares from "./app/middlewares/auth"

const uploads = multer(multerConfig)

const routes = new Router()

routes.post("/users", UserController.store)

routes.post("/sessions", SessionController.store)

routes.use(authMiddlewares)

routes.post("/products", uploads.single("file"), ProductController.store)
routes.get("/products", ProductController.index)
routes.put("/products/:id", uploads.single("file"), ProductController.update)

routes.post("/categories", uploads.single("file"), CategoryController.store)
routes.get("/categories", CategoryController.index)
routes.get("/categories", CategoryController.index)
routes.put("/categories/:id", uploads.single("file"), CategoryController.update)

routes.post("/orders", OrderController.store)
routes.put("/orders/:id", OrderController.update)
routes.get("/orders", OrderController.index)

export default routes
