import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const cuenta = await User.findOne({ where: { mail: req.body.mail } });
    console.log(cuenta.contraseña);

    if (!cuenta) {
      return res.status(401).json({ msg: "Usuario o contraseña inválida" });
    }

    console.log(req.body.contraseña);
    if (!(cuenta.contraseña === req.body.contraseña)) {
      console.log("contraseña incorrecta");
      return res.status(401).json({ msg: "Usuario o contraseña inválida" });
    }

    res.status(200).json({ msg: "logeado com sucesso" });
  } catch (error) {
    res.status(500).json({ msg: "Error al logearse" });
  }
};

export const register = async (req, res) => {
  res.send("register route");
};
