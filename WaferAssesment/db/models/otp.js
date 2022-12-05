const {Model} = require('objection')

class Otp extends Model{
    static get tableName(){
        return 'Otp';
    }
}
module.exports = Otp;