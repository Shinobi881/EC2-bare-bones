# EC2 Web Server

### *1. Install NodeJS*
*From you ssh session in your EC2 make sure you are the root/super user (`sudo su`)*
 - a. Go here [Nodesource][install node on] and scroll to the section of `Node.js v10.x:`
 - b. As the root user run the 2 commands under `# Using Debian, as root`
 - c. Test out some simple node commands to make sure everything was installed correctly

### *2. Create a Simple Express Server*
*We'll be using `VIM` to create/edit files so know the basic commands to edit, save and exit*
 - a. Create project dir - `cd /home/ubuntu` => `mkdir ec2_demo`
 - b. Change into project dir, init npm and install express
   - `cd ec2_demo` => `npm init -y` => `npm i -S express`
 - c. Create server file - `vim index.js`
 - d. Copy server code from `ec2_demo_index.js` (local project) into `index.js` (ssh session), save and quit
 - e. Start your server (see below):
  - `node index.js` - when you run `control + c` you app will no longer be accessible
  - Background Server - `node index.js & disown` => `control + c` (see below to kill background process)
 - 
 - f. Copy the public DNS from the `Connect To Your Instance` popup and paste into the browser


### *3. Kill the server*
*Use this if you've decided to run the server in the background*
 - a. Run `lsof -i :80 (port server is running on)` - copy the `PID` from the output
 - b. Run `kill -9 [PID]` to kill the process running on that port

[install node on]: https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions