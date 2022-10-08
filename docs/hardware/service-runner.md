# Service runner

My service runner is an Intel NUC, that hosts all my running containers and apps.

It mounts the NAS via a [file share](../file-share), and then mounts the relevant parts of that share into docker volumes for each of the containers.

## Hardware

My service runner is an Intel NUC, which is essentially a very small PC.

| Component              | Model                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Next unit of computing | Intel NUC 10 Frost Canyon NUC10i5FNHN i5-10210U 4.20GHz Barebone Mini Desktop PC |
| Internal storage       | Sabrent 256GB Rocket NVMe PCIe M.2 2280 Internal SSD                             |
| RAM                    | Crucial RAM CT16G4SFRA266 16GB DDR4                                              |

:::info
I'm not using ECC memory here like I was with the NAS. This is because I don't really care if this server has a critical memory error and crashes.

I've set it via the BIOS that it will automatically restart itself and its containers. It will also do this automatically after a temporary power outage
:::

## Software

99% of the software on this machine is just docker. Most of the magic is containers, and this is deliberate.

Containers get me:

- Opt-in updates, with easy fallback if a new version doesn't work as intended
- IaC (or SaC? I don't really know anymore with all these "as code" things)
- Great community support
- Battle-tested
- Fantastic security model

As a result, the software running on this NAS is just a host OS, docker services, an SSH server, and file system drivers to connect to the NAS.

The host OS is Ubuntu Server 22.04. I could've easily used Debian (which is what I use for WSL), or some other more server-oriented OS (like Fedora), but Ubuntu Server's setup was almost effortless, so I went for them. Ubuntu Server came with an SSH server installed.

It's worth noting that I'm not using Ubuntu Server's custom docker installer (which is presented to you during the installer process for Ubuntu Server). Instead, I used the process from [Docker's own documentation](https://docs.docker.com/engine/install/ubuntu/), which installs it as a standard package via `apt-get`.
