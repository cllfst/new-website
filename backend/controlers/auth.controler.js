import User from "../models/user";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken";

export const signup = async (req, res) => {
    const { fullName, email, password , confirmPassword  } = req.body;
    try {
        if(password !== confirmPassword){
            return res.status(400).json({ message: "Passwords do not match" });
        }
        userExits = await User.findOne({ email });
        if (userExits) {
            return res.status(400).json({ message: "User already exists" });
        }
        salt= await bcryptjs.genSalt(10);
        hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({ fullName, email,
            
            password :  hashedPassword,
            role: "user",
            profilePicture: "aaa" 

        });
        if (!newUser) {
            return res.status(400).json({ message: "User not created" });
        }
        await newUser.save();
        generateToken(newUser._id);
        res.status(201).json({ 
            fullName: newUser.fullName,
            email: newUser.email,
            password: newUser.password,
            profilePicture: newUser.profilePicture,
            role: newUser.role

         });
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (password !== user.password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        generateToken(user._id);

        
        res.status(200).json({ 
            message: "Login successful",
            fullName: user.fullName,
            email: user.email,
            profilePicture: user.profilePicture,
            role: user.role


         });
    } catch (error) {

        res.status(500).json({ message: error.message });

    }

    }
    