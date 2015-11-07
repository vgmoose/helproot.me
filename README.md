# helproot.me

[helproot.me](http://helproot.me) is an easy to use service that provides information on how to root various devices. The intent of it is to make it easy for app developers to communicate the most effective steps to their users to root their device if necessary.

### Usage
For example, if an app requires root, instead of just displaying a generic notice to the user and receiving a [negative review](https://play.google.com/store/apps/details?id=com.vgmoose.pausebutton&hl=en) on the Android Market, the developer can link to a page that may potentially contain very specific instructions to the user on how to root their device if they so choose.

```Java
String url = "http://helproot.me/" + android.os.Build.DEVICE
```

For example, on the "Nexus 6P" the url will be [helproot.me/grouper](http://helproot.me/grouper)

### Contributing
Feel free to apply instructions for a specific device via a pull request to this repo! If the device cannot be found, the 404 page will attempt to provide more generic instructions. Due to the vast number of android devices, however, specific instructions for the exact model of device is preferred.

### Goal
Let's make rooting a (relatively) painless thing to do for users who otherwise wouldn't know how to root their specific model of phone! 
