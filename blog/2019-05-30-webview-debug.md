---
slug: debug-webview
title: Debugging WebView on React Native Boilerplate
author: Kerem Çubuk
author_title: Front End Engineer @ Eteration
author_url: https://github.com/keremcubuk
author_image_url: https://avatars0.githubusercontent.com/u/29661833?s=460&u=bb798109798126f08c634e59efc47199cc21829d&v=4
tags: [react-native-boilerplate, debug, webview]
---


As you know, some of the applications used today are still web-based and with the spread of mobile applications, developers use webview applications to meet the needs of users. Therefore we will examine how to debug a react-native application that uses webview.

<!--truncate-->

Debugging webview on iOS and Android devices is a bit different and laborious. So we will examine two different platforms respectively. Let’s look at **iOS** platform first.

### **iOS Platform**

Webview, uses **Safari** browser on iOS operating system. In this way, it loads web pages. While debugging, we will use the safari application of our MacOs computer. For debbugging Webview contents in iOS simulator.

1. Open Safari application.

2. In Safari **Preferences**, click the **Advanced** tab. Enable checkbox** “Show Develop menu in menu bar”** at the bottom.

3. Start react-native app in iOS Simulator or device. Open webview screen on your app.

4. In **Safari** of computer. **Safari -> Develop -> [device name] -> [app name] -> [url — title]**

> **Note:** Web debugging on device. You must activate **Web Inspector** in your device. **Settings -> Safari -> Advanced -> Web Inspector**

**Android Platform**

In Android, webview is uses **Stock** or **Custom** browsers (Chrome, Samsung Internet etc.). Webview is debugging on `Chrome` browser of your computer.

1. You will need to add this little code block to your **MainApplication.java** to enable webview debug.

```java
import android.webkit.WebView;

@Override
public void onCreate() {
  super.onCreate();
  ...
  WebView.setWebContentsDebuggingEnabled(true);
}
```

2. After adding code, start your Android app.

3. Open Chrome browser. Follow these steps, **Chrome -> DevTools -> Menu (3 dots) -> More tools -> Remote devices**.

4. Select your Android device on the screen and select*** “Inspect”*** the webview page.

![](https://cdn-images-1.medium.com/max/3740/1*Q5Ed8gMlsAzGH7nwXCxs5Q.png)

**> Note: **When debugging on device you must enable USB debugging in your device settings. **Settings -> System -> About Phone -> Developer Options -> enable USB debugging**.

That’s it, you’re ready to debug 😃

Follow for more stories. ❤️