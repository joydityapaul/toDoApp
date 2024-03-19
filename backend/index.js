import { Express } from "express";
import { createToDoValidationSchema, markCompletedToDoValidationSchema } from "./routes/types";
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-todo', (req,res)=>{
    if(!createToDoValidationSchema.safeParse(req.body).success)
    {
        res.status(400).json({
            success: false,
            message: "Invalid request body"
        })
        return;
    }
})

app.get('/show-todo', (req,res)=>{})

app.put('/mark-todo', (req,res)=>{
    if(!markCompletedToDoValidationSchema.safeParse(req.body).success)
    {
        res.status(400).json({
            success: false,
            message: "Invalid request body"
        })
        return;
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})