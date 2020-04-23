const express = require("express");
require("./db/mongodb");
const userRouter = require("./routers/users");
const profileRouter = require("./routers/profiles");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(userRouter);
app.use(profileRouter);

app.listen(port, () => {
  console.log(`service is up on port ${port}`);
});

// const User = require("./models/user");
// const Profile = require("./models/profile");

// getcall = async () => {
//   const user = await User.findById("5ea1257250e2c2404886dde2");
//    await user.populate("profiles").execPopulate();
//    console.log(user.profiles)

//   const profile = await Profile.findById("5ea12f467477521dfcb3f741");
//   await profile.populate("owner").execPopulate()
//   console.log(profile.owner)
// };

// getcall();
