### **2. Cleanup and Teardown**
*Run `exit` (may have to run multiple time) to get out of ssh session*
 - a. Make sure to stop the server **and** the volume if you don't want to pay extra or eat free tier resources
 - b. Shutting down the volume will result in a loss of data
 - c. `Terminate` on the EC2 instance will stop and delete the server and the volume
 - d. If and when you restart the server your public DNS will change
 - e. **Always** make sure you're in the desired availability zone so your not surprised by usage fees
 - f. Go back and give meaningful names to the services if you plan to keep using them
 