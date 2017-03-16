var require = meteorInstall({"collections":{"collections.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// collections/collections.js                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
///////////////////////////////////////////////////////////////////////

}},"common":{"common.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// common/common.js                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
///////////////////////////////////////////////////////////////////////

}},"server":{"server.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/server.js                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Accounts.onCreateUser(function (options, user) {                     // 1
  if (options.profile) {                                             // 2
    user.profile = options.profile;                                  // 3
  } else {                                                           // 4
    user.profile = {};                                               // 6
  }                                                                  // 7
                                                                     //
  user.profile.rank = 'White belt';                                  // 8
  return user;                                                       // 9
});                                                                  // 10
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./collections/collections.js");
require("./common/common.js");
require("./server/server.js");
//# sourceMappingURL=app.js.map
