const jwt = require("jsonwebtoken");

const generarJWT = (
    _id: string,
    login:string ="",
    expiresIn = "6h",
    jwtSecret = "toro"
  ) => {
    return new Promise((resolve, reject) => {
      const payload = { _id, login };
      jwt.sign(
          payload,
          jwtSecret,
          { expiresIn: expiresIn },
          (error: string,token:string)=>{
              if (error) {
                  console.log(error);
                  reject("No se pudo generar el token");
                } else {
                  resolve(token);
                }
          } );
  });
  };
  export default generarJWT;