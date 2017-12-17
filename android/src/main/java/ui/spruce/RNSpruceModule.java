
package ui.spruce;

import android.animation.Animator;
import android.animation.ObjectAnimator;
import android.app.Activity;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import com.facebook.react.bridge.ReadableMap;
import com.willowtreeapps.spruce.Spruce;
import com.willowtreeapps.spruce.animation.DefaultAnimations;
import com.willowtreeapps.spruce.sort.ContinuousSort;
import com.willowtreeapps.spruce.sort.CorneredSort;
import com.willowtreeapps.spruce.sort.DefaultSort;
import com.willowtreeapps.spruce.sort.LinearSort;
import com.willowtreeapps.spruce.sort.RadialSort;
import com.willowtreeapps.spruce.sort.RandomSort;

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
  public void StartAnimator(final int parentView, final ReadableMap sortWith, final ReadableMap animateWith, final Promise promise) {
    final Activity activity = this.getCurrentActivity();
    final ViewGroup targetView = activity.findViewById(parentView);

    if (targetView == null) return;

    activity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        Spruce.SpruceBuilder spruceAnimator = new Spruce.SpruceBuilder(targetView);

        String sortType = sortWith.getString("name");
        switch(sortType) {
          case "DefaultSort":
            long interObjectDelay = new Long(sortWith.getString("interObjectDelay")).longValue();

            spruceAnimator.sortWith(new DefaultSort(interObjectDelay));
            break;
          case "ContinuousSort":
            interObjectDelay = new Long(sortWith.getString("interObjectDelay")).longValue();
            boolean reversed = new Boolean(sortWith.getString("reversed")).booleanValue();
            String corner = sortWith.getString("corner");

            spruceAnimator.sortWith(new ContinuousSort(interObjectDelay, reversed, ContinuousSort.Position.valueOf(corner)));
            break;
          case "LinearSort":
            interObjectDelay = new Long(sortWith.getString("interObjectDelay")).longValue();
            reversed = new Boolean(sortWith.getString("reversed")).booleanValue();
            String direction = sortWith.getString("direction");

            spruceAnimator.sortWith(new LinearSort(interObjectDelay, reversed, LinearSort.Direction.valueOf(direction)));
            break;
          case "RadialSort":
            interObjectDelay = new Long(sortWith.getString("interObjectDelay")).longValue();
            reversed = new Boolean(sortWith.getString("reversed")).booleanValue();
            String position = sortWith.getString("position");

            spruceAnimator.sortWith(new RadialSort(interObjectDelay, reversed, RadialSort.Position.valueOf(position)));
            break;
          case "RandomSort":
            interObjectDelay = new Long(sortWith.getString("interObjectDelay")).longValue();

            spruceAnimator.sortWith(new RandomSort(interObjectDelay));
            break;
        }


        String animateType = animateWith.getString("name");
        long duration = new Long(animateWith.getString("duration")).longValue();

        switch (animateType) {
          case "fadeAwayAnimator":
            spruceAnimator.animateWith(DefaultAnimations.fadeAwayAnimator(targetView, duration));
            break;
          case "fadeInAnimator":
            spruceAnimator.animateWith(DefaultAnimations.fadeInAnimator(targetView, duration));
            break;
          case "growAnimator":
            spruceAnimator.animateWith(DefaultAnimations.growAnimator(targetView, duration));
            break;
          case "shrinkAnimator":
            spruceAnimator.animateWith(DefaultAnimations.shrinkAnimator(targetView, duration));
            break;
          case "spinAnimator":
            spruceAnimator.animateWith(DefaultAnimations.spinAnimator(targetView, duration));
            break;
        }

        spruceAnimator.start();
      }
    });
  }
}