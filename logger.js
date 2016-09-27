function Logger() {
  var logCount = 0,
    contentBytes = 0,
    keyBytes = 0;

  this.getName = function () {
    return 'logger';
  };

  this.getState = function () {
    return {
      count: logCount,
      key_bytes: keyBytes,
      content_bytes: contentBytes
    };
  };

  this.requires = function (dependency) {
    return 'message-bus' === dependency;
  };

  this.setUp = function (dependencies) {
    dependencies['message-bus'].subscribe('#', function (routingKey, content, cb) {
      var data = null;
      try {
        data = JSON.parse(content);
      } catch (e) {
        data = content.toString();
      }
      data = JSON.stringify(data);
      console.log('Logger: ' + routingKey + '; ' + data);
      logCount++;
      contentBytes += data ? data.length : 0;
      keyBytes += routingKey.length;
      cb();
    }, 'logger');
  };
}

module.exports.Logger = Logger;
