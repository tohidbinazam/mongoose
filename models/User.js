import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required : [ true, 'Name fields is required' ]
    },
    email:{
        type: String,
        required : [ true, 'Email fields is required' ],
        unique : true
    },
    phone:{
        type: String,
        required : [ true, 'phone fields is required' ],
    },
    username:{
        type: String,
        unique :true,
        required : true,
        minLength:8,
        maxLength: 12
    },
    age:{
        type: Number,
        min: [18, 'Required minimum age is 18'],
        required : true,
    },
    gender:{
        type: String,
        enum: ['Male', 'Female'],
        required : [true, 'Gender fields is required']
    },
    location:{
        type: String,
        required : true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    foods: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Food'
    }

},{ timestamps: true })

// Statics method work after model
userSchema.statics.getAllGender = function(gender){
    return this.where({ gender: gender })
}

userSchema.statics.getFoods = function(id){
    return this.findById(id).select([ 'foods', 'name', 'email' ]).populate('foods')
}


// Query method work after Statics method
userSchema.query.singleFoods = function(data){
    // Give data or not it working well
    return this.select(data).populate('foods')
}


// Method work after Statics method intens variable, provide function argument or not
userSchema.methods.welcomeMsg = function(location){
    return `Hi ${ this.name }, Your main location is ${ this.location } and current location is ${ location }`
}


// Property work after Statics method intens variable but don't provide any value
userSchema.virtual('newMessage').get( function(){
    return `Hi, ${ this.name }, you have a new Message`
})

// MOngoose pre middleware, ***commit one and work another***
userSchema.pre('save', function(next){
    this.isAdmin = true
    next()
})

// MOngoose post middleware
userSchema.post('save', function(doc, next){``
    doc.isAdmin = false
    next()
})

// Export user schema
export default mongoose.model('User', userSchema)