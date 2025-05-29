import jwt from "jsonwebtoken";

export default function signToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}
