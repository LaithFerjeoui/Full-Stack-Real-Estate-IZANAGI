import mongoose from "mongoose";


const residencySchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    address: String,
    city: String,
    country: String,
    image: String,
    facilities: {
        type: {
            bathrooms: Number,
            parking: Number,
            bedrooms: Number
        },
        default: {}
    },
    userEmail: String,
    owner: { type: mongoose.Types.ObjectId, ref: 'User', relationship: 'Owner' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

residencySchema.index({ address: 1, userEmail: 1 }, { unique: true });

export default mongoose.model("Residency", residencySchema);
