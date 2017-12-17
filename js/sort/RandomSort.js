
class RandomSort {
  constructor(interObjectDelay) {
      this.interObjectDelay = interObjectDelay

    if (this.interObjectDelay === undefined) this.interObjectDelay = "50";
  }

  toJSON() {
    return { interObjectDelay: this.interObjectDelay }
  }
}

export { RandomSort }