# Bare-Bones AWS VPS (EC2) Demo

### **1. Create SSH Key**
*- From `EC2 Dashboard` in the AWS console (click on the `EC2` link) -*
 - a. Select desired region from top right; `Oregon` for me
 - b. Select `Key Pairs` under `Network & Security` from the sidebar
 - c. Select `Create Key Pair` from top and give it a unique name; `ec2_demo` for me
 - d. Save to your `Desktop` **for now**
---
### **2. Launch Server (EC2) instance**
*- Select the `instances` view from the EC2 Dashboard sidebar -*
 - a. Click `Launch Instance`
 - b. `Select`, `Ubuntu Server 18.04 LTS (HVM), SSD Volume Type`
 - c. Click the `Next:...` in the bottom right until you get to `Step 6: Configure Security Group`
 - d. Make sure `Create a new security group` is selcted
 - e. In the `Type` dropdown select SSH and set the `Source` dropdown to `My IP`
 - f. `Add Rule` and select HTTP as the type
 - g. `Review and Launch` => `Launch`
 - h. On the `Select an existing key pair...` popup, make sure that `ec2_demo` is selected, `Launch Instances`
---
### **3. Connect to server**
*- Open a terminal instance on you local system -*
 - a. Get path to the `ec2_demo.pem` file and run `chmod 400 [path to file]`
 - b. From the EC2 Dashboard select the running instance and click `Connect`
 - c. From the popup copy the ssh command under `Example:`
 - b. Run `ssh -i "ec2_demo.pem" ubuntu@[Public DNS]`
 - e. Run `sudo su` to set yourself as the `root` or `super user`
 - f. Navigate the instance as you would from `Bash` on you Mac or a linux system
---

### **Next Steps**
1. [Serve and app on your EC2 instance][serve-app]

[serve-app]