
### **1. Basic Security**
*Move your public key and restrict network access to your server*
 - a. Move your `.pem` file off your desktop to `~/.ssh`
 - b. I'd recommend setting ssh access in inbound rules to `My IP`. You'll have to do this everytime your IP changes
 - c. You can give others access to you server by giving them the `.pem` file and IP access but it's a good idea to check out the AWS documentation on how to share access in a secure manner