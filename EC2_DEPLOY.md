# EC2 Bare-Bones - From EC2 Instance to Cloud Web App Server
*Serving a Node app publicly, on your EC2 instance*

---

### **Install NodeJS**
*From you ssh session in your EC2 make sure you are the root/super user (`sudo su`)*
 - a. Go here [Nodesource][node-ubuntu] and scroll to the section of `Node.js v10.x:`
 - b. As the root user run the 2 commands under `# Using Debian, as root`
 - c. Test out some simple node commands to make sure everything was installed correctly

### **Expose public `http` port**
*We need to expose a server port to handle public http requests*
  - a. From the `EC2 Dashboard` or sidebar select `Security Groups`
  - b. Select the `ec2_demo_security_group_OR` and click `Edit` in the footer menu
  - c. Click `Add Rule` in the popup menu
  - d. Set the `Type` dropdown to `HTTP` and click `Save`

---

### **Create and run a Simple Express Server** - *Now it's actually a "server"*
*We'll be using `VIM` to create/edit files so know the basic commands to edit, save and exit*
 - a. Create project dir: - `cd /home/ubuntu` => `mkdir ec2_demo`
 - b. Change into project dir, init npm and install express:
   - `cd ec2_demo` => `npm init -y` => `npm i -S express`
 - c. Create server file: - `vim index.js`
 - d. Copy server code from `ec2_demo_index.js` (local project) into `index.js` (ssh session), save and quit
 - e. Start your server: `node index.js`
 - f. Copy the public DNS from the `Connect To Your Instance` popup and paste into the browser
 - g. Kill the server: `control + c` this will kill the app. See below to run server in the background

---

### **Next Steps**
*Now on to the really fun stuff*

  - 1. [Deployment x-credit, important but not "bare-bones"][ec2-deploy-x-credit]
  - 2. [Getting files into a cloud server][ec2-file-management]
  - 3. [Let's get some basic security out of the way][ec2-security]
  - 4. [Wrapping-up][ec2-wrap-up]
  - 5. [Home][ec2-home]

[ec2-home]: https://github.com/Shinobi881/EC2-bare-bones
[ec2-deploy-x-credit]: ./EC2_DEPLOY_X_CREDIT.md
[ec2-file-management]: ./EC2_FILE_MANAGEMENT.md
[ec2-security]: ./EC2_BASIC_SECURITY.md
[ec2-wrap-up]: ./EC2_WRAP_UP.md
[node-ubuntu]: https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions