
class LinearSort {
  static Direction = {
    TOP_TO_BOTTOM: "TOP_TO_BOTTOM",
    BOTTOM_TO_TOP: "BOTTOM_TO_TOP",
    LEFT_TO_RIGHT: "LEFT_TO_RIGHT",
    RIGHT_TO_LEFT: "RIGHT_TO_LEFT"
  };

  constructor(interObjectDelay, reversed, direction) {
      this.interObjectDelay = interObjectDelay;
      this.reversed = reversed;
      this.direction = direction;

    if (this.interObjectDelay === undefined) this.interObjectDelay = 50
    if (this.reversed === undefined) this.reversed = false
    if (this.direction === undefined) this.direction = LinearSort.Direction.TOP_TO_BOTTOM
  }

  toJSON() {
    return { name: "LinearSort", interObjectDelay: this.interObjectDelay, reversed: this.reversed, direction: this.direction };
  }
}

export { LinearSort  }