# Simple Web Server with Greeting API

This project sets up a basic web server using Express.js, deployed on Vercel. It exposes an API endpoint that responds with a greeting message, including the client's IP address, location, and a temperature value.

## Task Description

Set up a basic web server in your preferred stack. Deploy it to any free hosting platform and expose an API endpoint that conforms to the criteria below:

- **Endpoint:** `[GET] <example.com>/api/hello?visitor_name="Mark"` (where `<example.com>` is your server origin)
- **Response:**
  ```json
  {
    "client_ip": "127.0.0.1", // The IP address of the requester
    "location": "New York", // The city of the requester
    "greeting": "Hello, Mark!, the temperature is 11 degrees Celsius in New York"
  }
  ```

## Project Structure

project-root/
├── api/
│ └── hello.js
├── vercel.json
├── package.json
└── node_modules/

## Getting Started

#### Prerequisites

- Node.js (version 12.x or higher)
- Vercel account

## Installation

1. Clone the repository:
   git clone https://github.com/Brightsky2394/HNG_Task1.git
   cd HNG_Task1
2. Install dependencies:
   npm install

## Deployment

To deploy the project to Vercel, follow these steps:

1. Install Vercel CLI globally:
   npm install -g vercel
2. Deploy the project:
   vercel
   Follow the prompts to link your project to a Vercel account and deploy it. After deployment, you will get a URL where your API is hosted.

## API Endpoint

- URL: `https://hng-task1-lhxwzjp9b-yayas-projects-bdda74f2.vercel.app/api/hello?visitor_name=Mark`
- Method: GET
- Query Parameter:
  . visitor_name: The name of the visitor to be included in the greeting message.

#### Example Request

    curl https://hng-task1-lhxwzjp9b-yayas-projects-bdda74f2.vercel.app/api/hello?visitor_name=Mark

#### Example Response

    {

"client_ip": "127.0.0.1",
"location": "New York",
"greeting": "Hello, Mark!, the temperature is 11 degrees Celsius in New York"
}

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Vercel for hosting the project
- Express.js for the web framework

This `README.md` includes detailed instructions on how to set up, run, test, and deploy the project.
