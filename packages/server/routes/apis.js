import { Router } from 'express';
import { JWT } from '../services';
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

export default router;
