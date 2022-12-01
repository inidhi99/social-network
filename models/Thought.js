const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require("./Reaction");

// thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      //reaction schema 
      reactionSchema,
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
      get: timestamp => dateFormat(timestamp)
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
// get total count of friends
thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
})

// create the thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

// export the Thought model
module.exports = Thought;