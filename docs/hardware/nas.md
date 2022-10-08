# NAS

My NAS (Network Attached Storage) compute unit is custom built.

## Why not use an off-the-shelf NAS?

Synology make great NAS boxes, and they're easy to get started with. If I hadn't discovered and fallen in love with ZFS, I'd probably be running a Synology NAS today.

Simply put, I really like ZFS, and there aren't any off-the-shelf NAS providers that can run ZFS without costing far more than a custom NAS would.

I've been able to preserve and continue running clusters with multiple failed drives (higher than the critical limit) and partially failing drives, and still continue to access the remaining, still valid files and data in the disk array. There are very few other RAID systems that can handle such an incredibly high level of resilience.

If you want to find out more about ZFS, I strongly recommend checking out the excellent video from YouTube channel [Level1Techs](https://www.youtube.com/watch?v=lsFDp-W1Ks0).

The main downside of ZFS (and why so few vendors can run it on their off-the-shelf NAS) is that it is extremely RAM hungry. The general recommendation is around 1GB of RAM per 1TB of storage. If it wasn't for this extreme requirement, I'd probably be running ZFS on a Synology NAS today.

## Why not use a raspberry pi?

Unfortunately, the lack of [ECC (Error Correcting Memory)](https://en.wikipedia.org/wiki/ECC) made the pi a poor choice for me. I also wanted the freedom to grow my storage much larger than only 8TB, which is the maximum I'd be able to squeeze (without sacrificing significant performance) from a raspberry pi.

## Hardware

:::info
Check out the [TrueNAS CORE docs](https://www.truenas.com/docs/core/gettingstarted/corehardwareguide/) for its hardware requirements
:::

| Component                       | Model                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| Case                            | Fractal Design Node 804                                                                           |
| Motherboard                     | Gigabyte C246M-WU4 s1151 XEON                                                                     |
| CPU                             | Intel Core i3 9100 s1151                                                                          |
| RAM                             | 1x 16GB DDR4 2666MHz ECC RDIMM                                                                    |
| HDD                             | 7x Seagate ST2000DM008 Barracuda 2TB <br/> 1x Seagate IronWolf 4TB (an upgrade is in progress...) |
| Expansion card (HDD Controller) | BEYIMEI PCIe SATA Card (8 Port, 6 Gbit/s SATA 3.0, PCIe 4X)                                       |
| USB drive (hosts the OS)        | 16GB SANDisk SDCZ43-016G-G46                                                                      |

## Software

I'm running [TrueNAS CORE](https://www.truenas.com/docs/core/).

### Why TrueNAS Core?

- Open Source
- Free to use for personal and commercial use cases / data
- Great community support
- ZFS-by-default
- Extremely stable, with years of heritage
- Actively maintained, with a company dedicated to building custom hardware for it
- The OS itself can run from a USB stick, so there's no wasted pool space

:::info
At some point, I intend to pivot to running [TrueNAS SCALE](https://www.truenas.com/docs/scale/)

- I think it's the future for the TrueNAS company
- I'm much more familiar with Linux than FreeBSD (though FreeBSD is an excellent OS in its own right)
- TrueNAS SCALE is much easier to scale horizontally (hence the name), so I can add more nodes in future, instead of a single point of failure
- Unfortunately, TrueNAS SCALE has a much higher amount of disk I/O on the host disk, so I'd no longer be able to run the OS from a USB stick as I do now
  :::
