const fs = require('fs');
const path = require('path');

// Mapping of Expo vector icons to React Native vector icons
const iconMapping = {
  'AntDesign': 'AntDesign',
  'MaterialIcons': 'MaterialIcons', 
  'Ionicons': 'Ionicons',
  'FontAwesome': 'FontAwesome',
  'FontAwesome5': 'FontAwesome5'
};

function replaceExpoIcons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace @expo/vector-icons imports
    const expoImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@expo\/vector-icons['"]/g;
    
    content = content.replace(expoImportRegex, (match, icons) => {
      modified = true;
      const iconList = icons.split(',').map(icon => icon.trim());
      const imports = iconList.map(icon => `import ${icon} from 'react-native-vector-icons/${icon}';`);
      return imports.join('\n');
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.ts')) {
      replaceExpoIcons(filePath);
    }
  });
}

console.log('🚀 Starting Expo to React Native migration...');
console.log('📁 Processing src directory...');

walkDirectory('./src');

console.log('✨ Migration completed!');
console.log('📝 Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: cd android && ./gradlew clean');
console.log('3. Run: npm run android');
