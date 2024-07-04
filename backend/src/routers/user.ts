import {Router} from 'express';
import {PrismaClient} from '@prisma/client';
import jwt from 'jsonwebtoken';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client()


const JWT_SECRET = "mysecret"



const router = Router();
const prismaClient = new PrismaClient();

router.get("/presignedUrl", authMiddelware, (req, res) => {

    const userId = req.userId;
    const command = new PutObjectCommand({
        Bucket: "solana-saas",
        Key: `saas/${}`
      })
      
      const preSignedUrl = getSignedUrl(s3Client, command, { expiresIn: 3600 })
})

router.post("/signin", async(req, res) => {
    const hardcodedWalletAddress = "0x40A3Ec9Eb5c5B69FE3eFE952ffFc25e0eb656056"
    const existingUser = await prismaClient.user.findFirst({
        where: {
            address: hardcodedWalletAddress
        }
    });
    
    if(existingUser){
        const token = jwt.sign({
            userId : existingUser.id
        }, JWT_SECRET)
        res.json({
            token
        })
    }
    else{
        const user = await prismaClient.user.create({
            data: {
                address: hardcodedWalletAddress
            } 
        });
        const token = jwt.sign({
            userId : user.id
        }, JWT_SECRET)
        res.json({
            token
        })
    }
});

export default router;