# EC2 Bare-Bones - Connecting to your EC2 Instance
*Now that our instance is up and running we want to actually make use of it*

---

### **SSH Tools**
*We'll connect to our instance using the `ssh` network protocol. There are different ways to do this depending on the OS we're using.*

1. **OSX** - Mac's have `ssh` baked into our native terminal so you'll just need to open one
2. **Linux** - if you're on Linux I assume you already know...(hint: go to your Linux CLi ^^^)
3. **Windows < 10 or w/o Linux for Windows** - You'll need to [download and install `Putty`][install-putty] or another `ssh` client
4. **Window 10 w/ Ubuntu** - Open an Ubuntu instance which should have ssh installed

---

### **Let's get setup**
*Open a terminal instance on you local system with `ssh` capability. NOTE: we'll discuss `scp` later on*
 - a. Get path to the `[key file name].pem` file and run `chmod 400 [path to file]`
 - b. From the EC2 Dashboard select the running instance and click `Connect`
 - c. From the popup, copy the ssh command under `Example:`

---

### **Let's connect using SSH** (Secure Shell)**
*We'll create an `ssh` connection to our running instance*
  - **Connection string:** `$ ssh -i "[path to .pem file]" ubuntu@[instance public address]`

  - **Let's break this down:**
    1. `ssh` - *Use the secure shell protocol*
    2. `-i "~/.ssh/ec2_demo_key_OR.pem"` - *Use and provide an identity file for authorization*
    3. `ubuntu@ec2-34-214-180-254.us-west-2.compute.amazonaws.com` - *Add the address to **YOUR** EC2 instance*

  - **Looks like:**

    `ssh -i "~/.ssh/ec2_demo_key_OR.pem" ubuntu@ec2-34-214-180-254.us-west-2.compute.amazonaws.com`

  - **Connect:**
    - Run the command above and type "yes" or "y" when prompted
    - Once connect and at the remote terminal prompt run `who am i` (just for verification)
    - Run `sudo su` ("do as super user, set user to super user")
    - From here navigate the file system just as you would from your Bash prompt
    - If you'd like you can create folders and play around a bit before moving on to the next module
---

### **Disconnecting from a remote session**
  - The easiest way is to just close the terminal window that is connected
  - Otherwise, keep running the `exit` command until you are back at your local system prompt

---

### **Next Steps**
*Now on to the really fun stuff*

  - 1. [Deploying apps to a cloud server][ec2-deploy]
  - 2. [Getting files into a cloud server][ec2-file-management]
  - 3. [Basic security of a cloud server][ec2-security]

[ec2-deploy]: ./EC2_DEPLOY.md
[ec2-file-management]: ./EC2_FILE_MANAGEMENT.md
[ec2-security]: ./EC2_BASIC_SECURITY.md

[install-putty]: https://www.ssh.com/ssh/putty/windows/#sec-Getting-and-installing