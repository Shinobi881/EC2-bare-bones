# EC2 Setup
*Setting up, initializing and connecting to you EC2 instance*

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

### **Next Steps**
*It's recommended to follow the order but if you're brave enough you can jump to any of the relevant modules below*

- 1. [Shutting down][ec2-shutdown]
- 2. [Restarting][ec2-restart]
- 3. [Connecting][ec2-connection]
- 4. [Deploying apps][ec2-deploy]
- 5. [Getting files into a cloud server][ec2-file-management]
- 6. [Basic security of a cloud server][ec2-security]

[ec2-intro]: ./EC2_INTRO.md#definition-of-terms
[ec2-spin-up]: ./EC2_SPIN_UP.md
[ec2-shutdown]: ./EC2_SHUTDOWN.md
[ec2-restart]: ./EC2_RESTART.md
[ec2-connection]: ./EC2_CONNECTION.md.md
[ec2-deploy]: ./EC2_DEPLOY.md
[ec2-file-management]: ./EC2_FILE_MANAGEMENT.md
[ec2-security]: ./EC2_BASIC_SECURITY.md