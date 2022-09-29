---
sidebar_position: 3
---

# Docker

I'm using [Docker Compose](https://docs.docker.com/compose/) to manage my running apps on my server. You can find the config I'm using on [GitHub](https://github.com/MarkSFrancis/docker-config).

That repository also includes a script to update the host's linux runtime and all containers.

```bash showLineNumbers title="/up.sh"
#!/bin/bash

# Requires sudo
# Updates the OS and all docker containers, and then removes legacy unused images
# Does not automatically restart the host OS if an update requires it

sudo apt-get update
sudo apt-get dist-upgrade -y
sudo apt-get autoremove -y
docker-compose pull
docker-compose up -d
docker system prune -a -f
```

:::caution
The setup I've used does not automatically install updates. This is to reduce unexpected downtime due to breaking changes in updates.

As a tradeoff, you **must** manually (and reguarly) update both the docker containers and the server itself. Failure to do so may introduce vulnerabilities.
:::
