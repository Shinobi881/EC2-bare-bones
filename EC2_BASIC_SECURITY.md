# EC2 Bare-Bones - Basic Security for your Instances
*Do want the world having access to instances?*

---

### **Storing of our private key files**
*As you saw with the `chmod` command our `.pem` should be secured*
  - a. Move your `.pem` file off your desktop to `~/.ssh/[filename].pem` or your preferred, secured dir
  - b. If you want others on your team to have access to your EC2 instance I'd recommend follow the best practices outlined in the AWS documentation
  - c. As an absolute MVP you can share your `.pem` with those you want to give access to but make sure nothing important is on there

---

### **Remote access to your instance**
*Setting the inbound rules to make accessible or not*
  - HIGHLY RECOMMENDED - Set `ssh` access in inbound rules to `My IP`. You'll have to do this every time your IP changes
  - Scribe out on AWS documentation on access rules and providing team access to your instance (`IAM`)
  - Make sure your `http` rules are set the way you intended

---

### **Next Steps**
*Thanks for watching just a last few things to mention*

  - 1. [Wrapping up with basic security and clean-up][ec2-wrap-up]
  - 2. [Home][ec2-home]

[ec2-wrap-up]: ./EC2_WRAP_UP.md
[ec2-home]: https://github.com/Shinobi881/EC2-bare-bones
