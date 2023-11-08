module.exports = function () {
  return {};
  var faker = require("faker");
  var_ = require("lodash");
  return {
    people: _lodash(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      };
    }),
  };
};
