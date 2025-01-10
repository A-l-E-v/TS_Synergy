import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  if (method === 'POST') {
    const { login, email, password } = req.body;
    res.status(200).json({ login, email, password });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
