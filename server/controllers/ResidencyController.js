
import { prisma } from '../config/prismaConfig.js'


export const createResidency = async (req,res)=> {
const {title, description, price, address, city, country, image, facilities, userEmail} = req.body.data
console.log(req.body.data)
try{
    const newResidence=await prisma.residency.create({
        data:{
            title,
            description,
            price,
            address,
            city,
            country,
            image,
            facilities,
            owner:{connect:{email:userEmail}}
            
            },
            })
            res.status(201).json({ message :"Residency Created Successfully"})
            }catch(e){
                console.error(e)
                console.log(e)
                res.status(409).json({"Error": e})
                }
    }





