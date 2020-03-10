import { Router } from 'express';
import { subscriber } from '../models';
const router = Router();
router.get('/', (req, res) => {
  res.send({ status: 'OKIE' });
});

// get info by address
// router.get('/:address', (req, res) => {
//   res.send({ address: req.params.address });
// });

// Login with metamask

router.post('/api/subscribe', async (req, res) => {
  const { email = '' } = req.body;
  const { error } = await subscriber.add({
    email: (email + '').toLocaleLowerCase().trim()
  });

  if (error) return res.status(409).json(error);

  return res.sendStatus(200);
});

router.post('/api/unsubscribe/:id', async (req, res) => {
  const { id } = req.params;
  const { error } = await subscriber.removeById(id.toLocaleLowerCase().trim());

  if (!error) {
    return res.sendStatus(200);
  }

  return res.status(500).json({ msg: 'Failed!' });
});

router.get('/api/subscribers', async (req, res) => {
  const { data } = await subscriber.listAll();
  return res.status(200).json(data);
});

export default router;
