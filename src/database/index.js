import Sequelize from "sequelize"
import mongoose from "mongoose"

import User from "../app/models/User"
import Product from "../app/models/Product"
import Category from "../app/models/Category"

const models = [User, Product, Category]

import configDatabase from "../config/database"
class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  //'postgresql://postgres:23-6c2FbAc-1-4*56Cb2Efe-DbBfGfea@viaduct.proxy.rlwy.net:57078/railway'

  init() {
    this.connection = new Sequelize(configDatabase)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  //mongodb://mongo:GB-6fbhE-dDEA26b21dfgaD4-GD-2dd1@monorail.proxy.rlwy.net:23711

  mongo() {
    this.mongoConnection = mongoose.connect("mongodb://localhost:27017/codeburger",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}
export default new Database()
