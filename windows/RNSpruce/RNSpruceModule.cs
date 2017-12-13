using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Spruce.RNSpruce
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNSpruceModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNSpruceModule"/>.
        /// </summary>
        internal RNSpruceModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNSpruce";
            }
        }
    }
}
