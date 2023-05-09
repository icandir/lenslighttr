import mongoose from "mongoose";
const conn = () => {
    mongoose
      .connect(process.env.DB_URI, {
        dbName: "lenslighttr",
        useNewUrlParser: false,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to db successfully...");
      })
      .catch((err) => {
        console.log("Failed db connection... ", err);
      });
}
export default conn;