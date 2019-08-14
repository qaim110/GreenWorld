1. On the 'Welcome to MySQL Workbench' homescreen, click on '+' button next to MySQL Connections.
2. Connection Name: localhost
3. Leave everything else default, should be Hostname: 127.0.0.1 Port: 3306 Username: root; click ok
4. Click on newly created localhost connection 
5. On leftside panel, click on 'Data Import/Restore' under Management
6. Select 'Import from Dump Project Folder' and select the folder inside the dump directory inside the database folder I pushed 
7. Under 'Select Database Objects to Import', click on 'Vertical Prototype', and 'postings' should appear on the right panel, ensure both are checked, and click Start Import
8. On the left hand side panel from step 5, switch over to Schemas at the top and you should see 'VerticalPrototype
9. To view data, expand Tables, right click postings and select 'Select Rows'