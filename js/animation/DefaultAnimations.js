
const DEFAULT_DURATION = 800

class DefaultAnimations {
  static fadeAwayAnimator(duration) {
    if (duration === undefined) duration = DEFAULT_DURATION;
    return { name: "fadeAwayAnimator", duration: duration };
  }

  static fadeInAnimator(duration) {
    if (duration === undefined) duration = DEFAULT_DURATION;
    return { name: "fadeInAnimator", duration: duration };      
  }

  static growAnimator(duration) {
    if (duration === undefined) duration = DEFAULT_DURATION;
    return { name: "growAnimator", duration: duration };      
  }

  static shrinkAnimator(duration) {
    if (duration === undefined) duration = DEFAULT_DURATION;
    return { name: "shrinkAnimator", duration: duration };      
  }

  static spinAnimator(duration) {
    if (duration === undefined) duration = DEFAULT_DURATION;
    return { name: "spinAnimator", duration: duration };      
  }
}

export { DefaultAnimations };