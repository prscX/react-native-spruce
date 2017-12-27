
class RandomSort {
  constructor(interObjectDelay) {
      this.interObjectDelay = interObjectDelay

    if (this.interObjectDelay === undefined) this.interObjectDelay = 50
  }

  toJSON() {
    return { name: "RandomSort", interObjectDelay: this.interObjectDelay };
  }
}

export { RandomSort }