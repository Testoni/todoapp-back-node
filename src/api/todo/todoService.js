const Todo = require('./todo')

// default api rest
Todo.methods(['get', 'post', 'put', 'delete'])

// when update a obj return the new obj updated | applicate validators schema in update
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo