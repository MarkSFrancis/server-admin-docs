# Installing QuTS Hero

The initial setup was difficult due to poor documentation, but overall the flow was simple. 

The problem I personally found was that QuTS Hero keeps making trade-offs that I didn't like. It kept dumbing down the core components (like ZFS) to make it easier for newbies, at the expense of making it harder for people like myself who already knew what ZFS commands they wanted to run. It also made the UI overly complicated, with a full virtual desktop environment in the browser, instead of a traditional admin interface. 

<!-- truncate -->

# Insecure Defaults

I was shocked to find that the default settings for QuTS Hero were insecure. For example, the act of signing in with my QNAP login meant that the server was immediately exposed to the internet. They gave no security warnings or prompts to help me secure my device before doing this, which I found highly concerning. I'm not surprised that QNAP have a reputation for poor security, given this setup. 

[Source](https://www.techradar.com/pro/security/qnap-warns-its-nas-devices-are-facing-a-critical-security-flaw-but-a-patch-is-available-so-update-now)

# Abstraction

Often times, I found the wrong information was being hidden from me.

For example, I had to look up whether RAID6 was actually RAIDZ2 via a YouTube comment on a random QuTS tutorial video from the QNAP team. 

> **User** <br/>
> Hi, can I understand whether RAID6 in this context is Radiz2 or it is indeed a traditional RAID6?
> 
> **QNAP Team** <br/>
> It is definitely RAIDZ2, we just chose to use a more conventional naming convention, under the hood it is ZFS so will use RAIDZ2.
> 
> [Source (YouTube)](https://www.youtube.com/watch?v=sStdrQmWunA)

This is far from an ideal way to get information about the system. Particularly when ZFS is such a core part of both their marketing, and my use case. I also want to have a system that helps me debug and understand issues with the storage, and given it's immediately trying to abstract the core of the filesystem from me, it's not a great start.

# ZFS Versions

After installing QuTS Hero, I realised that the version of ZFS being ran by QuTS is significantly behind. This stopped me from restoring from a snapshot using the following command:

```sh
# Send the snapshot to SSH, then use SSH to stream in the snapshot to the zpool
zfs send tank@auto-2024-09-17_00-00 | ssh mark@192.168.0.185 zfs receive zpool2
```

I could've manually deactivated all the missing features, but there were close to 15 of them, and this was the last straw for me. 

Given the insecure defaults, plus the bad abstractions, and now the outdated ZFS version, I felt it was time to reconsider my options.

# TrueNAS Scale

I'd had a great experience with TrueNAS Core and considered switching to TrueNAS Scale for a while, but not been able to create a great migration strategy. It just so happens that the hardware I had installed for QuTS Hero was exactly what I needed for TrueNAS Scale. So, I'm currently reviewing whether to make the switch. 

The main issue will be that TrueNAS Scale cannot be installed headless, which means I will need to install a GPU, as there's no built-in GPU in the QNAP TS-873A. Without a GPU, I can't see the installation screen, hence the need for a headless installation. 

So first, I'll need to purchase a cheap GPU. 
