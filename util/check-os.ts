
export const IOS_STORE_URL = "https://apps.apple.com/vi/app/myvng/id1574127420";
export const ANDROID_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.myvng.eportal.app.mobile&hl=vi&gl=US";

export default function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];

  let os: "MacOS" | "iOS" | "Android" | "Linux" | "Windows" | null = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "MacOS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}

export function checkDeepLink() {
  let os = getOS();

  if (os === "iOS") {
    /**Set destination path */
    window.location.href = `myVNG://my-staging.vng.vn`;

    setTimeout(() => {
      if (confirm( "You do not seem to have Your App installed, do you want to go download it now?")) {
        document.location.href = IOS_STORE_URL;
      }
    }, 500);
  }

  if (os === "Android") {
    /**Set destination path */
    // document.location.replace("intent://my-staging.vng.vn/#Intent;scheme=https;package=com.myvng.eportal.app.mobile;end");
    // exec(`adb shell "dumpsys package com.package.any.id | grep -i scheme'"`)
  }
}
