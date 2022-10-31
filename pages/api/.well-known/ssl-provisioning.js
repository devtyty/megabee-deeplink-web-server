// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'

export default function handler(req, res) {
    const imageBuffer = fs.readFileSync(process.cwd() + '/assets/ssl-provisioning.txt')
    res.send(imageBuffer)
 }
   