const { Component } = require('@serverless/core')

class GlobalVar extends Component {
  async default(inputs = {}) {
    return inputs
  }

  async remove(inputs = {}) {
    this.context.status(`Removing`)
    this.state = {}
    await this.save()
    this.context.debug(`Finished`)
    return {}
  }
}

module.exports = GlobalVar
