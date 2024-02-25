import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    image: String,
    bookedVisits: [{ date: { type: String },
        id: { type: String } }],
    favResidenciesID: [{ type: mongoose.Types.ObjectId }],
    ownedResidencies: [{ type: mongoose.Types.ObjectId, ref: 'Residency', relationship: 'Owner' }]
});

export default mongoose.model("User", UserSchema);