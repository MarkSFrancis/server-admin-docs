# NAS Replacement

After having had a great 10 years using my Fractal Node 304 case (with upgrades over the years including a new RAID controller), I have decided to switch to a purpose-built case with hot-swap bays.

Here's the hardward I'm currently running, which I intend to replace:

| Component                       | Model                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| Case                            | Fractal Design Node 804                                                                           |
| Motherboard                     | Gigabyte C246M-WU4 s1151 XEON                                                                     |
| CPU                             | Intel Core i3 9100 s1151                                                                          |
| RAM                             | 1x 16GB DDR4 2666MHz ECC RDIMM                                                                    |
| HDD                             | 7x Seagate ST2000DM008 Barracuda 2TB <br/> 1x Seagate IronWolf 4TB (an upgrade is in progress...) |
| Expansion card (HDD Controller) | BEYIMEI PCIe SATA Card (8 Port, 6 Gbit/s SATA 3.0, PCIe 4X)                                       |
| USB drive (hosts the OS)        | 16GB SANDisk SDCZ43-016G-G46                                                                      |

When doing this, I would also like to select a combination of software and hardware that will allow me to see clearly which disk needs to be replaced, when failure does happen.

I have, however, otherwise had a great experience with FreeNAS (and then TrueNAS Core) over the years, and am highly impressed with ZFS, so I'd like to keep as much other stuff the same as possible.

<!-- truncate -->

## TrueNAS Solutions

Initially, I wanted to buy directly from TrueNAS, partly because I love their software, and also because I wanted to say "thank you" for such a great 10 years of a homelab which, thanks to them, was completely free for me to run.

Unfortunately, I couldn't find any resellers in the UK who would sell to me (a non-business customer), so I was forced to look for alternatives.

## Synology

The biggest competitor on the market is obviously Synology. They offer fantastic cases, with feature rich software. Unfortunately, ZFS is not one of their supported data storage techniques. Instead, they offer the more moden BTRFS or classic ext4 filesystems, neither of which can compete with ZFS in terms of data integrity and recovery, which are the most important components for me and my data.

Reliability and repairability is far more important to me than performance. Unfortunately, Synology just couldn't meet my needs here.

## QNAP

Next up is QNAP, who offer QuTS hero, which supports ZFS. This was an excellent candidate and appeared to check all the boxes. So, I've purchased the [TS-873A](https://www.qnap.com/en/product/ts-873a), which has 8 bays and supports hot-swapping.

Unfortunately, the QNAP NAS is spec'd by default for [QTS](https://www.qnap.com/en-uk/operating-system/qts), which does not support ZFS. So I needed to update the components to be able to run QuTS hero.

## Additional Hardware

I also purchased:

- 8x Seagate BarraCuda 8TB HDDs (SATA 6 Gbit/s, 3.5", 5400RPM, 256MB Cache) ([ST8000DM004](https://www.amazon.co.uk/dp/B075WYBQXJ))
- 2x WD Red 500GB NVMe SSD (M.2 2280 NVMe) ([SN700](https://www.amazon.co.uk/dp/B09H1SCQFQ))
- 2x 16GB DDR4 unbuffered ECC RAM ([KSM26SED8/32HC](https://www.kingstonmemoryshop.co.uk/kingston-ksm26sed8-32hc-32gb-ddr4-2666mt-s-ecc-unbuffered-ram-memory-sodimm)). I found this by looking up the NAS on [Kingston's compatibility list](https://www.kingston.com/unitedkingdom/en/memory/search/model/103375/qnap-nas-servers-ts-873a)
