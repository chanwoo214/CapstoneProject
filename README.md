# CapstoneProject - Simple Client logger for Self-Employed Mortgage Advisers

## Overview 
This web application provides a simple form to fill out which will then allocate appropriate values in table so the user can easily view list of their logged clients.

## Technology Stack
- React
- Bootstrap
- AWS Cognito
- AWS CloudFront

## Local setup
- Clone the repo to your local
- cd your-repo-folder
- npm install
- npm run dev
- Open the browser of your choice
- Open http://localhost:5173 to launch the application or https://d2bmm6q0qx6wno.cloudfront.net/
  
## Deployment
Developers push or merge the new branches to the main branch.
The Github Actions automatically triggers a deployment pipeline and deploys the code to AWS CloudFront.

## Authentication
AWS Cognito has been used as authentication. 

## Architecture
![image](https://github.com/chanwoo214/CapstoneProject-Frontend/assets/59636593/bd1fa0bc-b2d1-4c87-ae36-a19bb79af5da)


In building the application, I've carefully chosen a combination of AWS services and technology stacks to meet its needs. These selections are designed to provide scalability, ease of management, and efficient development. Here's a brief overview of the choices:

- Frontend: The frontend is hosted on Amazon CloudFront and served from an S3 bucket. This setup offers scalability and robust content delivery while requiring minimal maintenance.

- Authentication: I have integrated Amazon Cognito for user authentication. Amazon Cognito is a reliable solution that can effortlessly scale with the growing user base.

- Backend: The backend is powered by Amazon ECS Fargate. This serverless container service allows me to focus on application logic, abstracting away the server management tasks.

- Database: MongoDB Atlas serves as the database solution. Being a NoSQL database, it allows to store unstructured data across schemas, reducing the need for complex data management.

- Frontend Framework: For frontend development, I've chosen React. Its component-based architecture promotes modularity and code reusability, making it ideal for scaling the web application as the business expands.

## Support and Feedback
Your feedback is important to us! If you encounter any issues, have feature requests, or wish to report a bug, please don't hesitate to reach out to us through the following channels:

Email: chanwooshim@gmail.com
*******************************************************************************************************
>>>>>>> 85b6077 (First commit)
