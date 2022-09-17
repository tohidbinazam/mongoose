import Food from "../models/Food.js";
import User from "../models/User.js";


export const userController = async () => {

    try {

        const user = await User.findById('6321ebe4117b2cf095cd6bde')
        await user.save()
        console.log(user);


    } catch (error) {
        console.log(error.message.bgRed);
    }
}

















export const foodController = async () => {
    try {

        const food = await Food.create()
        console.log(food);
    } catch (error) {
        
    }
}
