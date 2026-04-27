// Example API endpoint
// This is a template for creating API routes

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Here you can:
    // 1. Send email
    // 2. Save to database
    // 3. Call external APIs
    // etc.

    console.log('Received message:', { name, email, message });

    // For now, just return success
    return res.status(200).json({ 
      success: true,
      message: 'Message received successfully!' 
    });
  } else if (req.method === 'GET') {
    // Handle GET request
    return res.status(200).json({ 
      message: 'Contact API endpoint is ready' 
    });
  } else {
    // Handle unsupported methods
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
