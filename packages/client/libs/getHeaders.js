import { identity, pickBy } from 'lodash/fp';
import { i18n } from '../i18n';
import { getToken } from './token-libs';

export const formatObj = pickBy(identity);

const tokenTmp =
  'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFmODhiODE0MjljYzQ1MWEzMzVjMmY1Y2RiM2RmYjM0ZWIzYmJjN2YiLCJ0eXAiOiJKV1QifQ.eyJzdGF0dXMiOjEsInJvbGUiOjIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9sb2NhbC1yZXZsb3R0ZXIiLCJhdWQiOiJsb2NhbC1yZXZsb3R0ZXIiLCJhdXRoX3RpbWUiOjE1ODUwMzMxNTEsInVzZXJfaWQiOiJXV1VEWGtEWFNCY3pOVHpQeTA5bVY1ZFBRUVIyIiwic3ViIjoiV1dVRFhrRFhTQmN6TlR6UHkwOW1WNWRQUVFSMiIsImlhdCI6MTU4NTAzMzE1MiwiZXhwIjoxNTg1MDM2NzUyLCJlbWFpbCI6InVzZXJAcmV2bG90dGVyLmlvIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXJAcmV2bG90dGVyLmlvIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.YD793p-Fn2749hRCtp1WCwOuZZX6_MS9Z50TyCVbU_rlc8sS7aONSqHR5QeGc1rXmhbosxfkBxi0lmEw42xvFqRn3ygVue2Q5qvER-lCjiRUT9D8flzHkQwrjKnBpbB8XaPkYqMwDcAJCKC8PEsrvANBMOrHgj8D4ht0Sp-4qO-BxDcjXYQTutV9h6LgpRI5eZYjCN5WdUr_jDyqLFyhJp4c2LlO_xRWy_u6doNdD6zhKrZzqOrYq0EPlkVoqp2ZzUjhUJThsCWsB767JxhYhQfqnAtEqt7b8SB6IrazIqowj_yCfYoZu55xuVU7VsvWs6fsaLWRKxG9Y_GXMGnU8A';

export default (options = {}) =>
  Object.assign(
    {},
    {
      // Authorization: getToken(),
      Authorization: tokenTmp,
      'Content-Type': 'application/json',
      'accept-language': i18n.language
    },
    formatObj(options)
  );
