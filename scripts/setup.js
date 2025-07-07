#!/usr/bin/env node

/**
 * Portfolio Template Setup Script
 * 
 * This interactive script helps you set up your portfolio by:
 * - Copying template files to main configuration files
 * - Providing guided prompts for customization
 * - Validating your configuration
 * - Setting up initial project structure
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
};

// Helper function to colorize text
const colorize = (text, color) => `${colors[color]}${text}${colors.reset}`;

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promisify readline question
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// File paths
const projectRoot = path.join(__dirname, '..');
const templateSiteData = path.join(projectRoot, 'src/lib/site-data.template.ts');
const templateUIConstants = path.join(projectRoot, 'src/lib/ui-constants.template.ts');
const siteDataPath = path.join(projectRoot, 'src/lib/site-data.ts');
const uiConstantsPath = path.join(projectRoot, 'src/lib/ui-constants.ts');

// Setup steps
async function main() {
    console.log(colorize('\n🚀 Portfolio Template Setup', 'cyan'));
    console.log(colorize('================================', 'cyan'));
    console.log('\nWelcome to your portfolio template setup!');
    console.log('This script will help you customize your portfolio with your information.\n');

    try {
        // Step 1: Check if template files exist
        await checkTemplateFiles();
        
        // Step 2: Check if existing files should be backed up
        await handleExistingFiles();
        
        // Step 3: Collect user information
        const userInfo = await collectUserInfo();
        
        // Step 4: Generate configuration files
        await generateConfigFiles(userInfo);
        
        // Step 5: Validate generated files
        await validateFiles();
        
        // Step 6: Display next steps
        displayNextSteps();
        
    } catch (error) {
        console.error(colorize('\n❌ Setup failed:', 'red'), error.message);
        process.exit(1);
    } finally {
        rl.close();
    }
}

// Check if template files exist
async function checkTemplateFiles() {
    console.log(colorize('📁 Checking template files...', 'yellow'));
    
    if (!fs.existsSync(templateSiteData)) {
        throw new Error(`Template file not found: ${templateSiteData}`);
    }
    
    if (!fs.existsSync(templateUIConstants)) {
        throw new Error(`Template file not found: ${templateUIConstants}`);
    }
    
    console.log(colorize('✅ Template files found', 'green'));
}

// Handle existing configuration files
async function handleExistingFiles() {
    const existingFiles = [];
    
    if (fs.existsSync(siteDataPath)) {
        existingFiles.push('site-data.ts');
    }
    
    if (fs.existsSync(uiConstantsPath)) {
        existingFiles.push('ui-constants.ts');
    }
    
    if (existingFiles.length > 0) {
        console.log(colorize('\n⚠️  Existing configuration files found:', 'yellow'));
        existingFiles.forEach(file => console.log(`  - ${file}`));
        
        const backup = await question('\nDo you want to backup existing files? (y/n): ');
        
        if (backup.toLowerCase() === 'y' || backup.toLowerCase() === 'yes') {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            
            for (const file of existingFiles) {
                const originalPath = path.join(projectRoot, 'src/lib', file);
                const backupPath = path.join(projectRoot, 'src/lib', `${file}.backup.${timestamp}`);
                
                fs.copyFileSync(originalPath, backupPath);
                console.log(colorize(`📄 Backed up: ${file} -> ${file}.backup.${timestamp}`, 'green'));
            }
        }
    }
}

// Collect user information
async function collectUserInfo() {
    console.log(colorize('\n👤 Personal Information', 'blue'));
    console.log(colorize('======================', 'blue'));
    
    const info = {};
    
    // Basic info
    info.name = await question('Your full name: ');
    info.title = await question('Your professional title (e.g., Full Stack Developer): ');
    info.bio = await question('Brief bio (1-2 sentences): ');
    info.initials = await question(`Your initials (e.g., ${info.name.split(' ').map(n => n[0]).join('')}): `) || info.name.split(' ').map(n => n[0]).join('');
    
    // Contact info
    console.log(colorize('\n📞 Contact Information', 'blue'));
    console.log(colorize('====================', 'blue'));
    
    info.email = await question('Your email address: ');
    info.phone = await question('Your phone number (optional): ');
    info.location = await question('Your location (City, State/Country): ');
    info.timezone = await question('Your timezone (e.g., PST, EST): ');
    
    // Social links
    console.log(colorize('\n🔗 Social Media Links', 'blue'));
    console.log(colorize('===================', 'blue'));
    
    info.github = await question('GitHub username: ');
    info.linkedin = await question('LinkedIn username: ');
    info.twitter = await question('Twitter username (optional): ');
    
    // Professional info
    console.log(colorize('\n💼 Professional Information', 'blue'));
    console.log(colorize('=========================', 'blue'));
    
    info.experience = await question('Years of experience: ');
    info.projects = await question('Number of projects completed: ');
    info.clients = await question('Number of happy clients: ');
    
    return info;
}

// Generate configuration files
async function generateConfigFiles(userInfo) {
    console.log(colorize('\n📝 Generating configuration files...', 'yellow'));
    
    // Generate site-data.ts
    let siteDataContent = fs.readFileSync(templateSiteData, 'utf8');
    
    // Replace placeholders in site-data.ts
    const siteDataReplacements = {
        'Your Name': userInfo.name,
        'Your Professional Title': userInfo.title,
        'A brief description of your passion and expertise. Keep it concise but compelling.': userInfo.bio,
        'YN': userInfo.initials,
        'hello@yourname.com': userInfo.email,
        '+1 (555) 123-4567': userInfo.phone || '+1 (555) 123-4567',
        'Your City, State/Country': userInfo.location,
        'YOUR_TIMEZONE': userInfo.timezone,
        'yourusername': userInfo.github,
        '/in/yourusername': `/in/${userInfo.linkedin}`,
        '@yourusername': `@${userInfo.twitter || userInfo.github}`,
        'https://twitter.com/yourusername': `https://twitter.com/${userInfo.twitter || userInfo.github}`,
        '3+': `${userInfo.experience}+`,
        '20+': `${userInfo.projects}+`,
        '10+': `${userInfo.clients}+`
    };
    
    for (const [placeholder, replacement] of Object.entries(siteDataReplacements)) {
        siteDataContent = siteDataContent.replace(new RegExp(placeholder, 'g'), replacement);
    }
    
    // Generate ui-constants.ts
    let uiConstantsContent = fs.readFileSync(templateUIConstants, 'utf8');
    
    // Replace placeholders in ui-constants.ts
    const uiConstantsReplacements = {
        'Your Name': userInfo.name,
        'Your Professional Title': userInfo.title,
        'Your professional tagline or brief description of what you do.': userInfo.bio,
        'Your call-to-action message encouraging visitors to work with you': `Let's collaborate and bring your ideas to life with modern web technologies`,
        'Write your introduction here. Talk about your background, how you got into development, and what drives your passion for technology.': `Hello! I'm ${userInfo.name}, a passionate ${userInfo.title.toLowerCase()} with ${userInfo.experience} years of experience crafting digital solutions. My journey in technology began with curiosity and evolved into a deep love for creating applications that solve real-world problems.`,
        'Describe your technical expertise and specializations. Mention key technologies you work with and what makes you unique as a developer.': `I specialize in modern web technologies and focus on creating performant, accessible, and user-friendly applications. I believe in writing clean code and staying up-to-date with the latest industry best practices.`,
        'Share your philosophy about development, design, and working with clients. What do you believe makes great software?': `I believe in the power of clean code, thoughtful design, and continuous learning. Every project is an opportunity to push boundaries and create something meaningful that makes a positive impact.`
    };
    
    for (const [placeholder, replacement] of Object.entries(uiConstantsReplacements)) {
        uiConstantsContent = uiConstantsContent.replace(new RegExp(placeholder, 'g'), replacement);
    }
    
    // Write files
    fs.writeFileSync(siteDataPath, siteDataContent);
    fs.writeFileSync(uiConstantsPath, uiConstantsContent);
    
    console.log(colorize('✅ Configuration files generated successfully!', 'green'));
    console.log(`  - ${path.relative(projectRoot, siteDataPath)}`);
    console.log(`  - ${path.relative(projectRoot, uiConstantsPath)}`);
}

// Validate generated files
async function validateFiles() {
    console.log(colorize('\n🔍 Validating configuration files...', 'yellow'));
    
    try {
        // Basic validation - check if files exist and have content
        const siteDataExists = fs.existsSync(siteDataPath);
        const uiConstantsExists = fs.existsSync(uiConstantsPath);
        
        if (!siteDataExists) {
            throw new Error('site-data.ts was not created');
        }
        
        if (!uiConstantsExists) {
            throw new Error('ui-constants.ts was not created');
        }
        
        // Check file sizes
        const siteDataSize = fs.statSync(siteDataPath).size;
        const uiConstantsSize = fs.statSync(uiConstantsPath).size;
        
        if (siteDataSize < 1000) {
            throw new Error('site-data.ts seems too small');
        }
        
        if (uiConstantsSize < 1000) {
            throw new Error('ui-constants.ts seems too small');
        }
        
        console.log(colorize('✅ Files validated successfully!', 'green'));
        
    } catch (error) {
        console.log(colorize('⚠️  Validation warning:', 'yellow'), error.message);
        console.log(colorize('Please check your configuration files manually.', 'yellow'));
    }
}

// Display next steps
function displayNextSteps() {
    console.log(colorize('\n🎉 Setup Complete!', 'green'));
    console.log(colorize('==================', 'green'));
    
    console.log('\n' + colorize('Next Steps:', 'bright'));
    console.log('1. Review and customize your configuration files:');
    console.log('   - src/lib/site-data.ts');
    console.log('   - src/lib/ui-constants.ts');
    console.log('');
    console.log('2. Add your projects to the projects array in site-data.ts');
    console.log('');
    console.log('3. Update your timeline/experience in site-data.ts');
    console.log('');
    console.log('4. Add your technologies and skills');
    console.log('');
    console.log('5. Test your portfolio:');
    console.log('   npm run dev');
    console.log('');
    console.log('6. When ready, build and deploy:');
    console.log('   npm run build');
    console.log('');
    
    console.log(colorize('📚 Documentation:', 'bright'));
    console.log('- README.md - Getting started guide');
    console.log('- docs/configuration.md - Detailed configuration help');
    console.log('- docs/customization.md - Advanced customization');
    console.log('- docs/deployment.md - Deployment guides');
    console.log('');
    
    console.log(colorize('🚀 Happy coding!', 'cyan'));
}

// Run the setup
main().catch(console.error);