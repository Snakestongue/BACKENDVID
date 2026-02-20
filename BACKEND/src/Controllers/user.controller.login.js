import {User} from "../Models/user.model.js";
const login =  async(req, res) => {
    try {
        const {username, password} = req.body
        //validation
        if (!username ||  !password){
            console.log(req.body);
            return res.status(400).json({message: "All fieldAJDJF must be filled out"});
        }
        //exist
        const existing = await User.findOne({username: username.toLowerCase()})
        
        if (existing){
            const isPasswordMatch = existing.password == password;
          const isUsernameMatch = existing.username.toLowerCase() == username.toLowerCase();
            //return res.status(400).json({message: "User already registered"})
            if (isPasswordMatch && isUsernameMatch){
            return  res.status(200).json({
             message: "Logging back in!",
            user: {id: existing._id,  user: existing.username}
            })
            }else{
                return  res.status(400).json({
             message: "Incorrect Password"
            }) 
            }
          
        
        }else{
            return res.status(404).json({
                   message: "Username not registered"
            })
        
        }
        
    } catch (error) {
        console.log("Register error", error)
        res.status(500).json({message:"Internal server error"})//, error: error.message})
    }
}

export{
    login
}

