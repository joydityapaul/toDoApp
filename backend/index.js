import express from "express";
import bodyParser from "body-parser";
import {
  createToDoValidationSchema,
  markCompletedToDoValidationSchema,
} from "./routes/types.js";
import Todo from "./db.js";
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/create-todo", async (req, res) => {
  if (!createToDoValidationSchema.safeParse(req.body).success) {
    res.status(400).json({
      success: false,
      message: "Invalid request body",
    });
    return;
  }
  await Todo.create({
    title: req.body.title,
    description: req.body.description,
    completed: false,
  });

  res.status(200).json({
    success: true,
    message: "Todo Created",
  });
});

app.get("/show-todo", async (req, res) => {
  const TodosList = await Todo.find();
  res.json(TodosList);  
});

app.put("/mark-todo", async (req, res) => {
  if (!markCompletedToDoValidationSchema.safeParse(req.body).success) {
    res.status(400).json({
      success: false,
      message: "Invalid request body",
    });
    return;
  }
  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
