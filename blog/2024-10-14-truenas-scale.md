# TrueNAS Scale

Today I completed migrating over to TrueNAS Scale. Unfortunately I had issues making the file transfer over SSH, likely due to using passwords instead of SSH keys. So I transferred the files by hand instead.

<!-- truncate -->

As I did so, I identified the following corrupted files:
## Corrupted files

### TV series

- Fullmetal Alchemist - Brotherhood
- Harley Quinn
- Looney Tunes - Golden Collection
- Malcolm in the Middle (2000)
- The Fresh Prince of Bel-Air

### Movies

- Avatar: The Way of Water (2022) (36.16 GB)
- Mechanic: Resurrection (2016) (1.65 GB)
- Mission Impossible: Fallout (2018) (2.45 GB)
- Mission Impossible: Ghost Protocol (2011) (2.22 GB)
- Moana (2016) (1.79 GB)
- Pirates of the Caribbean - On Stranger Tides (2011) (2.28 GB)
- Safe House (2012) (1.92 GB)
- The Land Before Time II - The Great Valley Adventure (1994) (7.98 GB)
- Who Framed Roger Rabbit (1988) (5.07 GB)

# Switching servers

Basically all I did was swap IP addresses. Because the CIFS credentials were unchanged, all clients could connect the same way to the new server as they did with the old. 

To swap IP addresses, I changed everything at the DHCP-server level. 

1. Shut down `exeggcute`
	- This step may have been unnecessary, but I wanted to avoid open handles causing issues with `exeggcute`
1. Remove the static IP address assigned to `freenas`
1. Assign a static IP address to `truenas`
1. Restart both servers
	- Note that I had to force `freenas` to restart, which has happened before. I assume this is due to internal disk flushing failing to timeout, or residual open file handles
1. Restart `exeggcute`
1. Verify that the mount `/mnt/tank` was now mounted correctly + that all files were present as per the new share
1. Verify that various docker containers were running as expected by logging in to Plex

## Setting up alerts

When I set up the server, I also configured email alerts. When I tried sending them to my Gmail account, they weren't delivered. [This wasn't a problem unique to me](https://www.truenas.com/community/threads/are-you-having-trouble-getting-truenas-to-email-you-in-gmail.22517/). Luckily, TrueNAS has a workaround using Google OAuth, so I set that up. Now, it sends emails to me correctly! I did also have to sign in as the `admin` user (I normally don't use this account) and set the `admin` user's email address to mine. 

I haven't had anything go wrong yet, but all the test alerts seem to work correctly now. 

## Testing services

All services seem to be working perfectly now. I've kicked off a re-scan for a few apps to make sure that previously in-progress downloads or scans are restarted as necessary. 

## Updating documentation

The last remaining task has been to update my documentation here!
