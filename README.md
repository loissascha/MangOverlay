# MangOverlay

## About

MangOverlay is an open source GUI app for managing your [MangoHud](https://github.com/flightlessmango/MangoHud) configuration. It aims to provide as much flexibility with it's settings as possible. 



## Installation

You can find installation instructions on the [Releases](https://github.com/loissascha/MangOverlay/releases) page.


![General Settings](readme/generalSettings.png)
![Metrics Settings](readme/metricsSettings.png)
![Order Settings](readme/orderSettings.png)
![Advanced Config](readme/advancedConfig.png)

## Building from source

This project was created using [wails.io](https://wails.io). Follow their [Getting started](https://wails.io/docs/gettingstarted/installation) guide to setup everything you need. 
Once everything is installed, check your dependencies with `wails doctor` and make sure you install all missing dependencies.
If everything's installed, you can build this project by running `wails build` (or `wails build -tags webkit2_41` if you prefer building it for webkit2 41) inside the root directory. The finished build can be found inside the build/bin directory.
