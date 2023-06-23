import express from "express";
const app = express();
import authRoutes from "./Routes/auth.js";
import userRoutes from "./Routes/users.js";
import postRoutes from "./Routes/posts.js";
// import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

app.use(express.json());
// app.use(cors());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
  })



app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

app.listen(8000, () => {
    console.log("server Running");
})