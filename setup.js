#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up FAVCOM E-commerce Platform...\n');

// 1. Create .env.local file
const envContent = `# FAVCOM E-commerce Environment Variables
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
PORT=3000
`;

const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local with OpenAI API key');
} else {
  console.log('⚠️  .env.local already exists');
}

// 2. Process Flipkart data
console.log('\n📊 Processing Flipkart dataset...');
try {
  execSync('npm run process:data', { stdio: 'inherit' });
  console.log('✅ Data processing completed');
} catch (error) {
  console.log('❌ Data processing failed:', error.message);
}

// 3. Install dependencies
console.log('\n📦 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed');
} catch (error) {
  console.log('❌ Dependency installation failed:', error.message);
}

// 4. Build the application
console.log('\n🔨 Building application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Application built successfully');
} catch (error) {
  console.log('❌ Build failed:', error.message);
}

console.log('\n🎉 Setup completed!');
console.log('\n🚀 Next steps:');
console.log('1. Run: npm run dev');
console.log('2. Visit: http://localhost:3000');
console.log('3. Test the AI chatbot');
console.log('4. Check performance metrics (top-left corner)');
console.log('\n📚 Features available:');
console.log('• AI-powered search and recommendations');
console.log('• 40,000+ products with pagination');
console.log('• Profile photo upload');
console.log('• Dark theme with responsive design');
console.log('• Performance monitoring');
console.log('• Lazy loading for better performance');
