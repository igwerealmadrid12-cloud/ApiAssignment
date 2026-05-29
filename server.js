

const express = require("express");

const app = express();

app.use(express.json());

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});