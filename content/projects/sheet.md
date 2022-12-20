---
title: "Sheet"
date: 2022-02-06
draft: false
omit_header_text: true
type: "page"

typora-copy-images-to: ../../static/images/projects/sheet
typora-root-url: ../../static
---

{{< rawhtml >}}
<img src="/images/projects/sheet/sheet-icon.png" alt="Sheet icon" width="120" height="120" class="center">
{{< /rawhtml >}}

Sheet is a little app for macOS that lives in your menu bar, and provides an always-available place to type or paste some text. It supports global keyboard shortcuts, and maintains an iCloud-synced history.

{{< rawhtml >}}

<img src="/images/projects/sheet/sheet-screenshot-prefs-crop.png" alt="Sheet screenshot" style="margin-left: auto; margin-right: auto; margin-bottom: 1em;">

{{< /rawhtml >}}

[Try out Sheet by joining the public beta](https://testflight.apple.com/join/YxROrjRM)

{{< rawhtml >}}

<a href="https://testflight.apple.com/join/YxROrjRM">
	<img src="/images/projects/app-store.png" alt="App Store" height="40" style="margin-left: auto; margin-right: auto;"></a>

{{< /rawhtml >}}

# Features

- Maintains a searchable history, so you can recover discarded sheets
- Syncs history to iCloud, which can be viewed and copied by the companion iOS app
- Exports the current sheet, or entire history to text files
- Keyboard shortcuts for most evey action
- AppleScript automations
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
	- Custom global keyboard shortcuts for new-blank and new-with-clipboard
	- Applescript NewText command
- Restore an item from history
- Select-all + delete all of the current text

ℹ️ Sheet will **not** save your content to history when you:

- Delete the current sheet
	- Toolbar 'delete' button
	- ⌘⌫ keyboard shortcut
- Delete the current text one character at a time (i.e. holding down delete key)
- Select-all + paste over the current text
	- (I'd like to change this behaviour in the future, but this is how it currently stands)

ℹ️ By default the toolbar is hidden, providing the 'don't think about it' vibe that Sheet is going for, but enabling the toolbar will surface some secret powers. (Hint: all of the keyboard shortcuts for the toolbar buttons still work while it is hidden)

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

| Shortcut | Command                                                    |
| -------: | :--------------------------------------------------------- |
|       ⌘N | New blank sheet (any existing content is saved to history) |
|       ⌘S | Save current sheet as a text file                          |
|      ⇧⌘C | Copy current sheet to clipboard                            |
|       ⌘⌫ | Delete current sheet (content **not** saved to history)    |
|       ⌘/ | Pin/Un-pin current sheet                                   |
|      ⇧⌘T | Show/Hide Toolbar                                          |
|      ⌘ , | Show/Hide Preferences                                      |
|       ⌘Y | Show/Hide History                                          |
|       ⌘[ | Back (to older item in history)                            |
|       ⌘] | Forward (to newer item in history)                         |
|       ⌘1 | Small window size                                          |
|       ⌘2 | Medium window size                                         |
|       ⌘3 | Large window size                                          |
|       ⌘H | Hide Sheet window                                          |
|      ⇧⌘H | Toggle 'remain on top' behaviour                           |
|       ⌘Q | Quit Sheet                                                 |

In the preferences window you can also assign custom global keyboard shortcuts to:

- Hide/Show Sheet (I use ^⌥⌘␣)
- Show Sheet with a new blank window (I use ^⌥⌘N)
- Show Sheet with the current contents of your clipboard (I use ^⌥⌘V)
- Show pinned sheet (I use ^⌥⌘/)

(I like `Control+Option+Command` for global custom keyboard shortcuts — there's not much thought required. Just mash all the modifiers)

# AppleScript

| Command          | Parameters    | Result                                                       |
| :--------------- | :------------ | :----------------------------------------------------------- |
| ToggleVisibility | ——            | Hides/Shows the Sheet window                                 |
| Show             | ——            | Shows the Sheet window                                       |
| Hide             | ——            | Hides the Sheet window                                       |
| GetText          | ——            | Returns the current content of the Sheet window              |
| NewText          | with "String" | Saves any current content to the history, populates Sheet with the passed string. (String must be present, but **can** be empty) |

![Sheet Applescript Example](/images/projects/sheet/sheet-applescript-example.png)

# macOS Version History

---
## 2022.0 (16) {#macos-2022-0-b16}
- Added an icon to the top right of the pinned sheet

## 2022.0 (14) {#macos-2022-0-b14}
- Incremented build number

## 2022.0 (13) {#macos-2022-0-b13}
- Added ‘pinned’ sheet. Quick access to a frequently used sheet (like a to-do list).
- New global keyboard shortcut to show the pinned sheet.

## 2022.0 (12) {#macos-2022-0-b12}

First public beta 😊

# iOS Version History

---

## 2022.0 (7) {#ios-2022-0-b7}

First public beta 😊
- View your Sheet history
- Copy a sheet to your clipboard
- Paste current clipboard as a new history item