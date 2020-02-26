import { Router } from 'express';
import { v1 as uuidv1 } from 'uuid';
import { JWT } from '../services';
import { subscriber } from '../models';
const ethUtil = require('ethereumjs-util');
const router = Router();
router.get('/', (req, res) => {
  res.send({ status: 'OKIE' });
});

// get info by address
router.get('/:address', (req, res) => {
  res.send({ address: req.params.address });
});

// Login with metamask
router.post('/auth', (req, res) => {
  try {
    const { signature, address } = req.body;
    const sigParams = ethUtil.fromRpcSig(signature);
    const msg = new Buffer.from(process.env.METAMASK_MSG);
    const msgBuffer = ethUtil.toBuffer(msg);
    const msgHash = ethUtil.hashPersonalMessage(msgBuffer);
    const publicKey = ethUtil.ecrecover(
      msgHash,
      sigParams.v,
      sigParams.r,
      sigParams.s
    );
    const sender = ethUtil.publicToAddress(publicKey);
    const senderAddress = ethUtil.bufferToHex(sender);
    if (senderAddress === address) {
      res.send({
        token: 'bearer ' + JWT.signToken({ address: senderAddress })
      });
    } else {
      res.status(401).send({ error: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  const { error, data } = await subscriber.add({
    id: uuidv1(),
    email
  });

  if (error) return res.status(500).json(error);

  return res.status(200).json(data);
});

router.post('/api/unsubscribe/:id', async (req, res) => {
  const { id } = req.params;
  const { error, data } = await subscriber.removeById(id);

  if (!error) {
    return res.status(200).json(data);
  }

  return res.status(500).json({ msg: 'Failed!' });
});

router.get('/api/subscribers', async (req, res) => {
  const { data } = await subscriber.listAll();
  return res.status(200).json(data);
});

export default router;
