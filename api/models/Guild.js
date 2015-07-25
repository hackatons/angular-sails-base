/**
* Guild.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type: 'string'
    },
    rules:{
      type: 'string'
    },
    master:{
      model: 'user'
    },
    board :{
      collection: 'board',
      via: 'ofGuild'
    },
    moderators :{
      collection: 'user'
    },
    members: {
      collection: 'user',
      via: 'guild'
    }
  }
};

