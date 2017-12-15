
package ui.spruce;

import android.animation.Animator;
import android.app.Activity;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import com.willowtreeapps.spruce.Spruce;
import com.willowtreeapps.spruce.animation.DefaultAnimations;
import com.willowtreeapps.spruce.sort.ContinuousSort;
import com.willowtreeapps.spruce.sort.DefaultSort;
import com.willowtreeapps.spruce.sort.LinearSort;
import com.willowtreeapps.spruce.sort.RadialSort;

public class RNSpruceModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNSpruceModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNSpruce";
  }

  @ReactMethod 
  public void StartAnimator(final int parentView, final Promise promise) {
    final Activity activity = this.getCurrentActivity();
    final ViewGroup targetView = activity.findViewById(parentView);

    if (targetView == null) return;

    activity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        Spruce.SpruceBuilder spruceAnimator = new Spruce.SpruceBuilder(targetView);
        spruceAnimator.sortWith(new ContinuousSort(/*interObjectDelay=*/1000L, /*reversed=*/false, ContinuousSort.Position.BOTTOM_LEFT));
        spruceAnimator
            .animateWith(new Animator[] { DefaultAnimations.shrinkAnimator(targetView, /*duration=*/800) });

        spruceAnimator.start();
      }
    });
  }
}