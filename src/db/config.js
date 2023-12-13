import mongoose from "mongoose";
const URI =
"mongodb+srv://larmaretti:<9kcb7FpMKNCd++u>@clusterlucasarma.4j2oryz.mongodb.net/ecommerceLA?retryWrites=true&w=majority";
//"mongodb://localhost:27017/ecommerceLA"
mongoose
  .connect(URI)
  .then(() => console.log("conexion establecida en bd"))
  .catch((error) => console.log(error));