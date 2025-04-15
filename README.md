# ShoresTech Business Website

A professional website for ShoresTech, a consultancy specializing in Kubernetes and DevOps services.

![ShoresTech](public/shorestech-favicon.svg)

## 🚀 Features

- **Modern, responsive design** built with React and Tailwind CSS
- **Dynamic service showcase** highlighting Kubernetes and DevOps expertise
- **GitHub integration** displaying top repositories and open-source contributions
- **Blog preview section** fetching the latest content from [OpsAndAutomation.com](https://opsandautomation.com)
- **Contact form** for client inquiries
- **Docker containerization** for easy deployment
- **Express.js server** for production hosting

## 💻 Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion
- **Icons**: Heroicons
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Server**: Express.js
- **Containerization**: Docker

## 🛠️ Setup & Development

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/business-website.git
   cd business-website
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and visit <http://localhost:5173>

### Building for Production

```bash
npm run build
```

This creates optimized production files in the `dist` directory.

## 🐳 Docker Deployment

The application includes Docker configuration for containerized deployment:

1. Build the Docker image

   ```bash
   docker build -t shorestech-website .
   ```

2. Run the container

   ```bash
   docker run -p 3000:3000 shorestech-website
   ```

3. Access the website at <http://localhost:3000>

## 🌐 Deployment Options

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

Deploy the static build from the `dist` folder to any static hosting service.

### Option 2: Container Deployment

Use the included Dockerfile to deploy to:

- Kubernetes cluster
- Cloud container services (AWS ECS, Google Cloud Run, Azure Container Instances)
- Self-hosted Docker environments

### Option 3: Node.js Hosting

Deploy the Express.js server to:

- Virtual private servers
- Platform-as-a-Service (Heroku, Render, Railway)

## 📝 Contact Form Setup

To enable the contact form functionality:

1. Install nodemailer

   ```bash
   npm install nodemailer
   ```

2. Add this code to your server.js file:

   ```javascript
   const nodemailer = require('nodemailer');
   const bodyParser = require('body-parser');

   app.use(bodyParser.json());

   app.post('/api/contact', async (req, res) => {
     const { name, email, message } = req.body;
     
     const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: process.env.EMAIL_USER, // Use environment variables
         pass: process.env.EMAIL_PASS
       }
     });
     
     const mailOptions = {
       from: 'your-website@domain.com',
       to: 'your-personal-email@domain.com',
       subject: `New contact from ${name}`,
       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
     };
     
     try {
       await transporter.sendMail(mailOptions);
       res.status(200).json({ success: true });
     } catch (error) {
       console.error('Email error:', error);
       res.status(500).json({ success: false });
     }
   });
   ```

3. Set up environment variables for your email credentials

## 🔄 GitHub Integration

The Portfolio component fetches and displays your top 3 repositories by star count. To customize:

1. Open `src/components/Portfolio.jsx`
2. Update the GitHub username in the fetch URL:

   ```javascript
   fetch('https://api.github.com/users/YOUR_USERNAME/repos?per_page=100')
   ```

## 📱 Responsive Design

The website is fully responsive for:

- Desktop computers
- Tablets
- Mobile phones

Tailwind CSS breakpoints ensure optimal viewing on all devices.

## 📄 License

[MIT](LICENSE)

---

Made with ❤️ by [ShoresTech](https://github.com/nshores)
