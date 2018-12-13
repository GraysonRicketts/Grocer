# Grocer
🥦 Simple, quick grocery list

# Table of contents
- [Context and history](#context-and-history)
   - [The Problem](#the-problem)auto    
   - [Needs / opportunity / goal](#needs--opportunity--goal)
   - [History](#history)auto
- [Post-mortem](#post-mortem)auto    
    - [Technologies used](#technologies-used)auto    
    - [What went well](#what-went-well)auto        
        - [Work ethic](#work-ethic)auto        
        - [Feedback / user experience](#feedback--user-experience)auto        
        - [Technologies](#technologies)auto    
    - [What did not go well](#what-did-not-go-well)auto        
        - [Development order](#development-order)auto        
        - [Testing](#testing)auto        
        - [Early focus on scalability](#early-focus-on-scalability)auto        
        - [Microservices](#microservices)auto    
    - [Why I stopped the project](#why-i-stopped-the-project)auto    
    - [What I learned](#what-i-learned)auto    
    - [Areas to improve in](#areas-to-improve-in)autoauto

# Context and history
## The Problem
One of my main hobbies is cooking. I often visit the grocery store more than once a week, so planning and preparing for meals takes up a fair amount of time. After trying multiple grocery apps I didn't find any that suited my needs. Either they were too simplistic, were stylistically outdated and garish, the process of adding items was cumbersome, or they only had a mobile option. 
## Needs / opportunity / goal
I saw an opportunity to make a multi-platform, responsive PWA that would make making a grocery list easy and that would organize items so the shopping experience would be simplified.
## History
I started on this project alone and eventually had a friend who  used my backend to start a native iOS grocery app. I worked consistently on this for about 10-20 hours a week from November 2017-April 2018. The backend portion was built first, then in February I began the frontend portion.

<br><br>

# Post-mortem
I attempted to pick this project up again in July and considered picking it up again in December, but have decided to move onto other projects. I wanted to breakdown what went well, what didn't, what I learned, and determine areas I can improve in more. 

## Technologies used
- Node
- ES6
- Docker
- git
- React
- Redux
- MongoDB

## What went well
### Work ethic
Consistency of work and feedback. I had a regular schedule that helped allowed for me to make regular progress.  The regular schedule and genuine interest in work made some evenings really fun, and added to a sense that I was learning about new, interesting topics.

### Feedback / user experience
I often reached out for feedback and refined the product iteratively. This meant I got to try different UX techniques such as prototyping with Balsamiq, making personas, and usability studies (aka friends telling me what they like between episodes of South Park).

### Technologies
The technologies chosen were well integrated and interesting to use (e.g. Node, React, Redux). I had never used react or redux before so it was a great project to get my feet wet in. It was interesting to see how PWAs were made in React. The experience also had the benefit of complimenting my work experience so that knowledge gained in one are would transfer to the other.

## What did not go well
### Development order
The biggest mistake I made was starting with the backend first. I had an idea of how the data would be stored but when I got to the front-end and started iterating over my design I found the front-end state diagram and the backend schema were no longer matching — not even close. This required lots of code to manipulate my input on the server in order to save it to the database. This data munging was not fun, added complexity, and most likely killed performance (though I never measured it).

### Testing
After completing the backend I decided I wanted to have tests. I had relatively little experience with tests and was confused about were the line between integration and unit tests were from the start. This lead to code changes and re-designs that sucked up time and energy.

In addition, I was constantly mucking around with the Docker image in order to get a test environment working which, while interesting, consumed several weeks of time. I was tempted to put this in the “what went well” category because it was extremely fascinating to learn all this, and after trying to figure it out myself I walked away with a new appreciation for how difficult dev ops can be.

### Early focus on scalability
From the beginning I wanted my application to scale. This meant that early on I put the server in a Docker image. It was fun to learn about Docker but ultimately it slowed down my progress. If I were to start again I would have a working product then worry about scaling it to size.

### Microservices
At the time I was hearing a lot about micro-services and was interested in including it my application. Unfortunately, I was still learning about micro-services and may have jumped on the hype train a little too early because [my app was fairly simplistic, maintaining micro-services is a job in itself, and it ultimately muddled my backend in re-writes that left no discernible improvements to the end-user experience.](https://www.feval.fr/posts/microservices/)(See this  _really_ good article on when not to us micro-services.

## Why I stopped the project
This can ben broken down largely into two sections. Why I stopped in May and why I didn't continue in December, but to understand that you also have to understand what else I was doing at the time.

Some background: I was living Madison, WI at that time and working full-time as a software engineer. I worked on this project after a full day and on the weekends. Since it was winter I didn't have much motivation to enjoy the freezing outdoors, so instead I channeled my energies into a project I was personally invested in.

As the weather improved in the spring and as my social life picked up this project was still exciting to me but a lower priority than friends and a healthy social life. I continued working a full-time job, spent my free time with friends, and took trips to the parks and lakes around Madison so my free time was not conducive to long periods of focused work which I prefer when working on a project like this.

That was why I stopped working on the project in May and ultimately I decided not continue with the project in December because I'd lost interest, the project had become stale, the setup was complex, and some design decisions restricted what I could do or would require re-engineering which I was uninterested in doing.

Finally, I decided it was best to put this project to rest, take note of what I had learned, and move on.

## What I learned
SO MUCH. Wow. Node, React, Redux, Docker, unit testing, integration testing, UX design, iterative design, babel, seeding, and MongoDB just too list a few simple things. More importantly I took away a couple lessons major lessons: *create a product that someone (e.g. me, you) needs,* *start with the user’s need* (e.g. start with the front-end), *get something working* (e.g. don't micro-service from the start), scale (one day!), profit (???maybe???).

In addition, personal projects can be incredibly draining. There were a number of times my focus on this project drained my energy and pulled me away from other parts of my life (e.g. rock climbing). This project helped me build up an intuition for creating a harmony between work, life, and personal interests. 

## Areas to improve in
- Architecting
- Testing (unit and integration)
- Requirements gathering
- Prototyping
- User experience design
- Social project coordination
    - How to coordinate free-time projects with others and share with open source community