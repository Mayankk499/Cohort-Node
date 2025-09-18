import express from "express";
const app = express();

const PORT = 8000;

const books = [
  { id: 1, title: "Book One", author: "John Capler" },
  { id: 2, title: "Book Two", author: "John Cena" },
];

app.use(express.json());

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id))
    return res.status(400).json({ error: `id must be of type number` });
  const Book = books.find((e) => e.id === id);

  if (!Book)
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exists` });

  return res.json(Book);
});

app.post("/books", (req, res) => {
  const { title, auther } = req.body;

  if (!title || title === "")
    return res.status(400).json({ error: "title is required 📝" });

  if (!auther || auther === "")
    return res.status(400).json({ error: "auther is required 👨‍🏫" });

  const id = books.length + 1;

  const book = { id, title, auther };
  books.push(book);

  return res.status(201).json({ message: "Book Added Successfully ✅" });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "id must be of type number" });
  }

  const indexToDelete = books.findIndex((e) => e.id === id);

  if (indexToDelete < 0) {
    return res.status(404).json({ error: `Book with id ${id} does not exist 🚫` });
  }

  books.splice(indexToDelete, 1);

  return res.status(200).json({ message: "Book removed ✅" });
});


app.listen(PORT, () => {
  console.log(`Server is listening on port${PORT}`);
});
