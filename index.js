function Logger() {
  this.requires = function (dependency) {
    return 'message-bus' === dependency;
  };

  this.setUp = function (dependencies) {
    dependencies['message-bus'].subscribe('#', function (routingKey, content, cb) {
      const data = JSON.parse(content);
      console.log('Logger: ' + routingKey + '; ' + JSON.stringify(data));
      cb();
    }, 'glued_logger');
  };
}

module.exports.Logger = Logger;
