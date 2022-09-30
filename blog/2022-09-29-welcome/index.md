---
title: Welcome
authors: mark
---

Today I chose to create this project, with a mix of documentation and a CLI in a monorepo structure.
Hopefully, it'll prove easy to maintain.

## Initial Concerns

- Some of the links in here require the user to be on the same LAN as the server, as the services linked are not publicly exposed
- Monorepos can be a PITA
- I haven't done anything with the CLI yet

## Docusaurus

My first impressions are that docusaurus is solid.

- Extremely fast build times
- Great feature sets
- Easy learning curve
- Great docs

<details>
<summary>Docusaurus info / features</summary>

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

</details>

## What about?

[Chakra UI](https://chakra-ui.com/) would be a great addition IMO, but that's mostly just for custom components.
I'm not even sure I'll be creating enough custom components to justify it, so I've not added it yet

For the CLI, I'm not yet sure whether to use [oclif](https://oclif.io/) or [commander.js](https://github.com/tj/commander.js). I need to think on it a bit more. I've used oclif before and found it overly-abstracted. I've not used commander.js
