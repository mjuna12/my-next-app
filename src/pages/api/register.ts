// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "@/utils/db/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(req.method === 'POST') {
    await signUp(req.body, ({status, message}:{status:boolean, message:string}) => {
        if(status) {
            res.status(200).json({status: true, message: 200})
        } else {
            res.status(400).json({status: false, message: 400})
        }
    })
}else {
    res.status(405).json({status: false, message: 405})
}
}
