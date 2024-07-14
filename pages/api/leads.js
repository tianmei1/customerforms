
export default function handler(req, res) {
  if (req.method === 'POST') {
    const lead = req.body;
    res.status(200).json({ message: 'Lead saved' });
  } else if (req.method === 'GET') {
    res.status(200).json({ leads: [] });
  }
}
