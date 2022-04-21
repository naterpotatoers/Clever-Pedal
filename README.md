# Clever-Pedal
[HackDavis 2022 DevPost](https://devpost.com/software/clever-pedal?ref_content=user-portfolio&ref_feature=in_progress)  
[Example of Detection System](https://www.youtube.com/watch?v=2MDFLkDRcWE)


## Inspiration
Living in Davis, we are surrounded by bikers risking their lives everyday by braving the roads with ignorant drivers. We can't force everyone to retake driver's education, so we decided to give bikers the tools they need to insure their safety. Additionally, bikers can be in dangerous situations by traveling alone. If they have an injury or feel threatened they should have a quick way to alert someone of their situation. 

## What it does
Clever Pedal utilizes smart technology to identify and detect cars that are dangerously close to a biker. It alerts the rider by flashing a light either on the left or right side of the indication board corresponding to the location of the vehicle. There is also a speaker that will beep in case the visual cues are missed. In the event that a biker feels endangered, they can click the button on the board and a text message will be sent to their emergency contact as an alarm sounds scaring away attackers or alerting people nearby they are hurt. 

## How we built it
To begin, we created an image detection software by using the depthapi python library and an oak-d-lite camera. The software used a labeled opensource data set and continuously checked for objects in the camera's view. If the object was identified as a car, the program would activate the speaker. Then the program would check for the position of the car relative to the camera lens. If it was to the left, a function call was made to turn on the left indicator light. If it was to the right, a function call was made to turn on the right indicator light. 
For the button functionality, a separate thread was ran. It would constantly check if the button was pressed. Once it sensed the button was pressed, it would activate the Twilio api and send a message to a predefined number. It would also activate the speaker which would play the emergency siren. 
The hardware was done using a raspberry pi, led lights, perf boards, a homemade battery, a JBL speaker, buck converter, and 3D printed components. We had one shot at printing the basket which thankfully worked out for us. We also printed the light indicator platform to hold attach the lights to the handle bars. We soldered terminals to a buck converter to adjust the voltage from the battery to the rpi. We also soldered components to the perf board. We then hooked up the equipment to our bike and took it for a test drive!
Lastly, we built a website. Our backend was built using NestJs and was fully documented with Swagger. The database was created with MySQL and Type ORM. The database was hosted using Google Cloud Platform SQL Server. We attempted to host our backend on Google Cloud Platform VM but it was not successful and we weren't able to solve the problem in time. The frontend was built with React and custom CSS. The front end pulls data the GPS data from the backend. We also implemented a Google Map API. The goal for this was to store coordinates and send the location of the biker during an emergency. Although this wasn't able to be fully implemented. 

## Challenges we ran into
We ran into issues when it came to getting all of the different components working together. We faced a lot of lag due to the memory consumption of all the different devices and scripts. We ended up optimizing the code base and separating the components to run in different scripts to overcome this issue. 
When building the website, we ran into issues with the Google Maps-API. There was a big learning curve in figuring out how to implement this using react. This took more of our time than we thought and we had to restructure our schedule and study a lot to get this working.  

## Accomplishments that we're proud of
Our project was very ambitious and we had to race against the clock. This took a lot of collaboration and trust in each other to get all of the components done. We are incredibly proud of our teamwork and our ability to take advantage of our own individual strengths to produce something great. 
We are proud of the utilization of machine learning. Going beyond simple identification and detection and taking depth into account was a challenge that was worth undertaking. 
Lastly, the hardware components were out of a lot of our comfort zones. Despite this, our 3d printed objects came out better than expected and we were able to quickly problem solve when issues arose regarding the equipment. 

## What we learned
We learned so much from this project here are the responses from each of our team members:
Emma - I've never worked with hardware before and I learned so much about how to account for them in a program and how to trouble shoot for it. 
Matt - I learned how to use live video and machine learning for image recognition having no prior experience before. 
Nate -  I stepped out of my comfort zone and worked on front-end work. 
Adren - I learned a lot about Python and how to work with a raspberry pi.  

## What's next for Clever Pedal
There were a few things we weren't able to accomplish in 24 hours. One of which was a fully functional GPS system. The goal would be that the biker could store location information whenever they wished and could use it as a way to track their travels. The GPS had an alternative usage when it came to pressing the emergency button. Rather than simply texting your emergency contact you need help, it would also send your exact location. We also aspired to have a more fleshed out website. The website would display mark
