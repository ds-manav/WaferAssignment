const {Model} = require('objection')

class User extends Model{
    static get tableName(){
        return 'User';
    }
}
module.exports = User;

