---
title: "‘Stadtpflanzen’ Web App for Promoting Community Engagement in Green Spaces"
date: "2024-03-26"
skills: ["Machine Learning", "Python", "Data Collection", "Flask", “Sentiment Analysis”, “Topic Modelling”, “Project Planning”, “Project Management”]
githubLink: "https://github.com/ArtificialIntellicat/green-space-discovery"
projectLink: "https://stadtpflanzen-3fed77b30e89.herokuapp.com"
---

My fascination with Artificial Intelligence and passion for programming are not the only reasons I want to work in Machine Learning—I also see great potential in AI to promote education and sustainability. I aimed to explore this with a [new portfolio project](https://github.com/ArtificialIntellicat/green-space-discovery) by designing a web app called “Stadtpflanzen” to enhance urban green spaces through community engagement.

### The Idea
In the German [“Stadtpflanzen” web app](https://stadtpflanzen-3fed77b30e89.herokuapp.com), each registered green space has a community where members can communicate through posts and plan activities. Users can add green spaces and rate existing ones based on various sustainability and social factors. A machine learning algorithm analyzes the ratings to suggest improvements for the green spaces in the communities (e.g., the AI might post a clean-up event or a prepared petition for more benches/trash bins/etc., if complaints about litter/lack of benches/etc. are common). This aims to foster societal engagement and community building around green spaces.

### What Has Happened So Far
**Languages, Frameworks, and Technologies**
This question is, of course, at the beginning of every project. Since I wanted to improve my Python skills and Python is well-suited for Machine Learning tasks, I chose this language. For the frontend, I opted for Flask, which I had already used successfully in my [Cat Breed Classifier](https://github.com/ArtificialIntellicat/cat-breed-classifier) project.<br><br>

**The Process**
I began by building the skeleton of the web app: first creating a database, an index page to display the green spaces in table form, and pages for creating users, green spaces, and ratings. Then, I added functionality that allowed each green space to have a community that users could freely join to post about that green space. Gradually, I added more functionalities and details so that data could be deleted and modified, and I improved the frontend. I was glad I had already created a fairly detailed concept beforehand of what I wanted to program, allowing me to simply "work through" these steps. Nevertheless, the process always reveals new challenges, exposes flaws in thinking, and brings new ideas to the table. To really launch a usable platform, quite a few small design challenges must be mastered and functionalities considered.<br><br>

**Where Does the Data Come From?**
Before starting the project, I had the vague idea that I might be able to get user ratings through Google Maps or similar to train my model. However, I quickly realized that the reviews I needed to collect very specific factors that I could not easily feed in from such reviews. Therefore, I had no choice but to collect data myself. But why not? After all, it's good practice to run a project from start to finish on your own and have control over the quality of the data yourself. So, I created a [survey](https://docs.google.com/forms/d/e/1FAIpQLSfFvYT_Q0R6MdF7uDJtvqgTpO-LFCnmD9h3N0-4jUfiURkQCw/viewform) and definitions for the factors to be rated and sent it out to as many people as possible – and now it's time to wait and drink tea (many liters, I do love it), before the model can really be trained and the project can be completed.<br><br>

### Challenges
**Data Collection**
Since I'm collecting my data myself and my financial resources are very limited, I must rely on the goodwill of my fellow humans to create reviews of green spaces. I've received a lot of positive feedback for the idea, but (too) few survey responses. Now I need to nudge people a bit more. 😉<br><br>

**Practical Implementation**
This project is initially just a portfolio project for me to practice and for my applications. However, if I wanted to use the project in reality, several questions arise, especially regarding data quality and ethical concerns: Who ensures that each green space is listed only once? Who gets the "power" to manage entries for green spaces? Should there be a moderator role for this? How would people be found willing to take on such a role? Who moderates ratings and community posts to ensure they do not contain questionable content?
Probably, one would need to form an association with motivated people who make it their mission to launch and maintain this project. But these are considerations for a future in which this project is actually put into practical use.<br><br>

**Deployment with Limited Financial Resources**
When you don't have money, it's not so easy to find a suitable platform for deploying such a project. Many platforms like Heroku, Google Cloud Functions, and AWS offer free services, but they work only moderately for a project in which, in the best case, a lot of interaction should take place. I opted for [Heroku](https://stadtpflanzen-3fed77b30e89.herokuapp.com), but there the app functions only moderately and constantly has loading errors. In the future, I will test further possibilities, but currently, I want to focus more on the reviews and training the model as well as expanding and improving my theoretical foundation in Machine Learning.<br><br>

### What’s Next?
Once I have enough reviews, I will train my model and extensively test it. For this, I probably want to use sentiment analysis and topic modelling and classify categories that represent executable actions (such as Clean Up). Exactly how I implement and combine this depends on the results. Learning by doing, as always. 😊
