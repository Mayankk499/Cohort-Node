import express from "express";
const app = express();
app.use(express.json());
const PORT = 8000;

const Diary = {};
const EMAILS = new Set();

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  if (EMAILS.has(email)) {
    return res.status(400).json({ error: "Email has already taken" });
  }

  const token = `${Date.now()}`;
  Diary[token] = { username, email, password };
  EMAILS.add(email);

  return res.json({ status: "success", token });
});

app.post("/user", (req, res) => {
  const { token } = req.body || {};
  if (!token) {
    return res.status(400).json({ error: "Missing Token" });
  }

  if (!(token in Diary)) {
    return res.status(400).json({ error: "Invalid Token" });
  }

  const entry = Diary[token];
  return res.json({ data: entry });
});

app.post('/private-data', (req, res) => {
    const { token } = req.body || {};

    if (!token) {
    return res.status(400).json({ error: "Missing Token" });
  }

  if (!(token in Diary)) {
    return res.status(400).json({ error: "Invalid Token" });
  }

  const entry = Diary[token];
  return res.json({data: {privateData: 'Access Granted'}});

})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});