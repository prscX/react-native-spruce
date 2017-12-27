
import { NativeModules, findNodeHandle } from 'react-native'
const { RNSpruce } = NativeModules;

class Spruce {
}

Spruce.SpruceBuilder = (view) => {
    this.view = findNodeHandle(view)

    return {
        sortWith: (sortWith) => {
            this.sortWith = sortWith.toJSON()
        },

        animateWith: (animateWith) => {
            this.animateWith = animateWith
        },

        start: (animator) => {
            RNSpruce.StartAnimator(
                this.view,
                this.sortWith,
                this.animateWith,
                animator
            )
        }
    }
}

export { Spruce };