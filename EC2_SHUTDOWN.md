# EC2 Bare-Bones - Cleanup and Teardown of our Instances and Volumes
*This is especially important if you have other instances you keep running and you don't want to incur additional charges.*

---

### **Shutting down or stopping an instance**
*In this case we're planning to use this same instance and it's data again but for now we want to stay in free usage.*

  - a. Make sure to stop the server **AND** the volume when done with your days work if you don't want to pay extra or eat free tier resources
  - b. Anything stored in server state/memory will be gone after stopping the instance (like killing your localhost server)
  - c. If and when you restart the server your public DNS will change
  - d. **Always** make sure you're in the desired availability zone so your not surprised by usage fees
  - e. Go back and give meaningful names to the services if you plan to keep using them
 
---

### **Terminating or deleting an instance or volume**
*If you're not planning to use these again*
  - `Terminate` on an EC2 instance that is attached to a volume will stop and delete the server and the volume, by default
  - You can also detach the current server instance from the volume and use it for another server
  - If the volume is detached from an instance you will have to delete it manually

---

### **Next Steps**
*If you plan to use the same instance an volume for the rest of the modules there's only one way to go*

- 1. [Restarting your EC2 instance][ec2-restart]
- 2. [Home][ec2-home]

[ec2-home]: ./
[ec2-restart]: ./EC2_RESTART.md
