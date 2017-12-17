
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

        start: () => {
            RNSpruce.StartAnimator(
                this.view,
                this.sortWith
            )
        }
    }
}

export { Spruce };