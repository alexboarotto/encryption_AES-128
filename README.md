# encryption_AES-128

AES encryption algorithm implemented in TypeScript

### Algorithm used to encrypt a 128 bit block using AES (Advanced Encryption Standard)

Algorithm Wiki: https://en.wikipedia.org/wiki/Advanced_Encryption_Standard

## Fix Issues

Algorithm is still in the works, there are some incorrect functions that return a wrong result.
Still trying to find these errors.

This repository **does not** provide a decryption function (for now).

## Testing 

Using node, compile .ts files using: 

`tsc aes.ts`

Which will create .js files for each .ts file.  After that, use:

`node aes.js`

to run code.
