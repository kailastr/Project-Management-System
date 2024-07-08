import UserModel from "../model/user.model.js";
import bcrypt from 'bcrypt';

export const SignUp = async (req, res) => {
    // console.log("signup Controller working");
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        // console.log(fullName, userName, password, confirmPassword, gender);

        //used to verify both the passswords are matching
        if (password !== confirmPassword) {
            return res.status(400).send("Password Doesn't Match");
        }

        //checking if the username is already in the database
        const user = await UserModel.findOne({ userName });
        if (user) {
            return res.status(400).json({ message: "Username Already exist" });
        }

        //hashing our password
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);

        //creating a new user with the help of UserModel
        const newUser = new UserModel({
            fullName: fullName,
            userName: userName,
            password: hashedPassword,
            gender: gender
        });

        if (newUser) {
            //saving the data in the database
            await newUser.save();

            //returning the new user's details as responce
            return res.status(200).json({
                "Successfuly created new user": newUser
            });
        };

    } catch (error) {
        return res.status(400).send(error.message);
    }
};

export const login = async (req, res) => {
    try {

        const { userName, password } = req.body;

        const validUser = await UserModel.findOne({ userName });
        const isPasswordValid = await bcrypt.compare(password, validUser?.password || "");

        if (!validUser) {
            return res.json({ error: "Invalid Username" });
        }

        if (!isPasswordValid) {
            return res.json({ error: "Invalid Password" });
        }

        if (validUser) {
            return res.status(200).json({ validUser });
        }

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}