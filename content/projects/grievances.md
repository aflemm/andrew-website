---
title: "Festivus Grievances"
date: 2021-12-02T11:50-05:00
draft: false
omit_header_text: true
type: "page"

typora-root-url: ../../../static
typora-copy-images-to: ../../../static/images/projects/grievances
---

{{< rawhtml >}}
<img src="/images/projects/grievances/grievances-icon.png" alt="Grievances icon" width="120" height="120" class="center">
{{< /rawhtml >}}

A silly app used to keep track of all the ways you've been disappointed by the people in your life. You enter grievances all year, and they remain hidden from everyone — even yourself. Keep all that anger bottled up until [Festivus dinner](https://en.wikipedia.org/wiki/Festivus) and the [airing of the grievances](https://en.wikipedia.org/wiki/Festivus#Airing_of_grievances)!

I originally built Festivus Grievances as a playground to learn SwiftUI, but it's become something I'm actually rather proud of 🙂.

This is by far the most feature-rich and polished grievance tracking app for Festivus *in the world*.

{{< rawhtml >}}
<a href="https://apps.apple.com/app/festivus-grievances/id1493124374">
	<img src="/images/projects/app-store.png" alt="Grievances screenshot" height="50" style="margin-left: auto; margin-right: auto;">
</a>
{{< /rawhtml >}}

## Screenshots

{{< rawhtml >}}
<div style="display: flex; flex-wrap: wrap; align-items:center">

	<img src="/images/projects/grievances/screenshot-countdown.png" alt="Grievances screenshot" height="600" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">
	
	<img src="/images/projects/grievances/screenshot-new-grievance.png" alt="Grievances screenshot" height="600" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">
	
	<img src="/images/projects/grievances/screenshot-grievances-list.png" alt="Grievances screenshot" height="600" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">
	
	<img src="/images/projects/grievances/screenshot-grievance-share.png" alt="Grievances screenshot" height="600" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">	
	
	<img src="/images/projects/grievances/screenshot-preferences.png" alt="Grievances screenshot" height="600" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">
	
	<img src="/images/projects/grievances/screenshot-widget.png" alt="Grievances screenshot" height="600" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">
	
	<img src="/images/projects/grievances/screenshot-watch-landing.png" alt="Grievances screenshot" height="350" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">

</div>
{{< /rawhtml >}}

# iOS Version History

---

## 2022.4 {#iOS-2022-4}

*Released February, 2022*

- New icon! ☺️
- New 'Festivus Countdown' widget
	- Shows the days-to-Festivus countdown and number of unaired grievances on your home screen
- Added name suggestions when creating your grievances
	- Shows recently entered names, filtered once you start typing
	- Preference to display a scrolling list, or one 'most likely' name
- Fancy new preferences screen
  - Provided more context for Fake Festivus and Notifications
  - Increased clarity of the 'Happy Festivus' notification (vs regular reminders)
- New preference to select your default anger level
- New custom-built 'anger level picker'
	- Larger emoji
	- Haptic feedback
	- No longer has the awkward 'background-on-background' problem of the built-in picker used previously
- Added 'person' and 'problem' icons in the new grievance screen
	- Small touch, but it looks niiiiiiiice
- Bundled the Apple Watch app directly into the iOS version

---

## 2022.3 {#iOS-2022-3}

*Released January, 2022*

- Fixes a rather annoying issue where upgrading to version 2022.2 from older versions of the app caused a failure to launch

---

## 2022.2 {#iOS-2022-2}

*Released January, 2022*

- Added image cards for grievance airing on Festivus, ready to be shared on Instagram or LinkedIn
- Added 'anger level' to each grievance, can now sort by 'anger' on Festivus
- Added keyboard shortcuts [cmd+n, cmd+enter, esc, cmd+,]
- Added keyboard tabbing between text fields in 'new grievance' view
- New preference to control the direction of date sorting
- Allowed fake Festivus to persist during session, only reset on fresh launch of the app
- Changed 'problem' text entry to multi-line, giving much more room for much more anger!
- Removed 'favourite' option from the grievance creation view (still present post-creation)
- Restored editing of grievances
- Updated layout of 'Not Festivus' view, and improved blur appearance

---

## 2022.1 {#iOS-2022-1}

*Released January, 2022*

### Changes

- Made an in-app purchase for *Fake Festivus*, allowing all grievances to be viewed on days other than Festivus
- Disables *Fake Festivus* automatically when resuming the app
- Added notifications for Festivus day, and reminders through the year to log grievances
- Added a special celebration to the main screen on Festivus
- Added a count of currently un-aired grievances to the main screen
- Added link to release notes directly from the preferences screen

### Fixes

- Resume hiding the grievances list *after* Festivus (i.e. December 24th) without requiring a fresh launch
- 'Days until Festivus' message updates if midnight is passed
---

## 2021.2 {#iOS-2021-2}

*Released December, 2021*

#### Additions:

- Added version number to preferences screen
- Added a link to andrewflemming.net

#### Fixed bugs:

- Fixed over-sized icons in navigation bars
- Wrong grievance text was being used when sharing a grievance
- When blur was being applied to hide grievances, blurred content was offset

---

## 2021.1 {#iOS-2021-1}

*Released November, 2021*

#### Fixed bugs:

- Grievances were not being automatically displayed on Festivus

---

## 2020.1 {#iOS-2020-1}

*Released February, 2020*

- Initial Release

