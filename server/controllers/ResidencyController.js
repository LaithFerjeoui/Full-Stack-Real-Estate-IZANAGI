
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
            res.status(201).json({
                message :"Residency Created Successfully",
                newResidence,
             })
            }catch(e){
                console.error(e)
                console.log(e)
                res.status(409).json({"Error": e})
                }
    }


   export const getAllResidencies = async(req,res)=> {
        try{
            const allResidences= await  prisma.residency.findMany({
                orderBy:{
                    createdAt:"desc"
                }
            })
            // console.log("ALL RESIDENCES FROM DB ",allResidences);
            res.status(200).json(allResidences)
            } catch (err) {
                console.error(err)
                res.status(500).json({"Error": err})
                }

            
    }
    export const singleResidency = async(req,res)=> {
        const { id } = req.params;
        const residence =await  prisma.residency.findUnique({
            where:{id}
            });
            if(!residence) return res.status(404).json({message:'Residency does not exist'})
            res.status(200).json(residence) 
        
        
    }





