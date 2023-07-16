// Server-side code
import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const port = 5000;
// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS for the React app
app.use(cors()); // Add this line to enable CORS

// Configure the email transport using Gmail SMTP
const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'rpbisla0025@gmail.com',
        pass: '!$L4RP325002',
    },        
});

// Handle the form submission
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Construct the email message
    const mailOptions = {
        from: email,
        to: 'rpbisla0025@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
            alert('ok');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log('Server started on port 5000');
});
