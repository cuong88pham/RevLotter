import { identity, pickBy } from 'lodash/fp';
import { i18n } from '../i18n';
import { getToken } from './token-libs';

export const formatObj = pickBy(identity);

const tokenTmp =
  'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFmODhiODE0MjljYzQ1MWEzMzVjMmY1Y2RiM2RmYjM0ZWIzYmJjN2YiLCJ0eXAiOiJKV1QifQ.eyJzdGF0dXMiOjEsInJvbGUiOjIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9sb2NhbC1yZXZsb3R0ZXIiLCJhdWQiOiJsb2NhbC1yZXZsb3R0ZXIiLCJhdXRoX3RpbWUiOjE1ODUwNDE4NzQsInVzZXJfaWQiOiJXV1VEWGtEWFNCY3pOVHpQeTA5bVY1ZFBRUVIyIiwic3ViIjoiV1dVRFhrRFhTQmN6TlR6UHkwOW1WNWRQUVFSMiIsImlhdCI6MTU4NTA0MTg3NSwiZXhwIjoxNTg1MDQ1NDc1LCJlbWFpbCI6InVzZXJAcmV2bG90dGVyLmlvIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXJAcmV2bG90dGVyLmlvIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.mzm4j54ltKTYvUl4bV5twn4fFPGqWACStoWQk1zgDfLg91wTquLm8T2_BgRTGIg92ai5gMrscadOkKG8y6VL322J53RLIPapldIUVJcVZiy17F0y5OulU0quqMeUZqcgbqsWkxoOvQI2mtMkWOymu9YRPduToVJQRSV4U6-7LudspDU9EgQGb9t2exibX9g_K50kb_GdD1mWh9cdOnwpPJYXtgYFi5NmoeSArmD4AYHP9Rvgi4-hWovnDhBXMAUTXcVTJlWixBHXe3jj-maVoGkp0VQgdzAmqh2LjtFqhZOYkYSsfKusYi9ddV6Ozu9lFBAUMhtsCU41LYY-vrHYmA';

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
