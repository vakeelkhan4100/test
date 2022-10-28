import jwt from "jsonwebtoken";
import fs from "fs";
import bcrypt from "bcrypt";
import user from "../moduls/user.moduls.js";
 

export const signup = async (req, res) => {
   let bodyData = req.body
   bodyData.token = jwt.sign({ time: Date(), userId: 11 }, "we-are-genrating-token")
   bodyData.password = await bcrypt.hash("12345", 10);
   let convertedToString = JSON.stringify(bodyData)
   // res.send(convertedToString )
   fs.writeFile("user.json", convertedToString, async (err) => {
      if (err) {
         res.end("Something wrong with request.")
      }
      // res.end(convertedToString)
      try {
         const isemailexits = await user.findOne({ email: req.body.email })
         if (isemailexits) {
            res.send("email is aleady exits")
         } else {
            const a = JSON.parse(convertedToString)
            const b = await user.create(a)
            res.send(b)
         }
      }
      catch (err) {
         res.send(err)
      }
   })
}
export const login = async (req, res) => {
   fs.readFile("user.json", (error, data) => {
      res.send("ceay")
      var a = (req.body)
      var b = JSON.parse(data)
      // console.log(b);
      if (a.email == b.email) {
         res.send("ceay")
      }
   })
}
