import  Residency  from '../models/ResidencySchema.js';

export const createResidency = async (req, res) => {
    const { title, description, price, address, city, country, image, facilities, userEmail } = req.body.data;
    try {
        const newResidence = await Residency.create({
            title,
            description,
            price,
            address,
            city,
            country,
            image,
            facilities,
            userEmail
        });
        res.status(201).json({
            message: "Residency Created Successfully",
            newResidence,
        });
    } catch (err) {
        console.error(err);
        res.status(409).json({ "Error": err });
    }
};

export const getAllResidencies = async (req, res) => {
    try {
        const allResidences = await Residency.find().sort({ createdAt: 'desc' });
        res.status(200).json(allResidences);
    } catch (err) {
        console.error(err);
        res.status(500).json({ "Error": err });
    }
};

export const singleResidency = async (req, res) => {
    const { id } = req.params;
    try {
        const residence = await Residency.findById(id);
        if (!residence) return res.status(404).json({ message: 'Residency does not exist' });
        res.status(200).json(residence);
    } catch (err) {
        console.error(err);
        res.status(500).json({ "Error": err });
    }
};
