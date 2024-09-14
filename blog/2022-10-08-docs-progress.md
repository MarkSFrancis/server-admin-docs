# Docs Progress

I've chosen to split the CLI out of this project, and make this project a standalone docs project.

This is because:

- A monorepo is overly complex for what I need
- I don't need to have the two tightly coupled in deployments
- I can now open-source these docs without needing to worry about my CLI

This marks a pivot for this site to now document thoughts and configuration around my server, rather than the CLI I use to automate repetitive tasks.

I will probably continue to document the thinking and changes I make in these blogs anyway, but that remains to be seen.

<!-- truncate -->

## CLI Progress

The CLI is now a private repository.

To conclude my [welcome blog](./2022-09-29-welcome/index.md), I ended up choosing commander.js for my command line app, and I'm loving it!

The features in that CLI are currently extremely minimal, so I haven't bothered documenting them yet. I may never need to, as commander.js has great support for `--help`-like docs, so I might just use that instead. I'm not sure yet.

At the time of writing, the CLI has the following commands:

```sh
server-cli docs # Opens this site
server-cli tv names lint # Fixes the tv file names
```

These commands are unstable and I'm likely to change them as I start to consider a design convention for my scripts
