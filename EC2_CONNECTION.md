### **3. Connect to server**
*- Open a terminal instance on you local system -*
 - a. Get path to the `ec2_demo.pem` file and run `chmod 400 [path to file]`
 - b. From the EC2 Dashboard select the running instance and click `Connect`
 - c. From the popup copy the ssh command under `Example:`
 - b. Run `ssh -i "ec2_demo.pem" ubuntu@[Public DNS]`
 - e. Run `sudo su` to set yourself as the `root` or `super user`
 - f. Navigate the instance as you would from `Bash` on you Mac or a linux system
---