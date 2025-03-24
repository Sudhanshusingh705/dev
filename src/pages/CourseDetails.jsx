import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CourseDetails = ({ route, navigation }) => {
  const { course } = route.params;

  // Course-specific details based on course name
  const getCourseSpecificDetails = () => {
    switch (course.name) {
      case 'B.Com General':
        return {
          overview: "Bachelor of Commerce (B.Com) is a 3-year undergraduate course that provides comprehensive knowledge in commerce, business studies, and accounting. The program is ideal for students interested in finance, accounting, banking, and business management.",
          eligibility: [
            "• Pass class 12th from any recognized board",
            "• Minimum percentage varies by college (45% - 99%)",
            "• Commerce stream preferred but not mandatory",
            "• Some colleges conduct entrance examinations"
          ],
          admissionProcess: [
            "Direct Admission:",
            "• Based on 12th marks",
            "• Merit list preparation after board results",
            "\nEntrance Based:",
            "• CUET (May 15 – May 31, 2024)",
            "• IPU CET (April 27 – May 14, 2024)",
            "• NPAT (January 1 – May 25, 2024)"
          ],
          syllabus: {
            "First Year": [
              "• Environmental Studies",
              "• Financial Accounting",
              "• Business Laws",
              "• Business Organization & Management",
              "• Business Mathematics & Statistics"
            ],
            "Second Year": [
              "• Company Law",
              "• Income Tax Laws",
              "• Cost Accounting",
              "• Corporate Accounting",
              "• Computer Applications in Business"
            ],
            "Third Year": [
              "• Banking and Insurance",
              "• Management Accounting",
              "• Computerized Accounting System",
              "• Human Resource Management",
              "• Auditing and Corporate Governance"
            ]
          },
          topColleges: [
            {
              name: "Lady Sri Ram College for Women",
              location: "Delhi",
              cutoff: "99-100 percentile",
              fees: "₹29,000/year"
            },
            {
              name: "Hindu College",
              location: "Delhi",
              cutoff: "99-100 percentile",
              fees: "₹30,000/year"
            },
            {
              name: "St. Xavier's College",
              location: "Mumbai",
              fees: "₹5,537/year"
            }
          ],
          careerProspects: [
            {
              role: "Auditor",
              salary: "₹4 - 9 LPA"
            },
            {
              role: "Banker",
              salary: "₹4.5 - 7.5 LPA"
            },
            {
              role: "Stock Broker",
              salary: "₹2.5 - 6 LPA"
            },
            {
              role: "Tax Consultant",
              salary: "₹7.5 - 10 LPA"
            },
            {
              role: "Finance Consultant",
              salary: "₹6 - 16 LPA"
            }
          ],
          higherStudies: [
            "• M.Com (Masters of Commerce)",
            "• MBA Finance",
            "• CA (Chartered Accountant)",
            "• CFA (Chartered Financial Analyst)",
            "• ACCA (Association of Chartered Certified Accountants)",
            "• FRM (Financial Risk Manager)"
          ],
          marketScope: [
            "• Growing Fintech market (Expected to reach ₹6.2 trillion by 2025)",
            "• Strong banking sector with total assets of USD 2.4 Trillion",
            "• Expanding insurance and mutual funds sector",
            "• Rising demand in corporate finance",
            "• Growing opportunities in international trade"
          ]
        };

      case 'BCA General':
        return {
          overview: "Bachelor of Computer Applications (BCA) is a 3-year undergraduate course that focuses on computer science and its applications. In this course, students learn about the basics of computer programming, software development, and information technology. A minimum of 50% marks are required for admission to BCA. A BCA degree is pursued by students who wish to get jobs in the IT & Tech industry.",
          eligibility: [
            "• 10+2 with minimum 50% aggregate marks",
            "• Mathematics as a subject in 12th standard",
            "• Some colleges conduct entrance examinations",
            "• Age: No specific age limit"
          ],
          admissionProcess: [
            "Direct Admission:",
            "• Based on 12th marks",
            "• Merit list preparation",
            "\nEntrance Based:",
            "• CUET",
            "• IPU CET",
            "• SET BCA",
            "• University-specific entrance exams"
          ],
          syllabus: {
            "First Year": [
              "• Programming using C Language",
              "• Fundamentals of IT and Computers",
              "• Applied Mathematics",
              "• Web Based Programming",
              "• Digital Electronics"
            ],
            "Second Year": [
              "• Computer Network",
              "• Object Oriented Programming with C++",
              "• Java Programming",
              "• Database Management Systems",
              "• Data Structures"
            ],
            "Third Year": [
              "• Software Engineering",
              "• Web Development",
              "• Internet of Things",
              "• Cloud Computing",
              "• Project Work"
            ]
          },
          topColleges: [
            {
              name: "Christ University",
              location: "Bangalore",
              fees: "₹1,20,000/year"
            },
            {
              name: "Symbiosis Institute of Technology",
              location: "Pune",
              fees: "₹1,50,000/year"
            },
            {
              name: "IGNOU",
              location: "Delhi",
              fees: "₹35,000/year"
            }
          ],
          careerProspects: [
            {
              role: "Software Developer",
              salary: "₹3.5 - 8 LPA"
            },
            {
              role: "Web Developer",
              salary: "₹3 - 7 LPA"
            },
            {
              role: "System Analyst",
              salary: "₹4 - 9 LPA"
            },
            {
              role: "Database Administrator",
              salary: "₹4.5 - 10 LPA"
            },
            {
              role: "Software Tester",
              salary: "₹3 - 6 LPA"
            }
          ],
          higherStudies: [
            "• MCA (Master of Computer Applications)",
            "• M.Tech in Computer Science",
            "• MBA in IT",
            "• MSc in Computer Science",
            "• Specialized Certification Courses"
          ],
          marketScope: [
            "• Growing IT industry with numerous job opportunities",
            "• High demand for software developers and programmers",
            "• Opportunities in emerging technologies like AI, ML, and IoT",
            "• Scope in both Indian and international markets",
            "• Growing startup ecosystem"
          ],
          entranceExams: [
            "• NIMCET",
            "• IPU CET",
            "• SET BCA",
            "• CUET",
            "• University-specific entrance tests"
          ],
          averageFees: {
            government: "₹35,000 per year",
            private: "₹1,00,000 per year"
          },
          jobRoles: [
            "• Software Developer",
            "• Web Developer",
            "• Database Administrator",
            "• System Analyst",
            "• IT Consultant"
          ],
          skills: [
            "• Programming Languages (C, C++, Java)",
            "• Web Development",
            "• Database Management",
            "• Problem Solving",
            "• Software Development"
          ]
        };

      case 'B.Ed General':
        return {
          overview: "Bachelor of Education (B.Ed) is a 2-year professional program for individuals aspiring to be teachers in schools, colleges, and other academic institutions. The course provides comprehensive training in educational psychology, teaching methodologies, curriculum development, educational technology, and classroom management.",
          eligibility: [
            "• Graduation in any field with minimum 50% marks",
            "• Age: 21+ years",
            "• Valid entrance exam scores",
            "• State-specific eligibility criteria may vary"
          ],
          admissionProcess: [
            "Merit-Based Admission:",
            "• Based on graduation marks",
            "• State-level merit list preparation",
            "\nEntrance Based:",
            "• State B.Ed CET",
            "• CUET (May 15 – May 31, 2024)",
            "• IPU B.Ed (March 11 to March 29, 2024)",
            "• IGNOU B.Ed"
          ],
          syllabus: {
            "First Year": [
              "• Childhood and Growing Up",
              "• Contemporary India and Education",
              "• Learning and Teaching",
              "• Language Across the Curriculum",
              "• Understanding Disciplines and Subjects",
              "• School Organization and Management"
            ],
            "Second Year": [
              "• Knowledge and Curriculum",
              "• Assessment for Learning",
              "• Creating an Inclusive School",
              "• Teaching Methods and Strategies",
              "• ICT in Education",
              "• Teaching Practice and Internship"
            ]
          },
          topColleges: [
            {
              name: "Lady Irwin College",
              location: "Delhi",
              fees: "₹20,000/year"
            },
            {
              name: "Jamia Millia Islamia",
              location: "New Delhi",
              fees: "₹25,000/year"
            },
            {
              name: "Regional Institute of Education",
              location: "Mysore",
              fees: "₹15,000/year"
            }
          ],
          careerProspects: [
            {
              role: "Primary School Teacher",
              salary: "₹25,000 - ₹45,000/month"
            },
            {
              role: "High School Teacher",
              salary: "₹35,000 - ₹55,000/month"
            },
            {
              role: "Educational Counselor",
              salary: "₹30,000 - ₹50,000/month"
            },
            {
              role: "School Principal",
              salary: "₹60,000 - ₹1,20,000/month"
            },
            {
              role: "Education Administrator",
              salary: "₹45,000 - ₹80,000/month"
            }
          ],
          higherStudies: [
            "• M.Ed (Master of Education)",
            "• M.Phil in Education",
            "• Ph.D in Education",
            "• Specialized Teaching Certifications",
            "• Educational Management Programs"
          ],
          marketScope: [
            "• Growing demand in private and government schools",
            "• Opportunities in educational technology sector",
            "• Rising need for special education teachers",
            "• International teaching opportunities",
            "• Educational consulting and content development"
          ],
          entranceExams: [
            "• State B.Ed Common Entrance Tests",
            "• CUET B.Ed",
            "• IPU CET B.Ed",
            "• IGNOU B.Ed Entrance",
            "• University-specific B.Ed entrance exams"
          ],
          averageFees: "₹5,000 - ₹2,20,000 per year",
          jobRoles: [
            "• Primary School Teacher",
            "• High School Teacher",
            "• Special Educator",
            "• Educational Consultant",
            "• Academic Coordinator"
          ]
        };

      case 'BA General':
        return {
          overview: "Bachelor of Arts (BA) focuses on subjects such as Humanities, Social Studies and Liberal Arts. The average duration of a Bachelor of Arts degree is 3 years for both regular and distance courses. Post completing BA degree, students can choose to study further such as MA and Ph.D in the same or relevant field.",
          eligibility: [
            "• 50% in class 12th from any recognized board",
            "• Any stream students can apply",
            "• Some colleges conduct entrance examinations",
            "• Merit-based and entrance exam-based admissions"
          ],
          admissionProcess: [
            "Merit-Based Admission:",
            "• Based on 12th marks",
            "• State-level merit list preparation",
            "\nEntrance Based:",
            "• CUET (May 15 – May 31, 2024)",
            "• IPU CET",
            "• NPAT",
            "• University-specific entrance exams"
          ],
          syllabus: {
            "First Year": [
              "• English Literature",
              "• History",
              "• Political Science",
              "• Economics",
              "• Sociology",
              "• Psychology"
            ],
            "Second Year": [
              "• Advanced Literature Studies",
              "• Modern History",
              "• International Relations",
              "• Research Methodology",
              "• Social Psychology",
              "• Cultural Studies"
            ],
            "Third Year": [
              "• Contemporary Literature",
              "• World History",
              "• Political Theory",
              "• Development Economics",
              "• Social Research",
              "• Specialization Papers"
            ]
          },
          specializations: [
            "• BA History",
            "• BA English",
            "• BA Economics",
            "• BA Political Science",
            "• BA Geography",
            "• BA Sociology"
          ],
          topColleges: [
            {
              name: "Lady Shri Ram College",
              location: "Delhi",
              fees: "₹15,000/year"
            },
            {
              name: "St. Xavier's College",
              location: "Mumbai",
              fees: "₹25,000/year"
            },
            {
              name: "Loyola College",
              location: "Chennai",
              fees: "₹20,000/year"
            }
          ],
          careerProspects: [
            {
              role: "Psychologist",
              salary: "₹3 - 7 LPA"
            },
            {
              role: "Historian",
              salary: "₹4 - 8 LPA"
            },
            {
              role: "Content Writer",
              salary: "₹3 - 6 LPA"
            },
            {
              role: "Journalist",
              salary: "₹3.5 - 10 LPA"
            },
            {
              role: "Social Worker",
              salary: "₹2.5 - 5 LPA"
            }
          ],
          higherStudies: [
            "• MA (Master of Arts)",
            "• M.Phil",
            "• Ph.D",
            "• B.Ed",
            "• MBA",
            "• Journalism & Mass Communication"
          ],
          marketScope: [
            "• Growing demand in journalism and media",
            "• Opportunities in civil services",
            "• Rising scope in research and academics",
            "• International opportunities in teaching",
            "• Growing demand in content writing and digital media"
          ],
          averageFees: {
            government: "₹5,000 - ₹15,000 per year",
            private: "₹20,000 - ₹50,000 per year"
          },
          jobRoles: [
            "• Civil Services Officer",
            "• Teacher/Professor",
            "• Journalist",
            "• Content Writer",
            "• Research Analyst",
            "• Social Worker"
          ],
          skills: [
            "• Critical Thinking",
            "• Research and Analysis",
            "• Communication Skills",
            "• Writing Skills",
            "• Social Understanding"
          ],
          entranceExams: [
            "• CUET",
            "• DU JAT",
            "• SET",
            "• University-specific entrance tests"
          ]
        };

      case 'BBA General':
        return {
          overview: "Bachelor of Business Administration (BBA) is a 3-year undergraduate degree that is ideal for students interested in exploring careers in Marketing, Sales, Finance, or HR. Students can pursue a general BBA course to gain an overview of management and business or opt for BBA Specializations such as BBA Finance, BBA Marketing, etc. for more selective learning.",
          eligibility: [
            "• 10+2 with minimum 50% aggregate marks",
            "• Any stream students can apply",
            "• Valid entrance exam scores",
            "• Some colleges conduct their own entrance tests"
          ],
          admissionProcess: [
            "Merit-Based Admission:",
            "• Based on 12th marks",
            "• Merit list preparation",
            "\nEntrance Based:",
            "• NPAT",
            "• SET",
            "• MAH CET",
            "• IPU CET",
            "• CUET"
          ],
          syllabus: {
            "First Year": [
              "• Principles of Management",
              "• Business Economics",
              "• Financial Accounting",
              "• Business Mathematics",
              "• Business Communication",
              "• Computer Applications"
            ],
            "Second Year": [
              "• Marketing Management",
              "• Human Resource Management",
              "• Financial Management",
              "• Operations Management",
              "• Business Law",
              "• Research Methodology"
            ],
            "Third Year": [
              "• Strategic Management",
              "• Entrepreneurship Development",
              "• International Business",
              "• Project Management",
              "• Business Ethics",
              "• Specialization Subjects"
            ]
          },
          specializations: [
            "• BBA Finance",
            "• BBA Marketing",
            "• BBA International Business",
            "• BBA Human Resource",
            "• BBA Digital Marketing"
          ],
          topColleges: [
            {
              name: "Shaheed Sukhdev College of Business Studies",
              location: "Delhi",
              fees: "₹70,195/year",
              placement: "₹8.8 LPA"
            },
            {
              name: "SVKM's NMIMS Anil Surendra Modi School of Commerce",
              location: "Mumbai",
              fees: "₹5,94,000/year",
              placement: "₹6.4 LPA"
            },
            {
              name: "Department of Management Studies, Christ University",
              location: "Bangalore",
              fees: "₹4,71,750/year",
              placement: "₹5.5 LPA"
            }
          ],
          careerProspects: [
            {
              role: "Sales Executive",
              salary: "₹3 - 5 LPA"
            },
            {
              role: "Digital Marketer",
              salary: "₹4 - 7 LPA"
            },
            {
              role: "HR Executive",
              salary: "₹3.5 - 6 LPA"
            },
            {
              role: "Business Executive",
              salary: "₹4 - 8 LPA"
            },
            {
              role: "HR Manager",
              salary: "₹5 - 12 LPA"
            }
          ],
          higherStudies: [
            "• MBA",
            "• PGDM",
            "• MMS",
            "• M.Com",
            "• CFA",
            "• International MBA"
          ],
          marketScope: [
            "• Growing demand in corporate sector",
            "• Opportunities in multinational companies",
            "• Scope in entrepreneurship",
            "• Rising demand in startups",
            "• International business opportunities"
          ],
          entranceExams: [
            "• NPAT",
            "• SET",
            "• MAH CET",
            "• IPU CET",
            "• CUET"
          ],
          averageFees: {
            government: "₹50,000 - ₹1,00,000 per year",
            private: "₹1,00,000 - ₹3,00,000 per year"
          },
          jobRoles: [
            "• Business Development Manager",
            "• Marketing Manager",
            "• HR Manager",
            "• Finance Executive",
            "• Operations Manager"
          ],
          skills: [
            "• Management Skills",
            "• Communication Skills",
            "• Leadership Abilities",
            "• Problem-Solving Skills",
            "• Business Acumen"
          ],
          averageSalary: "₹3 - 5 LPA"
        };

      case 'MBA General':
        return {
          overview: "Master of Business Administration (MBA) is a 2-year postgraduate program that provides you with a comprehensive education in business management and related aspects. You will develop skills in areas like management, marketing, finance, operations and more. It is highly sought-after by professionals looking to advance their careers.",
          eligibility: [
            "• Bachelor's degree with 60% marks from a recognized university",
            "• The qualifying percentage can vary based on colleges",
            "• IIMs and IITs generally require more than 60% marks",
            "• Work experience is generally not mandatory",
            "• Relaxation in marks is given to reserved category candidates"
          ],
          admissionProcess: [
            "Entrance Exam Based:",
            "• CAT (Common Admission Test)",
            "• XAT (Xavier Aptitude Test)",
            "• CMAT (Common Management Admission Test)",
            "• GMAT (Graduate Management Admission Test)",
            "\nPost Exam Process:",
            "• Written Ability Test (WAT)",
            "• Group Discussion (GD)",
            "• Personal Interview (PI)"
          ],
          syllabus: {
            "First Year": [
              "• Management Fundamentals",
              "• Business Economics",
              "• Financial Accounting",
              "• Marketing Management",
              "• Organizational Behavior",
              "• Business Statistics"
            ],
            "Second Year": [
              "• Strategic Management",
              "• Operations Management",
              "• Business Ethics",
              "• Leadership",
              "• Specialization Courses",
              "• Industry Projects"
            ]
          },
          specializations: [
            "• Finance",
            "• Marketing",
            "• Human Resource Management",
            "• Operations Management",
            "• International Business",
            "• Business Analytics"
          ],
          topColleges: [
            {
              name: "IIM Ahmedabad",
              location: "Ahmedabad",
              fees: "₹23,00,000/2 years",
              placement: "₹32.5 LPA"
            },
            {
              name: "IIM Bangalore",
              location: "Bangalore",
              fees: "₹22,50,000/2 years",
              placement: "₹29.5 LPA"
            },
            {
              name: "XLRI Jamshedpur",
              location: "Jamshedpur",
              fees: "₹21,00,000/2 years",
              placement: "₹25.8 LPA"
            }
          ],
          entranceExams: [
            "• CAT - Most prestigious, required by IIMs",
            "• XAT - Required by XLRI and associated colleges",
            "• GMAT - For international and premium B-schools",
            "• MAT - Accepted by many private colleges",
            "• CMAT - AICTE approved national level test"
          ],
          thingsToKnow: [
            "• Manage your MBA expectations well",
            "• Choose your specialization wisely",
            "• Focus on practical learning and projects",
            "• Network extensively during the program",
            "• Balance academics with skill development"
          ],
          careerProspects: [
            {
              role: "Management Consultant",
              salary: "₹12 - 25 LPA"
            },
            {
              role: "Investment Banker",
              salary: "₹15 - 30 LPA"
            },
            {
              role: "Marketing Manager",
              salary: "₹10 - 18 LPA"
            },
            {
              role: "Business Development Manager",
              salary: "₹8 - 16 LPA"
            },
            {
              role: "Product Manager",
              salary: "₹12 - 24 LPA"
            }
          ],
          marketScope: [
            "• High demand in consulting and finance sectors",
            "• Growing opportunities in e-commerce and startups",
            "• International career prospects",
            "• Leadership roles in multinational companies",
            "• Entrepreneurship opportunities"
          ],
          skills: [
            "• Leadership & Team Management",
            "• Strategic Thinking",
            "• Financial Analysis",
            "• Problem Solving",
            "• Communication & Negotiation"
          ],
          averageFees: {
            government: "₹10-25 Lakhs (2 years)",
            private: "₹15-40 Lakhs (2 years)"
          }
        };

      case 'MCA General':
        return {
          overview: "Master of Computer Applications (MCA) is a master's level course focusing on computer applications and software development. It will provide you with comprehensive knowledge and skills in topics like programming languages, data structures, DBMS, emerging technologies and more in a 2-year coursework.",
          eligibility: [
            "• Bachelor's degree with Mathematics as one of the subjects in graduation or class 12",
            "• Minimum 50% marks in graduation",
            "• Valid entrance exam scores",
            "• Some colleges may require work experience",
            "• Relaxation in marks for reserved category candidates"
          ],
          admissionProcess: [
            "Entrance Exam Based:",
            "• NIMCET (March - April, 2025)",
            "• CUET PG",
            "• MAH MCA CET (February - March, 2025)",
            "• IPU CET (March 2025)",
            "• TANCET",
            "\nMerit Based:",
            "• Based on graduation marks",
            "• College-specific admission criteria"
          ],
          syllabus: {
            "First Year": [
              "• Programming Languages (C, C++, Java)",
              "• Data Structures and Algorithms",
              "• Database Management Systems",
              "• Operating Systems",
              "• Computer Networks",
              "• Software Engineering"
            ],
            "Second Year": [
              "• Web Technologies",
              "• Cloud Computing",
              "• Artificial Intelligence",
              "• Machine Learning",
              "• Project Work",
              "• Industry Internship"
            ]
          },
          specializations: [
            "• Cloud Computing",
            "• Data Analytics",
            "• Artificial Intelligence",
            "• Cyber Security",
            "• Web Development",
            "• Software Development"
          ],
          topColleges: [
            {
              name: "NIT Trichy",
              location: "Tiruchirappalli",
              fees: "₹1,20,000/year"
            },
            {
              name: "BIT Mesra",
              location: "Ranchi",
              fees: "₹1,50,000/year"
            },
            {
              name: "VIT Vellore",
              location: "Vellore",
              fees: "₹1,85,000/year"
            }
          ],
          careerProspects: [
            {
              role: "Software Developer",
              salary: "₹4.5 - 12 LPA"
            },
            {
              role: "Data Analyst",
              salary: "₹5 - 15 LPA"
            },
            {
              role: "System Architect",
              salary: "₹8 - 20 LPA"
            },
            {
              role: "Project Manager",
              salary: "₹10 - 25 LPA"
            },
            {
              role: "Database Administrator",
              salary: "₹6 - 18 LPA"
            }
          ],
          marketScope: [
            "• High demand in IT and software industry",
            "• Growing opportunities in emerging technologies",
            "• Scope in research and development",
            "• International job prospects",
            "• Entrepreneurship opportunities in tech sector"
          ],
          entranceExams: [
            {
              name: "NIMCET",
              registrationDates: "March - April, 2025",
              examDate: "June 2025"
            },
            {
              name: "IPU CET",
              registrationDates: "February - March, 2025",
              examDate: "April - May 2025"
            },
            {
              name: "CUET PG",
              registrationDates: "December 2024 - February 2025",
              examDate: "March 2025"
            },
            {
              name: "MAH MCA CET",
              registrationDates: "January - February 2025",
              examDate: "March 2025"
            }
          ],
          skills: [
            "• Programming & Coding",
            "• Problem Solving",
            "• Database Management",
            "• System Design",
            "• Project Management",
            "• Analytical Skills"
          ],
          averageFees: {
            government: "₹50,000 - ₹1,50,000 per year",
            private: "₹1,00,000 - ₹3,00,000 per year"
          },
          jobRoles: [
            "• Software Developer",
            "• System Analyst",
            "• Database Administrator",
            "• Project Manager",
            "• Technical Architect"
          ]
        };

      case 'M.Com General':
        return {
          overview: "M.Com stands for Master of commerce. It is a 2-years postgraduate course for candidates who want to pursue a career in accounting, banking, investment, financial services, investment as well as economics and marketing. The insurance sector, one of the main sectors that employ M.Com graduates of the economy, is expected to reach USD 1 Trillion by 2025, thus generating new jobs for M.Com graduates.",
          eligibility: [
            "• B.Com graduation from a commerce background",
            "• Minimum score of 50% in graduation",
            "• Some colleges conduct entrance examinations",
            "• Merit-based or entrance exam-based admission"
          ],
          admissionProcess: [
            "Merit-Based:",
            "• Based on graduation marks",
            "• State-level merit list preparation",
            "\nEntrance Based:",
            "• BHU PET",
            "• CUET PG",
            "• IPU CET",
            "• DU CET",
            "• University-specific entrance exams"
          ],
          syllabus: {
            "First Year": [
              "• Advanced Accounting",
              "• Business Economics",
              "• Statistical Analysis",
              "• Financial Management",
              "• Research Methodology",
              "• Business Environment"
            ],
            "Second Year": [
              "• Corporate Accounting",
              "• Tax Planning",
              "• Investment Management",
              "• International Finance",
              "• E-Commerce",
              "• Project Work"
            ]
          },
          specializations: [
            "• M.Com in Accounting",
            "• M.Com in Finance",
            "• M.Com in Banking",
            "• M.Com in Marketing",
            "• M.Com in Taxation"
          ],
          topColleges: [
            {
              name: "Delhi University",
              location: "Delhi",
              fees: "₹20,000/year"
            },
            {
              name: "Mumbai University",
              location: "Mumbai",
              fees: "₹25,000/year"
            },
            {
              name: "Christ University",
              location: "Bangalore",
              fees: "₹65,000/year"
            }
          ],
          careerProspects: [
            {
              role: "Account Manager",
              salary: "₹4 - 8 LPA"
            },
            {
              role: "Financial Analyst",
              salary: "₹5 - 12 LPA"
            },
            {
              role: "Investment Banker",
              salary: "₹6 - 15 LPA"
            },
            {
              role: "Tax Consultant",
              salary: "₹5 - 10 LPA"
            },
            {
              role: "Business Analyst",
              salary: "₹4.5 - 9 LPA"
            }
          ],
          marketScope: [
            "• Growing opportunities in banking sector",
            "• High demand in insurance industry",
            "• Scope in financial services",
            "• Teaching and research opportunities",
            "• Corporate sector opportunities"
          ],
          jobRoles: [
            "• Accountant",
            "• Financial Consultant",
            "• Business Analyst",
            "• Investment Manager",
            "• Tax Consultant"
          ],
          higherStudies: [
            "• Ph.D in Commerce",
            "• MBA",
            "• CFA",
            "• CA",
            "• CS"
          ],
          averageFees: {
            government: "₹5,000 - ₹25,000 per year",
            private: "₹25,000 - ₹1,50,000 per year"
          },
          skills: [
            "• Financial Analysis",
            "• Accounting Skills",
            "• Business Management",
            "• Research Abilities",
            "• Analytical Skills"
          ],
          recruiters: [
            "• KPMG",
            "• PWC",
            "• State Bank of India",
            "• HDFC Bank",
            "• ICICI etc."
          ]
        };

      case 'MBA Finance':
        return {
          overview: "MBA Finance is a 2-year postgraduate degree course focusing on general eligibility criteria which include candidates having cleared their graduation in relevant discipline with an average aggregate score of 50% or equivalent CGPA from a recognized university. MBA Finance Admission is based on MBA Entrance Exams such as CAT, XAT, GMAT, SNAP and CMAT.",
          eligibility: [
            "• Bachelor's degree with 50% aggregate marks",
            "• Valid entrance exam scores (CAT/XAT/GMAT/SNAP)",
            "• Some colleges conduct their own entrance tests",
            "• Work experience preferred but not mandatory"
          ],
          admissionProcess: [
            "Entrance Exam Based:",
            "• CAT (Common Admission Test)",
            "• XAT (Xavier Aptitude Test)",
            "• GMAT (Graduate Management Admission Test)",
            "• SNAP (Symbiosis National Aptitude Test)",
            "\nPost Exam Process:",
            "• Written Ability Test (WAT)",
            "• Group Discussion (GD)",
            "• Personal Interview (PI)"
          ],
          syllabus: {
            "First Year": [
              "• Financial Management",
              "• Corporate Finance",
              "• Investment Analysis",
              "• Financial Markets",
              "• Banking Operations",
              "• Risk Management"
            ],
            "Second Year": [
              "• Portfolio Management",
              "• International Finance",
              "• Financial Derivatives",
              "• Project Finance",
              "• Strategic Financial Management",
              "• Financial Analytics"
            ]
          },
          specializations: [
            "• Investment Banking",
            "• Corporate Finance",
            "• Risk Management",
            "• Financial Analysis",
            "• Wealth Management"
          ],
          topColleges: [
            {
              name: "IIM Ahmedabad",
              location: "Ahmedabad",
              fees: "₹23,00,000/2 years",
              placement: "₹32.5 LPA"
            },
            {
              name: "IIM Bangalore",
              location: "Bangalore",
              fees: "₹22,50,000/2 years",
              placement: "₹29.5 LPA"
            },
            {
              name: "XLRI Jamshedpur",
              location: "Jamshedpur",
              fees: "₹21,00,000/2 years",
              placement: "₹25.8 LPA"
            }
          ],
          careerProspects: [
            {
              role: "Financial Analyst",
              salary: "₹11 - 17 LPA"
            },
            {
              role: "Finance Manager",
              salary: "₹12 - 18 LPA"
            },
            {
              role: "Investment Banker",
              salary: "₹15 - 25 LPA"
            },
            {
              role: "Business Analyst",
              salary: "₹10 - 16 LPA"
            },
            {
              role: "Operations Manager",
              salary: "₹11 - 17 LPA"
            }
          ],
          marketScope: [
            "• High demand in banking and financial sectors",
            "• Growing opportunities in investment banking",
            "• Scope in corporate finance",
            "• International career prospects",
            "• Fintech sector opportunities"
          ],
          entranceExams: [
            "• CAT - Required for IIMs",
            "• XAT - For XLRI and other colleges",
            "• GMAT - International B-schools",
            "• SNAP - Symbiosis colleges",
            "• CMAT - AICTE approved test"
          ],
          averageFees: {
            government: "₹8,00,000 - ₹15,00,000 (2 years)",
            private: "₹10,00,000 - ₹25,00,000 (2 years)"
          },
          jobRoles: [
            "• Financial Analyst",
            "• Finance Manager",
            "• Investment Banker",
            "• Business Analyst",
            "• Operations Manager"
          ],
          skills: [
            "• Financial Analysis",
            "• Risk Management",
            "• Investment Planning",
            "• Market Analysis",
            "• Business Strategy"
          ],
          topRecruiters: [
            "• Deutsche Bank",
            "• JP Morgan",
            "• Barclays",
            "• Standard Chartered",
            "• EY & Accenture"
          ],
          courseFees: "₹8,00,000 - ₹15,00,000"
        };

      case 'MBA Marketing':
        return {
          overview: "MBA Marketing is a 2-year MBA specialization for candidates interested in learning about market strategies, branding, advertising, and how to manage resources used in marketing. The course provides students with the knowledge and technical of creating a narrative around any particular product and service with the help of analytics, storytelling, communications, customer behaviour and management skills.",
          eligibility: [
            "• Bachelor's degree with 50% marks in graduation",
            "• Valid scores in CAT, ATMA, MAT or other national level MBA exams",
            "• Some colleges conduct their own entrance tests",
            "• Work experience preferred but not mandatory"
          ],
          admissionProcess: [
            "Entrance Exam Based:",
            "• CAT (Common Admission Test)",
            "• MAT (Management Aptitude Test)",
            "• XAT (Xavier Aptitude Test)",
            "• ATMA (AIMS Test for Management Admissions)",
            "\nPost Exam Process:",
            "• Group Discussion",
            "• Personal Interview",
            "• Written Ability Test"
          ],
          syllabus: {
            "Core Subjects": [
              "• Managerial Economics",
              "• Marketing Management",
              "• Global Business Management",
              "• Statistical and Quantitative Methods",
              "• Business Laws"
            ],
            "Specialization Subjects": [
              "• Consumer Behavior",
              "• Brand Management",
              "• Digital Marketing",
              "• Sales Management",
              "• Marketing Research",
              "• Retail Marketing"
            ]
          },
          topColleges: [
            {
              name: "IIM Kozhikode",
              location: "Kerala",
              fees: "₹20,00,000/2 years"
            },
            {
              name: "IIM Raipur",
              location: "Chhattisgarh",
              fees: "₹18,00,000/2 years"
            },
            {
              name: "NMIMS",
              location: "Mumbai",
              fees: "₹22,00,000/2 years"
            },
            {
              name: "Great Lakes Institute of Management",
              location: "Chennai",
              fees: "₹16,00,000/2 years"
            }
          ],
          careerProspects: [
            {
              role: "Marketing Manager",
              salary: "₹8 - 15 LPA"
            },
            {
              role: "Marketing Executive",
              salary: "₹5 - 8 LPA"
            },
            {
              role: "Brand Manager",
              salary: "₹10 - 18 LPA"
            },
            {
              role: "Digital Marketing Manager",
              salary: "₹8 - 16 LPA"
            },
            {
              role: "Product Manager",
              salary: "₹12 - 20 LPA"
            }
          ],
          marketScope: [
            "• Growing digital marketing sector",
            "• High demand in e-commerce",
            "• Opportunities in brand management",
            "• International marketing prospects",
            "• Scope in market research and analytics"
          ],
          skills: [
            "• Marketing Analytics",
            "• Digital Marketing Skills",
            "• Communication Skills",
            "• Brand Management",
            "• Market Research",
            "• Consumer Behavior Analysis"
          ],
          jobRoles: [
            "• Marketing Manager",
            "• Brand Manager",
            "• Market Research Analyst",
            "• Digital Marketing Specialist",
            "• Product Manager"
          ],
          averageSalary: "₹8.5 LPA",
          programTypes: [
            "• Full Time",
            "• Part Time",
            "• Distance",
            "• Online"
          ],
          relatedCourses: [
            "• MBA Marketing and Sales",
            "• MBA Marketing and Finance",
            "• MBA Marketing Management",
            "• MBA Digital Marketing"
          ],
          averageFees: {
            government: "₹8,00,000 - ₹15,00,000 (2 years)",
            private: "₹12,00,000 - ₹25,00,000 (2 years)"
          }
        };

      case 'Ph.D in Chemistry':
          return {
            overview:
              "A Ph.D. in Chemistry takes about six years to complete in any reputed Indian university, with three years being the minimum duration as per UGC guidelines. The program prepares students for research and teaching careers with emphasis on basic, life, medical, physical, energy, materials, and environmental sciences.",
            eligibility: [
              "• Master's degree in Science/M.Phil in relevant field",
              "• Minimum 55% marks in Master's degree",
              "• Valid UGC NET or GATE score",
              "• Some colleges conduct their own entrance tests",
            ],
            admissionProcess: [
              "Step 1: Applications",
              "• Online/offline application submission",
              "• Registration for entrance exams",
              "\nStep 2: Entrance Exams",
              "• CSIR UGC NET (June 2024)",
              "• UGC NET (February-March 2024)",
              "• IIT JAM (February 11, 2024)",
              "\nStep 3: Interview Process",
              "• Personal interview",
              "• Research proposal presentation",
              "• Document verification",
            ],
            syllabus: {
              "Core Subjects": [
                "• General Structure",
                "• Research Methodology",
                "• Scientific Communication",
                "• Recent Trends in Chemistry",
              ],
              "Research Areas": [
                "• Physical Biochemistry",
                "• Inorganic Chemistry",
                "• Advanced Analytical Chemistry",
                "• Organic Synthesis",
                "• Physical Organic Chemistry",
                "• Quantum Mechanics",
              ],
            },
            topColleges: [
              {
                name: "Indian Institute of Science",
                location: "Bangalore",
                fees: "₹35,200/year",
                package: "10 LPA",
              },
              {
                name: "IIT Bombay",
                location: "Mumbai",
                fees: "₹73,000/year",
                package: "20.34 LPA",
              },
              {
                name: "IIT Kharagpur",
                location: "Kharagpur",
                fees: "₹28,900/year",
              },
              {
                name: "IIT Roorkee",
                location: "Roorkee",
                fees: "₹28,500/year",
                package: "13.16 LPA",
              },
            ],
            careerProspects: [
              {
                role: "Staff Scientist",
                salary: "₹15 - 20 LPA",
              },
              {
                role: "Chemistry Professor",
                salary: "₹12 - 18 LPA",
              },
              {
                role: "Research Specialist",
                salary: "₹14 - 22 LPA",
              },
              {
                role: "Senior Chemist",
                salary: "₹16 - 25 LPA",
              },
            ],
            marketScope: [
              "• Environment consultancies",
              "• Forensic science labs",
              "• Pharmaceutical companies",
              "• Food and drink industry",
              "• Plastic and polymer companies",
              "• Educational institutes",
              "• Scientific research organizations",
            ],
            entranceExams: [
              {
                name: "CSIR UGC NET",
                registrationDates: "March - April 2024",
                examDate: "June 2024",
              },
              {
                name: "UGC NET",
                registrationDates: "December 2023 - January 2024",
                examDate: "February - March 2024",
              },
              {
                name: "IIT JAM",
                registrationDates: "September - October 2023",
                examDate: "February 11, 2024",
              },
            ],
            averageFees: {
              range: "₹80,000 - 3 LPA per year",
            },
            topRecruiters: [
              "• Aditya Birla",
              "• TATA Chemicals",
              "• ITC",
              "• Hindustan Unilever",
              "• Reliance",
              "• Dr. Reddy",
              "• P & G",
            ],
            skills: [
              "• Advanced Research Methodology",
              "• Laboratory Techniques",
              "• Analytical Skills",
              "• Scientific Writing",
              "• Project Management",
              "• Data Analysis",
            ],
          };
  
      case 'Ph.D in Physics':
          return {
            overview:
              "Doctor of Philosophy or Ph.D. Physics is a 3-year doctorate program that is considered an ideal degree for students who want to pursue a full-time period of independent research which equips students with research skills and specialist knowledge. The course covers subjects such as Quantum Optics and Laser Physics, Matter Physics, Solid State Physics, Materials Science, High Energy Physics, Nonlinear Optics, and Electronic Science.",
            eligibility: [
              "• Bachelor's Degree, M.Phil. or M.Sc in Physics/Material Science",
              "• Minimum 60% aggregate score (55% for SC/ST)",
              "• Valid entrance exam scores (CSIR/UGC-JRF, JEST/GATE)",
              "• Research proposal acceptance",
            ],
            admissionProcess: [
              "Step 1: Online Registration",
              "• Fill application form with personal and academic details",
              "• Upload required documents",
              "• Pay application fees",
              "\nStep 2: Entrance Exams",
              "• CSIR UGC NET (June 2024)",
              "• UGC NET (February-March 2024)",
              "• IIT JAM (February 11, 2024)",
              "\nStep 3: Selection Process",
              "• Personal Interview",
              "• Research Proposal Presentation",
              "• Document Verification",
            ],
            syllabus: {
              "Semester I": [
                "• Research Methodology and Statistics",
                "• Theoretical Physics",
                "• Experimental Physics",
                "• Numerical Methods and Simulation",
                "• Research and Technical Communication",
              ],
              "Semester II": [
                "• Physics Laboratory",
                "• Mathematical Methods",
                "• Quantum Mechanics",
                "• Statistical Mechanics",
                "• Numerical Methods and Programming",
              ],
              "Semester III": [
                "• Electrodynamics",
                "• Condensed Matter Physics",
                "• Condensed Matter Physics Lab",
                "• Department Elective",
                "• Open Elective",
              ],
              "Semester IV": [
                "• Atomic and Molecular Physics",
                "• Nuclear and Particle Physics",
                "• Ph.D. Project",
                "• Department Elective",
                "• Open Elective",
              ],
            },
            topColleges: [
              {
                name: "Indian Institute of Science",
                location: "Bangalore",
                fees: "₹35,200/year",
                accreditation: "NAAC, UGC",
              },
              {
                name: "IIT Mumbai",
                location: "Mumbai",
                fees: "₹73,000/year",
                accreditation: "AICTE, UGC",
              },
              {
                name: "IIT Kanpur",
                location: "Kanpur",
                fees: "₹64,050/year",
                placement: "₹7.8 LPA",
              },
              {
                name: "BITS Pilani",
                location: "Pilani",
                fees: "₹1,10,125/year",
                accreditation: "AICTE, NAAC",
              },
            ],
            careerProspects: [
              {
                role: "Research Scientist",
                salary: "₹8.49 LPA",
              },
              {
                role: "Physicist",
                salary: "₹8 LPA",
              },
              {
                role: "Physics Professor",
                salary: "₹7.99 LPA",
              },
              {
                role: "Natural Science Manager",
                salary: "₹8.62 LPA",
              },
              {
                role: "Petroleum Engineer",
                salary: "₹8.08 LPA",
              },
            ],
            marketScope: [
              "• Academic and research institutions",
              "• Government research laboratories",
              "• Industrial R&D centers",
              "• Space research organizations",
              "• Nuclear power plants",
              "• Defense research establishments",
            ],
            entranceExams: [
              {
                name: "CSIR UGC NET",
                registrationDates: "March - April 2024",
                examDate: "June 2024",
              },
              {
                name: "UGC NET",
                registrationDates: "December 2023 - January 2024",
                examDate: "February - March 2024",
              },
              {
                name: "IIT JAM",
                registrationDates: "September - October 2023",
                examDate: "February 11, 2024",
              },
            ],
            averageFees: {
              fullTime: "₹2 - 5 Lakhs per year",
              distance: "₹15,000 - 20,000 per year",
            },
            topRecruiters: [
              "• CSIR-National Physical Laboratory",
              "• Physical Research Laboratory",
              "• IISC Bangalore",
              "• IIIT Hyderabad",
              "• Indian Institute of Science",
              "• Solid State Physics Laboratory",
            ],
            skills: [
              "• Advanced Research Methodology",
              "• Experimental Design",
              "• Data Analysis",
              "• Mathematical Modeling",
              "• Scientific Writing",
              "• Laboratory Techniques",
            ],
          };
  
      case 'Ph.D in Mathematics':
          return {
            overview:
              "Doctor of Philosophy or Ph.D. Mathematics is a 3-year doctorate program that focuses on advanced research and problem-solving techniques in mathematical theories and applications. The course covers subjects such as Algebra, Topology, Differential Equations, Functional Analysis, Number Theory, and Computational Mathematics.",
            eligibility: [
              "• Master's degree (M.Sc./M.Phil.) in Mathematics/Applied Mathematics",
              "• Minimum 55% aggregate score (50% for SC/ST candidates)",
              "• Qualifying entrance exams (CSIR-UGC NET, GATE, NBHM)",
              "• Research proposal approval",
            ],
            admissionProcess: [
              "Step 1: Online Registration",
              "• Fill application form with academic and personal details",
              "• Upload necessary documents",
              "• Pay application fees",
              "\nStep 2: Entrance Exams",
              "• CSIR UGC NET (June 2024)",
              "• GATE (February 2024)",
              "• NBHM (January 2024)",
              "\nStep 3: Selection Process",
              "• Personal Interview",
              "• Research Proposal Evaluation",
              "• Document Verification",
            ],
            syllabus: {
              "Semester I": [
                "• Research Methodology",
                "• Advanced Algebra",
                "• Real Analysis",
                "• Complex Analysis",
                "• Computational Techniques",
              ],
              "Semester II": [
                "• Functional Analysis",
                "• Differential Equations",
                "• Topology and Geometry",
                "• Mathematical Statistics",
                "• Numerical Analysis",
              ],
              "Semester III": [
                "• Graph Theory and Combinatorics",
                "• Advanced Number Theory",
                "• Partial Differential Equations",
                "• Department Elective",
                "• Open Elective",
              ],
              "Semester IV": [
                "• Stochastic Processes",
                "• Mathematical Modeling",
                "• Ph.D. Research Project",
                "• Department Elective",
                "• Open Elective",
              ],
            },
            topColleges: [
              {
                name: "Indian Statistical Institute",
                location: "Kolkata",
                fees: "₹25,000/year",
                accreditation: "NAAC, UGC",
              },
              {
                name: "IIT Delhi",
                location: "Delhi",
                fees: "₹75,000/year",
                accreditation: "AICTE, UGC",
              },
              {
                name: "TIFR Mumbai",
                location: "Mumbai",
                fees: "₹20,000/year",
                placement: "₹8.5 LPA",
              },
              {
                name: "IISc Bangalore",
                location: "Bangalore",
                fees: "₹35,200/year",
                accreditation: "NAAC, UGC",
              },
            ],
            careerProspects: [
              {
                role: "Mathematician",
                salary: "₹9.2 LPA",
              },
              {
                role: "Statistician",
                salary: "₹8.5 LPA",
              },
              {
                role: "Data Scientist",
                salary: "₹10.5 LPA",
              },
              {
                role: "Operations Research Analyst",
                salary: "₹9.1 LPA",
              },
              {
                role: "Professor of Mathematics",
                salary: "₹8.3 LPA",
              },
            ],
            marketScope: [
              "• Research institutions and universities",
              "• Data analysis and machine learning companies",
              "• Cryptography and cybersecurity firms",
              "• Financial modeling and risk management",
              "• Government statistical departments",
              "• Space and defense organizations",
            ],
            entranceExams: [
              {
                name: "CSIR UGC NET",
                registrationDates: "March - April 2024",
                examDate: "June 2024",
              },
              {
                name: "GATE (Mathematics)",
                registrationDates: "August - September 2023",
                examDate: "February 2024",
              },
              {
                name: "NBHM",
                registrationDates: "December 2023",
                examDate: "January 2024",
              },
            ],
            averageFees: {
              fullTime: "₹1 - 4 Lakhs per year",
              distance: "₹20,000 - 50,000 per year",
            },
            topRecruiters: [
              "• Indian Statistical Institute (ISI)",
              "• Tata Institute of Fundamental Research (TIFR)",
              "• DRDO",
              "• ISRO",
              "• IBM Research",
              "• Google AI",
            ],
            skills: [
              "• Mathematical Modeling",
              "• Data Interpretation",
              "• Algorithm Development",
              "• Research and Analytical Skills",
              "• Scientific Computing",
              "• Abstract Thinking",
            ],
          };
  
      case 'Ph.D.':
          return {
            overview:
              "Doctor of Philosophy (Ph.D.) derived from the Latin term 'Philosophiae Doctor' is the highest degree or doctorate awarded for research in a particular subject. The term 'philosophy' comes from the Greek word which means 'lover of wisdom'. While the term has little relation to the philosophy subject itself, it represents the highest level of academic achievement in research.",
            eligibility: [
              "• Master's degree or MPhil with minimum 55% aggregate score",
              "• Valid entrance exam score (CSIR-UGC NET/GATE/etc.)",
              "• Four-year UG degree holders can directly apply (new UGC directive)",
              "• Additional requirements may vary by institution",
            ],
            admissionProcess: [
              "Step 1: Online Application Submission",
              "• Fill application form with academic and personal details",
              "• Upload necessary documents",
              "• Pay application fees",
              "\nStep 2: Entrance Exam Clearance",
              "• CSIR UGC NET (June 2024)",
              "• GATE (February 2024)",
              "• NBHM (January 2024)",
              "\nStep 3: Interview Process",
              "• Personal Interview",
              "• Research Proposal Evaluation",
              "• Document Verification",
            ],
            syllabus: {
              "Semester I": [
                "• Research Methodology",
                "• Advanced Topics in Subject",
                "• Literature Review",
                "• Research Ethics",
              ],
              "Semester II": [
                "• Specialized Research Topics",
                "• Data Collection and Analysis",
                "• Thesis Writing",
                "• Presentation Skills",
              ],
            },
            topColleges: [
              {
                name: "IITs",
                location: "Various Locations",
                fees: "₹1 - 5 Lakhs/year",
              },
              {
                name: "IISc Bangalore",
                location: "Bangalore",
                fees: "₹35,200/year",
              },
              {
                name: "Jadavpur University",
                location: "Kolkata",
                fees: "₹50,000/year",
              },
              {
                name: "Delhi University",
                location: "Delhi",
                fees: "₹25,000/year",
              },
            ],
            careerProspects: [
              {
                role: "Research Scientist",
                salary: "₹8 - 15 LPA",
              },
              {
                role: "University Professor",
                salary: "₹7 - 12 LPA",
              },
              {
                role: "Data Analyst",
                salary: "₹6 - 10 LPA",
              },
              {
                role: "Scientific Consultant",
                salary: "₹10 - 18 LPA",
              },
            ],
            marketScope: [
              "• Research institutions and universities",
              "• Government research laboratories",
              "• Industrial R&D centers",
              "• Space research organizations",
              "• Defense research establishments",
            ],
            entranceExams: [
              {
                name: "CSIR UGC NET",
                registrationDates: "March - April 2024",
                examDate: "June 2024",
              },
              {
                name: "UGC NET",
                registrationDates: "December 2023 - January 2024",
                examDate: "February - March 2024",
              },
              {
                name: "GATE",
                registrationDates: "August - September 2023",
                examDate: "February 2024",
              },
            ],
            averageFees: {
              fullTime: "₹1 - 5 Lakhs per year",
              distance: "₹20,000 - 50,000 per year",
            },
            topRecruiters: [
              "• CSIR",
              "• DRDO",
              "• ISRO",
              "• BARC",
              "• TIFR",
              "• IISc",
            ],
            skills: [
              "• Research Methodology",
              "• Data Analysis",
              "• Critical Thinking",
              "• Problem Solving",
              "• Scientific Writing",
              "• Presentation Skills",
            ],
          };

      case 'Ph.D Mechanical Engineering': 
          return {
            overview: "PhD Mechanical Engineering is a doctorate-level course in Mechanics, typically lasting 5 to 8 years. It is a research-based program where students learn various mechanical engineering skills, including working with machines and related equipment. The course requires a strong foundation in Maths and Science. Topics include Mathematics for Engineering Research, Research Methodology, and branch-specific subjects.",
            
            courseDetails: {
              fullForm: "Doctor of Philosophy in Mechanical Engineering",
              duration: "2 to 5 years",
              admissionType: "Entrance based and personal interview",
              specializations: ["Mechanical Engineering", "Thermal Engineering", "Design Engineering", "Manufacturing Engineering"],
              topColleges: [
                { name: "Indian Institute of Technology, Madras", admissionProcess: "Entrance test", averageFee: "INR 19,670", averageSalary: "INR 12.79 LPA" },
                { name: "Indian Institute of Technology, New Delhi", admissionProcess: "Entrance test", averageFee: "INR 34,900", averageSalary: "INR 20-25 LPA" },
                { name: "Indian Institute of Technology, Bombay", admissionProcess: "Entrance test", averageFee: "INR 73,000", averageSalary: "INR 10-15 LPA" },
                { name: "NIT Trichy, Tiruchirapalli", admissionProcess: "Entrance test", averageFee: "INR 85,000", averageSalary: "INR 7 LPA" },
                { name: "Birla Institute of Technology and Science, Pilani", admissionProcess: "Entrance test", averageFee: "INR 1,10,125", averageSalary: "INR 6-7 LPA" }
              ],
              averageCourseFees: "INR 96,000 to INR 3,16,000 per year"
            },
            
            whyStudy: [
              "• PhD Mechanical Engineering helps students advance their knowledge in mechanical systems and contribute to cutting-edge research.",
              "• It opens doors to high-paying jobs in both government and private sectors.",
              "• Essential for academic positions like lecturers and researchers.",
              "• Opportunities in industries such as power plants, manufacturing, chemical plants, and steel plants.",
              "• Contributes to technological advancements and innovation."
            ],
            
            vsOtherFields: {
              comparisonField: "PhD Electrical Engineering",
              objective: "Focuses on advancements in mechanical systems, while Electrical Engineering focuses on electrical systems and electronics.",
              focus: "Mechanical Engineering emphasizes physical systems, machinery, and thermodynamics, whereas Electrical Engineering deals with circuits, signals, and power systems.",
              requirements: "Both require a Master's degree, but Mechanical Engineering may also accept candidates with a strong background in science subjects.",
              studentFocus: "Students in Mechanical Engineering focus on theoretical and practical applications of mechanics, while Electrical Engineering students focus on electrical systems."
            },
            
            eligibility: [
              "• Post Graduation in Mechanical Engineering or any other related field with a minimum of 75% marks.",
              "• Candidates with a Master's degree in science subjects can apply but must clear the GATE cut-off.",
              "• Bachelor’s degree holders in engineering or technology with a minimum of 75% marks are also eligible.",
              "• Relaxation of marks is given to SC/ST/OBC/PwD or other underprivileged candidates.",
              "• Entrance test clearance (if applicable) is mandatory."
            ],
            
            entranceExams: [
              {
                name: "UGC NET",
                description: "The UGC National Eligibility Test (NET) is the most popular entrance test for PhD candidates, held for admission to PhD courses in different streams.",
                schedule: "Exam dates vary; application forms usually submitted by April."
              },
              {
                name: "JNUEE",
                description: "Entrance test for Jawaharlal Nehru University (JNU) PhD students, held annually in June.",
                schedule: "Application forms submitted by April."
              },
              {
                name: "GATE",
                description: "National-level entrance test primarily for M.Tech students, but some colleges accept GATE scores for PhD admissions.",
                examDate: "February"
              },
              {
                name: "UGC CSIR NET",
                description: "Council of Scientific & Industrial Research – National Eligibility Test for Junior Research Fellowship posts.",
                schedule: "Held twice a year in offline mode."
              },
              {
                name: "DTU PhD Entrance Exam",
                description: "Delhi Technical University conducts an entrance test for PhD admissions, usually held in December.",
                schedule: "Interview may follow after the exam."
              }
            ],
            
            syllabus: [
              "• Mathematics for Engineering Research",
              "• Research Methodology",
              "• Advanced Thermodynamics",
              "• Fluid Mechanics",
              "• Machine Design",
              "• Manufacturing Processes",
              "• Robotics and Automation",
              "• Computational Methods in Engineering"
            ],
            
            jobProspects: {
              jobOptions: ["Lecturer", "Junior Engineer", "Assistant Engineer", "Executive Engineer", "Researcher"],
              averageSalary: "INR 3.5 to INR 10 Lakhs",
              topRecruitingAreas: ["Power plants", "Manufacturing areas", "Chemical plants", "Steel plants", "Educational institutes"],
              topRecruitingCompanies: ["Amazon", "Cisco", "Citi Bank", "IBM", "Facebook", "Accenture", "Cognizant", "Citrix", "Bosch", "Mu Sigma", "NTPC"]
            },
            
            futureScope: [
              "• Opportunities in advanced research and development in mechanical systems.",
              "• Increasing demand for mechanical engineers in renewable energy sectors.",
              "• Potential for leadership roles in academia and industry.",
              "• Contribution to innovations in automation, robotics, and AI-driven systems."
            ],
            
            admissionProcess: {
              modes: [
                "• Merit-based selection",
                "• Entrance-based selection",
                "• Personal interview"
              ],
              steps: [
                "• Fill out the application form (available online and offline).",
                "• Appear for the entrance test (if applicable).",
                "• Clear the personal interview round.",
                "• Submit required documents for verification.",
                "• Final selection and admission offer."
              ]
            }
          };

      case 'Polytechnic Mechanical Engineering':
            return {
              overview:
                "Polytechnic Mechanical Engineering is a 3-year diploma program focusing on the design, manufacturing, and maintenance of mechanical systems. It provides hands-on training in areas like thermodynamics, fluid mechanics, machine design, and manufacturing processes. Graduates can work as technicians, supervisors, or pursue higher education through lateral entry into BTech programs.",
              eligibility: [
                "• Pass class 10th from a recognized board",
                "• Minimum 55% marks in class 10 (50% for reserved categories)",
                "• Mathematics and English as compulsory subjects",
                "• Admission based on entrance exams like JEECUP, JEXPO, Odisha DET, etc.",
                "• Some colleges offer direct admission based on merit"
              ],
              admissionProcess: [
                "Direct Admission:",
                "• Based on 10th marks",
                "• Merit list preparation",
                "\nEntrance Based:",
                "• JEECUP (Joint Entrance Examination for Polytechnic Courses in UP)",
                "• JEXPO (West Bengal Joint Entrance Examination for Polytechnic Courses)",
                "• Odisha DET (Odisha Diploma Entrance Test)"
              ],
              syllabus: {
                "First Semester": [
                  "• Engineering Mathematics-1",
                  "• Engineering Physics-1",
                  "• English",
                  "• Engineering Chemistry and Environmental Studies-1",
                  "• Engineering Mechanics",
                  "• Engineering Drawing-1"
                ],
                "Second Semester": [
                  "• Engineering Mathematics-2",
                  "• Engineering Physics-2",
                  "• Basic Electrical & Electronics Engineering",
                  "• Engineering Chemistry and Environmental Studies-2",
                  "• Strength of Material",
                  "• Physics Lab",
                  "• Chemistry Lab",
                  "• Engineering Drawing-2",
                  "• Workshop Technology"
                ],
                "Third Semester": [
                  "• Advanced Strength of Material",
                  "• Thermal Engineering-I",
                  "• Fundamentals of Electronics",
                  "• Manufacturing Processes I",
                  "• Engineering Materials",
                  "• Mechanical Engineering Drawing",
                  "• Professional Practice-I"
                ],
                "Fourth Semester": [
                  "• Development of Life Skill-II",
                  "• Manufacturing Processes II",
                  "• Theory of Machines & Mechanism",
                  "• Thermal Engineering-II",
                  "• Principles of Electrical Engineering",
                  "• Professional Practice-II"
                ],
                "Fifth Semester": [
                  "• Fluid Mechanics & Machinery",
                  "• Advanced Manufacturing Processes",
                  "• Measurement & Control",
                  "• Power Engineering",
                  "• Industrial Project & Entrepreneurship",
                  "• Computer Programming",
                  "• Elective I (Automobile Engineering, Power Plant Engineering, Tool Engineering, Mechatronics)",
                  "• Professional Practice-III"
                ],
                "Sixth Semester": [
                  "• Design of M/C Elements",
                  "• Industrial Management",
                  "• Fluid Power",
                  "• Production Management",
                  "• Elective II (Refrigeration & Air-Conditioning, CAD-CAM & Automation, Material Handling Systems, Alternate Energy Sources & Management)",
                  "• Project",
                  "• Professional Practice-IV",
                  "• General Viva"
                ]
              },
              topColleges: [
                {
                  name: "College of Engineering, Roorkee",
                  fees: "₹10,000 - ₹50,000/year"
                },
                {
                  name: "Jamia Millia Islamia University",
                  fees: "₹20,000 - ₹1,00,000/year"
                },
                {
                  name: "Bharati Vidyapeeth Deemed University",
                  fees: "₹50,000 - ₹2,00,000/year"
                }
              ],
              careerProspects: [
                {
                  role: "Mechanical Technician",
                  salary: "₹2.5 - 5 LPA"
                },
                {
                  role: "Production Supervisor",
                  salary: "₹3 - 6 LPA"
                },
                {
                  role: "Quality Control Inspector",
                  salary: "₹3.5 - 7 LPA"
                },
                {
                  role: "Design Engineer (after BTech)",
                  salary: "₹4 - 8 LPA"
                }
              ],
              marketScope: [
                "• High demand in manufacturing industries",
                "• Opportunities in automobile and aerospace sectors",
                "• Growing scope in automation and robotics",
                "• International job prospects after higher studies"
              ],
              entranceExams: [
                {
                  name: "JEECUP",
                  description: "Joint Entrance Examination for Polytechnic Courses in Uttar Pradesh",
                  schedule: "Application forms available from January; Exam in April"
                },
                {
                  name: "JEXPO",
                  description: "West Bengal Joint Entrance Examination for Polytechnic Courses",
                  schedule: "Application forms available from February; Exam in May"
                },
                {
                  name: "Odisha DET",
                  description: "Odisha Diploma Entrance Test for admission to polytechnic courses",
                  schedule: "Application forms available from March; Exam in June"
                }
              ],
              averageFees: "₹10,000 - ₹2,00,000 per year"
            };

      case 'Polytechnic Civil Engineering':
              return {
                overview:
                  "Diploma in Civil Engineering is a 3-year polytechnic course that can be pursued by students after class 10. It focuses on the design, construction, and maintenance of infrastructure such as buildings, roads, bridges, dams, and water supply systems. The course is ideal for students who want to enter the technical workforce early or pursue higher education through lateral entry into BTech programs.",
                eligibility: [
                  "• Minimum 55% marks in class 10 (50% for reserved categories)",
                  "• Mathematics and English as compulsory subjects",
                  "• Admission based on entrance exams like JEECUP, JEXPO, Odisha DET, etc.",
                  "• Some colleges offer direct admission based on merit"
                ],
                admissionProcess: [
                  "Direct Admission:",
                  "• Based on 10th marks",
                  "• Merit list preparation",
                  "\nEntrance Based:",
                  "• JEECUP (January - April, 2024)",
                  "• JEXPO (February - May, 2024)",
                  "• Odisha DET (March - June, 2024)",
                  "• MP DET (February - May, 2024)"
                ],
                syllabus: {
                  "First Semester": [
                    "• Engineering Mathematics-1",
                    "• Engineering Physics-1",
                    "• English",
                    "• Engineering Chemistry and Environmental Studies-1",
                    "• Engineering Mechanics",
                    "• Engineering Drawing-1"
                  ],
                  "Second Semester": [
                    "• Engineering Mathematics-2",
                    "• Engineering Physics-2",
                    "• Basic Electrical & Electronics Engineering",
                    "• Engineering Chemistry and Environmental Studies-2",
                    "• Strength of Material",
                    "• Physics Lab",
                    "• Chemistry Lab",
                    "• Engineering Drawing-2",
                    "• Workshop Technology"
                  ],
                  "Third Semester": [
                    "• Advanced Strength of Material",
                    "• Surveying-I",
                    "• Building Materials and Construction",
                    "• Fluid Mechanics-I",
                    "• Concrete Technology",
                    "• Professional Practice-I"
                  ],
                  "Fourth Semester": [
                    "• Development of Life Skill-II",
                    "• Surveying-II",
                    "• Structural Analysis",
                    "• Fluid Mechanics-II",
                    "• Soil Mechanics",
                    "• Professional Practice-II"
                  ],
                  "Fifth Semester": [
                    "• Transportation Engineering",
                    "• Environmental Engineering",
                    "• Irrigation Engineering",
                    "• Estimating and Costing",
                    "• Industrial Project & Entrepreneurship",
                    "• Computer Programming",
                    "• Elective I (Geotechnical Engineering, Highway Engineering, Water Resource Engineering)",
                    "• Professional Practice-III"
                  ],
                  "Sixth Semester": [
                    "• Design of Structures",
                    "• Construction Management",
                    "• Hydrology and Flood Control",
                    "• Production Management",
                    "• Elective II (Town Planning, Earthquake Engineering, Remote Sensing and GIS)",
                    "• Project",
                    "• Professional Practice-IV",
                    "• General Viva"
                  ]
                },
                topColleges: [
                  {
                    name: "College of Engineering, Roorkee",
                    location: "Roorkee",
                    fees: "₹10,000 - ₹50,000/year"
                  },
                  {
                    name: "Jamia Millia Islamia University",
                    location: "New Delhi",
                    fees: "₹20,000 - ₹1,00,000/year"
                  },
                  {
                    name: "Bharati Vidyapeeth Deemed University",
                    location: "Pune",
                    fees: "₹50,000 - ₹2,00,000/year"
                  },
                  {
                    name: "CV Raman Global University",
                    location: "Bhubaneswar",
                    fees: "₹40,000 - ₹1,50,000/year"
                  }
                ],
                careerProspects: [
                  {
                    role: "Civil Technician",
                    salary: "₹2.5 - 5 LPA"
                  },
                  {
                    role: "Site Supervisor",
                    salary: "₹3 - 6 LPA"
                  },
                  {
                    role: "Construction Manager",
                    salary: "₹4 - 8 LPA"
                  },
                  {
                    role: "Structural Engineer (after BTech)",
                    salary: "₹5 - 10 LPA"
                  }
                ],
                marketScope: [
                  "• High demand in infrastructure development projects",
                  "• Opportunities in government departments like PWD, Railways, and Municipal Corporations",
                  "• Growing scope in real estate and urban planning",
                  "• International job prospects after higher studies"
                ],
                entranceExams: [
                  {
                    name: "JEECUP",
                    description: "Joint Entrance Examination for Polytechnic Courses in Uttar Pradesh",
                    schedule: "Application forms available from January; Exam in April"
                  },
                  {
                    name: "JEXPO",
                    description: "West Bengal Joint Entrance Examination for Polytechnic Courses",
                    schedule: "Application forms available from February; Exam in May"
                  },
                  {
                    name: "Odisha DET",
                    description: "Odisha Diploma Entrance Test for admission to polytechnic courses",
                    schedule: "Application forms available from March; Exam in June"
                  },
                  {
                    name: "MP DET",
                    description: "Madhya Pradesh Diploma Entrance Test for admission to polytechnic courses",
                    schedule: "Application forms available from February; Exam in May"
                  }
                ],
                higherStudies: [
                  "• BTech Civil Engineering (Lateral Entry)",
                  "• MTech Structural Engineering",
                  "• MTech Environmental Engineering",
                  "• MBA in Construction Management",
                  "• Certification Courses in CAD and BIM"
                ],
                averageFees: {
                  government: "₹10,000 - ₹50,000 per year",
                  private: "₹50,000 - ₹2,00,000 per year"
                },
                skills: [
                  "• Structural Design",
                  "• Construction Management",
                  "• Surveying",
                  "• AutoCAD",
                  "• Problem Solving",
                  "• Project Management"
                ],
                topRecruiters: [
                  "• L&T Construction",
                  "• Tata Projects",
                  "• Gammon India",
                  "• Afcons Infrastructure",
                  "• Shapoorji Pallonji"
                ]
              };
              
      case 'Polytechnic Electrical Engineering':
                return {
                  overview:
                    "Diploma in Electrical Engineering is a 3-year polytechnic course that can be pursued by students after class 10. It focuses on the study of electrical power generation, equipment, and their design. The course is ideal for students who want to enter the technical workforce early or pursue higher education through lateral entry into BTech programs.",
                  eligibility: [
                    "• Minimum 50% marks in class 10 (45% for reserved categories)",
                    "• Mathematics and Science as compulsory subjects",
                    "• Admission based on entrance exams like Delhi CET, JEXPO, Odisha DET, etc.",
                    "• Some colleges offer direct admission based on merit"
                  ],
                  admissionProcess: [
                    "Direct Admission:",
                    "• Based on 10th marks",
                    "• Merit list preparation",
                    "\nEntrance Based:",
                    "• Delhi CET (Application forms available from January; Exam in April)",
                    "• JEXPO (Application forms available from February; Exam in May)",
                    "• Odisha DET (Application forms available from March; Exam in June)",
                    "• Assam PAT (Application forms available from February; Exam in May)"
                  ],
                  syllabus: {
                    "First Semester": [
                      "• Communication English I",
                      "• Engineering Mathematics I",
                      "• Engineering Physics I",
                      "• Engineering Chemistry I",
                      "• Engineering Graphics I",
                      "• Workshop"
                    ],
                    "Second Semester": [
                      "• Communication English II",
                      "• Engineering Mathematics II",
                      "• Applied Mathematics",
                      "• Engineering Physics II",
                      "• Engineering Chemistry II",
                      "• Engineering Graphics II",
                      "• Engineering Physics Lab",
                      "• Engineering Chemistry Lab"
                    ],
                    "Third Semester": [
                      "• Electrical Circuit Theory",
                      "• Electrical Machines-I",
                      "• Electronic Devices and Circuits",
                      "• Electrical Circuits and Machines Lab",
                      "• Electronic Devices and Circuits Lab",
                      "• Computer Applications"
                    ],
                    "Fourth Semester": [
                      "• Electric Machines-II",
                      "• Measurements and Instruments",
                      "• Digital Electronics",
                      "• Transducers and Signal Conditioners",
                      "• Electrical Machines and Instrumentation Lab",
                      "• Digital Electronics & Linear Integrated Circuits Lab",
                      "• Communication and Life Skills Practice"
                    ],
                    "Fifth Semester": [
                      "• Power System-I",
                      "• MicroController",
                      "• Special Electrical Machines",
                      "• Elective Theory-I",
                      "• Programmable Logic Controller",
                      "• Electrical Machine Controller",
                      "• Elective Practical-I"
                    ],
                    "Sixth Semester": [
                      "• Power System-II",
                      "• Electrical Estimation and Energy Auditing",
                      "• Elective Theory-II",
                      "• Elective Practical-II",
                      "• Computer Hardware and Networks",
                      "• Project Work",
                      "• General Viva"
                    ]
                  },
                  specializations: [
                    "• Power Systems",
                    "• Control Systems",
                    "• Electronics and Communication",
                    "• Instrumentation and Control",
                    "• Renewable Energy Systems"
                  ],
                  topColleges: [
                    {
                      name: "Jamia Millia Islamia University",
                      location: "New Delhi",
                      fees: "₹26,910/year"
                    },
                    {
                      name: "KJ Somaiya Polytechnic",
                      location: "Mumbai",
                      fees: "₹35,679/year"
                    },
                    {
                      name: "Central Polytechnic College",
                      location: "Chennai",
                      fees: "NA"
                    },
                    {
                      name: "Swami Vivekananda Group of Institutions",
                      location: "Delhi",
                      fees: "₹1,04,000/year"
                    }
                  ],
                  careerProspects: [
                    {
                      role: "Electrical Design Engineer",
                      salary: "₹2 - 4 LPA"
                    },
                    {
                      role: "Transform Design Engineer",
                      salary: "₹2.5 - 5 LPA"
                    },
                    {
                      role: "Field Application Engineer",
                      salary: "₹2 - 4 LPA"
                    },
                    {
                      role: "Technical Trainer",
                      salary: "₹2 - 3.5 LPA"
                    },
                    {
                      role: "Verification Engineer",
                      salary: "₹2.5 - 4.5 LPA"
                    }
                  ],
                  marketScope: [
                    "• Growing demand for electrical engineers in renewable energy sectors",
                    "• Opportunities in industries like power generation, transmission, and distribution",
                    "• Rising scope in automation and control systems",
                    "• International job prospects in electrical engineering",
                    "• Increasing demand for electric vehicles and related technologies"
                  ],
                  entranceExams: [
                    {
                      name: "Delhi CET",
                      description: "Common Entrance Test for admission to polytechnic courses in Delhi",
                      schedule: "Application forms available from January; Exam in April"
                    },
                    {
                      name: "JEXPO",
                      description: "West Bengal Joint Entrance Examination for Polytechnic Courses",
                      schedule: "Application forms available from February; Exam in May"
                    },
                    {
                      name: "Odisha DET",
                      description: "Odisha Diploma Entrance Test for admission to polytechnic courses",
                      schedule: "Application forms available from March; Exam in June"
                    },
                    {
                      name: "Assam PAT",
                      description: "Assam Polytechnic Admission Test for admission to polytechnic courses",
                      schedule: "Application forms available from February; Exam in May"
                    }
                  ],
                  averageFees: {
                    government: "₹10,000 - ₹50,000 per year",
                    private: "₹50,000 - ₹3,00,000 per year"
                  },
                  skills: [
                    "• Electrical Circuit Design",
                    "• Power System Analysis",
                    "• Troubleshooting Electrical Equipment",
                    "• Knowledge of Electrical Codes and Standards",
                    "• Problem Solving",
                    "• Analytical Skills"
                  ],
                  topRecruiters: [
                    "• Emerson",
                    "• Servomax",
                    "• Mitsubishi Electric",
                    "• Fuji Electric",
                    "• Eon Electric",
                    "• Cable Corporation of India Ltd"
                  ],
                  higherStudies: [
                    "• BTech Electrical Engineering (Lateral Entry)",
                    "• MTech Power Systems",
                    "• MTech Control Systems",
                    "• MBA in Energy Management",
                    "• Certification Courses in Renewable Energy"
                  ]
                };       
              
      case 'D.Pharm Pharmacy':
                  return {
                    overview:
                      "Diploma in Pharmacy (D.Pharm) is a 2-year diploma program that provides foundational knowledge in pharmaceutical sciences. It covers topics like pharmacy basics, dispensing medicine, drug interactions, and more. The course serves as an entry point into the pharmaceutical industry and prepares students for roles such as pharmacists. Students can also pursue higher studies like B.Pharm for better career prospects.",
                    eligibility: [
                      "• Passed class 12 in the science stream (Physics, Chemistry, Biology/Mathematics) from a recognized board",
                      "• Minimum 50% marks in class 12 (relaxation for reserved categories)",
                      "• Minimum age of 17 years at the time of admission",
                      "• Entrance exams required for top colleges"
                    ],
                    admissionProcess: [
                      "Entrance-Based Admission:",
                      "• CUET, MH CET, BITSAT, GUJCET, OJEE, UPJEE, etc.",
                      "• Counselling process after clearing entrance exams",
                      "\nDirect Admission:",
                      "• Based on merit (class 12 marks)",
                      "• Colleges offering direct admission may not require entrance exams"
                    ],
                    syllabus: {
                      "First Year": [
                        "• Pharmaceutics",
                        "• Pharmaceutical Chemistry",
                        "• Pharmacognosy",
                        "• Human Anatomy and Physiology",
                        "• Social Pharmacy",
                        "• Practicals"
                      ],
                      "Second Year": [
                        "• Pharmacology",
                        "• Community Pharmacy and Management",
                        "• Biochemistry and Clinical Pathology",
                        "• Pharmacotherapeutics",
                        "• Hospital and Clinical Pharmacy",
                        "• Pharmacy Law and Ethics",
                        "• Practicals"
                      ]
                    },
                    electiveCourses: [
                      "• Drug Store and Business Management",
                      "• Pharmaceutical Jurisprudence",
                      "• Health Education and Community Pharmacy",
                      "• Pharmacology and Toxicology"
                    ],
                    topColleges: [
                      {
                        name: "Jamia Hamdard University",
                        location: "New Delhi",
                        fees: "₹1,29,000",
                        seatIntake: 60
                      },
                      {
                        name: "JSS College of Pharmacy",
                        location: "Ooty",
                        fees: "₹55,400",
                        seatIntake: 120
                      },
                      {
                        name: "Manipal College of Pharmaceutical Sciences (MCOPS)",
                        location: "Manipal",
                        fees: "₹72,000",
                        seatIntake: 120
                      },
                      {
                        name: "Delhi Pharmaceutical Sciences and Research University (DPSRU)",
                        location: "New Delhi",
                        fees: "₹40,000",
                        seatIntake: 120
                      },
                      {
                        name: "Annamalai University",
                        location: "Chidambaram",
                        fees: "₹16,380",
                        seatIntake: 60
                      }
                    ],
                    averageFees: {
                      government: "₹16,000 - ₹1,50,000",
                      private: "₹29,000 - ₹1,60,000"
                    },
                    entranceExams: [
                      {
                        name: "CUET",
                        registrationDates: "February 2025 - March 2025",
                        examDate: "May 2025"
                      },
                      {
                        name: "BITSAT",
                        registrationDates: "Phase I: January 2025 - April 2025; Phase II: May 2025",
                        examDate: "May 2025, June 2025"
                      },
                      {
                        name: "MH CET",
                        registrationDates: "January 2025 - April 2025",
                        examDate: "April 2025"
                      },
                      {
                        name: "GUJCET",
                        registrationDates: "January 2025",
                        examDate: "March 2025"
                      },
                      {
                        name: "OJEE",
                        registrationDates: "January 2025 - March 2025",
                        examDate: "May 2025"
                      },
                      {
                        name: "UPJEE",
                        registrationDates: "January 2025 - February 2025",
                        examDate: "March 2025"
                      }
                    ],
                    neetRequirement: "No, NEET is not required for D.Pharm admissions.",
                    onlineDistanceEducation: "Not valid due to practical components and PCI regulations.",
                    careerProspects: [
                      {
                        role: "Pharmacist",
                        salary: "₹2 - 4 LPA"
                      },
                      {
                        role: "Medical Representative",
                        salary: "₹2.5 - 5 LPA"
                      },
                      {
                        role: "Clinical Research Associate",
                        salary: "₹3 - 6 LPA"
                      },
                      {
                        role: "Drug Inspector",
                        salary: "₹4 - 7 LPA"
                      },
                      {
                        role: "Hospital Pharmacist",
                        salary: "₹2.5 - 5 LPA"
                      }
                    ],
                    marketScope: [
                      "• Growing demand for pharmacists in hospitals and clinics",
                      "• Opportunities in pharmaceutical companies",
                      "• Increasing need for clinical research professionals",
                      "• Scope in retail pharmacies and drug stores",
                      "• Entrepreneurial opportunities in opening medical stores"
                    ],
                    higherStudies: [
                      "• B.Pharm (Bachelor of Pharmacy)",
                      "• Pharm.D (Doctor of Pharmacy)",
                      "• M.Pharm (Master of Pharmacy)",
                      "• MBA in Pharmaceutical Management"
                    ],
                    skills: [
                      "• Knowledge of drug formulations and dispensing",
                      "• Understanding of pharmacy laws and ethics",
                      "• Communication skills for patient counseling",
                      "• Analytical skills for drug interactions",
                      "• Basic business management for retail pharmacy"
                    ],
                    bestBooks: [
                      {
                        title: "A Textbook of Pharmaceutical Formulations",
                        author: "BM Mithal"
                      },
                      {
                        title: "Medicinal and Pharmaceutical Chemistry",
                        author: "Harikishan Singh and VK Kapoor"
                      },
                      {
                        title: "Textbook of Pharmacognosy",
                        author: "CK Kokate, SB Gokhale, AP Purohit"
                      },
                      {
                        title: "Human Anatomy and Physiology",
                        author: "S Chaudhary, A Chaudhary"
                      },
                      {
                        title: "Social Pharmacy",
                        author: "Tayler, Geoffrey"
                      },
                      {
                        title: "A Textbook of Pharmacology",
                        author: "B Suresh"
                      },
                      {
                        title: "Health Education and Community Pharmacy",
                        author: "NS Parmar"
                      },
                      {
                        title: "Essentials of Biochemistry",
                        author: "U Satyanarayan"
                      },
                      {
                        title: "Clinical Pharmacy and Therapeutics",
                        author: "Roger and Walker"
                      },
                      {
                        title: "Textbook of Hospital and Clinical Pharmacy",
                        author: "Dr Pratibha Nand and Dr Roop K Khar"
                      },
                      {
                        title: "Textbook of Forensic Pharmacy",
                        author: "BM Mithal"
                      }
                    ],
                    topRecruiters: [
                      "• Cipla",
                      "• Sun Pharma",
                      "• Dr. Reddy's Laboratories",
                      "• Lupin Pharmaceuticals",
                      "• Pfizer",
                      "• Apollo Hospitals",
                      "• Fortis Healthcare"
                    ]
                  };          
              
      case 'Polytechnic Electronics & Communication':
                    return {
                      overview:
                        "Diploma in Pharmacy (D.Pharm) is a 2-year diploma program that provides foundational knowledge in pharmaceutical sciences. It covers topics like pharmacy basics, dispensing medicine, drug interactions, and more. The course serves as an entry point into the pharmaceutical industry and prepares students for roles such as pharmacists. Students can also pursue higher studies like B.Pharm for better career prospects.",
                      eligibility: [
                        "• Passed class 12 in the science stream (Physics, Chemistry, Biology/Mathematics) from a recognized board",
                        "• Minimum 50% marks in class 12 (relaxation for reserved categories)",
                        "• Minimum age of 17 years at the time of admission",
                        "• Entrance exams required for top colleges"
                      ],
                      admissionProcess: [
                        "Entrance-Based Admission:",
                        "• CUET, MH CET, BITSAT, GUJCET, OJEE, UPJEE, etc.",
                        "• Counselling process after clearing entrance exams",
                        "\nDirect Admission:",
                        "• Based on merit (class 12 marks)",
                        "• Colleges offering direct admission may not require entrance exams"
                      ],
                      syllabus: {
                        "First Year": [
                          "• Pharmaceutics",
                          "• Pharmaceutical Chemistry",
                          "• Pharmacognosy",
                          "• Human Anatomy and Physiology",
                          "• Social Pharmacy",
                          "• Practicals"
                        ],
                        "Second Year": [
                          "• Pharmacology",
                          "• Community Pharmacy and Management",
                          "• Biochemistry and Clinical Pathology",
                          "• Pharmacotherapeutics",
                          "• Hospital and Clinical Pharmacy",
                          "• Pharmacy Law and Ethics",
                          "• Practicals"
                        ]
                      },
                      electiveCourses: [
                        "• Drug Store and Business Management",
                        "• Pharmaceutical Jurisprudence",
                        "• Health Education and Community Pharmacy",
                        "• Pharmacology and Toxicology"
                      ],
                      topColleges: [
                        {
                          name: "Jamia Hamdard University",
                          location: "New Delhi",
                          fees: "₹1,29,000",
                          seatIntake: 60
                        },
                        {
                          name: "JSS College of Pharmacy",
                          location: "Ooty",
                          fees: "₹55,400",
                          seatIntake: 120
                        },
                        {
                          name: "Manipal College of Pharmaceutical Sciences (MCOPS)",
                          location: "Manipal",
                          fees: "₹72,000",
                          seatIntake: 120
                        },
                        {
                          name: "Delhi Pharmaceutical Sciences and Research University (DPSRU)",
                          location: "New Delhi",
                          fees: "₹40,000",
                          seatIntake: 120
                        },
                        {
                          name: "Annamalai University",
                          location: "Chidambaram",
                          fees: "₹16,380",
                          seatIntake: 60
                        }
                      ],
                      averageFees: {
                        government: "₹16,000 - ₹1,50,000",
                        private: "₹29,000 - ₹1,60,000"
                      },
                      entranceExams: [
                        {
                          name: "CUET",
                          registrationDates: "February 2025 - March 2025",
                          examDate: "May 2025"
                        },
                        {
                          name: "BITSAT",
                          registrationDates: "Phase I: January 2025 - April 2025; Phase II: May 2025",
                          examDate: "May 2025, June 2025"
                        },
                        {
                          name: "MH CET",
                          registrationDates: "January 2025 - April 2025",
                          examDate: "April 2025"
                        },
                        {
                          name: "GUJCET",
                          registrationDates: "January 2025",
                          examDate: "March 2025"
                        },
                        {
                          name: "OJEE",
                          registrationDates: "January 2025 - March 2025",
                          examDate: "May 2025"
                        },
                        {
                          name: "UPJEE",
                          registrationDates: "January 2025 - February 2025",
                          examDate: "March 2025"
                        }
                      ],
                      neetRequirement: "No, NEET is not required for D.Pharm admissions.",
                      onlineDistanceEducation: "Not valid due to practical components and PCI regulations.",
                      careerProspects: [
                        {
                          role: "Pharmacist",
                          salary: "₹2 - 4 LPA"
                        },
                        {
                          role: "Medical Representative",
                          salary: "₹2.5 - 5 LPA"
                        },
                        {
                          role: "Clinical Research Associate",
                          salary: "₹3 - 6 LPA"
                        },
                        {
                          role: "Drug Inspector",
                          salary: "₹4 - 7 LPA"
                        },
                        {
                          role: "Hospital Pharmacist",
                          salary: "₹2.5 - 5 LPA"
                        }
                      ],
                      marketScope: [
                        "• Growing demand for pharmacists in hospitals and clinics",
                        "• Opportunities in pharmaceutical companies",
                        "• Increasing need for clinical research professionals",
                        "• Scope in retail pharmacies and drug stores",
                        "• Entrepreneurial opportunities in opening medical stores"
                      ],
                      higherStudies: [
                        "• B.Pharm (Bachelor of Pharmacy)",
                        "• Pharm.D (Doctor of Pharmacy)",
                        "• M.Pharm (Master of Pharmacy)",
                        "• MBA in Pharmaceutical Management"
                      ],
                      skills: [
                        "• Knowledge of drug formulations and dispensing",
                        "• Understanding of pharmacy laws and ethics",
                        "• Communication skills for patient counseling",
                        "• Analytical skills for drug interactions",
                        "• Basic business management for retail pharmacy"
                      ],
                      bestBooks: [
                        {
                          title: "A Textbook of Pharmaceutical Formulations",
                          author: "BM Mithal"
                        },
                        {
                          title: "Medicinal and Pharmaceutical Chemistry",
                          author: "Harikishan Singh and VK Kapoor"
                        },
                        {
                          title: "Textbook of Pharmacognosy",
                          author: "CK Kokate, SB Gokhale, AP Purohit"
                        },
                        {
                          title: "Human Anatomy and Physiology",
                          author: "S Chaudhary, A Chaudhary"
                        },
                        {
                          title: "Social Pharmacy",
                          author: "Tayler, Geoffrey"
                        },
                        {
                          title: "A Textbook of Pharmacology",
                          author: "B Suresh"
                        },
                        {
                          title: "Health Education and Community Pharmacy",
                          author: "NS Parmar"
                        },
                        {
                          title: "Essentials of Biochemistry",
                          author: "U Satyanarayan"
                        },
                        {
                          title: "Clinical Pharmacy and Therapeutics",
                          author: "Roger and Walker"
                        },
                        {
                          title: "Textbook of Hospital and Clinical Pharmacy",
                          author: "Dr Pratibha Nand and Dr Roop K Khar"
                        },
                        {
                          title: "Textbook of Forensic Pharmacy",
                          author: "BM Mithal"
                        }
                      ],
                      topRecruiters: [
                        "• Cipla",
                        "• Sun Pharma",
                        "• Dr. Reddy's Laboratories",
                        "• Lupin Pharmaceuticals",
                        "• Pfizer",
                        "• Apollo Hospitals",
                        "• Fortis Healthcare"
                      ]
                    };

      case 'Certification French':
                      return {
                        overview: "Certificate Course in French is a 1-year duration full-time certification course that imparts the basic knowledge on French language, its grammar, vocabulary etc. The course teaches the students how to read French words and sentences, so that they can easily improve their reading and writing skills in French.",
                        eligibility: [
                          "• Passed 10+2 level or any other equivalent examination from any recognized educational board with a minimum of 50% aggregate marks",
                          "• Mathematics and English as compulsory subjects",
                          "• Admission based on entrance exams like JEECUP, JEXPO, Odisha DET, etc.",
                          "• Some colleges offer direct admission based on merit"
                        ],
                        admissionProcess: [
                          "Merit-Based Admission:",
                          "• Based on marks obtained in the higher secondary examination",
                          "\nEntrance Based Admission:",
                          "• Entrance exam conducted by the college",
                          "• Personal Interview round"
                        ],
                        syllabus: {
                          "Year 1": {
                            "Paper I": [
                              "• Basic elements of grammar as covered in the prescribed textbook",
                              "• Short questions on civilization",
                              "• Translation (English to French)",
                              "• Translation (French to English)",
                              "• Comprehension",
                              "• Paragraph Writing"
                            ],
                            "Paper II": [
                              "• Viva-voce"
                            ]
                          }
                        },
                        recommendedBooks: [
                          {
                            name: "Practice Makes Perfect: Complete French Grammar",
                            author: "Annie Heminway"
                          },
                          {
                            name: "Easy Learning French Conversation",
                            author: "Collins"
                          }
                        ],
                        topColleges: [
                          {
                            name: "St. Xavier’s College, Kolkata",
                            fees: "₹8,200",
                            averageSalary: "₹6,50,000"
                          },
                          {
                            name: "Sri Venkateswara College, New Delhi",
                            fees: "₹17,000",
                            averageSalary: "₹4,60,000"
                          },
                          {
                            name: "Shri Guru Tegh Bahadur Khalsa College, New Delhi",
                            fees: "₹30,000",
                            averageSalary: "₹3,54,000"
                          }
                        ],
                        jobProspects: [
                          {
                            role: "French Teacher",
                            description: "Their main responsibility is to prepare and execute an effective teaching plan according to the educational requirement of the institutes. They help the students to develop their skills in the related field of study by providing in-depth knowledge.",
                            salary: "₹3,86,000"
                          },
                          {
                            role: "French Translator",
                            description: "Their role is to read the original content and rewrite the same in the French language along with the assurance that the meaning of the content is the same as the source content. They use reference books, specialist dictionaries, and thesauruses to find out the most equivalent terminology used in the content.",
                            salary: "₹4,55,000"
                          },
                          {
                            role: "French Content Writer",
                            description: "The content writers can work as freelancers or within the organization. Their responsibility is to compose web contents to promote the business in the digital media field.",
                            salary: "₹2,85,000"
                          },
                          {
                            role: "Subject Matter Specialist",
                            description: "Their job is to ensure that the given content is accurate. They need to understand the design rule methodology so that they can easily develop the content according to the customer’s requirements.",
                            salary: "₹6,00,000"
                          },
                          {
                            role: "Customer Support Officer",
                            description: "They work as a team to respond to various customer requests and inquiries via telephonic conversation or in person. Their role is to troubleshoot the clients’ issues and enhance the customer’s confidence level by resolving their issues.",
                            salary: "₹3,24,000"
                          }
                        ],
                        futureScope: [
                          "• Opportunities for higher education in foreign universities",
                          "• Potential job positions in translation bureaus, data entry centers, French embassies, private organizations, hotel industries, tours & travel companies",
                          "• Graduates can also opt for teaching roles in French departments at colleges and universities"
                        ],
                        averageCourseFees: "₹5,000 - ₹70,000",
                        averageAnnualSalary: "₹2,00,000 - ₹10,00,000"
                      };
              
      case 'Certification Fashion Design':
                        return {
                          overview: "Certificate Course in French is a 1-year duration full-time certification course that imparts the basic knowledge on French language, its grammar, vocabulary etc. The course teaches the students how to read French words and sentences, so that they can easily improve their reading and writing skills in French.",
                          eligibility: [
                            "• Passed 10+2 level or any other equivalent examination from any recognized educational board with a minimum of 50% aggregate marks",
                            "• Mathematics and English as compulsory subjects",
                            "• Admission based on entrance exams like JEECUP, JEXPO, Odisha DET, etc.",
                            "• Some colleges offer direct admission based on merit"
                          ],
                          admissionProcess: [
                            "Merit-Based Admission:",
                            "• Based on marks obtained in the higher secondary examination",
                            "\nEntrance Based Admission:",
                            "• Entrance exam conducted by the college",
                            "• Personal Interview round"
                          ],
                          syllabus: {
                            "Year 1": {
                              "Paper I": [
                                "• Basic elements of grammar as covered in the prescribed textbook",
                                "• Short questions on civilization",
                                "• Translation (English to French)",
                                "• Translation (French to English)",
                                "• Comprehension",
                                "• Paragraph Writing"
                              ],
                              "Paper II": [
                                "• Viva-voce"
                              ]
                            }
                          },
                          recommendedBooks: [
                            {
                              name: "Practice Makes Perfect: Complete French Grammar",
                              author: "Annie Heminway"
                            },
                            {
                              name: "Easy Learning French Conversation",
                              author: "Collins"
                            }
                          ],
                          topColleges: [
                            {
                              name: "St. Xavier’s College, Kolkata",
                              fees: "₹8,200",
                              averageSalary: "₹6,50,000"
                            },
                            {
                              name: "Sri Venkateswara College, New Delhi",
                              fees: "₹17,000",
                              averageSalary: "₹4,60,000"
                            },
                            {
                              name: "Shri Guru Tegh Bahadur Khalsa College, New Delhi",
                              fees: "₹30,000",
                              averageSalary: "₹3,54,000"
                            }
                          ],
                          jobProspects: [
                            {
                              role: "French Teacher",
                              description: "Their main responsibility is to prepare and execute an effective teaching plan according to the educational requirement of the institutes. They help the students to develop their skills in the related field of study by providing in-depth knowledge.",
                              salary: "₹3,86,000"
                            },
                            {
                              role: "French Translator",
                              description: "Their role is to read the original content and rewrite the same in the French language along with the assurance that the meaning of the content is the same as the source content. They use reference books, specialist dictionaries, and thesauruses to find out the most equivalent terminology used in the content.",
                              salary: "₹4,55,000"
                            },
                            {
                              role: "French Content Writer",
                              description: "The content writers can work as freelancers or within the organization. Their responsibility is to compose web contents to promote the business in the digital media field.",
                              salary: "₹2,85,000"
                            },
                            {
                              role: "Subject Matter Specialist",
                              description: "Their job is to ensure that the given content is accurate. They need to understand the design rule methodology so that they can easily develop the content according to the customer’s requirements.",
                              salary: "₹6,00,000"
                            },
                            {
                              role: "Customer Support Officer",
                              description: "They work as a team to respond to various customer requests and inquiries via telephonic conversation or in person. Their role is to troubleshoot the clients’ issues and enhance the customer’s confidence level by resolving their issues.",
                              salary: "₹3,24,000"
                            }
                          ],
                          futureScope: [
                            "• Opportunities for higher education in foreign universities",
                            "• Potential job positions in translation bureaus, data entry centers, French embassies, private organizations, hotel industries, tours & travel companies",
                            "• Graduates can also opt for teaching roles in French departments at colleges and universities"
                          ],
                          averageCourseFees: "₹5,000 - ₹70,000",
                          averageAnnualSalary: "₹2,00,000 - ₹10,00,000"
                        };

      case 'Certification Web Designing':
                          return {
                            overview: "Certificate Course in French is a 1-year duration full-time certification course that imparts the basic knowledge on French language, its grammar, vocabulary etc. The course teaches the students how to read French words and sentences, so that they can easily improve their reading and writing skills in French.",
                            eligibility: [
                              "• Passed 10+2 level or any other equivalent examination from any recognized educational board with a minimum of 50% aggregate marks",
                              "• Mathematics and English as compulsory subjects",
                              "• Admission based on entrance exams like JEECUP, JEXPO, Odisha DET, etc.",
                              "• Some colleges offer direct admission based on merit"
                            ],
                            admissionProcess: [
                              "Merit-Based Admission:",
                              "• Based on marks obtained in the higher secondary examination",
                              "\nEntrance Based Admission:",
                              "• Entrance exam conducted by the college",
                              "• Personal Interview round"
                            ],
                            syllabus: {
                              "Year 1": {
                                "Paper I": [
                                  "• Basic elements of grammar as covered in the prescribed textbook",
                                  "• Short questions on civilization",
                                  "• Translation (English to French)",
                                  "• Translation (French to English)",
                                  "• Comprehension",
                                  "• Paragraph Writing"
                                ],
                                "Paper II": [
                                  "• Viva-voce"
                                ]
                              }
                            },
                            recommendedBooks: [
                              {
                                name: "Practice Makes Perfect: Complete French Grammar",
                                author: "Annie Heminway"
                              },
                              {
                                name: "Easy Learning French Conversation",
                                author: "Collins"
                              }
                            ],
                            topColleges: [
                              {
                                name: "St. Xavier’s College, Kolkata",
                                fees: "₹8,200",
                                averageSalary: "₹6,50,000"
                              },
                              {
                                name: "Sri Venkateswara College, New Delhi",
                                fees: "₹17,000",
                                averageSalary: "₹4,60,000"
                              },
                              {
                                name: "Shri Guru Tegh Bahadur Khalsa College, New Delhi",
                                fees: "₹30,000",
                                averageSalary: "₹3,54,000"
                              }
                            ],
                            jobProspects: [
                              {
                                role: "French Teacher",
                                description: "Their main responsibility is to prepare and execute an effective teaching plan according to the educational requirement of the institutes. They help the students to develop their skills in the related field of study by providing in-depth knowledge.",
                                salary: "₹3,86,000"
                              },
                              {
                                role: "French Translator",
                                description: "Their role is to read the original content and rewrite the same in the French language along with the assurance that the meaning of the content is the same as the source content. They use reference books, specialist dictionaries, and thesauruses to find out the most equivalent terminology used in the content.",
                                salary: "₹4,55,000"
                              },
                              {
                                role: "French Content Writer",
                                description: "The content writers can work as freelancers or within the organization. Their responsibility is to compose web contents to promote the business in the digital media field.",
                                salary: "₹2,85,000"
                              },
                              {
                                role: "Subject Matter Specialist",
                                description: "Their job is to ensure that the given content is accurate. They need to understand the design rule methodology so that they can easily develop the content according to the customer’s requirements.",
                                salary: "₹6,00,000"
                              },
                              {
                                role: "Customer Support Officer",
                                description: "They work as a team to respond to various customer requests and inquiries via telephonic conversation or in person. Their role is to troubleshoot the clients’ issues and enhance the customer’s confidence level by resolving their issues.",
                                salary: "₹3,24,000"
                              }
                            ],
                            futureScope: [
                              "• Opportunities for higher education in foreign universities",
                              "• Potential job positions in translation bureaus, data entry centers, French embassies, private organizations, hotel industries, tours & travel companies",
                              "• Graduates can also opt for teaching roles in French departments at colleges and universities"
                            ],
                            averageCourseFees: "₹5,000 - ₹70,000",
                            averageAnnualSalary: "₹2,00,000 - ₹10,00,000"
                          };                  
                          
      case 'Certification Yoga':
                            return {
                              overview: "Certificate Course in French is a 1-year duration full-time certification course that imparts the basic knowledge on French language, its grammar, vocabulary etc. The course teaches the students how to read French words and sentences, so that they can easily improve their reading and writing skills in French.",
                              eligibility: [
                                "• Passed 10+2 level or any other equivalent examination from any recognized educational board with a minimum of 50% aggregate marks",
                                "• Mathematics and English as compulsory subjects",
                                "• Admission based on entrance exams like JEECUP, JEXPO, Odisha DET, etc.",
                                "• Some colleges offer direct admission based on merit"
                              ],
                              admissionProcess: [
                                "Merit-Based Admission:",
                                "• Based on marks obtained in the higher secondary examination",
                                "\nEntrance Based Admission:",
                                "• Entrance exam conducted by the college",
                                "• Personal Interview round"
                              ],
                              syllabus: {
                                "Year 1": {
                                  "Paper I": [
                                    "• Basic elements of grammar as covered in the prescribed textbook",
                                    "• Short questions on civilization",
                                    "• Translation (English to French)",
                                    "• Translation (French to English)",
                                    "• Comprehension",
                                    "• Paragraph Writing"
                                  ],
                                  "Paper II": [
                                    "• Viva-voce"
                                  ]
                                }
                              },
                              recommendedBooks: [
                                {
                                  name: "Practice Makes Perfect: Complete French Grammar",
                                  author: "Annie Heminway"
                                },
                                {
                                  name: "Easy Learning French Conversation",
                                  author: "Collins"
                                }
                              ],
                              topColleges: [
                                {
                                  name: "St. Xavier’s College, Kolkata",
                                  fees: "₹8,200",
                                  averageSalary: "₹6,50,000"
                                },
                                {
                                  name: "Sri Venkateswara College, New Delhi",
                                  fees: "₹17,000",
                                  averageSalary: "₹4,60,000"
                                },
                                {
                                  name: "Shri Guru Tegh Bahadur Khalsa College, New Delhi",
                                  fees: "₹30,000",
                                  averageSalary: "₹3,54,000"
                                }
                              ],
                              jobProspects: [
                                {
                                  role: "French Teacher",
                                  description: "Their main responsibility is to prepare and execute an effective teaching plan according to the educational requirement of the institutes. They help the students to develop their skills in the related field of study by providing in-depth knowledge.",
                                  salary: "₹3,86,000"
                                },
                                {
                                  role: "French Translator",
                                  description: "Their role is to read the original content and rewrite the same in the French language along with the assurance that the meaning of the content is the same as the source content. They use reference books, specialist dictionaries, and thesauruses to find out the most equivalent terminology used in the content.",
                                  salary: "₹4,55,000"
                                },
                                {
                                  role: "French Content Writer",
                                  description: "The content writers can work as freelancers or within the organization. Their responsibility is to compose web contents to promote the business in the digital media field.",
                                  salary: "₹2,85,000"
                                },
                                {
                                  role: "Subject Matter Specialist",
                                  description: "Their job is to ensure that the given content is accurate. They need to understand the design rule methodology so that they can easily develop the content according to the customer’s requirements.",
                                  salary: "₹6,00,000"
                                },
                                {
                                  role: "Customer Support Officer",
                                  description: "They work as a team to respond to various customer requests and inquiries via telephonic conversation or in person. Their role is to troubleshoot the clients’ issues and enhance the customer’s confidence level by resolving their issues.",
                                  salary: "₹3,24,000"
                                }
                              ],
                              futureScope: [
                                "• Opportunities for higher education in foreign universities",
                                "• Potential job positions in translation bureaus, data entry centers, French embassies, private organizations, hotel industries, tours & travel companies",
                                "• Graduates can also opt for teaching roles in French departments at colleges and universities"
                              ],
                              averageCourseFees: "₹5,000 - ₹70,000",
                              averageAnnualSalary: "₹2,00,000 - ₹10,00,000"
                            };

      case 'Certification Interior Design':
                              return {
                                overview: "Certificate Course in French is a 1-year duration full-time certification course that imparts the basic knowledge on French language, its grammar, vocabulary etc. The course teaches the students how to read French words and sentences, so that they can easily improve their reading and writing skills in French.",
                                eligibility: [
                                  "• Passed 10+2 level or any other equivalent examination from any recognized educational board with a minimum of 50% aggregate marks",
                                  "• Mathematics and English as compulsory subjects",
                                  "• Admission based on entrance exams like JEECUP, JEXPO, Odisha DET, etc.",
                                  "• Some colleges offer direct admission based on merit"
                                ],
                                admissionProcess: [
                                  "Merit-Based Admission:",
                                  "• Based on marks obtained in the higher secondary examination",
                                  "\nEntrance Based Admission:",
                                  "• Entrance exam conducted by the college",
                                  "• Personal Interview round"
                                ],
                                syllabus: {
                                  "Year 1": {
                                    "Paper I": [
                                      "• Basic elements of grammar as covered in the prescribed textbook",
                                      "• Short questions on civilization",
                                      "• Translation (English to French)",
                                      "• Translation (French to English)",
                                      "• Comprehension",
                                      "• Paragraph Writing"
                                    ],
                                    "Paper II": [
                                      "• Viva-voce"
                                    ]
                                  }
                                },
                                recommendedBooks: [
                                  {
                                    name: "Practice Makes Perfect: Complete French Grammar",
                                    author: "Annie Heminway"
                                  },
                                  {
                                    name: "Easy Learning French Conversation",
                                    author: "Collins"
                                  }
                                ],
                                topColleges: [
                                  {
                                    name: "St. Xavier’s College, Kolkata",
                                    fees: "₹8,200",
                                    averageSalary: "₹6,50,000"
                                  },
                                  {
                                    name: "Sri Venkateswara College, New Delhi",
                                    fees: "₹17,000",
                                    averageSalary: "₹4,60,000"
                                  },
                                  {
                                    name: "Shri Guru Tegh Bahadur Khalsa College, New Delhi",
                                    fees: "₹30,000",
                                    averageSalary: "₹3,54,000"
                                  }
                                ],
                                jobProspects: [
                                  {
                                    role: "French Teacher",
                                    description: "Their main responsibility is to prepare and execute an effective teaching plan according to the educational requirement of the institutes. They help the students to develop their skills in the related field of study by providing in-depth knowledge.",
                                    salary: "₹3,86,000"
                                  },
                                  {
                                    role: "French Translator",
                                    description: "Their role is to read the original content and rewrite the same in the French language along with the assurance that the meaning of the content is the same as the source content. They use reference books, specialist dictionaries, and thesauruses to find out the most equivalent terminology used in the content.",
                                    salary: "₹4,55,000"
                                  },
                                  {
                                    role: "French Content Writer",
                                    description: "The content writers can work as freelancers or within the organization. Their responsibility is to compose web contents to promote the business in the digital media field.",
                                    salary: "₹2,85,000"
                                  },
                                  {
                                    role: "Subject Matter Specialist",
                                    description: "Their job is to ensure that the given content is accurate. They need to understand the design rule methodology so that they can easily develop the content according to the customer’s requirements.",
                                    salary: "₹6,00,000"
                                  },
                                  {
                                    role: "Customer Support Officer",
                                    description: "They work as a team to respond to various customer requests and inquiries via telephonic conversation or in person. Their role is to troubleshoot the clients’ issues and enhance the customer’s confidence level by resolving their issues.",
                                    salary: "₹3,24,000"
                                  }
                                ],
                                futureScope: [
                                  "• Opportunities for higher education in foreign universities",
                                  "• Potential job positions in translation bureaus, data entry centers, French embassies, private organizations, hotel industries, tours & travel companies",
                                  "• Graduates can also opt for teaching roles in French departments at colleges and universities"
                                ],
                                averageCourseFees: "₹5,000 - ₹70,000",
                                averageAnnualSalary: "₹2,00,000 - ₹10,00,000"
                              };

      // Add more cases for other courses...
      default:
        return {
          overview: `${course.name} is a ${course.duration} ${course.type} program designed to provide comprehensive knowledge and practical skills in the field.`,
          eligibility: "• Bachelor's degree with minimum 50% marks\n• Relevant entrance exam qualification\n• Specific requirements vary by institution",
          syllabus: [
            "Foundation Courses",
            "Core Subject Studies",
            "Specialized Training",
            "Practical Applications",
            "Project Work"
          ],
          careerProspects: [
            "Industry Professional",
            "Research Analyst",
            "Consultant",
            "Specialist",
            "Entrepreneur"
          ],
          topRecruiters: [
            "Leading Companies",
            "Multinational Corporations",
            "Research Organizations",
            "Government Sectors",
            "Start-ups"
          ],
          entranceExams: [
            "National Level Exams",
            "State Level Exams",
            "University Level Exams",
            "Aptitude Tests",
            "Subject Specific Tests"
          ]
        };
    }
  };

  const courseDetails = getCourseSpecificDetails();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.courseType}>{course.type}</Text>
        <Text style={styles.courseName}>{course.name}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Duration</Text>
            <Text style={styles.statValue}>{course.duration}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Avg. Fees</Text>
            <Text style={styles.statValue}>{course.avgFees}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Colleges</Text>
            <Text style={styles.statValue}>{course.colleges}</Text>
          </View>
        </View>
      </View>

      <View style={styles.authorContainer}>
        <AntDesign name="user" size={16} color="#FFA500" />
        <Text style={styles.authorText}>Author: Sudhanshu Singh</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Overview</Text>
        <Text style={styles.sectionText}>{courseDetails.overview}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Eligibility</Text>
        <Text style={styles.sectionText}>
          {Array.isArray(courseDetails.eligibility) 
            ? courseDetails.eligibility.join('\n')
            : courseDetails.eligibility}
        </Text>
      </View>

      {courseDetails.entranceExams && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Entrance Exams</Text>
          {courseDetails.entranceExams.map((item, index) => (
            <Text key={index} style={styles.bulletPoint}>
              • {item.name} (Registration: {item.registrationDates}, Exam Date: {item.examDate})
            </Text>
          ))}
        </View>
      )}

      {courseDetails.syllabus && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Syllabus Overview</Text>
          {typeof courseDetails.syllabus === 'object' && !Array.isArray(courseDetails.syllabus) ? (
            Object.entries(courseDetails.syllabus).map(([year, papers]) => (
              <View key={year} style={styles.syllabusYear}>
                <Text style={styles.yearTitle}>{year}</Text>
                {Object.entries(papers).map(([paper, subjects]) => (
                  <View key={paper} style={styles.paperSection}>
                    <Text style={styles.paperTitle}>{paper}</Text>
                    {Array.isArray(subjects) ? (
                      subjects.map((subject, index) => (
                        <Text key={index} style={styles.bulletPoint}>
                          • {subject}
                        </Text>
                      ))
                    ) : (
                      <Text style={styles.error}>Invalid syllabus data</Text>
                    )}
                  </View>
                ))}
              </View>
            ))
          ) : (
            courseDetails.syllabus.map((item, index) => (
              <Text key={index} style={styles.bulletPoint}>
                • {item}
              </Text>
            ))
          )}
        </View>
      )}

      {courseDetails.careerProspects && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Career Prospects</Text>
          {Array.isArray(courseDetails.careerProspects) && courseDetails.careerProspects.map((item, index) => (
            <Text key={index} style={styles.bulletPoint}>
              • {typeof item === 'object' ? `${item.role} - ${item.salary}` : item}
            </Text>
          ))}
        </View>
      )}

      {courseDetails.topRecruiters && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Recruiters</Text>
          {courseDetails.topRecruiters.map((item, index) => (
            <Text key={index} style={styles.bulletPoint}>• {item}</Text>
          ))}
        </View>
      )}

      {courseDetails.admissionProcess && Array.isArray(courseDetails.admissionProcess) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Admission Process</Text>
          {courseDetails.admissionProcess.map((item, index) => (
            <Text key={index} style={styles.bulletPoint}>
              {item}
            </Text>
          ))}
        </View>
      )}

      {courseDetails.topColleges && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Colleges</Text>
          {courseDetails.topColleges.map((college, index) => (
            <View key={index} style={styles.collegeItem}>
              <Text style={styles.collegeName}>{college.name}</Text>
              <Text style={styles.collegeDetails}>Location: {college.location}</Text>
              {college.cutoff && (
                <Text style={styles.collegeDetails}>Cutoff: {college.cutoff}</Text>
              )}
              <Text style={styles.collegeDetails}>Fees: {college.fees}</Text>
            </View>
          ))}
        </View>
      )}

      {courseDetails.higherStudies && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Higher Studies Options</Text>
          {courseDetails.higherStudies.map((item, index) => (
            <Text key={index} style={styles.bulletPoint}>{item}</Text>
          ))}
        </View>
      )}

      {courseDetails.marketScope && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Market Scope</Text>
          {courseDetails.marketScope.map((item, index) => (
            <Text key={index} style={styles.bulletPoint}>{item}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 16,
  },
  header: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  courseType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    textAlign: 'justify',
  },
  courseName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'justify',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    textAlign: 'justify',
  },
  bulletPoint: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    paddingLeft: 8,
    textAlign: 'justify',
  },
  syllabusYear: {
    marginBottom: 16,
  },
  yearTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  collegeItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  collegeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  collegeDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
    textAlign: 'justify',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  authorText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    textAlign: 'justify',
  },
});

export default CourseDetails; 