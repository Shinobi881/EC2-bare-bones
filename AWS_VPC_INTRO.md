# AWS Virtual Private Cloud Demo Introduction

<a name="definition-of-terms"/>

### **Definition of terms**
1. Virtual Private Cloud (VPC) - in general, we could consider this to describe cloud services in general but we'll use it interchageably with 'virtual private server' (VPS), and AWS' 'elastic compute container' (EC2) which is the **AWS** implemetation of a virtual private server. In short, if I say *'VPC'*, *'VPS'*, *'EC2'* or *'container'* I'm talking about the same thing unless otherwise indicated.

### **What is this all about**
  - Some stuff I think will improve development experience for web developers across the spectrum.
  - AWS has some great tools but sometime the documentation can rabbit hole you
  - There are some great AWS demos out there but this is targeted toward web devs
  - These are all meant to be as bare-bones and compartmentalized as possible, building toward more complex demos

### **What is covered (currently)**
1. AWS EC2 (Linux, Ubuntu) - recommended minimum to setup, run and teardown
2. NodeJS - running a Node app on you EC2 for the world to see (or not)

### **What I hope to cover (not currently covered)**
1. MongoDB - running a database on and EC2 instance (for dev purposes)
2. Docker - Dockerizing you app and running them on AWS EC2 as well as other vendors
3. Docker Compose - composing multiple applications with Docker for dev and production purposes
4. Kubernetes - composing apps and services with Kubernetes and other orchestration tools
5. Linux Servers - deep diving into Linux servers, relevant to web developers

### **Demos**
*The documentation and videos are meant to go hand in hand. View them in-order the first time and then use as reference as needed*
1. AWS EC2 -
  a. [Intro][]
  b. [Setup][https://github.com/Shinobi881/EC2-bare-bones/blob/master/EC2_SETUP.md]
  c. [Serve][https://github.com/Shinobi881/EC2-bare-bones/blob/master/EC2_SERVE.md]
  d. [Wrap-up][https://github.com/Shinobi881/EC2-bare-bones/blob/master/EC2_WRAP_UP.md]

[install node on]: https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions