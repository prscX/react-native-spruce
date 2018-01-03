
package ui.spruce;

import android.animation.Animator;
import android.animation.ObjectAnimator;
import android.app.Activity;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.views.scroll.ReactScrollView;
import com.willowtreeapps.spruce.Spruce;
import com.willowtreeapps.spruce.animation.DefaultAnimations;
import com.willowtreeapps.spruce.sort.ContinuousSort;
import com.willowtreeapps.spruce.sort.CorneredSort;
import com.willowtreeapps.spruce.sort.DefaultSort;
import com.willowtreeapps.spruce.sort.LinearSort;
import com.willowtreeapps.spruce.sort.RadialSort;
import com.willowtreeapps.spruce.sort.RandomSort;

import java.util.ArrayList;

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
  public void StartAnimator(final int parentView, final ReadableMap sortWith, final ReadableMap animateWith, final ReadableMap animator, final Promise promise) {
    final Activity activity = this.getCurrentActivity();
    final ViewGroup parentTargetView = activity.findViewById(parentView);

    if (parentTargetView == null) return;

    ViewGroup childTargetView = (ViewGroup) parentTargetView.getChildAt(0);
    if (childTargetView instanceof ReactScrollView) childTargetView = (ViewGroup) childTargetView.getChildAt(0);

    final ViewGroup targetView = (ViewGroup) childTargetView;

    activity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        parentTargetView.setVisibility(View.VISIBLE);

        Spruce.SpruceBuilder spruceAnimator = new Spruce.SpruceBuilder(targetView);

        String sortType = sortWith.getString("name");
        switch(sortType) {
          case "DefaultSort":
            long interObjectDelay = sortWith.getInt("interObjectDelay");

            spruceAnimator.sortWith(new DefaultSort(interObjectDelay));
            break;
          case "CorneredSort":
            interObjectDelay = sortWith.getInt("interObjectDelay");
            boolean reversed = sortWith.getBoolean("reversed");
            String corner = sortWith.getString("corner");

            spruceAnimator.sortWith(new CorneredSort(interObjectDelay, reversed, CorneredSort.Corner.valueOf(corner)));
            break;
          case "LinearSort":
            interObjectDelay = sortWith.getInt("interObjectDelay");
            reversed = sortWith.getBoolean("reversed");
            String direction = sortWith.getString("direction");

            spruceAnimator.sortWith(new LinearSort(interObjectDelay, reversed, LinearSort.Direction.valueOf(direction)));
            break;
          case "ContinuousSort":
            interObjectDelay = sortWith.getInt("interObjectDelay");
            reversed = sortWith.getBoolean("reversed");
            String position = sortWith.getString("position");

            spruceAnimator.sortWith(new ContinuousSort(interObjectDelay, reversed, RadialSort.Position.valueOf(position)));
            break;
          case "RadialSort":
            interObjectDelay = sortWith.getInt("interObjectDelay");
            reversed = sortWith.getBoolean("reversed");
            position = sortWith.getString("position");

            spruceAnimator.sortWith(new RadialSort(interObjectDelay, reversed, RadialSort.Position.valueOf(position)));
            break;
          case "RandomSort":
            interObjectDelay = sortWith.getInt("interObjectDelay");

            spruceAnimator.sortWith(new RandomSort(interObjectDelay));
            break;
        }


        String animateType = animateWith.getString("name");
        long duration = animateWith.getInt("duration");

        Animator finalAnimator = null;
        if (animator != null) {
          ReadableArray rnValues = animator.getArray("values");
          float[] values = new float[rnValues.size()];

          for (int index = 0; index < rnValues.size();index++) {
            values[index] = rnValues.getInt(index);
          }

          finalAnimator = ObjectAnimator.ofFloat(targetView, animator.getString("propertyName"), values).setDuration(animator.getInt("duration"));
        }

        switch (animateType) {
          case "fadeAwayAnimator":
            if (finalAnimator == null) {
              spruceAnimator.animateWith(DefaultAnimations.fadeAwayAnimator(targetView, duration));
            } else {
              spruceAnimator.animateWith(DefaultAnimations.fadeAwayAnimator(targetView, duration), finalAnimator);
            }

            break;
          case "fadeInAnimator":
            if (finalAnimator == null) {
              spruceAnimator.animateWith(DefaultAnimations.fadeInAnimator(targetView, duration));
            } else {
              spruceAnimator.animateWith(DefaultAnimations.fadeInAnimator(targetView, duration), finalAnimator);
            }

            break;
          case "growAnimator":
            if (finalAnimator == null) {
              spruceAnimator.animateWith(DefaultAnimations.growAnimator(targetView, duration));
            } else {
              spruceAnimator.animateWith(DefaultAnimations.growAnimator(targetView, duration), finalAnimator);
            }

            break;
          case "shrinkAnimator":
            if (finalAnimator == null) {
              spruceAnimator.animateWith(DefaultAnimations.shrinkAnimator(targetView, duration));
            } else {
              spruceAnimator.animateWith(DefaultAnimations.shrinkAnimator(targetView, duration), finalAnimator);
            }

            break;
          case "spinAnimator":
            if (finalAnimator == null) {
              spruceAnimator.animateWith(DefaultAnimations.spinAnimator(targetView, duration));
            } else {
              spruceAnimator.animateWith(DefaultAnimations.spinAnimator(targetView, duration), finalAnimator);
            }

            break;
        }

        spruceAnimator.start();
      }
    });
  }
}