// Cache to store generated data for each stream
const dataCache = {};

// Optimized college data generation with caching
export const generateCollegeData = (stream) => {
  // Return cached data if it exists
  if (dataCache[stream]) {
    return dataCache[stream];
  }

  // Create a fixed set of base colleges for faster initialization
  const baseColleges = getBaseColleges(stream);
  
  // Generate only 100 colleges initially for faster loading, 
  // then load the rest asynchronously if needed
  const initialCollegeCount = 100;
  const colleges = Array.from({ length: initialCollegeCount }, (_, index) => {
    if (index < baseColleges.length) {
      return {
        ...baseColleges[index],
        stream,
        id: index + 1,
        rank: index + 1
      };
    }

    // Generate random data for remaining colleges with optimized properties
    const rank = index + 1;
    const rating = (3 + Math.random() * 2).toFixed(1);
    const reviewCount = Math.floor(50 + Math.random() * 950);
    
    return {
      id: index + 1,
      rank,
      name: `${stream} College ${rank}`,
      location: `City ${rank}, State`,
      approvals: "AICTE, UGC Approved",
      fees: `${Math.floor(100000 + Math.random() * 900000).toLocaleString('en-IN')}`,
      courseType: stream,
      feesPeriod: "1st Year Fees",
      avgPackage: `${Math.floor(400000 + Math.random() * 2000000).toLocaleString('en-IN')}`,
      highestPackage: `${Math.floor(1000000 + Math.random() * 5000000).toLocaleString('en-IN')}`,
      rating: parseFloat(rating),
      reviewCount,
      nationalRank: (rank * 3).toString(),
      rankingYear: "2025",
      establishedYear: (1960 + Math.floor(Math.random() * 60)).toString(),
      campusSize: `${Math.floor(10 + Math.random() * 490)} acres`,
      facultyCount: `${Math.floor(50 + Math.random() * 950)}+`,
      placementRate: Math.floor(70 + Math.random() * 30),
      website: `http://www.college${rank}.edu`
    };
  });
  
  // Store in cache
  dataCache[stream] = colleges;
  
  // Schedule the generation of additional colleges in the background
  setTimeout(() => {
    generateRemainingColleges(stream, initialCollegeCount);
  }, 100);
  
  return colleges;
};

// Generate the remaining colleges in the background
const generateRemainingColleges = (stream, startIndex) => {
  const totalColleges = 1000;
  const batchSize = 100;
  let currentIndex = startIndex;
  
  const generateNextBatch = () => {
    if (currentIndex >= totalColleges) return;
    
    const endIndex = Math.min(currentIndex + batchSize, totalColleges);
    
    for (let i = currentIndex; i < endIndex; i++) {
      const rank = i + 1;
      const rating = (3 + Math.random() * 2).toFixed(1);
      const reviewCount = Math.floor(50 + Math.random() * 950);
      
      dataCache[stream].push({
        id: rank,
        rank,
        name: `${stream} College ${rank}`,
        location: `City ${rank}, State`,
        approvals: "AICTE, UGC Approved",
        fees: `${Math.floor(100000 + Math.random() * 900000).toLocaleString('en-IN')}`,
        courseType: stream,
        feesPeriod: "1st Year Fees",
        avgPackage: `${Math.floor(400000 + Math.random() * 2000000).toLocaleString('en-IN')}`,
        highestPackage: `${Math.floor(1000000 + Math.random() * 5000000).toLocaleString('en-IN')}`,
        rating: parseFloat(rating),
        reviewCount,
        nationalRank: (rank * 3).toString(),
        rankingYear: "2025",
        establishedYear: (1960 + Math.floor(Math.random() * 60)).toString(),
        campusSize: `${Math.floor(10 + Math.random() * 490)} acres`,
        facultyCount: `${Math.floor(50 + Math.random() * 950)}+`,
        placementRate: Math.floor(70 + Math.random() * 30),
        website: `http://www.college${rank}.edu`
      });
    }
    
    currentIndex = endIndex;
    
    // Schedule the next batch
    if (currentIndex < totalColleges) {
      setTimeout(generateNextBatch, 0);
    }
  };
  
  generateNextBatch();
};

