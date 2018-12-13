# EC2 Bare-Bones - From EC2 Instance to Cloud Web App Server
*Serving a Node app publicly, on your EC2 instance*

---

### **1. Install NodeJS**
*From you ssh session in your EC2 make sure you are the root/super user (`sudo su`)*
 - a. Go here [Nodesource][node-ubuntu] and scroll to the section of `Node.js v10.x:`
 - b. As the root user run the 2 commands under `# Using Debian, as root`
 - c. Test out some simple node commands to make sure everything was installed correctly

---

### **2. Create and run a Simple Express Server** - *Now it's actually a "server"*
*We'll be using `VIM` to create/edit files so know the basic commands to edit, save and exit*
 - a. Create project dir: - `cd /home/ubuntu` => `mkdir ec2_demo`
 - b. Change into project dir, init npm and install express:
   - `cd ec2_demo` => `npm init -y` => `npm i -S express`
 - c. Create server file: - `vim index.js`
 - d. Copy server code from `ec2_demo_index.js` (local project) into `index.js` (ssh session), save and quit
 - e. Start your server (see below):
  - `node index.js` - when you run `control + c` you app will no longer be accessible
  - Background Server: - `node index.js & disown` => `control + c` (see below to kill background process)
 - f. Copy the public DNS from the `Connect To Your Instance` popup and paste into the browser

---

### **3. Kill the server**
*Use this if you've decided to run the server in the background*
 - a. Run `lsof -i :80 (port server is running on)` - copy the `PID` from the output
 - b. Run `kill -9 [PID]` to kill the process running on that port

---

### **Next Steps**
*Now on to the really fun stuff*

  - 1. [Getting files into a cloud server][ec2-file-management]
  - 2. [Let's get some basic security out of the way][ec2-security]
  - 3. [Wrapping-up][ec2-wrap-up]

[ec2-file-management]: ./EC2_FILE_MANAGEMENT.md
[ec2-security]: ./EC2_BASIC_SECURITY.md
[ec2-wrap-up]: ./EC2_WRAP_UP.md
[node-ubuntu]: https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions