
const express = require("express");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const ConnectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

const userController = require("./src/routes/user.route");

const categoriesController = require("./src/routes/categories.route");
const productController = require("./src/routes/product.route");
const brandController = require("./src/routes/brand.route");

app.use("/users", userController);
app.use("/categories", categoriesController);
app.use("/product", productController);
app.use("/brand", brandController);

app.listen(PORT , async () => {
    try {
        await ConnectDB();

        console.log(`listening on port ${PORT}`);
    }
    catch(error) {
        console.log("error in server connection :", error.message);
    }
})

module.exports = app;