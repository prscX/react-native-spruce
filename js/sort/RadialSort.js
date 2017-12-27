
class RadialSort {
  static Position = {
    TOP_LEFT: "TOP_LEFT",
    TOP_MIDDLE: "TOP_MIDDLE",
    TOP_RIGHT: "TOP_RIGHT",
    LEFT: "LEFT",
    MIDDLE: "MIDDLE",
    RIGHT: "RIGHT",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_MIDDLE: "BOTTOM_MIDDLE",
    BOTTOM_RIGHT: "BOTTOM_RIGHT"
  };

  constructor(interObjectDelay, reversed, position) {
      this.interObjectDelay = interObjectDelay
      this.reversed = reversed
      this.position = position

    if (this.interObjectDelay === undefined) this.interObjectDelay = 50
    if (this.reversed === undefined) this.reversed = false
    if (this.position === undefined) this.position = RadialSort.Position.TOP_LEFT
  }

  toJSON() {
    return { name: "RadialSort", interObjectDelay: this.interObjectDelay, reversed: this.reversed, position: this.position };
  }
}

export { RadialSort }