
class CorneredSort {
  static Corner = {
    TOP_LEFT: "TOP_LEFT",
    TOP_RIGHT: "TOP_RIGHT",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT"
  };

  constructor(interObjectDelay, reversed, corner) {
      this.interObjectDelay = interObjectDelay
      this.reversed = reversed
      this.corner = corner

    if (this.interObjectDelay === undefined) this.interObjectDelay = 50
    if (this.reversed === undefined) this.reversed = false
    if (this.corner === undefined) this.corner = CorneredSort.Corner.TOP_LEFT;
  }

  toJSON() {
    return { name: 'CorneredSort', interObjectDelay: this.interObjectDelay, reversed: this.reversed, corner: this.corner };
  }
}

export { CorneredSort }; 