// Base colleges by stream
const getBaseColleges = (stream) => {
  // Top tier colleges for different streams
  const commonColleges = [
    {
      name: "IIT Bombay",
      location: "Mumbai, Maharashtra",
      approvals: "AICTE, UGC Approved",
      fees: "2,30,700",
      courseType: "BE/B.Tech",
      feesPeriod: "1st Year Fees",
      avgPackage: "23,50,000",
      highestPackage: "1,00,00,000",
      rating: 4.4,
      reviewCount: 375,
      nationalRank: "118",
      rankingYear: "2025",
      establishedYear: "1958",
      campusSize: "550 acres",
      facultyCount: "1000+",
      placementRate: 95,
      website: "http://www.iitb.ac.in"
    },
    {
      name: "IIT Delhi",
      location: "New Delhi, Delhi NCR",
      approvals: "AICTE, UGC Approved",
      fees: "2,28,650",
      courseType: "BE/B.Tech",
      feesPeriod: "1st Year Fees",
      avgPackage: "25,82,000",
      highestPackage: "2,00,00,000",
      rating: 4.3,
      reviewCount: 661,
      nationalRank: "150",
      rankingYear: "2025",
      establishedYear: "1961",
      campusSize: "320 acres",
      facultyCount: "800+",
      placementRate: 93,
      website: "http://www.iitd.ac.in"
    }
  ];

  // Stream-specific top colleges
  const streamSpecificColleges = {
    'B.Tech': [
      {
        name: "IIT Kanpur",
        location: "Kanpur, Uttar Pradesh",
        approvals: "AICTE, UGC Approved",
        fees: "2,22,400",
        courseType: "BE/B.Tech",
        feesPeriod: "1st Year Fees",
        avgPackage: "22,65,000",
        highestPackage: "1,42,00,000",
        rating: 4.2,
        reviewCount: 580,
        nationalRank: "172",
        rankingYear: "2025",
        establishedYear: "1959",
        campusSize: "420 acres",
        facultyCount: "700+",
        placementRate: 92,
        website: "http://www.iitk.ac.in"
      }
    ],
    'MBA': [
      {
        name: "IIM Ahmedabad",
        location: "Ahmedabad, Gujarat",
        approvals: "AICTE, UGC Approved",
        fees: "25,00,000",
        courseType: "MBA/PGDM",
        feesPeriod: "1st Year Fees",
        avgPackage: "32,00,000",
        highestPackage: "1,20,00,000",
        rating: 4.7,
        reviewCount: 890,
        nationalRank: "1",
        rankingYear: "2025",
        establishedYear: "1961",
        campusSize: "102 acres",
        facultyCount: "500+",
        placementRate: 98,
        website: "http://www.iima.ac.in"
      }
    ],
    'MBBS': [
      {
        name: "AIIMS Delhi",
        location: "New Delhi, Delhi",
        approvals: "MCI, UGC Approved",
        fees: "1,350",
        courseType: "MBBS",
        feesPeriod: "1st Year Fees",
        avgPackage: "15,00,000",
        highestPackage: "72,00,000",
        rating: 4.9,
        reviewCount: 1250,
        nationalRank: "1",
        rankingYear: "2025",
        establishedYear: "1956",
        campusSize: "130 acres",
        facultyCount: "900+",
        placementRate: 100,
        website: "http://www.aiims.edu"
      }
    ]
  };

  // Return stream-specific colleges + common colleges or just common colleges
  return (streamSpecificColleges[stream] || []).concat(commonColleges);
};

export default generateCollegeData;

// Helper functions to generate random data
const getRandomState = () => {
  const states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'UP', 'Gujarat', 'West Bengal'];
  return states[Math.floor(Math.random() * states.length)];
};

const getRandomCity = () => {
  const cities = ['New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad', 'Kolkata'];
  return cities[Math.floor(Math.random() * cities.length)];
};

