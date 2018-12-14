# EC2 Bare-Bones - Connecting to your EC2 Instance
*Now that our instance is up and running we want to actually make use of it*

---

### **SSH Tools**
*We'll connect to our instance using the `ssh` network protocol. There are different ways to do this depending on the OS we're using.*

1. **OSX** - Mac's have `ssh` baked into our native terminal so you'll just need to open one
2. **Linux** - if you're on Linux I assume you already know...(hint: go to your Linux CLi ^^^)
3. **Windows < 10 or w/o Ubuntu for Windows** - You'll need to [download][windows-ssh] `Putty` or another `ssh` client
4. **Window 10 w/ Ubuntu** - Open an Ubuntu instance which should have ssh installed

---

### **Let's Connect**
* Open a terminal instance on you local system with `ssh` capability. NOTE: we'll discuss `scp` later on*
 - a. Get path to the `[key file name].pem` file and run `chmod 400 [path to file]`
 - b. From the EC2 Dashboard select the running instance and click `Connect`
 - c. From the popup copy the ssh command under `Example:`
 - b. Run `ssh -i "[key file name].pem" ubuntu@[Public DNS]`
 - e. Run `sudo su` to set yourself as the `root` or `super user`
 - f. Navigate the instance as you would from `Bash` on you Mac or a linux system
 - g. To exit, you can just close the terminal window or run the `exit` at the prompt(s) until you're out

---

### **Next Steps**
*Now on to the really fun stuff*

  - 1. [Deploying apps to a cloud server][ec2-deploy]
  - 2. [Getting files into a cloud server][ec2-file-management]
  - 3. [Basic security of a cloud server][ec2-security]

[ec2-deploy]: ./EC2_DEPLOY.md
[ec2-file-management]: ./EC2_FILE_MANAGEMENT.md
[ec2-security]: ./EC2_BASIC_SECURITY.md

[windows-ssh][https://www.howtogeek.com/336775/how-to-enable-and-use-windows-10s-built-in-ssh-commands/]