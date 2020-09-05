---
slug: local-notification
title: How to send Local Notification in React Native?
author: Kerem Çubuk
author_title: Front End Engineer @ Eteration
author_url: https://github.com/keremcubuk
author_image_url: https://avatars0.githubusercontent.com/u/29661833?s=460&u=bb798109798126f08c634e59efc47199cc21829d&v=4
tags: [push-notification, ios, android, react-native-boilerplate]
---


In react native applications notification is a hardest one to implement, but we will break this perception. In your device, notifications use native notification modules so that you should implement the configuration to your project. We will use the simpliest version of notification app.

<!--truncate-->

![](https://cdn-images-1.medium.com/max/2000/1*gh-BgrSnRgz2rxFhRuJ3NQ.png)

## How to implement and use?

Firstly, we must install two different `react-native-push-notification` library. If you ask why two packages? ios and android notification libraries seperated by [react-native-community](https://github.com/react-native-community) decision. Therefore, this packages work together but, you should implement seperately.

**Android**
```command
npm install https://github.com/zo0r/react-native-push-notification --save
```

**IOS**
```command
npm install https://github.com/react-native-community/react-native-push-notification-ios --save
```


We installed the libraries and now, we will implement them android and IOS in native side firstly.

## IOS implementation:

According to [React Native Community](https://github.com/react-native-community/react-native-push-notification-ios). After npm, install pods.

```command
cd ios
pod-install
```

**AppDelegate.m**

```objective-c
// .... Other Code Blocks
#import <RNCPushNotificationIOS.h>
#import <UserNotifications/UserNotifications.h>

NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];

  // define UNUserNotificationCenter
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    center.delegate = self;

    return YES;
}

// .... Other Code Blocks

// Required to register for notifications
- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings
{
  [RNCPushNotificationIOS didRegisterUserNotificationSettings:notificationSettings];
}
// Required for the localNotification event.
- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification
{
  [RNCPushNotificationIOS didReceiveLocalNotification:notification];
}

//Called when a notification is delivered to a foreground app.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
{
  NSLog(@"User Info : %@",notification.request.content.userInfo);
  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
}

@end
```


We are ready to use in react-native side. Before going to react-native side, let’s look at the Android native implementation.

## Android Implementation:

We are ready to create a new file which helps you send push notification via JavaScript. With this file, we will send notification to device notification center and show in app. Firstly, create a new file in your app which name is `LocalNotificationService.js` file under `src/utils` folder.

### Import Push Notification:

**LocalNotificationService.js**
```javascript
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';
```

**Create LocalNotificationService Class:**

This code block is helps to init `Notification Service` in your react native project.

```javascript
export default class LocalNotificationService {
    static init() {
        LocalNotificationService.onNotification = notification => {
            if (Platform.OS === 'android' && notification.subject != null && notification.subject !== '') {
                PushNotification.localNotification({
                    title: notification.subject,
                    message: notification.body,
                });
            }
        };
    }
}
```

And now, we should add configure function to connect native notification center of your device.

```javascript
static configure() {
    PushNotification.configure({
        onNotification: notification => {
            if (LocalNotificationService.onNotification) {
                LocalNotificationService.onNotification(notification);
            }
        },
        requestPermissions: true,
        popInitialNotification: true,
    });
}
```

This is the good one, are you ready for write to `sendLocalNotification()` function?

If your are answer is YES. Let’s create a new function inside the `LocalNotificationService` class.

```javascript
static sendLocalNotification(title, message) {
    PushNotification.localNotification({
        title, // (optional) // Your content title
        message, // (required) // Your content message. It is required for notification.
    });
}
```


As you see at the top, you should send two parameter all the time. One of them is `optional`, and the other one is `required`. This required parameter is `message`, message parameter shows the your content inside the notification message.

If you want to remove all notification. You can write this function, which name is `cancelAll()`.

```javascript
static cancelAll() {
    PushNotification.cancelAllLocalNotifications();
}
```




Final view of our `LocalNotificationService.js` file.

```javascript
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

export default class LocalNotificationService {
  static init() {
    LocalNotificationService.onNotification = notification => {
      if (Platform.OS === 'android' && notification.subject != null && notification.subject !== '') {
        PushNotification.localNotification({
          title: notification.subject,
          message: notification.body,
        });
      }
    };
  }


  static configure() {
    PushNotification.configure({
      onNotification: notification => {
        if (LocalNotificationService.onNotification) {
          LocalNotificationService.onNotification(notification);
        }
      },
      requestPermissions: true,
      popInitialNotification: true,
    });
  }

  static sendLocalNotification(title, message) {
    PushNotification.localNotification({
      title, // (optional) // Your content title
      message, // (required) // Your content message. It is required for notification.
    });
  }

  static cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }
}
```



We write our all functions are ready to use. We just import and call the function to send notification. I just write a new button in my component and implement the `LocalNotificationService.js`. You can add and import where you want.

### Import LocalNotificationService & Init

**myscreen.js**
```javascript
// Import LocalNotificationService:

import LocalNotificationService from '../utils/LocalNotificationService';

// Init LocalNotificationService

// Just init your project root one time.
LocalNotificationService.init();
LocalNotificationService.configure();
```

### Create a click function for send notification:

**myscreen.js**
```javascript
notify() {
    LocalNotificationService.sendLocalNotification('Notification Title', 'Notification Detail Content');
}
```

And use the function in a button like that:

```jsx
<Button title="Notify Me" onPress={() => this.notify()} />
```

Final result of my screen.

```jsx
import React from 'react';
import { View, Button, Text } from 'react-native';
import LocalNotificationService from '../../utils/LocalNotificationService';

// Just init your project root one time.
LocalNotificationService.init();
LocalNotificationService.configure();

export default class App extends React.Component {
  notify() {
    LocalNotificationService.sendLocalNotification('Notification Title', 'Notification Detail Content');
  }

  render() {
    return (
      <View>
        <Button title="Notify Me" onPress={() => this.notify()} />
      </View>
    );
  }
}
```

Now, click the Notify Me button and see the magic :D

![](https://cdn-images-1.medium.com/max/2000/0*rJw5TuudqKsRSdeA)

Thank you for read this blog. I shared my experience with you. And I will all the time. If you have a question, you can send a message or comment under this blog. Happy Coding ❤

*Originally published at [https://github.com](https://github.com/keremcubuk/docs/blob/master/React-Native/HowToArticles/RNLocalNotification/Readme.md).*
