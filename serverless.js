const { Component } = require('@serverless/core')

class GlobalVar extends Component {
  async default(inputs = {}) {
    return inputs
  }
}

module.exports = GlobalVar
