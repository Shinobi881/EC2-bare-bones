# EC2 Bare-Bones - Copying files/folders to an instance using SCP
*`SCP` stands for Secure Copy Protocol and is a compliment to `ssh` for copying resources from a local system to a running instance*

---

### **Using SCP** (Secure Copy Protocol)
*Similar to how we connect with `ssh` we can copy files and folders to our running Ubuntu instance using `scp`*
- We'll need to make sure we `scp` ability before copying artifacts. SCP is most likely included with the tools you're using for `ssh`. 
  - *See:* [EC2_CONNECTION.md for more info.][ec2-connection]
- [Ubuntu SCP documentation will show the general structure of an `scp` request][ubuntu-scp-docs]

---

### **Copying files**
*Secure copying files to your EC2 instance*
- **Copying a file:** `$ scp -i "[path to .pem file]" [source file path] [ssh address to YOUR instance]:[destination dir]`

- **Let's break this down a bit:**

  1. `$ scp -i` - *Use the scp protocol providing an identity file `-i` for authentication*
  2. `"~/.ssh/ec2_demo_key_OR.pem"` - *In quotes, provide the path (absolute || relative) to **YOUR** `.pem` file*
  3. `./ec2_demo_index.js` - *The path and name of the file you want to copy*
  4. `ubuntu@ec2-34-214-180-254.us-west-2.compute.amazonaws.com` - *The `ssh` address to **YOUR** EC2 Ubuntu instance*
  5. `:~` - *The folder on your instance you want to copy to*

- **Looks like:**

  `$ scp -i "~/.ssh/ec2_demo_key_OR.pem" ./ec2_demo_index.js ubuntu@ec2-34-214-180-254.us-west-2.compute.amazonaws.com:~`


---

### **Copying folders**
*Pretty much the same as copying a file but with a couple changes/additions*
  - **Copying a folder:** `$ scp -i "[path to .pem file]" -r [source folder path] [ssh address to YOUR instance]:[destination dir]`

  - **Let's break this down a bit:**
    1. `-r` (recursively) - *Add this just before including the path to your folder*
    2. *Replace the path to your file with the path to your source folder*

- **Looks like:**

  `$ scp -i "~/.ssh/ec2_demo_key_OR.pem" -r ./ec2_demo_folder ubuntu@ec2-34-214-180-254.us-west-2.compute.amazonaws.com:~`

---

### **Next Steps**
*It's a good idea configure some very basic security*

  - 1. [Let's get some basic security out of the way][ec2-security]
  - 2. [Wrapping-up][ec2-wrap-up]
  - 3. [Home][ec2-home]

[ec2-home]: https://github.com/Shinobi881/EC2-bare-bones
[ec2-security]: ./EC2_BASIC_SECURITY.md
[ec2-wrap-up]: ./EC2_WRAP_UP.md

[ubuntu-scp-docs]: https://help.ubuntu.com/community/SSH/TransferFiles
[ec2-connection]: ./EC2_CONNECTION.md