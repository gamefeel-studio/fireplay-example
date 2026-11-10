# FirePlay Example

A demo app that uses every FirePlay module from Blueprint: one screen per Firebase / Google Play product, with an event log showing each node's result.

Requires the **FirePlay** plugin (sold on Fab) and Unreal Engine 5.8. **Download:** the `FirePlayExample_UE5.8.zip` file of the [latest release](https://github.com/gamefeel-studio/fireplay-example/releases/latest).

Step-by-step guide with screenshots: **https://gamefeel-studio.github.io/fireplay/#setup**

## Quick start (about 10 minutes)

1. **Install FirePlay** from Fab into Unreal Engine 5.8 (Fab > Library > Install to Engine).
2. **Open** `FirePlayExample.uproject`. The demo starts in `Content/Demo/Maps/L_Demo`.
3. **Create a Firebase project** at https://console.firebase.google.com and add an **Android app** with the package name `com.yourcompany.fireplayexample` (or your own: Project Settings > Platforms > Android > Android Package Name).
4. **Download `google-services.json`** and drop it in `Config/Firebase/`.
5. **Press Play.** Auth (anonymous), Firestore, Realtime Database, Storage and Remote Config work in the editor on Windows.

## Turn on each product

In the Firebase console:

| Product | What to do |
|---|---|
| Authentication | Sign-in method: enable **Anonymous** (and Email/Password, Google... as you like) |
| Firestore | Create a database, then publish `Backend/firestore.rules` |
| Realtime Database | Create a database, then publish `Backend/database.rules.json` |
| Storage | Create the default bucket, then publish `Backend/storage.rules` |
| Cloud Functions | Deploy `Backend/functions` (needs the Blaze plan) |
| Remote Config | Optional: add `welcome_text`, `max_lives`, `drop_rate`, `player_tier` or `store_layout` to override the demo's defaults |

With the Firebase CLI: set your project ID in `Backend/.firebaserc`, then run `firebase deploy` from `Backend/`.

## Android and Google Play

AdMob, Play Billing, Play Games, Cloud Messaging and in-app updates run on an Android device:

- **AdMob** works right away with Google's test ad units (`Content/Demo/Core/DT_DemoAdUnits`). Put your own app ID in Project Settings > Game > FirePlay and your units in that table before release.
- **Play Games, Billing, in-app updates** need your app on a Google Play test track. Add your leaderboard / event IDs to `Content/Demo/Core/DT_DemoPlayGames`.
- **Signing**: create a keystore and set it in Project Settings > Platforms > Android > Distribution Signing.

The guide covers each step: https://gamefeel-studio.github.io/fireplay/#setup

## What's inside

- `Content/Demo`: the demo (Blueprints only). `Core/BP_DemoGameInstance` wires the global events, `UI/Screens` holds one widget per module.
- `Backend`: Cloud Functions (`echo`, `serverTime`) and security rules for the demo's data.

Support: gamefeelstudio@gmail.com
