import { createLogger, transports, format } from 'winston'; // Import necessary modules

// Custom format function for enhanced logging output
const myFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Use a more comprehensive timestamp format
    format.printf(({ level, message, timestamp }) => `${timestamp} [${level}] ${message}`)
);

const logger = createLogger({
    level: 'info', // Set the default logging level (adjustable)
    format: myFormat,
    transports: [
        new transports.Console() // Log to the console
        // Add other desired transports (e.g., file, network)
    ]
});


    export default logger