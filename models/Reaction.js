const { Schema, model, Types } = require("mongoose");

//reaction schema
const reactionSchema = new Schema (
    {
       reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
       },
       reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
       },
       username: {
        type: String,
        required: true,
       },
       createdAt: {
        type: Date,
        default: Date.now,
        // TIME STAMP ?? 

       },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)

// create the reaction model using the reactionSchema
const Reaction = model('Reaction', reactionSchema);

// export the reaction model
module.exports = Reaction;