import User from '../models/UserSchema.js';

export const createUser = async (req, res) => {
    console.log("creating a user");
    let { email } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) return res.status(201).send({ message: "User already registered" });
        else {
            const user = await User.create(req.body);
            res.send({
                message: "User Successfully Created.",
                user: user,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const bookVisit = async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;
    try {
        const user = await User.findOne({ email: email });

        if (!user) return res.status(404).json({ message: "User not found" });
        if (user.bookedVisits.some((visit) => visit.id === id)) {
            const bookedDate = user.bookedVisits.find((visit) => visit.id === id).date;
            return res.status(409).json({ message: `Already Booked By you on ${bookedDate}` });
        } else {
            user.bookedVisits.push({ id, date });
            await user.save();
            res.send('Your Visit is Booked Successfully !');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const getAllBookings = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).send(user.bookedVisits);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const cancelBooking = async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;
    try {
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json({ message: "User not found" });
        const visitIndex = user.bookedVisits.findIndex((visit) => visit.id === id);
        if (visitIndex === -1) {
            res.status(403).json({ message: "The Visit You Want To Cancel Is Not In Your List" });
        } else {
            user.bookedVisits.splice(visitIndex, 1);
            await user.save();
            res.status(201).json({ message: 'Booking Cancelled Successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const toFav = async (req, res) => {
    const { email } = req.body;
    const { rId } = req.params;

    try {
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json({ message: "User not found" });

        if (user.favResidenciesID.includes(rId)) {
            user.favResidenciesID = user.favResidenciesID.filter((id) => id != rId)
            res.send({ message: "removed from favorites", user: user });
        } else {
            user.favResidenciesID.push(rId);
            res.send({ message: "added to favorites", user: user });
        }
        await user.save();


    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const getAllFavRes = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).send(user.favResidenciesID);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
