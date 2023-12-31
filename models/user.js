const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')

const userSchema=mongoose.Schema({
name:{
    type:String,
    Required: true
},
email:{
type:String,
Required:true
},
password:{
    type:String,
    Required:true
},
isAdmin:{
    type:Boolean,
    required:true,
    default:false
}

},{timestamps:true}
)

userSchema.methods.matchPassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

//middleware for password
userSchema.pre("save",async function(next){
    if (!this.isModified("password")) {
        next();
      }
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
})


const User= mongoose.model('User',userSchema);

module.exports= User;