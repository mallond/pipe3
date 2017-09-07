module.exports = function (RED) {
  "use strict";
  function Pipe3Node(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function (msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("pipe3", Pipe3Node);
};