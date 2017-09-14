// Pipe 3 Shipping demo Node
module.exports = function (RED) {
  'use strict';
  function Pipe3Node(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function (msg) {
      msg.payload.total = msg.payload.total>0?msg.payload.total:msg.payload.amount;
      msg.payload.steps.push('Pipe 3 add Shipping: '+msg.payload.shipping+' to: ' +msg.payload.total+ ' = '+msg.payload.total+msg.payload.shipping);
      msg.payload.total = msg.payload.total+msg.payload.shipping;
      node.send(msg);
    });
  }
  RED.nodes.registerType('pipe3', Pipe3Node);
};
