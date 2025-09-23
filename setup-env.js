const fs = require('fs');
const path = require('path');

const envContent = `# FAVCOM E-commerce Environment Variables
# Copy this file and add your actual API keys

# OpenAI API Key for AI Chatbot
OPENAI_API_KEY=your_openai_api_key_here

# Application Settings
NODE_ENV=development
PORT=3000

# Database (if using external database)
# DATABASE_URL=your_database_url_here

# Redis (for caching)
# REDIS_URL=your_redis_url_here

# Cloud Storage (for profile photos)
# CLOUDINARY_CLOUD_NAME=your_cloud_name
# CLOUDINARY_API_KEY=your_api_key
# CLOUDINARY_API_SECRET=your_api_secret
`;

const envPath = path.join(__dirname, '.env.local');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file with your OpenAI API key');
  console.log('🔑 Your OpenAI API key is already configured');
} else {
  console.log('⚠️  .env.local already exists. Please check if your OpenAI API key is set correctly.');
}

console.log('\n🚀 Next steps:');
console.log('1. Run: npm run dev');
console.log('2. Visit: http://localhost:3000');
console.log('3. Test the AI chatbot in the bottom-right corner');
