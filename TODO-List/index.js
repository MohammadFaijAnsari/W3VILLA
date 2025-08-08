const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Temporary in-memory storage
let todos = [];
let idCounter = 1;

// CREATE Todo
app.post('/api/todos', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    const newTodo = { id: idCounter++, title, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// READ all Todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// READ single Todo by ID
app.get('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
});

// UPDATE Todo
app.put('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    const { title, completed } = req.body;
    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});

// DELETE Todo
app.delete('/api/todos/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Todo not found" });

    todos.splice(index, 1);
    res.json({ message: "Todo deleted" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
