const userModel = require("../model/userModel");

let { isValidName, isValidEmail, isValidPass, isValidPhone } = require("../validator/validations");

const createUser = async function (req, res) {
    try {
        const data = req.body;

        // check data in the request body
        if (!Object.keys(data).length)
            return res.status(400).send({ status: false, message: "Please provide some data into the request body!!" });

        if (Object.keys(data).length > 6)
            return res.status(400).send({ status: false, message: "invalid data entry inside request body" })

        //destructuring
        const { firstName, LastName, Email, Phone, Password } = data;

        // ****** First Name validation *********  
        if (!firstName)
            return res.status(400).send({ status: false, message: "first name is requried" });
        if (!isValidName(firstName))
            return res.status(400).send({ status: false, message: "first name is not valid" });


        // ****** Last Name validation *********  

        if (!LastName)
            return res.status(400).send({ status: false, message: "last name is requried" });
        if (!isValidName(LastName))
            return res.status(400).send({ status: false, message: "last name is not valid" });

        // ****** Phone validation *********  

        if (!Phone){
            return res.status(400).send({ status: false, message: "phone number is requried" });
        }
       // return res.send(typeof Phone)
        
        if (typeof Phone === "string") {
            if (!isValidPhone(Phone))
                return res.status(400).send({ status: false, message: "mobile number is invalid must be of 10 digits start from [6-9]" })
            
        }

        // ****** Email validation *********  

        if (!Email)
            return res.status(400).send({ status: false, message: "Email is mandatory" });

        data.Email = Email.trim()
        if (!isValidEmail(data.Email))
            return res.status(400).send({ status: false, message: "Email is invalid" })

        let duplicateEmail = await userModel.findOne({ Email: data.Email });
        if (duplicateEmail)
            return res.status(400).send({ status: false, message: "Email is already present" });

        // ****** Password validation *********  

        if (!Password)
            return res.status(400).send({ status: false, message: "password is requried" })
        data.Password = Password.trim()
        if (!isValidPass(data.Password))
            return res.status(400).send({ status: false, message: "Please enter a valid password" })

        let createData = await userModel.create(data);
        res.status(201).send({ status: true, msg: "User Registered Successfully", data: createData });
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
}


module.exports = { createUser };