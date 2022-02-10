---
title: "Sheet"
date: 2022-02-06
draft: false
omit_header_text: true
type: "page"


typora-copy-images-to: ../../../static/images/projects/sheet
typora-root-url: ../../static
---

{{< rawhtml >}}
<img src="/images/projects/sheet/sheet-icon.png" alt="Sheet icon" width="120" height="120" class="center">
{{< /rawhtml >}}

Sheet is a little app for macOS that lives in your menu bar, and provides an always-available place to type or paste some text. It supports global keyboard shortcuts, and maintains an iCloud-synced history.

{{< rawhtml >}}

<img src="/images/projects/sheet/sheet-screenshot-prefs-crop.png" alt="Sheet screenshot" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">

{{< /rawhtml >}}

Try out Sheet by joining the public beta:

{{< rawhtml >}}

<a href="https://testflight.apple.com/join/YxROrjRM">
	<img src="/images/projects/app-store.png" alt="App Store" height="40" style="margin-left: auto; margin-right: auto;"></a>

{{< /rawhtml >}}

# More Features

- Maintains a log of your history, so you can recover discarded sheets
- Syncs history to iCloud, which can be viewed and copied by the companion iOS app
- Exports the current sheet, or entire history to text files
- Keyboard shortcuts for most evey action
- Applescript automations
- Customizable:
    - Window size
    - Window behaviour
    - Font size
    - Font style
    - Keyboard shortcuts

# Tips and Tricks

ℹ️ Sheet will save your content to this history when you:

- Create a new sheet 
	- Toolbar 'new sheet' button
	- ⌘N keyboard shortcut
	- Custom global keyboard shortcuts
- Restore an item from history
- Select-all + delete all of the current text

ℹ️ Sheet will **not** save your content to history when you:

- Delete the current sheet
	- Toolbar 'delete' button
	- ⌘⌫ keyboard shortcut
- Delete the current text one character at a time (i.e. holding down delete key)
- Select-all + paste over the current text
	- (I'd like to change this behaviour in the future, but this is how it currently stands)

ℹ️ I really like [**Control+Option+Command+Space**] as a keyboard shortcut to hide/show Sheet. Just mash all the modifiers and hit space, boom! Sheet.

ℹ️ By default the toolbar is hidden, providing the 'don't think about it' vibe that Sheet is going for, but enabling the toolbar will surface some secret powers. Also, all of the keyboard shortcuts for the toolbar buttons still work while it is hidden.

{{< rawhtml >}}

<img src="/images/projects/sheet/sheet-toolbar.png" alt="Sheet Toolbar" 	style="margin-left: auto; margin-right: auto;">


{{< /rawhtml >}}

ℹ️ You can have macOS launch Sheet at login in System Preferences, under Users & Groups:

{{< rawhtml >}}

<div style="display: flex; flex-wrap: wrap; align-items:center">
<img src="/images/projects/sheet/sheet-open-at-login.png" alt="Sheet screenshot" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">
</div>

{{< /rawhtml >}}

## Keyboard Shortcuts

|      |                                                              |
| ---: | ------------------------------------------------------------ |
|   ⌘N | → New blank sheet (any existing content is saved to history) |
|   ⌘S | → Save current sheet as a text file                          |
|   ⌘⌫ | → Delete current sheet (content **not** saved to history)    |
|  ⇧⌘T | → Show/Hide Toolbar                                          |
|  ⌘ , | → Show/Hide Preferences                                      |
|   ⌘Y | → Show/Hide History                                          |
|   ⌘[ | → Back (to older item in history)                            |
|   ⌘] | → Forward (to newer item in history)                         |
|   ⌘1 | → Small window size                                          |
|   ⌘2 | → Medium window size                                         |
|   ⌘3 | → Large window size                                          |
|   ⌘H | → Hide Sheet window                                          |
|  ⇧⌘H | → Toggle 'remain on top' behaviour                           |
|   ⌘Q | → Quit Sheet                                                 |

In the preferences window you can also assign custom global keyboard shortcuts to

- Hide/Show Sheet
- Show Sheet with a new blank window
- Show Sheet with the current contents of your clipboard

# macOS Version History

---

## 2022.0 (11) {#macos-2022-0-b11}

First public beta

# iOS Version History

---

## 2022.0 (6) {#macos-2022-0-b6}

First public beta

