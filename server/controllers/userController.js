
import { prisma } from '../config/prismaConfig.js'


export const createUser = async (req,res)=> {
console.log("creating a user");
let {email} =req.body
const existingUser= await prisma.user.findUnique({where:{email}})
if(existingUser) return res.status(409).send({message:'Email already exists.'} )
else{
    const user=await prisma.user.create({data: req.body})
    res.send({
        message: "User Successfully Created.",
        user : user,
    })
}
}