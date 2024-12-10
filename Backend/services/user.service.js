const userModel = require('../models/user.model');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !lastname || !email || !password) {
        throw new Error("All feilds are required");
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error("Email already registered");
    }

    const user = userModel({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })

    return await user.save();
}