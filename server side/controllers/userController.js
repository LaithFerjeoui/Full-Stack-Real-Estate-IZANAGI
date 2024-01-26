
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

export const bookVisit = async(req,res)=> {
    const {email, date}= req.body
    const {id} = req.params
    try {
        const alreadyBooked= await prisma.user.findUnique({
            where: {email: email},
            select: {bookedVisits : true}
        })
        if(alreadyBooked.bookedVisits.some((visit)=> visit.id=== id)){
            const bookedDate = alreadyBooked.bookedVisits.find((visit) => visit.id === id).date;
            return res.status(409).json({ message: `Already Booked By you on ${bookedDate}` });
        }
        else {
            await prisma.user.update({
                where: {email: email},
                data: {
                    bookedVisits:  {push: {id, date}}
                }
            },)
        }
        res.send(' Your Visit is Booked Successfully !')
        

    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }

    
}
export const getAllBookings = async(req,res) =>{
    const {email}= req.body
    try{
        const bookings= await prisma.user.findUnique({
            where:{email},
            select:{bookedVisits : true}
        })
        res.status(200).send(bookings)
    }catch (err){
        throw new Error(err.message)
    }

}

export const cancelBooking= async(req,res) =>{
    const {email} = req.body
    const {id} = req.params
    try{
        const user = await prisma.user.findUnique({
            where:{email},
            select:{bookedVisits: true}
        })
        if(!user) return res.status(401).json({message:'User Not Found'})
        const visitIndex = user.bookedVisits.findIndex((visit)=> visit.id===id)
    if(visitIndex===-1 ) {
        res.status(403).json
        ({message:"The Visit You Want To Cancel Is Not In Your List"})
    } else {
        user.bookedVisits.splice(visitIndex,1)
    await prisma.user.update({
        where:{email:email},
        data:{
            bookedVisits: user.bookedVisits
                }
                })
                
                res.status(201).json({message:'Booking Cancelled Successfully'});
    }
    
                } catch(e){
                    console.log(e);
                    res.status(500).json(e.message)
                    }
}

export const toFav = async(req,res)=> {
    const {email}=req.body;
    const {rId} = req.params;
    try{
        let user =await  prisma.user.findUnique({where:{email}});
        if (!user)return res.status(404).send("User not found");
        if (user.favResidenciesID.includes(rId)){
            const updateUser = await prisma.user.update({
                where : { email },
                data : { favResidenciesID: { set :  user.favResidenciesID.filter((id)=>id !== rId)}}
            })
            res.json({message: 'Residency Removed from your Favorite List'},updateUser.favResidenciesID)

            
        }else {
            const addToFav= await prisma.user.update({
                where : { email } ,
                data : { favResidenciesID: {
                    push: rId
                }}
                });
        }
        res.send({message: 'updated Favorites'})
                    


    }catch(err){
        throw new Error(err.message)
    }
}

export const getAllFavRes = async(req,res)=>{
    const {email} = req.body
    try{
        const favs = await prisma.user.findUnique({
            where : {email},
            select : {
                favResidenciesID: true
                }
                })
                res.status(200).send(favs)
                
}catch(err){
    throw new Error(err.message)
}}