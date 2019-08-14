1.	Server URL or IP

	Public DNS(IPv4)[URL]: http://ec2-13-56-194-238.us-west-1.compute.amazonaws.com/
	IPv6 Public IP: http://13.56.194.238/

2. & 3. SSH username & SSH password or key.

	# change the permission file directroy to where you put the key
	# or if it's in your .ssh folder, run this.
	chmod 400 ~/.ssh/team6_csc648.pem 
	
	# To connect to aws instance
	SSH Command: ssh -i ~/.ssh/team6_csc648.pem ubuntu@ec2-13-56-194-238.us-west-1.compute.amazonaws.com

4.  Database URL or IP and port used.

	IP:		http://13.56.194.238/
	Port: 	3306

5.  Database username

	Username: testuser

6.	Database password

	password: team6

7.	Database name (basically the name that contains all your tables)

	csc648team6

######	INSTRUCTIONS	######

For steps 2 & 3

	move the key to your SSH folder running the followling Command

	# where ./ is the directory of this credentials folder
	mv ./csc648-team6.pem ~/.ssh

For steps 4 to 7

	In mysql workbench, 
		- create a new connection
		- Select, Standard(TCP/IP)
		- Hostname: 13.56.194.238
		- Username: testuser
		- Port: 3306
		- Password: team6
		- Save and close
		- Connect