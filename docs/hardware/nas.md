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
Check out the [TrueNAS SCALE docs](https://www.truenas.com/docs/scale/gettingstarted/scalehardwareguide/) for its hardware requirements
:::

| Component                   | Model                                                                                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Case                        | QNAP TS-873A 804                                                                                                                                                     |
| RAM                         | 2x 16GB DDR4 unbuffered ECC RAM ([KSM26SED8/32HC](https://www.kingstonmemoryshop.co.uk/kingston-ksm26sed8-32hc-32gb-ddr4-2666mt-s-ecc-unbuffered-ram-memory-sodimm)) |
| HDDs (hosts the main share) | 8x Seagate BarraCuda 8TB HDDs (SATA 6 Gbit/s, 3.5", 5400RPM, 256MB Cache) ([ST8000DM004](https://www.amazon.co.uk/dp/B075WYBQXJ))                                    |
| SSDs (hosts the OS)         | 2x WD Red 500GB NVMe SSD (M.2 2280 NVMe) ([SN700](https://www.amazon.co.uk/dp/B09H1SCQFQ))                                                                           |

For more information on the hardware choices, check out [the NAS Replacement blog post](/blog/2024/08/31/qnap-purchase).

## Software

I'm running [TrueNAS SCALE](https://www.truenas.com/docs/scale/).

### Why TrueNAS Scale?

- Open Source
- Free to use for personal and commercial use cases / data
- Great community support
- ZFS-by-default
- Lunix-based
- Extremely stable, with years of heritage
- Actively maintained, with a company dedicated to building custom hardware for it
