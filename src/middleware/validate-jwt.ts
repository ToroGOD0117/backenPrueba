import { NextFunction, Request, Response } from "express";


const jwt = require("jsonwebtoken");

export interface CustomRequest extends Request{
    _id?: number;
}


const validateJWT = (req: CustomRequest, res: Response, next: NextFunction)=>{
const token = req.header("x-token");

if(!token){
    return res.status(401).json({
        ok:false,
        msg: "no hay toquen en la peticion",
    });
}
try{
    const { _id } = jwt.verify(token, "toro");
    req._id = _id
    next()
}catch(error){
    return res.status(404).json({
        ok:false,
        msg: "token invalido"
    })
}};





export const validateJWTPass = (
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.header("x-token-pass");
  
    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "No hay token en la petición",
      });
    }
  
    try {
      const { _id } = jwt.verify(token, process.env.JWT_SECRET_PASS);
      req._id = _id;
  
      next();
    } catch (error) {
      return res.status(401).json({
        ok: false,
        msng: "Token invalido",
      });
    }
  };
  
  

export default validateJWT