const getRandomCourse = (stream) => {
  const courses = {
    Engineering: ['B.Tech', 'M.Tech', 'BE'],
    Medical: ['MBBS', 'BDS', 'BAMS'],
    Management: ['BBA', 'MBA', 'PGDM'],
    Arts: ['BA', 'MA', 'BFA'],
    Science: ['B.Sc', 'M.Sc', 'Ph.D'],
    Commerce: ['B.Com', 'M.Com', 'BBA'],
    Law: ['LLB', 'LLM', 'BA LLB'],
    Agriculture: ['B.Sc Agriculture', 'M.Sc Agriculture', 'Ph.D Agriculture'],
    Animation: ['B.Des Animation', 'M.Des Animation', 'Diploma in Animation'],
    Architecture: ['B.Arch', 'M.Arch', 'Diploma in Architecture'],
    Aviation: ['BBA Aviation', 'MBA Aviation', 'Diploma in Aviation'],
    'B.Arch': ['B.Arch', 'Integrated B.Arch'],
    'B.Com': ['B.Com', 'B.Com Hons', 'Integrated B.Com'],
    'B.Des': ['B.Des', 'Integrated B.Des'],
    'B.Ed': ['B.Ed', 'Integrated B.Ed'],
    'B.Pharm': ['B.Pharm', 'D.Pharm'],
    'B.Planning': ['B.Planning', 'M.Planning'],
    'B.Sc Nursing': ['B.Sc Nursing', 'M.Sc Nursing', 'Post Basic B.Sc Nursing'],
    'B.Sc Agriculture': ['B.Sc Agriculture', 'M.Sc Agriculture'],
    'B.Sc': ['B.Sc', 'B.Sc Hons', 'Integrated B.Sc'],
    'BA': ['BA', 'BA Hons', 'Integrated BA'],
    'Bachelor of Physiotherapy': ['BPT', 'MPT'],
    'BAMS': ['BAMS', 'MD Ayurveda'],
    'BBA': ['BBA', 'Integrated BBA'],
    'BCA': ['BCA', 'Integrated BCA'],
    'BTech': ['B.Tech', 'Integrated B.Tech'],
    'Computer Application': ['BCA', 'MCA', 'PGDCA'],
    'Dental': ['BDS', 'MDS'],
    'Design': ['B.Des', 'M.Des', 'Diploma in Design'],
    'Education': ['B.Ed', 'M.Ed', 'D.Ed'],
    'Hotel Management': ['BHM', 'MHM', 'Diploma in Hotel Management'],
    'LLB': ['LLB', 'BA LLB', 'BBA LLB'],
    'LLM': ['LLM', 'Integrated LLM'],
    'M.Pharm': ['M.Pharm', 'Ph.D Pharmacy'],
    'M.Planning': ['M.Planning', 'Ph.D Planning'],
    'M.Sc': ['M.Sc', 'Integrated M.Sc'],
    'Mass Communication': ['BJMC', 'MJMC', 'BA Journalism'],
    'MBA': ['MBA', 'PGDM', 'Executive MBA'],
    'MBBS': ['MBBS', 'MS', 'MD'],
    'MCA': ['MCA', 'Integrated MCA'],
    'MTech': ['M.Tech', 'Integrated M.Tech'],
    'Para Medical': ['B.Sc Para Medical', 'Diploma in Para Medical'],
    'Pharmacy': ['B.Pharm', 'M.Pharm', 'D.Pharm'],
    'Veterinary Science': ['B.V.Sc', 'M.V.Sc', 'Ph.D Veterinary Science']
  };
  return courses[stream][Math.floor(Math.random() * courses[stream].length)];
};

const getRandomFees = () => {
  const fees = ['2.5 Lakhs', '3.8 Lakhs', '4.2 Lakhs', '5.5 Lakhs', '7.8 Lakhs', '12 Lakhs'];
  return fees[Math.floor(Math.random() * fees.length)];
};

const getRandomPlacement = () => {
  const placements = ['8 LPA', '12 LPA', '15 LPA', '18 LPA', '22 LPA', '25 LPA'];
  return placements[Math.floor(Math.random() * placements.length)];
};

const getRandomRanking = () => {
  return `NIRF ${Math.floor(Math.random() * 100) + 1}`;
};

const generateCourses = (stream) => {
  const courseDurations = {
    Engineering: '4 Years',
    Medical: '5.5 Years',
    Management: '2 Years',
    Arts: '3 Years',
    Science: '3 Years',
    Commerce: '3 Years',
    Law: '5 Years',
    Agriculture: '4 Years',
    Animation: '4 Years',
    Architecture: '5 Years',
    Aviation: '3 Years',
    'B.Arch': '5 Years',
    'B.Com': '3 Years',
    'B.Des': '4 Years',
    'B.Ed': '2 Years',
    'B.Pharm': '4 Years',
    'B.Planning': '4 Years',
    'B.Sc Nursing': '4 Years',
    'B.Sc Agriculture': '4 Years',
    'B.Sc': '3 Years',
    'BA': '3 Years',
    'Bachelor of Physiotherapy': '4.5 Years',
    'BAMS': '5.5 Years',
    'BBA': '3 Years',
    'BCA': '3 Years',
    'BTech': '4 Years',
    'Computer Application': '3 Years',
    'Dental': '5 Years',
    'Design': '4 Years',
    'Education': '2 Years',
    'Hotel Management': '4 Years',
    'LLB': '3 Years',
    'LLM': '2 Years',
    'M.Pharm': '2 Years',
    'M.Planning': '2 Years',
    'M.Sc': '2 Years',
    'Mass Communication': '3 Years',
    'MBA': '2 Years',
    'MBBS': '5.5 Years',
    'MCA': '2 Years',
    'MTech': '2 Years',
    'Para Medical': '3 Years',
    'Pharmacy': '4 Years',
    'Veterinary Science': '5 Years'
  };

  return [
    {
      name: getRandomCourse(stream),
      fees: getRandomFees(),
      duration: courseDurations[stream]
    },
    {
      name: getRandomCourse(stream),
      fees: getRandomFees(),
      duration: courseDurations[stream]
    },
    {
      name: getRandomCourse(stream),
      fees: getRandomFees(),
      duration: courseDurations[stream]
    }
  ];
};

// Export stream-specific college data
export const engineeringColleges = generateCollegeData('Engineering');
export const medicalColleges = generateCollegeData('Medical');
export const managementColleges = generateCollegeData('Management');
export const artsColleges = generateCollegeData('Arts');
export const scienceColleges = generateCollegeData('Science');
export const commerceColleges = generateCollegeData('Commerce');
export const lawColleges = generateCollegeData('Law'); 