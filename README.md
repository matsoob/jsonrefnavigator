# JSON Reference Navigator

This is a VSCode extension to allow you to navigate between local JSON files using [JSON References]((https://redocly.com/docs/resources/ref-guide/#json); this should be particularly useful for navigating [JSON schema](https://json-schema.org/) repositories (as they often make heavy use of JSON references), but maybe you'll find other uses too!

Currently this only supports a very limited syntax:
- Where the reference path is local
- Where the reference path is relative from the root of the VSCode workspace
- Where the reference is to a whole JSON object

I can look to support more types of navigation if this proves useful :-)

## Features

The plugin will give you a tooltip to navigate to the target JSON when hovering over a JSON Reference line within a JSON document.

![Before Hover](assets/garden.png)

![During Hover](assets/hovering.png)

![Navifated to Hover](assets/navigated.png)

## Requirements

Nothing really

## Known Issues

None yet, except for how limited the syntax support is:

Currently this only supports a very limited syntax:
- Where the reference path is local
- Where the reference path is relative from the root of the VSCode workspace
- Where the reference is to a whole JSON object

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of JSON Reference Navigator
