const mongoose = require('mongoose'); //import mongoose for use in our model

//basic schema layout with some validation
const DogsSchema = new mongoose.Schema({
    picture: {
        type: String,
        //required: [true,"picture is required!"],
        // minLength: [3,"Field requires minimum of 3 characters!"]
    },
    caption:{
        type:String,
        required:[true, 'Caption is required'],
        minlength:[8, 'Caption must be at least 8 characters']
    },
    species:{
        type:String, default :'dog'
    }
    
}, {timestamps: true});

const modelName = mongoose.model('Dogs', DogsSchema);

module.exports = modelName;