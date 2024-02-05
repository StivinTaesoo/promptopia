import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        require: [true, "Email required!"],
    },
    username: {
        type: String,
        require: [true, "Username required!"],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
        ],
    },
    image: {
        type: String,
    },
});
const User = model("User", UserSchema);

export default User;
