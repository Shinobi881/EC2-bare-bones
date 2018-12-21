# EC2 Bare-Bones - Deployment extra credit
*This part is not considered "bare-bones" but keeping your site deployed continuously and exposing multiple ports is important for deployment purposes*

___


### **Run the server as background process**
*We need a way to keep the server running after closing an ssh session*
 - a. Use the `disown` option: `node index.js & disown` => `ctrl + c`
 - b. See below on how to kill the background server process


### **Kill the background server/process**
*Since we're detached from the server instance we need to know how to find the process and kill it*
 - a. Run `lsof -i :80 (port server is running on)` - copy the `PID` from the output
 - b. Run `kill -9 [PID]` to kill the process running on that port

---

### **Expose multiple ports for connection**
*We can also expose multiple ports for requests*
- a. From the `EC2 Dashboard` or sidebar select `Security Groups`
- b. Select the `ec2-demo-security-group` and click `Edit` in the footer menu
- c. Click `Add Rule` in the popup menu
- d. Set the `Type` dropdown to `Custom TCP`
- e. Set the `Port Range` to `5000`
  - NOTE: this can be any valid TCP port number range ex: `0-5000`
- f. Click `Save`
- g. You can now access that port from your `http://[aws public dns]:5000` (if you run a server on that port)

---

### **Next Steps**
*How do I handle files and folders outside of an `.ssh` session?*

  - 1. [Getting files into a cloud server][ec2-file-management]
  - 2. [Let's get some basic security out of the way][ec2-security]
  - 3. [Wrapping-up][ec2-wrap-up]
  - 4. [Home][ec2-home]

[ec2-home]: https://github.com/Shinobi881/EC2-bare-bones
[ec2-file-management]: ./EC2_FILE_MANAGEMENT.md
[ec2-security]: ./EC2_BASIC_SECURITY.md
[ec2-wrap-up]: ./EC2_WRAP_UP.md
[node-ubuntu]: https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions
