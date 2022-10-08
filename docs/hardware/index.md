# Hardware

I have split my home labs across 2 different compute units. One is responsible for storage (like a NAS), and the other is responsible for managing containers and services.

## Why the split?

I could have easily ran both NAS and storage on a thin VM runner like VMWare's vSphere Hypervisor, or hosted the containers in a NAS host (like running containers within TrueNAS, or vice versa). So why not?

Each of these problems have very different hardware requirements. I was also happy compromising in different areas for hardware in each scenario.

Initially, I ran everything on a single box with hard drives only. This was extremely poorly optimised for the high level of random IOPS that most OS need, and caused serious performance problems. ZFS is poorly optimised for such workloads - especially on cheap HDDs. I also regularly ran out of RAM because ZFS will use all the RAM it can as cache, but so did most of my running apps. I also wanted a GPU for h.264 and h.265 decoding / encoding.

I started to wonder if there was a way to use dedicated storage (both persistent and non-persistent) for the containers, and then I began to realise that I might as well offload it to a separate machine.

So, I now have two separate machines, each with their own hardware, OS, and software stack. You can find out about each of them in this section.
