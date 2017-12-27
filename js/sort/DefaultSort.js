
const SORT = 'DefaultSort'

class DefaultSort {
  constructor(interObjectDelay) {
    this.interObjectDelay = interObjectDelay

    if (this.interObjectDelay === undefined) this.interObjectDelay = 50
  }

  toJSON() {
    return { name: 'DefaultSort', interObjectDelay: this.interObjectDelay }
  }
}

export { DefaultSort  }