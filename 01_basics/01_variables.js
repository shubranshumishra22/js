const accountId = 1444553
let accountEmail = "shubranshu22"
var accountPassword = "12345" 
accountCity = "Chennai"

/*don't use Var bc of scope*/

// accountId = 2 not allowed(const. fixed)
console.log(accountId);
accountEmail = "sanjay23"
console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity])