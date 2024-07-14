
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
      res.status(200).json({ message: 'Authenticated' });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
}
