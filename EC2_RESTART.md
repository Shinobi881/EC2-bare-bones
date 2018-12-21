# EC2 Bare-Bones - Restarting your EC2 Instance
*Steps to restart our instance may vary depending on how we shut it down*

---

### **Stopped server instance**
  - **Volume still attached**
    1. Just select the server instance and start it

  - **Volume was detached**
    1. Re-attach the volume making sure to follow the attachment instructions carefully to use the correct root device name. It often defaults to a different one than used previously.
    2. Select the server instance and start

---

### **Terminated server instance**
*For simplicity's sake we'll just say that you should delete the previously used volume - or make sure it is detached and **NOT** `in-use` - and launch a new server instance. However, when launching a new server instance you can choose an already provisioned and `available` volume to attach it to. But we're not covering that here.*

---

### **Next Steps**
*Now on to the fun stuff*

  - 1. [Connecting/logging-in to instance][ec2-connection]
  - 2. [Deploying apps to a cloud server][ec2-deploy]
  - 3. [Getting files into a cloud server][ec2-file-management]
  - 4. [Basic security of a cloud server][ec2-security]
  - 5. [Home][ec2-home]

[ec2-home]: https://github.com/Shinobi881/EC2-bare-bones
[ec2-connection]: ./EC2_CONNECTION.md
[ec2-deploy]: ./EC2_DEPLOY.md
[ec2-file-management]: ./EC2_FILE_MANAGEMENT.md
[ec2-security]: ./EC2_BASIC_SECURITY.md