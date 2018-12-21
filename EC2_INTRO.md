# EC2 Bare-Bones - Just a bit of house-keeping

### **Definition of terms**
- **Virtulization**
  - Let's keep it simple by saying virtualization is cloud resources that I connect to remotely

  - There's **MUCH** more to it all but for the sake of simplicity if I use any of the terms below I'm talking about the same thing unless otherwise noted:
  
    -- **'VPC'** (Virtual Private Cloud)

    -- **'VPS'** (Virtual Private Server or "cloud server")

    -- **'EC2'** (Elastic Compute Cloud)

    -- **'VM'** (Virtual Machine)

    -- **'container'**

    -- **'instance'**

- **EC2** - (Elastic Compute Cloud) Instance
  - We'll say our 'EC2' or 'instance' or 'server'...
  - The AWS implementation of a VPS
  - It's basically a remote computer that we'll deploy our app to (like running localhost on our system)
  - AWS will give us a public domain where we can make network requests and allow others to do so

- **EBS** - (Elastic Block Storage) Volume
  - We'll just refer to is a 'volume'
  - Our computer needs a hard drive and this is it
  - It's created automatically when we launch a new EC2 instance

- **Private Key**
  - `.pem` file that we'll use to authenticate and connect to our EC2 through `ssh`
  - Also known as a "key pair"
  - We have to make sure to download when we create it otherwise, it's gone forever
  - This should be kept in a safe place
  - Can be shared with others but there are better methods to allow others access which we won't cover here

- **Ubuntu**
  - This is the Linux version OS that we'll launch our instances as
  - The specific version will `Ubuntu Server 18.04 LTS (HVM)` which is in "Long Term Support"

- **SSH** - [SSH Documentation][ssh-connection]
  - Stands for "Secure Shell"
  - This is a networking protocol for making secure connections to remote, shell instances

- **SCP** - [SCP Documentation][scp-connection]
  - Stands for "Secure Copy Protocol"
  - This is a sub-protocol of `ssh` used to securely copy files and folders to remote instances

---

### **What is this all about?**
  - Some stuff I think will improve development experience for web developers across the stack
  - AWS has some great tools but sometimes the documentation can rabbit hole you
  - There are some great AWS demos out there but this is targeted toward web developers
  - There is a considerable amount of overlap with GCP, Azure, IBM, and other IaaS cloud providers
  - These are all meant to be as bare-bones and compartmentalized as possible, building toward more complex demos
  - I'm still very much in love with Heroku but that's a whole series in itself

---

### **Coverage -** *:latest*
1. **AWS EC2 (Linux, Ubuntu)** - recommended minimum to setup, run and teardown
2. **NodeJS** - running a Node app on you EC2 for the world to see (or not)

---

### **Coverage -** *:backlog*
1. **MongoDB** - running a database on and EC2 instance (for dev purposes)
2. **Docker** - Dockerizing you app and running them on AWS EC2 as well as other vendors
3. **Docker Compose** - composing multiple applications with Docker for dev and production purposes
4. **Kubernetes** - composing apps and services with Kubernetes and other orchestration tools
5. **Linux Servers** - deep diving into Linux servers, relevant to web developers

---

### **Next Steps**
*The documentation and videos are meant to go hand in hand. I recommend viewing them in-order the first time then reference as needed. However, you should still be able to jump modules if you feel comfortable.*

---
  - 1. [Intro to EC2][ec2-intro] <= (you are here)
  - 2. [Spinning up][ec2-spin-up]
  - 3. [Shutting down][ec2-shutdown]
  - 4. [Restarting][ec2-restart]
  - 5. [Connecting][ec2-connection]
  - 6. [Deploying apps][ec2-deploy]
  - 7. [Getting files into a cloud server][ec2-file-management]
  - 8. [Basic security of a cloud server][ec2-security]
  - 9. [Home][ec2-home]

[ec2-home]: ./
[ec2-intro]: ./EC2_INTRO.md
[ec2-spin-up]: ./EC2_SPIN_UP.md
[ec2-shutdown]: ./EC2_SHUTDOWN.md
[ec2-restart]: ./EC2_RESTART.md
[ec2-connection]: ./EC2_CONNECTION.md
[ec2-deploy]: ./EC2_DEPLOY.md
[ec2-file-management]: ./EC2_FILE_MANAGEMENT.md
[ec2-security]: ./EC2_BASIC_SECURITY.md

[ssh-connection]: https://help.ubuntu.com/community/SSH/OpenSSH/ConnectingTo
[scp-connection]: https://help.ubuntu.com/community/SSH/TransferFiles