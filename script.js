// ===== DATA =====
const schools = [
  {name:"Đại học Bách Khoa Hà Nội",short:"HUST",city:"hn",abbr:"BK",color:"#c0392b",logo:"logos/hust_logo.png",score:27.5,min:24,majors:"CNTT, Điện tử, Cơ khí",region:"Hà Nội"},
  {name:"ĐH Quốc Gia TP.HCM",short:"VNUHCM",city:"hcm",abbr:"QG",color:"#004b87",logo:"logos/VNUHCM_logo.svg.png",score:26.8,min:23,majors:"Kinh tế, Y dược, Kỹ thuật",region:"TP.HCM"},
  {name:"Đại học FPT",short:"FPT Uni",city:"hn",abbr:"FU",color:"#f27121",logo:"logos/FPT_UNIVERSITY.png",score:22.0,min:18,majors:"CNTT, Thiết kế, Kinh doanh",region:"Toàn quốc"},
  {name:"ĐH Kinh tế Quốc dân",short:"NEU",city:"hn",abbr:"NEU",color:"#da251d",logo:"logos/NEU.png",score:26.2,min:22,majors:"Kinh tế, Tài chính, Kế toán",region:"Hà Nội"},
  {name:"ĐH Y Hà Nội",short:"HMU",city:"hn",abbr:"YHN",color:"#a32d2d",logo:"logos/HMU ĐHYHN.png",score:28.5,min:26,majors:"Y khoa, Dược, Điều dưỡng",region:"Hà Nội"},
  {name:"ĐH Ngoại Thương",short:"FTU",city:"hn",abbr:"FTU",color:"#b81b25",logo:"logos/FTU.png",score:28.2,min:25,majors:"Kinh doanh quốc tế, Ngoại ngữ",region:"Hà Nội"},
  {name:"ĐH Tôn Đức Thắng",short:"TDTU",city:"hcm",abbr:"TDTU",color:"#005691",logo:"logos/TDTU.png",score:24.5,min:21,majors:"Kỹ thuật, CNTT, Kinh tế",region:"TP.HCM"},
  {name:"ĐH Kinh tế TP.HCM",short:"UEH",city:"hcm",abbr:"UEH",color:"#005d4b",logo:"logos/Logo_UEH_xanh.png",score:25.5,min:22,majors:"Kinh doanh, Tài chính, TMĐT",region:"TP.HCM"},
  {name:"ĐH Bách Khoa - ĐH Đà Nẵng",short:"DUT",city:"dn",abbr:"DUT",color:"#004b87",logo:"logos/BKDN.png",score:24.0,min:20,majors:"Cơ khí, Điện tử, Xây dựng",region:"Đà Nẵng"},
  {name:"ĐH Vinh",short:"VINH",city:"na",abbr:"VINH",color:"#2980b9",logo:"logos/VINH.png",score:20.5,min:17,majors:"Sư phạm, Nông nghiệp",region:"Nghệ An"},
  {name:"ĐH Sư phạm Hà Nội",short:"HNUE",city:"hn",abbr:"HNUE",color:"#2c5aa0",logo:"logos/HNUE.png",score:27.25,min:23,majors:"Sư phạm, Văn học, Khoa học",region:"Hà Nội"},
  {name:"ĐH Công nghệ - ĐHQG HN",short:"UET",city:"hn",abbr:"UET",color:"#e74c3c",logo:"logos/UET.png",score:28.5,min:25,majors:"CNTT, Điện tử, Viễn thông",region:"Hà Nội"},
  {name:"ĐH Kinh tế - ĐHQG HN",short:"UEB",city:"hn",abbr:"UEB",color:"#1e7a46",logo:"logos/UEB.png",score:27.8,min:24,majors:"Kinh tế, Quản trị, Tài chính",region:"Hà Nội"},
  {name:"ĐH Khoa học Tự nhiên - ĐHQG HN",short:"HUS",city:"hn",abbr:"HUS",color:"#0052a3",logo:"logos/HUS_logo.png",score:28.2,min:25,majors:"Toán, Lý, Hóa, Sinh",region:"Hà Nội"},
  {name:"ĐH KHXH&NV - ĐHQG HN",short:"USSH",city:"hn",abbr:"USSH",color:"#8b4513",logo:"logos/USSH.png",score:26.5,min:22,majors:"Văn, Sử, Triết, Xã hội học",region:"Hà Nội"},
  {name:"ĐH Ngoại ngữ - ĐHQG HN",short:"ULIS",city:"hn",abbr:"ULIS",color:"#ff6b6b",logo:"logos/ULIS.png",score:27.9,min:24,majors:"Ngoại ngữ, Quan hệ quốc tế",region:"Hà Nội"},
  {name:"ĐH Luật - ĐHQG HN",short:"VNU-Law",city:"hn",abbr:"VNULaw",color:"#4a148c",logo:"logos/VNU-UL.png",score:27.5,min:23,majors:"Luật, Luật quốc tế",region:"Hà Nội"},
  {name:"ĐH Y Dược - ĐHQG HN",short:"UMP",city:"hn",abbr:"UMP",color:"#00695c",logo:"logos/UMPHN.png",score:29.2,min:27,majors:"Y khoa, Dược, Y tế công cộng",region:"Hà Nội"},
  {name:"ĐH Công nghiệp Hà Nội",short:"IDN",city:"hn",abbr:"IDN",color:"#f57c00",logo:"logos/IDN.png",score:25.5,min:21,majors:"Cơ khí, Điện, Tự động hóa",region:"Hà Nội"},
  {name:"Học viện Kỹ thuật Mật mã",short:"PITI",city:"hn",abbr:"PITI",color:"#d32f2f",logo:"logos/PITI.png",score:28.8,min:26,majors:"An toàn thông tin, Mật mã",region:"Hà Nội"},
  {name:"ĐH Luật Hà Nội",short:"HLU",city:"hn",abbr:"HLU",color:"#8b4513",logo:"logos/NLU.png",score:28.3,min:25,majors:"Luật, Luật kinh tế",region:"Hà Nội"},
  {name:"ĐH Công nghệ Thông tin - ĐHQG HCM",short:"UIT",city:"hcm",abbr:"UIT",color:"#0066cc",logo:"logos/UIT.png",score:28.7,min:26,majors:"CNTT, Khoa học máy tính, AI",region:"TP.HCM"},
  {name:"ĐH Bách Khoa - ĐHQG HCM",short:"HCMUT",city:"hcm",abbr:"BKH",color:"#003366",logo:"logos/BK-ĐHQGHCM.png",score:28.9,min:26,majors:"Kỹ thuật, Cơ khí, Điện",region:"TP.HCM"},
  {name:"ĐH KHTN - ĐHQG HCM",short:"HCMUS",city:"hcm",abbr:"KHTN",color:"#006633",logo:"logos/KHTN_ĐHQGHCM.png",score:28.4,min:25,majors:"Toán, Lý, Hóa, Sinh, CNTT",region:"TP.HCM"},
  {name:"ĐH KHXH&NV - ĐHQG HCM",short:"USSH-HCM",city:"hcm",abbr:"XHNV",color:"#8b4513",logo:"logos/USSH-ĐHQGHCM.png",score:26.8,min:23,majors:"Văn, Sử, Triết, Xã hội",region:"TP.HCM"},
  {name:"ĐH Kinh tế - Luật - ĐHQG HCM",short:"UEL",city:"hcm",abbr:"UEL",color:"#c41e3a",logo:"logos/UEL_ĐHQGHCM.png",score:27.8,min:24,majors:"Kinh tế, Luật, Quản trị",region:"TP.HCM"},
  {name:"ĐH Sư phạm Kỹ thuật TP.HCM",short:"HCMUTE",city:"hcm",abbr:"SPKT",color:"#ff6600",logo:"logos/HCM-UTE.png",score:25.5,min:21,majors:"Kỹ thuật, Cơ điện tử",region:"TP.HCM"},
  {name:"ĐH Y Dược TP.HCM",short:"UMP-HCM",city:"hcm",abbr:"YHC",color:"#004d99",logo:"logos/HCMC.png",score:29.6,min:28,majors:"Y khoa, Dược, RHM",region:"TP.HCM"},
  {name:"Học viện Kỹ thuật Quân sự",short:"KMA",city:"hn",abbr:"KMA",color:"#1a5490",logo:"logos/KMA.png",score:27.8,min:24,majors:"Kỹ thuật, Điện tử, CNTT",region:"Hà Nội"},
  {name:"Học viện Quốc phòng",short:"NDA",city:"hn",abbr:"NDA",color:"#8b0000",logo:"logos/Học Viện Quốc Phòng.png",score:29.0,min:27,majors:"Quốc phòng, Quân sự",region:"Hà Nội"},
  {name:"ĐH An ninh nhân dân",short:"PPA",city:"hn",abbr:"PPA",color:"#006400",logo:"logos/Trường Đại Học An ninh nhân dân.png",score:28.5,min:26,majors:"An ninh, Quản lý công an",region:"Hà Nội"},
  {name:"ĐH Cảnh sát nhân dân",short:"PPA-Police",city:"hn",abbr:"CS",color:"#000080",logo:"logos/Đại Học Cảnh Sát.png",score:28.2,min:25,majors:"Cảnh sát, Điều tra",region:"Hà Nội"},
  {name:"ĐH Kiểm sát Hà Nội",short:"HPU",city:"hn",abbr:"HPU",color:"#8b0000",logo:"logos/Đại Học Kiểm Sát.png",score:27.8,min:24,majors:"Kiểm sát, Tư pháp",region:"Hà Nội"}
];

const majors = [
  {
    name:"CNTT:Khoa Học Máy Tính",
    shortName:"IT1",
    cat:"tech",
    icon:"💻",
    avgScore:"24-28 điểm",
    trend:"up",
    schools:["HUST","FPT","VNUHCM","NEU","UET"],
    careers:["Lập trình viên","AI Engineer","Data Analyst","DevOps"],
    description:"Ngành Công nghệ thông tin đào tạo các kỹ năng về lập trình, phát triển phần mềm, quản trị hệ thống và ứng dụng công nghệ vào giải quyết các bài toán thực tế.",
    subjects:["Toán","Lý","Anh văn","Lập trình","Cấu trúc dữ liệu"]
  },
  {
    name:"CNTT: Kỹ thuật máy tính",
    shortName:"CE",
    cat:"tech",
    icon:"🖥️",
    avgScore:"23-27 điểm",
    trend:"up",
    schools:["HUST","UET","PTIT","HCMUT","UIT"],
    careers:["Embedded Engineer","Firmware Engineer","Hardware Engineer","IoT Developer"],
    description:"Ngành Kỹ thuật máy tính tập trung vào thiết kế phần cứng, hệ thống nhúng, vi xử lý và tích hợp phần mềm với phần cứng.",
    subjects:["Toán","Lý","Lập trình C/C++","Vi xử lý","Hệ thống nhúng"]
  },
  {
    name:"CNTT: Khoa học dữ liệu & Trí tuệ nhân tạo",
    shortName:"DSAI",
    cat:"tech",
    icon:"🤖",
    avgScore:"25-29 điểm",
    trend:"up",
    schools:["HUST","UET","UIT","FPT","VNUHCM"],
    careers:["Data Scientist","AI Engineer","Machine Learning Engineer","Data Analyst"],
    description:"Ngành tập trung vào khai thác dữ liệu, xây dựng mô hình AI, machine learning và ứng dụng trí tuệ nhân tạo vào thực tế.",
    subjects:["Toán","Xác suất thống kê","Python","Machine Learning","Deep Learning"]
   },
   {
    name:"CNTT: An toàn thông tin",
    shortName:"CyberSec",
    cat:"tech",
    icon:"🔐",
    avgScore:"24-28 điểm",
    trend:"up",
    schools:["PTIT","HUST","UET","UIT","KMA"],
    careers:["Security Engineer","Pentester","SOC Analyst","Cybersecurity Specialist"],
    description:"Ngành đào tạo về bảo mật hệ thống, phát hiện và phòng chống tấn công mạng, bảo vệ dữ liệu và an ninh thông tin.",
    subjects:["Toán","Mạng máy tính","Hệ điều hành","Mật mã học","An ninh mạng"]
   },
   {
    name:"CNTT: Công nghệ thông tin (tổng quát)",
    shortName:"IT",
    cat:"tech",
    icon:"🌐",
    avgScore:"22-27 điểm",
    trend:"up",
    schools:["HUST","NEU","FPT","HCMUS","DUT"],
    careers:["Software Engineer","Web Developer","Mobile Developer","System Engineer"],
    description:"Ngành đào tạo tổng quát về lập trình, phát triển phần mềm, hệ thống thông tin và các công nghệ web, mobile.",
    subjects:["Toán","Lập trình","Cấu trúc dữ liệu","Cơ sở dữ liệu","Mạng máy tính"]
   },
   {
    name:"CNTT: Kỹ thuật điện tử viễn thông",
    shortName:"ET",
    cat:"tech",
    icon:"📡",
    avgScore:"22-26 điểm",
    trend:"stable",
    schools:["HUST","PTIT","HCMUT","UET","DUT"],
    careers:["Telecom Engineer","Network Engineer","RF Engineer","IoT Engineer"],
    description:"Ngành nghiên cứu về truyền thông, tín hiệu, mạng viễn thông và các hệ thống kết nối không dây.",
    subjects:["Toán","Lý","Xử lý tín hiệu","Mạng viễn thông","Điện tử"]
   },
   {
    name:"CNTT: Hệ thống thông tin",
    shortName:"IS",
    cat:"tech",
    icon:"📊",
    avgScore:"23-27 điểm",
    trend:"up",
    schools:["NEU","HUST","UIT","UET","FPT"],
    careers:["Business Analyst","System Analyst","ERP Consultant","Data Analyst"],
    description:"Ngành kết hợp CNTT và kinh doanh, tập trung vào quản lý hệ thống thông tin và phân tích dữ liệu doanh nghiệp.",
    subjects:["Toán","Cơ sở dữ liệu","Phân tích hệ thống","SQL","Quản trị doanh nghiệp"]
   },
   {
    name:"CNTT: Kỹ thuật phần mềm",
    shortName:"SE",
    cat:"tech",
    icon:"🧩",
    avgScore:"24-28 điểm",
    trend:"up",
    schools:["HUST","FPT","UIT","UET","RMIT"],
    careers:["Software Engineer","Fullstack Developer","QA Engineer","Project Manager"],
    description:"Ngành tập trung vào quy trình phát triển phần mềm, kiểm thử, thiết kế hệ thống và quản lý dự án.",
    subjects:["Toán","Lập trình","Thiết kế phần mềm","Kiểm thử","Agile/Scrum"]
   },
   {
    name:"CNTT: Mạng máy tính & Truyền dữ liệu",
    shortName:"CN",
    cat:"tech",
    icon:"🌍",
    avgScore:"22-26 điểm",
    trend:"stable",
    schools:["PTIT","UIT","HUST","UET"],
    careers:["Network Engineer","System Admin","Cloud Engineer","DevOps Engineer"],
    description:"Ngành chuyên về thiết kế, vận hành và bảo trì hệ thống mạng, server và hạ tầng CNTT.",
    subjects:["Toán","Mạng máy tính","Linux","Cloud Computing","Bảo mật"]
   },
   {
    name:"Kinh tế",
    shortName:"Kinh tế",
    cat:"business",
    icon:"📊",
    avgScore:"22-26 điểm",
    trend:"stable",
    schools:["NEU","FTU","UEH","VNUHCM"],
    careers:["Phân tích kinh tế","Tư vấn tài chính","Quản lý dự án","Marketing"],
    description:"Ngành Kinh tế trang bị kiến thức về kinh tế vĩ mô, vi mô, tài chính, thương mại và các kỹ năng phân tích để đưa ra quyết định kinh doanh hiệu quả.",
    subjects:["Toán","Văn","Anh văn","Kinh tế học","Thống kê"]
  },
  {
    name:"Y khoa",
    shortName:"Y khoa",
    cat:"health",
    icon:"🩺",
    avgScore:"26-29 điểm",
    trend:"up",
    schools:["HMU","UMP","PITI"],
    careers:["Bác sĩ đa khoa","Bác sĩ chuyên khoa","Nghiên cứu y học","Giảng viên y khoa"],
    description:"Ngành Y khoa đào tạo các bác sĩ có kiến thức chuyên sâu về y học, kỹ năng chẩn đoán, điều trị bệnh và chăm sóc sức khỏe cộng đồng.",
    subjects:["Sinh","Hóa","Anh văn","Giải phẫu","Sinh lý"]
  },
  {
    name:"Kỹ thuật điện - Điện tử",
    shortName:"Điện - Điện tử",
    cat:"me",
    icon:"⚡",
    avgScore:"23-27 điểm",
    trend:"up",
    schools:["HUST","VNUHCM","UD"],
    careers:["Kỹ sư điện","Kỹ sư tự động hóa","Thiết kế mạch điện","IoT Engineer"],
    description:"Ngành đào tạo kỹ sư về hệ thống điện, điện tử, tự động hóa và các ứng dụng công nghệ trong sản xuất và đời sống.",
    subjects:["Toán","Lý","Anh văn","Mạch điện","Vi xử lý"]
  },
  {
  name:"Kỹ thuật cơ khí",
  shortName:"Cơ khí",
  cat:"me",
  icon:"⚙️",
  avgScore:"22-26 điểm",
  trend:"stable",
  schools:["HUST","HCMUT","DUT","UD","SPKT"],
  careers:["Kỹ sư cơ khí","Thiết kế máy","Kỹ sư sản xuất","Kỹ sư bảo trì"],
  description:"Ngành tập trung vào thiết kế, chế tạo và vận hành máy móc, thiết bị cơ khí trong công nghiệp.",
  subjects:["Toán","Lý","Cơ học","Vẽ kỹ thuật","CAD/CAM"]
},
{
  name:"Kỹ thuật cơ điện tử",
  shortName:"Mechatronics",
  cat:"me",
  icon:"🤖",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["HUST","HCMUT","UET","SPKT","DUT"],
  careers:["Kỹ sư robot","Kỹ sư tự động hóa","Embedded Engineer","IoT Engineer"],
  description:"Ngành kết hợp cơ khí, điện tử và lập trình để phát triển robot và hệ thống tự động.",
  subjects:["Toán","Lý","Lập trình","Điện tử","Điều khiển tự động"]
},
{
  name:"Kỹ thuật xây dựng",
  shortName:"Xây dựng",
  cat:"me",
  icon:"🏗️",
  avgScore:"20-25 điểm",
  trend:"stable",
  schools:["NUCE","HUST","HCMUT","DUT"],
  careers:["Kỹ sư xây dựng","Giám sát công trình","Thiết kế kết cấu","Quản lý dự án"],
  description:"Ngành đào tạo về thiết kế, thi công và quản lý các công trình xây dựng.",
  subjects:["Toán","Lý","Cơ học","Sức bền vật liệu","Kết cấu"]
},
{
  name:"Kỹ thuật giao thông",
  shortName:"Giao thông",
  cat:"me",
  icon:"🚧",
  avgScore:"20-25 điểm",
  trend:"stable",
  schools:["UTC","HCMUT","DUT"],
  careers:["Kỹ sư cầu đường","Thiết kế giao thông","Quản lý hạ tầng"],
  description:"Ngành tập trung vào thiết kế, xây dựng và quản lý hệ thống giao thông.",
  subjects:["Toán","Lý","Cơ học","Kết cấu","Vật liệu xây dựng"]
},
{
  name:"Kỹ thuật hóa học",
  shortName:"Hóa học",
  cat:"me",
  icon:"🧪",
  avgScore:"22-26 điểm",
  trend:"stable",
  schools:["HUST","HCMUT","DUT","VNUHCM"],
  careers:["Kỹ sư hóa","Kỹ sư sản xuất","R&D","Kỹ sư môi trường"],
  description:"Ngành nghiên cứu và ứng dụng hóa học vào sản xuất công nghiệp, vật liệu và năng lượng.",
  subjects:["Toán","Hóa","Lý","Hóa lý","Quá trình thiết bị"]
},
{
  name:"Kỹ thuật môi trường",
  shortName:"Môi trường",
  cat:"me",
  icon:"🌱",
  avgScore:"20-25 điểm",
  trend:"up",
  schools:["HUST","HCMUT","DUT","VNUHCM"],
  careers:["Kỹ sư môi trường","Quản lý môi trường","Xử lý nước thải"],
  description:"Ngành tập trung vào bảo vệ môi trường, xử lý ô nhiễm và phát triển bền vững.",
  subjects:["Toán","Hóa","Sinh","Môi trường","Xử lý chất thải"]
},
{
  name:"Kỹ thuật vật liệu",
  shortName:"Vật liệu",
  cat:"me",
  icon:"🧱",
  avgScore:"22-26 điểm",
  trend:"up",
  schools:["HUST","HCMUT","DUT","VNUHCM"],
  careers:["Kỹ sư vật liệu","R&D vật liệu","Kỹ sư sản xuất"],
  description:"Ngành nghiên cứu, phát triển và ứng dụng các loại vật liệu mới trong công nghiệp.",
  subjects:["Toán","Lý","Hóa","Khoa học vật liệu","Cấu trúc vật liệu"]
},
{
  name:"Kỹ thuật hàng không",
  shortName:"Hàng không",
  cat:"me",
  icon:"✈️",
  avgScore:"25-29 điểm",
  trend:"up",
  schools:["HUST","HCMUT","VAA"],
  careers:["Kỹ sư hàng không","Bảo trì máy bay","Thiết kế khí động học"],
  description:"Ngành đào tạo về thiết kế, vận hành và bảo trì máy bay và hệ thống hàng không.",
  subjects:["Toán","Lý","Cơ học","Khí động học","Điều khiển"]
},
{
  name:"Kỹ thuật năng lượng",
  shortName:"Năng lượng",
  cat:"me",
  icon:"🔋",
  avgScore:"22-26 điểm",
  trend:"up",
  schools:["HUST","HCMUT","DUT"],
  careers:["Kỹ sư năng lượng","Năng lượng tái tạo","Quản lý hệ thống điện"],
  description:"Ngành nghiên cứu về sản xuất, truyền tải và sử dụng năng lượng, đặc biệt là năng lượng tái tạo.",
  subjects:["Toán","Lý","Nhiệt học","Điện","Năng lượng tái tạo"]
},
{
  name:"Kỹ thuật điều khiển & tự động hóa",
  shortName:"Automation",
  cat:"me",
  icon:"🎛️",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["HUST","HCMUT","UET","DUT"],
  careers:["Kỹ sư tự động hóa","Control Engineer","Robot Engineer","PLC Engineer"],
  description:"Ngành tập trung vào điều khiển hệ thống, robot, dây chuyền sản xuất tự động.",
  subjects:["Toán","Lý","Điều khiển","Lập trình","PLC"]
},
  {
    name:"Quản trị kinh doanh",
    shortName:"QTKD",
    cat:"business",
    icon:"📋",
    avgScore:"21-25 điểm",
    trend:"stable",
    schools:["NEU","FTU","UEH","FPT"],
    careers:["Quản lý doanh nghiệp","Product Manager","Business Analyst","Giám đốc điều hành"],
    description:"Ngành Quản trị kinh doanh trang bị kiến thức về quản lý, lãnh đạo, chiến lược kinh doanh và kỹ năng điều hành doanh nghiệp hiệu quả.",
    subjects:["Toán","Văn","Anh văn","Quản trị học","Marketing"]
  },
  {
    name:"Dược học",
    shortName:"Dược",
    cat:"health",
    icon:"💊",
    avgScore:"24-27 điểm",
    trend:"stable",
    schools:["HMU","UMP"],
    careers:["Dược sĩ","Nghiên cứu dược","Quản lý nhà thuốc","Kiểm nghiệm dược"],
    description:"Ngành Dược học đào tạo về thuốc, dược liệu, công nghệ bào chế và quản lý dược phẩm để phục vụ công tác chăm sóc sức khỏe.",
    subjects:["Hóa","Sinh","Anh văn","Dược lý","Hóa dược"]
  },
  {
  name:"Y đa khoa",
  shortName:"Y khoa",
  cat:"health",
  icon:"🩺",
  avgScore:"26-29 điểm",
  trend:"up",
  schools:["HMU","UMP","HUE","VNUHCM"],
  careers:["Bác sĩ","Bác sĩ chuyên khoa","Giảng viên y khoa","Nghiên cứu y học"],
  description:"Ngành đào tạo bác sĩ đa khoa với kiến thức tổng quát về chẩn đoán, điều trị và chăm sóc bệnh nhân.",
  subjects:["Sinh","Hóa","Toán","Giải phẫu","Sinh lý học"]
},
{
  name:"Răng - Hàm - Mặt",
  shortName:"RHM",
  cat:"health",
  icon:"🦷",
  avgScore:"26-29 điểm",
  trend:"up",
  schools:["HMU","UMP","VNUHCM"],
  careers:["Bác sĩ nha khoa","Chỉnh nha","Phẫu thuật hàm mặt"],
  description:"Ngành đào tạo bác sĩ chuyên về chăm sóc, điều trị và thẩm mỹ răng miệng.",
  subjects:["Sinh","Hóa","Giải phẫu","Nha khoa","Sinh lý"]
},
{
  name:"Y học dự phòng",
  shortName:"YDP",
  cat:"health",
  icon:"🛡️",
  avgScore:"22-26 điểm",
  trend:"stable",
  schools:["HMU","UMP","HUE"],
  careers:["Bác sĩ dự phòng","Kiểm soát dịch bệnh","Quản lý y tế cộng đồng"],
  description:"Ngành tập trung vào phòng bệnh, kiểm soát dịch bệnh và bảo vệ sức khỏe cộng đồng.",
  subjects:["Sinh","Hóa","Dịch tễ học","Y tế công cộng","Thống kê"]
},
{
  name:"Điều dưỡng",
  shortName:"Nursing",
  cat:"health",
  icon:"👩‍⚕️",
  avgScore:"21-25 điểm",
  trend:"up",
  schools:["HMU","UMP","HUE","DUT"],
  careers:["Điều dưỡng viên","Chăm sóc bệnh nhân","Quản lý điều dưỡng"],
  description:"Ngành đào tạo kỹ năng chăm sóc bệnh nhân, hỗ trợ bác sĩ và quản lý điều dưỡng.",
  subjects:["Sinh","Hóa","Chăm sóc sức khỏe","Điều dưỡng","Tâm lý"]
},
{
  name:"Xét nghiệm y học",
  shortName:"Lab",
  cat:"health",
  icon:"🧫",
  avgScore:"22-26 điểm",
  trend:"up",
  schools:["HMU","UMP","HUE"],
  careers:["Kỹ thuật viên xét nghiệm","Phân tích mẫu bệnh","Kiểm nghiệm y học"],
  description:"Ngành chuyên thực hiện các xét nghiệm sinh học, hóa học để hỗ trợ chẩn đoán bệnh.",
  subjects:["Sinh","Hóa","Vi sinh","Sinh học phân tử","Xét nghiệm"]
},
{
  name:"Y học cổ truyền",
  shortName:"YHCT",
  cat:"health",
  icon:"🌿",
  avgScore:"21-25 điểm",
  trend:"stable",
  schools:["HMU","UMP","HUE"],
  careers:["Bác sĩ YHCT","Châm cứu","Bốc thuốc đông y"],
  description:"Ngành kết hợp y học hiện đại và cổ truyền trong điều trị và chăm sóc sức khỏe.",
  subjects:["Sinh","Hóa","Dược liệu","Châm cứu","Đông y"]
},
{
  name:"Kỹ thuật hình ảnh y học",
  shortName:"Imaging",
  cat:"health",
  icon:"🩻",
  avgScore:"22-26 điểm",
  trend:"up",
  schools:["HMU","UMP","HUE"],
  careers:["Kỹ thuật viên X-quang","MRI/CT Specialist","Chẩn đoán hình ảnh"],
  description:"Ngành sử dụng các thiết bị hình ảnh như X-quang, MRI, CT để hỗ trợ chẩn đoán bệnh.",
  subjects:["Sinh","Lý","Thiết bị y tế","Hình ảnh y học","X-quang"]
},
{
  name:"Dinh dưỡng",
  shortName:"Nutrition",
  cat:"health",
  icon:"🥗",
  avgScore:"20-24 điểm",
  trend:"up",
  schools:["HMU","UMP","HUE"],
  careers:["Chuyên gia dinh dưỡng","Tư vấn sức khỏe","Dinh dưỡng lâm sàng"],
  description:"Ngành nghiên cứu về chế độ ăn uống và dinh dưỡng để cải thiện sức khỏe con người.",
  subjects:["Sinh","Hóa","Dinh dưỡng","An toàn thực phẩm","Sức khỏe"]
},
{
  name:"Y tế công cộng",
  shortName:"Public Health",
  cat:"health",
  icon:"🌏",
  avgScore:"20-24 điểm",
  trend:"up",
  schools:["HMU","HUPH","HUE"],
  careers:["Chuyên viên y tế công cộng","Quản lý sức khỏe cộng đồng","Phân tích dữ liệu y tế"],
  description:"Ngành tập trung vào bảo vệ và nâng cao sức khỏe cộng đồng thông qua chính sách và chương trình y tế.",
  subjects:["Sinh","Thống kê","Dịch tễ","Quản lý y tế","Sức khỏe cộng đồng"]
},
  {
    name:"Thiết kế đồ họa",
    shortName:"Thiết kế",
    cat:"creative",
    icon:"🎨",
    avgScore:"18-23 điểm",
    trend:"up",
    schools:["FPT","RMIT","UEH"],
    careers:["Graphic Designer","UI/UX Designer","Art Director","Motion Designer"],
    description:"Ngành Thiết kế đồ họa đào tạo kỹ năng sáng tạo, thẩm mỹ và sử dụng công cụ thiết kế để tạo ra các sản phẩm truyền thông hình ảnh.",
    subjects:["Mỹ thuật","Anh văn","Photoshop","Illustrator","Typography"]
  },
  {
  name:"Thiết kế thời trang",
  shortName:"Fashion",
  cat:"creative",
  icon:"👗",
  avgScore:"18-24 điểm",
  trend:"up",
  schools:["RMIT","HCMUTE","VAA"],
  careers:["Fashion Designer","Stylist","Merchandiser","Creative Director"],
  description:"Ngành đào tạo về thiết kế trang phục, xu hướng thời trang và xây dựng thương hiệu cá nhân trong lĩnh vực thời trang.",
  subjects:["Mỹ thuật","Thiết kế","Cắt may","Xu hướng thời trang","Marketing"]
},
{
  name:"Thiết kế nội thất",
  shortName:"Interior",
  cat:"creative",
  icon:"🛋️",
  avgScore:"18-24 điểm",
  trend:"up",
  schools:["HUST","HCMUT","VAA"],
  careers:["Interior Designer","3D Designer","Kiến trúc sư nội thất"],
  description:"Ngành tập trung vào thiết kế không gian sống và làm việc, kết hợp thẩm mỹ và công năng.",
  subjects:["Mỹ thuật","Vẽ kỹ thuật","3D","Thiết kế","Vật liệu"]
},
{
  name:"Kiến trúc",
  shortName:"Arch",
  cat:"creative",
  icon:"🏛️",
  avgScore:"20-26 điểm",
  trend:"stable",
  schools:["HUST","HCMUT","VNUHCM","DAU"],
  careers:["Kiến trúc sư","Thiết kế công trình","Quy hoạch đô thị"],
  description:"Ngành đào tạo về thiết kế công trình, không gian kiến trúc và quy hoạch đô thị.",
  subjects:["Toán","Mỹ thuật","Vẽ kỹ thuật","Thiết kế","Kết cấu"]
},
{
  name:"Truyền thông đa phương tiện",
  shortName:"Media",
  cat:"creative",
  icon:"🎬",
  avgScore:"20-26 điểm",
  trend:"up",
  schools:["FPT","RMIT","PTIT","VNUHCM"],
  careers:["Content Creator","Video Editor","Producer","Digital Media Specialist"],
  description:"Ngành kết hợp sáng tạo nội dung, công nghệ và truyền thông để sản xuất sản phẩm đa phương tiện.",
  subjects:["Mỹ thuật","Anh văn","Dựng phim","Thiết kế","Truyền thông"]
},
{
  name:"Nghệ thuật số (Digital Art)",
  shortName:"DigitalArt",
  cat:"creative",
  icon:"🖌️",
  avgScore:"18-24 điểm",
  trend:"up",
  schools:["RMIT","FPT","VAA"],
  careers:["Digital Artist","Concept Artist","Illustrator","Game Artist"],
  description:"Ngành tập trung vào sáng tạo nghệ thuật bằng công cụ số, phục vụ game, phim và truyền thông.",
  subjects:["Mỹ thuật","Vẽ","Photoshop","Illustration","Concept Art"]
},
{
  name:"Thiết kế game",
  shortName:"GameDesign",
  cat:"creative",
  icon:"🎮",
  avgScore:"20-26 điểm",
  trend:"up",
  schools:["FPT","RMIT","VNUHCM"],
  careers:["Game Designer","Level Designer","Game Artist","Narrative Designer"],
  description:"Ngành kết hợp sáng tạo và công nghệ để thiết kế gameplay, cốt truyện và trải nghiệm người chơi.",
  subjects:["Lập trình","Mỹ thuật","Game Design","Storytelling","Unity"]
},
{
  name:"Điện ảnh - Truyền hình",
  shortName:"Film",
  cat:"creative",
  icon:"🎥",
  avgScore:"18-25 điểm",
  trend:"up",
  schools:["SKDA","HUTECH","VNUHCM"],
  careers:["Đạo diễn","Biên kịch","Quay phim","Dựng phim"],
  description:"Ngành đào tạo về sản xuất phim, từ kịch bản, quay dựng đến hậu kỳ.",
  subjects:["Ngữ văn","Nghệ thuật","Quay dựng","Kịch bản","Truyền thông"]
},
{
  name:"Thiết kế sản phẩm",
  shortName:"Product",
  cat:"creative",
  icon:"📦",
  avgScore:"20-25 điểm",
  trend:"up",
  schools:["HUST","RMIT","HCMUT"],
  careers:["Product Designer","Industrial Designer","UX Designer"],
  description:"Ngành tập trung vào thiết kế sản phẩm công nghiệp, kết hợp thẩm mỹ và công năng.",
  subjects:["Mỹ thuật","Thiết kế","3D","Vật liệu","Ergonomics"]
},
{
  name:"Âm nhạc",
  shortName:"Music",
  cat:"creative",
  icon:"🎵",
  avgScore:"15-22 điểm",
  trend:"stable",
  schools:["VNAM","HCMCONS"],
  careers:["Nhạc sĩ","Ca sĩ","Producer","Giảng viên âm nhạc"],
  description:"Ngành đào tạo về biểu diễn, sáng tác và sản xuất âm nhạc.",
  subjects:["Âm nhạc","Thanh nhạc","Hòa âm","Sáng tác","Biểu diễn"]
},
  {
    name:"Kiến trúc",
    shortName:"Kiến trúc",
    cat:"creative",
    icon:"🏛️",
    avgScore:"22-26 điểm",
    trend:"stable",
    schools:["HUST","UEH","UD"],
    careers:["Kiến trúc sư","Thiết kế nội thất","Quy hoạch đô thị","Giám sát công trình"],
    description:"Ngành Kiến trúc đào tạo về thiết kế công trình, không gian sống và kỹ năng kết hợp thẩm mỹ với kỹ thuật xây dựng.",
    subjects:["Toán","Lý","Mỹ thuật","AutoCAD","Kết cấu"]
  },
  {
  name:"Kinh tế quốc tế",
  shortName:"IE",
  cat:"business",
  icon:"🌍",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["FTU","NEU","UEH","VNUHCM"],
  careers:["Chuyên viên xuất nhập khẩu","Chuyên viên logistics","Phân tích thị trường quốc tế","Tư vấn thương mại"],
  description:"Ngành tập trung vào hoạt động thương mại quốc tế, xuất nhập khẩu, logistics và phân tích thị trường toàn cầu.",
  subjects:["Toán","Anh văn","Kinh tế quốc tế","Thương mại","Logistics"]
},
{
  name:"Quản trị kinh doanh",
  shortName:"BA",
  cat:"business",
  icon:"🏢",
  avgScore:"22-27 điểm",
  trend:"stable",
  schools:["NEU","UEH","FTU","FPT","RMIT"],
  careers:["Quản lý doanh nghiệp","Chuyên viên kinh doanh","Khởi nghiệp","Project Manager"],
  description:"Ngành đào tạo kỹ năng quản lý, điều hành doanh nghiệp, xây dựng chiến lược và phát triển kinh doanh.",
  subjects:["Toán","Văn","Anh văn","Quản trị","Marketing"]
},
{
  name:"Marketing",
  shortName:"MKT",
  cat:["business","creative"],
  icon:"📢",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["NEU","UEH","FTU","RMIT","TMU"],
  careers:["Marketing Executive","Brand Manager","Digital Marketing","Content Creator"],
  description:"Ngành tập trung vào nghiên cứu thị trường, xây dựng thương hiệu và triển khai chiến lược marketing.",
  subjects:["Toán","Văn","Anh văn","Marketing","Hành vi khách hàng"]
},
{
  name:"Tài chính - Ngân hàng",
  shortName:"FIN",
  cat:"business",
  icon:"💰",
  avgScore:"23-27 điểm",
  trend:"stable",
  schools:["NEU","UEH","FTU","HUB","VNUHCM"],
  careers:["Chuyên viên ngân hàng","Phân tích tài chính","Đầu tư","Quản lý quỹ"],
  description:"Ngành cung cấp kiến thức về tài chính, ngân hàng, đầu tư và quản lý dòng tiền.",
  subjects:["Toán","Anh văn","Tài chính","Ngân hàng","Thống kê"]
},
{
  name:"Kế toán",
  shortName:"ACC",
  cat:"business",
  icon:"🧾",
  avgScore:"22-26 điểm",
  trend:"stable",
  schools:["NEU","UEH","FTU","AOF","TMU"],
  careers:["Kế toán viên","Kiểm toán viên","Chuyên viên thuế","Tư vấn tài chính"],
  description:"Ngành đào tạo về ghi chép, phân tích và kiểm soát tài chính của doanh nghiệp.",
  subjects:["Toán","Nguyên lý kế toán","Thuế","Kiểm toán","Tài chính"]
},
{
  name:"Kiểm toán",
  shortName:"AUD",
  cat:"business",
  icon:"🔍",
  avgScore:"23-27 điểm",
  trend:"stable",
  schools:["NEU","UEH","AOF","FTU"],
  careers:["Kiểm toán viên","Chuyên viên kiểm soát nội bộ","Tư vấn tài chính"],
  description:"Ngành chuyên về kiểm tra, đánh giá tính minh bạch và chính xác của báo cáo tài chính.",
  subjects:["Toán","Kế toán","Kiểm toán","Thuế","Phân tích tài chính"]
},
{
  name:"Thương mại điện tử",
  shortName:"Ecom",
  cat:"business",
  icon:"🛒",
  avgScore:"23-27 điểm",
  trend:"up",
  schools:["NEU","UEH","TMU","FPT","VNUHCM"],
  careers:["E-commerce Specialist","Digital Marketing","Quản lý sàn TMĐT","Startup online"],
  description:"Ngành kết hợp kinh doanh và công nghệ, tập trung vào hoạt động bán hàng online và nền tảng số.",
  subjects:["Toán","Anh văn","Marketing","Công nghệ web","Phân tích dữ liệu"]
},
{
  name:"Kinh doanh quốc tế",
  shortName:"IB",
  cat:"business",
  icon:"✈️",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["FTU","NEU","UEH","RMIT"],
  careers:["Business Development","Chuyên viên xuất nhập khẩu","Quản lý chuỗi cung ứng"],
  description:"Ngành đào tạo về hoạt động kinh doanh trong môi trường quốc tế, chiến lược toàn cầu.",
  subjects:["Toán","Anh văn","Kinh doanh","Quản trị","Logistics"]
},
{
  name:"Quản trị nhân lực",
  shortName:"HRM",
  cat:"business",
  icon:"👥",
  avgScore:"22-26 điểm",
  trend:"stable",
  schools:["NEU","UEH","TMU","ULIS"],
  careers:["HR Specialist","Recruiter","Talent Manager","Training Manager"],
  description:"Ngành tập trung vào quản lý con người trong tổ chức, tuyển dụng và phát triển nhân sự.",
  subjects:["Văn","Anh văn","Quản trị","Tâm lý học","Kỹ năng mềm"]
},
{
  name:"Logistics & Quản lý chuỗi cung ứng",
  shortName:"SCM",
  cat:"business",
  icon:"🚚",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["FTU","NEU","UEH","HCMUT","VIMARU"],
  careers:["Logistics Coordinator","Supply Chain Manager","Xuất nhập khẩu"],
  description:"Ngành đào tạo về vận chuyển, lưu kho, phân phối hàng hóa và tối ưu chuỗi cung ứng.",
  subjects:["Toán","Anh văn","Logistics","Quản trị","Kinh tế"]
},
 {
  name:"Sư phạm Toán học",
  shortName:"MathEdu",
  cat:"edu",
  icon:"➗",
  avgScore:"22-27 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên Toán","Giảng viên Toán","Chuyên viên giáo dục"],
  description:"Ngành đào tạo giáo viên giảng dạy môn Toán với nền tảng kiến thức toán học và phương pháp sư phạm.",
  subjects:["Toán","Phương pháp dạy học","Tâm lý học","Giáo dục học"]
},
{
  name:"Sư phạm Ngữ văn",
  shortName:"LitEdu",
  cat:"edu",
  icon:"📖",
  avgScore:"21-26 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên Văn","Giảng viên","Biên tập viên giáo dục"],
  description:"Ngành đào tạo giáo viên giảng dạy môn Ngữ văn, phát triển kỹ năng ngôn ngữ và văn học.",
  subjects:["Ngữ văn","Lý luận văn học","Phương pháp dạy học","Tâm lý học"]
},
{
  name:"Sư phạm Tiếng Anh",
  shortName:"EngEdu",
  cat:"edu",
  icon:"🇬🇧",
  avgScore:"23-28 điểm",
  trend:"up",
  schools:["HNUE","HCMUE","ULIS","VNUHCM"],
  careers:["Giáo viên tiếng Anh","Giảng viên","Biên soạn giáo trình"],
  description:"Ngành đào tạo giáo viên tiếng Anh với kỹ năng ngôn ngữ và phương pháp giảng dạy hiện đại.",
  subjects:["Anh văn","Ngôn ngữ học","Phương pháp giảng dạy","Tâm lý học"]
},
{
  name:"Sư phạm Vật lý",
  shortName:"PhysEdu",
  cat:"edu",
  icon:"🔬",
  avgScore:"21-26 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên Vật lý","Giảng viên","Nghiên cứu giáo dục"],
  description:"Ngành đào tạo giáo viên giảng dạy môn Vật lý với nền tảng khoa học và thực nghiệm.",
  subjects:["Vật lý","Thí nghiệm","Phương pháp dạy học","Tâm lý học"]
},
{
  name:"Sư phạm Hóa học",
  shortName:"ChemEdu",
  cat:"edu",
  icon:"🧪",
  avgScore:"21-26 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên Hóa","Giảng viên","Nghiên cứu giáo dục"],
  description:"Ngành đào tạo giáo viên giảng dạy môn Hóa học và kỹ năng thí nghiệm.",
  subjects:["Hóa học","Thí nghiệm","Phương pháp dạy học","Tâm lý học"]
},
{
  name:"Sư phạm Sinh học",
  shortName:"BioEdu",
  cat:"edu",
  icon:"🧬",
  avgScore:"20-25 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên Sinh","Giảng viên","Nghiên cứu giáo dục"],
  description:"Ngành đào tạo giáo viên giảng dạy môn Sinh học và kiến thức khoa học sự sống.",
  subjects:["Sinh học","Thí nghiệm","Phương pháp dạy học","Tâm lý học"]
},
{
  name:"Sư phạm Tin học",
  shortName:"ITEdu",
  cat:"edu",
  icon:"💻",
  avgScore:"22-27 điểm",
  trend:"up",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên Tin học","Giảng viên CNTT","Phát triển nội dung giáo dục"],
  description:"Ngành đào tạo giáo viên giảng dạy Tin học, lập trình và công nghệ thông tin.",
  subjects:["Lập trình","Toán","Cấu trúc dữ liệu","Phương pháp dạy học"]
},
{
  name:"Giáo dục tiểu học",
  shortName:"PrimaryEdu",
  cat:"edu",
  icon:"🏫",
  avgScore:"20-25 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên tiểu học","Quản lý giáo dục","Giáo dục trẻ em"],
  description:"Ngành đào tạo giáo viên giảng dạy bậc tiểu học với kiến thức đa môn và kỹ năng sư phạm.",
  subjects:["Toán","Tiếng Việt","Tâm lý trẻ em","Giáo dục học"]
},
{
  name:"Giáo dục mầm non",
  shortName:"EarlyEdu",
  cat:"edu",
  icon:"🧸",
  avgScore:"18-24 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên mầm non","Quản lý trường mầm non"],
  description:"Ngành đào tạo giáo viên chăm sóc và giáo dục trẻ nhỏ từ 0-6 tuổi.",
  subjects:["Tâm lý trẻ em","Giáo dục học","Âm nhạc","Mỹ thuật"]
},
{
  name:"Quản lý giáo dục",
  shortName:"EduMgmt",
  cat:"edu",
  icon:"📋",
  avgScore:"20-25 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Chuyên viên quản lý giáo dục","Hiệu trưởng","Quản lý đào tạo"],
  description:"Ngành đào tạo về quản lý hệ thống giáo dục, chính sách và tổ chức đào tạo.",
  subjects:["Quản lý","Giáo dục học","Tâm lý học","Chính sách giáo dục"]
},
{
  name:"Sư phạm Lịch sử",
  shortName:"HistEdu",
  cat:"edu",
  icon:"📜",
  avgScore:"20-25 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên Lịch sử","Giảng viên","Nghiên cứu lịch sử"],
  description:"Ngành đào tạo giáo viên giảng dạy môn Lịch sử, nghiên cứu và truyền đạt kiến thức về quá khứ và văn hóa dân tộc.",
  subjects:["Lịch sử","Phương pháp dạy học","Tâm lý học","Giáo dục học"]
},
{
  name:"Sư phạm Địa lý",
  shortName:"GeoEdu",
  cat:"edu",
  icon:"🌍",
  avgScore:"20-25 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên Địa lý","Giảng viên","Nghiên cứu địa lý"],
  description:"Ngành đào tạo giáo viên giảng dạy môn Địa lý, bao gồm tự nhiên, kinh tế và xã hội.",
  subjects:["Địa lý","Bản đồ học","Phương pháp dạy học","Tâm lý học"]
},
{
  name:"Sư phạm Giáo dục công dân",
  shortName:"CivEdu",
  cat:"edu",
  icon:"⚖️",
  avgScore:"20-24 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE"],
  careers:["Giáo viên GDCD","Giảng viên","Chuyên viên giáo dục"],
  description:"Ngành đào tạo giáo viên giảng dạy môn Giáo dục công dân, giúp học sinh hiểu về pháp luật và đạo đức.",
  subjects:["Giáo dục công dân","Pháp luật","Tâm lý học","Giáo dục học"]
},
{
  name:"Sư phạm Khoa học tự nhiên",
  shortName:"SciEdu",
  cat:"edu",
  icon:"🔬",
  avgScore:"21-26 điểm",
  trend:"up",
  schools:["HNUE","HCMUE","VNUHCM"],
  careers:["Giáo viên KHTN","Giảng viên","Nghiên cứu giáo dục"],
  description:"Ngành đào tạo giáo viên dạy tích hợp các môn khoa học tự nhiên như Lý, Hóa, Sinh.",
  subjects:["Lý","Hóa","Sinh","Phương pháp dạy học","Tâm lý học"]
},
{
  name:"Sư phạm Lịch sử - Địa lý",
  shortName:"SocEdu",
  cat:"edu",
  icon:"🗺️",
  avgScore:"20-25 điểm",
  trend:"up",
  schools:["HNUE","HCMUE"],
  careers:["Giáo viên Sử - Địa","Giảng viên","Nghiên cứu xã hội"],
  description:"Ngành đào tạo giáo viên dạy tích hợp Lịch sử và Địa lý theo chương trình giáo dục mới.",
  subjects:["Lịch sử","Địa lý","Phương pháp dạy học","Tâm lý học"]
},
{
  name:"Giáo dục đặc biệt",
  shortName:"SpecEdu",
  cat:"edu",
  icon:"🧩",
  avgScore:"18-24 điểm",
  trend:"up",
  schools:["HNUE","HCMUE"],
  careers:["Giáo viên giáo dục đặc biệt","Chuyên viên hỗ trợ trẻ","Nhà trị liệu giáo dục"],
  description:"Ngành đào tạo giáo viên hỗ trợ và giáo dục trẻ có nhu cầu đặc biệt như tự kỷ, chậm phát triển.",
  subjects:["Tâm lý học","Giáo dục đặc biệt","Can thiệp sớm","Kỹ năng hỗ trợ"]
},
{
  name:"Giáo dục thể chất",
  shortName:"PE",
  cat:"edu",
  icon:"🏃",
  avgScore:"17-23 điểm",
  trend:"stable",
  schools:["TDTT","HNUE","HCMUE"],
  careers:["Giáo viên thể dục","Huấn luyện viên","Quản lý thể thao"],
  description:"Ngành đào tạo giáo viên giảng dạy thể dục và phát triển thể chất cho học sinh.",
  subjects:["Thể thao","Sinh học","Huấn luyện","Giáo dục học"]
},
{
  name:"Sư phạm Âm nhạc",
  shortName:"MusicEdu",
  cat:"edu",
  icon:"🎼",
  avgScore:"17-23 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE"],
  careers:["Giáo viên âm nhạc","Nhạc công","Giảng viên"],
  description:"Ngành đào tạo giáo viên giảng dạy âm nhạc và nghệ thuật biểu diễn.",
  subjects:["Âm nhạc","Thanh nhạc","Nhạc lý","Biểu diễn"]
},
{
  name:"Sư phạm Mỹ thuật",
  shortName:"ArtEdu",
  cat:"edu",
  icon:"🎨",
  avgScore:"17-23 điểm",
  trend:"stable",
  schools:["HNUE","HCMUE"],
  careers:["Giáo viên mỹ thuật","Họa sĩ","Thiết kế"],
  description:"Ngành đào tạo giáo viên giảng dạy mỹ thuật và phát triển năng khiếu nghệ thuật.",
  subjects:["Mỹ thuật","Vẽ","Thiết kế","Giáo dục học"]
},
 {
  name:"Luật dân sự và tố tụng dân sự",
  shortName:"CivilLaw",
  cat:"law",
  icon:"📜",
  avgScore:"23-27 điểm",
  trend:"stable",
  schools:["HLU","HCMLAW"],
  careers:["Luật sư dân sự","Công chứng viên","Tư vấn pháp lý"],
  description:"Ngành tập trung vào các quan hệ dân sự như tài sản, hợp đồng và quy trình giải quyết tranh chấp dân sự.",
  subjects:["Văn","Luật dân sự","Tố tụng dân sự","Pháp luật"]
},
{
  name:"Luật hiến pháp và luật hành chính",
  shortName:"ConstAdminLaw",
  cat:"law",
  icon:"🏛️",
  avgScore:"22-26 điểm",
  trend:"stable",
  schools:["HLU","HCMLAW"],
  careers:["Công chức","Thanh tra","Chuyên viên pháp lý nhà nước"],
  description:"Ngành nghiên cứu hệ thống pháp luật về tổ chức nhà nước và quản lý hành chính.",
  subjects:["Văn","Hiến pháp","Luật hành chính","Quản lý nhà nước"]
},
{
  name:"Quản trị kinh doanh & Luật",
  shortName:"BA-Law",
  cat:"law",
  icon:"💼",
  avgScore:"23-27 điểm",
  trend:"up",
  schools:["NEU","UEH","FTU"],
  careers:["Quản lý doanh nghiệp","Chuyên viên pháp chế","Tư vấn kinh doanh"],
  description:"Ngành kết hợp quản trị kinh doanh và pháp luật để điều hành doanh nghiệp hiệu quả.",
  subjects:["Toán","Anh văn","Quản trị","Luật kinh doanh"]
},
{
  name:"Luật hàng hải",
  shortName:"MaritimeLaw",
  cat:"law",
  icon:"🚢",
  avgScore:"22-26 điểm",
  trend:"stable",
  schools:["VIMARU","HLU"],
  careers:["Luật sư hàng hải","Chuyên viên logistics","Tư vấn vận tải biển"],
  description:"Ngành nghiên cứu pháp luật liên quan đến vận tải biển, tàu thuyền và thương mại hàng hải.",
  subjects:["Anh văn","Luật hàng hải","Thương mại","Logistics"]
},
{
  name:"Luật hình sự và tố tụng hình sự",
  shortName:"CrimLaw",
  cat:"law",
  icon:"🚨",
  avgScore:"23-27 điểm",
  trend:"stable",
  schools:["HLU","HCMLAW","AND"],
  careers:["Luật sư hình sự","Kiểm sát viên","Thẩm phán","Điều tra viên"],
  description:"Ngành nghiên cứu về tội phạm, hình phạt và quy trình xử lý vụ án hình sự.",
  subjects:["Văn","Luật hình sự","Tố tụng hình sự","Pháp luật"]
},
{
  name:"Luật kinh doanh",
  shortName:"BizLaw",
  cat:"law",
  icon:"📊",
  avgScore:"23-27 điểm",
  trend:"up",
  schools:["NEU","UEH","HLU"],
  careers:["Pháp chế doanh nghiệp","Tư vấn hợp đồng","Luật sư kinh doanh"],
  description:"Ngành tập trung vào pháp luật trong hoạt động kinh doanh và doanh nghiệp.",
  subjects:["Toán","Anh văn","Luật doanh nghiệp","Kinh doanh"]
},
{
  name:"Luật kinh tế",
  shortName:"EcoLaw",
  cat:"law",
  icon:"💰",
  avgScore:"23-27 điểm",
  trend:"up",
  schools:["HLU","HCMLAW","NEU","UEH"],
  careers:["Chuyên viên pháp lý","Luật sư kinh tế","Tư vấn đầu tư"],
  description:"Ngành nghiên cứu pháp luật trong nền kinh tế, thương mại và đầu tư.",
  subjects:["Toán","Anh văn","Luật kinh tế","Tài chính"]
},
{
  name:"Luật quốc tế",
  shortName:"IntLaw",
  cat:"law",
  icon:"🌐",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["HLU","HCMLAW","FTU"],
  careers:["Luật sư quốc tế","Chuyên viên đối ngoại","Tư vấn quốc tế"],
  description:"Ngành nghiên cứu pháp luật giữa các quốc gia và tổ chức quốc tế.",
  subjects:["Anh văn","Luật quốc tế","Quan hệ quốc tế"]
},
{
  name:"Luật thương mại quốc tế",
  shortName:"TradeLaw",
  cat:"law",
  icon:"📦",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["FTU","HLU","HCMLAW"],
  careers:["Chuyên viên xuất nhập khẩu","Tư vấn pháp lý quốc tế","Logistics pháp lý"],
  description:"Ngành tập trung vào pháp luật trong hoạt động thương mại quốc tế và xuất nhập khẩu.",
  subjects:["Anh văn","Luật thương mại","Kinh doanh quốc tế"]
},
{
  name:"Quản trị - Luật",
  shortName:"Mgmt-Law",
  cat:"law",
  icon:"🧑‍💼",
  avgScore:"23-27 điểm",
  trend:"up",
  schools:["UEH","NEU"],
  careers:["Quản lý doanh nghiệp","Pháp chế","Tư vấn quản trị"],
  description:"Ngành kết hợp quản trị và pháp luật để quản lý tổ chức hiệu quả.",
  subjects:["Toán","Anh văn","Quản trị","Luật"]
},
{
  name:"Tài chính ngân hàng & Luật",
  shortName:"Fin-Law",
  cat:"law",
  icon:"🏦",
  avgScore:"24-28 điểm",
  trend:"up",
  schools:["UEH","NEU","FTU"],
  careers:["Pháp chế ngân hàng","Tư vấn tài chính","Kiểm soát pháp lý"],
  description:"Ngành kết hợp tài chính ngân hàng và pháp luật để quản lý rủi ro và tuân thủ pháp lý.",
  subjects:["Toán","Anh văn","Tài chính","Luật ngân hàng"]
},
{
  name:"Công nghệ dệt may",
  shortName:"Textile",
  cat:"textiles",
  icon:"🧵",
  avgScore:"18-24 điểm",
  trend:"stable",
  schools:["HUST","HCMUT","HCMUTE","DUT"],
  careers:["Kỹ sư dệt may","Quản lý sản xuất","Thiết kế thời trang công nghiệp","Chuyên viên kiểm định chất lượng"],
  description:"Ngành đào tạo về thiết kế, sản xuất và quản lý trong lĩnh vực dệt may, từ nguyên liệu, quy trình sản xuất đến kiểm soát chất lượng sản phẩm.",
  subjects:["Toán","Hóa","Công nghệ dệt","Vật liệu","Thiết kế"]
},
{
  name:"Nông học",
  shortName:"Agri",
  cat:"agri",
  icon:"🌾",
  avgScore:"17-23 điểm",
  trend:"stable",
  schools:["VNUA","NLU","HCMUAF"],
  careers:["Kỹ sư nông nghiệp","Chuyên viên trồng trọt","Quản lý nông trại"],
  description:"Ngành tập trung vào trồng trọt, cải tiến giống cây và kỹ thuật canh tác để nâng cao năng suất.",
  subjects:["Sinh","Hóa","Đất học","Cây trồng","Bảo vệ thực vật"]
},
{
  name:"Bảo vệ thực vật",
  shortName:"PlantProt",
  cat:"agri",
  icon:"🐛",
  avgScore:"17-23 điểm",
  trend:"stable",
  schools:["VNUA","NLU","HCMUAF"],
  careers:["Chuyên viên BVTV","Kỹ sư nông nghiệp","Tư vấn thuốc bảo vệ thực vật"],
  description:"Ngành nghiên cứu sâu bệnh hại cây trồng và các biện pháp phòng trừ hiệu quả.",
  subjects:["Sinh","Hóa","Côn trùng học","Bệnh cây","Thuốc BVTV"]
},
{
  name:"Khoa học cây trồng",
  shortName:"CropSci",
  cat:"agri",
  icon:"🌱",
  avgScore:"17-23 điểm",
  trend:"stable",
  schools:["VNUA","NLU","HCMUAF"],
  careers:["Nghiên cứu giống cây","Kỹ sư nông nghiệp","Chuyên gia canh tác"],
  description:"Ngành nghiên cứu về sinh trưởng, phát triển và cải tiến giống cây trồng.",
  subjects:["Sinh","Hóa","Di truyền","Cây trồng","Sinh lý thực vật"]
},
{
  name:"Chăn nuôi",
  shortName:"Animal",
  cat:"agri",
  icon:"🐄",
  avgScore:"17-23 điểm",
  trend:"stable",
  schools:["VNUA","NLU","HCMUAF"],
  careers:["Kỹ sư chăn nuôi","Quản lý trang trại","Chuyên gia dinh dưỡng vật nuôi"],
  description:"Ngành tập trung vào nuôi dưỡng, chăm sóc và phát triển vật nuôi.",
  subjects:["Sinh","Hóa","Dinh dưỡng","Di truyền","Thú y cơ bản"]
},
{
  name:"Thú y",
  shortName:"Vet",
  cat:"agri",
  icon:"🐶",
  avgScore:"20-26 điểm",
  trend:"up",
  schools:["VNUA","NLU","HCMUAF"],
  careers:["Bác sĩ thú y","Chăm sóc thú cưng","Kiểm dịch động vật"],
  description:"Ngành đào tạo về chăm sóc, điều trị bệnh cho động vật và kiểm soát dịch bệnh.",
  subjects:["Sinh","Hóa","Giải phẫu","Bệnh học","Dược thú y"]
},
{
  name:"Công nghệ sinh học nông nghiệp",
  shortName:"AgriBio",
  cat:"agri",
  icon:"🧬",
  avgScore:"20-25 điểm",
  trend:"up",
  schools:["VNUA","HCMUAF","VNUHCM"],
  careers:["Nghiên cứu sinh học","Kỹ sư công nghệ sinh học","Phát triển giống"],
  description:"Ngành ứng dụng công nghệ sinh học vào nông nghiệp để tạo giống mới và nâng cao năng suất.",
  subjects:["Sinh","Hóa","Sinh học phân tử","Di truyền","Công nghệ sinh học"]
},
{
  name:"Khoa học đất",
  shortName:"Soil",
  cat:"agri",
  icon:"🪨",
  avgScore:"17-22 điểm",
  trend:"stable",
  schools:["VNUA","NLU"],
  careers:["Chuyên gia đất","Kỹ sư nông nghiệp","Quản lý tài nguyên đất"],
  description:"Ngành nghiên cứu đất, dinh dưỡng đất và cải tạo đất phục vụ sản xuất nông nghiệp.",
  subjects:["Hóa","Sinh","Địa lý","Đất học","Phân bón"]
},
{
  name:"Khuyến nông",
  shortName:"Extension",
  cat:"agri",
  icon:"📣",
  avgScore:"16-22 điểm",
  trend:"stable",
  schools:["VNUA","NLU"],
  careers:["Cán bộ khuyến nông","Tư vấn nông nghiệp","Quản lý dự án nông thôn"],
  description:"Ngành đào tạo cán bộ hướng dẫn, hỗ trợ nông dân áp dụng kỹ thuật mới vào sản xuất.",
  subjects:["Sinh","Kinh tế","Nông nghiệp","Truyền thông","Quản lý"]
},
{
  name:"Quản lý tài nguyên rừng",
  shortName:"Forestry",
  cat:"agri",
  icon:"🌳",
  avgScore:"17-23 điểm",
  trend:"up",
  schools:["VNUA","NLU","TNU"],
  careers:["Kiểm lâm","Quản lý rừng","Bảo tồn thiên nhiên"],
  description:"Ngành tập trung vào quản lý, bảo vệ và phát triển tài nguyên rừng.",
  subjects:["Sinh","Địa lý","Môi trường","Lâm nghiệp","Bảo tồn"]
},
{
  name:"Kỹ thuật bán dẫn",
  shortName:"Semi",
  cat:"me",
  icon:"💾",
  avgScore:"24-29 điểm",
  trend:"up",
  schools:["HUST","VNUHCM","UET"],
  careers:["Kỹ sư bán dẫn","Thiết kế chip","Process Engineer","IC Designer"],
  description:"Ngành tập trung vào thiết kế, chế tạo và kiểm thử chip bán dẫn và linh kiện điện tử.",
  subjects:["Toán","Lý","Vi mạch","VLSI","Thiết kế chip"]
},
{
  name:"Kỹ thuật vi điện tử và công nghệ nano",
  shortName:"MicroNano",
  cat:"me",
  icon:"🔬",
  avgScore:"24-29 điểm",
  trend:"up",
  schools:["HUST","VNUHCM","UET"],
  careers:["Kỹ sư vi mạch","Nano Engineer","R&D bán dẫn"],
  description:"Ngành nghiên cứu vi mạch, công nghệ nano và các linh kiện điện tử kích thước siêu nhỏ.",
  subjects:["Toán","Lý","Điện tử","Vi mạch","Công nghệ nano"]
},
{
  name:"Nuôi trồng thủy sản",
  shortName:"Aqua",
  cat:"agri",
  icon:"🐟",
  avgScore:"17-23 điểm",
  trend:"up",
  schools:["NTU","CTU","HCMUAF"],
  careers:["Kỹ sư thủy sản","Nuôi trồng thủy sản","Quản lý ao nuôi"],
  description:"Ngành đào tạo về nuôi trồng và phát triển các loài thủy sản như cá, tôm.",
  subjects:["Sinh","Hóa","Thủy sinh","Dinh dưỡng","Môi trường nước"]
}
];

const salaryData = [
  {name:"AI Engineer",start:22,senior:65},
  {name:"Bác sĩ",start:15,senior:60},
  {name:"Product Manager",start:18,senior:55},
  {name:"Lập trình viên",start:15,senior:45},
  {name:"Data Analyst",start:12,senior:35},
  {name:"Marketing Mgr",start:12,senior:35},
  {name:"Dược sĩ",start:10,senior:28},
  {name:"Giáo viên",start:8,senior:18},
];

const quizQuestions = [
  {
    q:"Bạn thích làm gì vào thời gian rảnh?",
    hint:"Chọn hoạt động gần nhất với sở thích của bạn",
    opts:[
      {icon:"💻",text:"Viết code, tạo app, giải bài toán logic",sub:"Phân tích & Lập trình",val:"I"},
      {icon:"🤝",text:"Trò chuyện, giúp đỡ và lắng nghe bạn bè",sub:"Giao tiếp & Hỗ trợ",val:"S"},
      {icon:"🎨",text:"Vẽ, thiết kế, sáng tác âm nhạc hay viết lách",sub:"Sáng tạo & Nghệ thuật",val:"A"},
      {icon:"🔬",text:"Đọc sách, nghiên cứu, tìm hiểu kiến thức mới",sub:"Tò mò & Khám phá",val:"I"},
    ]
  },
  {
    q:"Trong nhóm dự án, bạn thường đảm nhận vai trò gì?",
    hint:"Không có câu trả lời đúng hay sai",
    opts:[
      {icon:"🗣️",text:"Người trình bày, thuyết phục và dẫn dắt nhóm",sub:"Lãnh đạo",val:"E"},
      {icon:"🧮",text:"Người làm bảng tính, tính toán và kiểm tra số liệu",sub:"Kỹ thuật & Số liệu",val:"C"},
      {icon:"💡",text:"Người đưa ra ý tưởng mới và sáng tạo",sub:"Sáng tạo",val:"A"},
      {icon:"🔧",text:"Người xây dựng, làm mô hình hoặc lập trình",sub:"Thực hành",val:"R"},
    ]
  },
  {
    q:"Môi trường làm việc lý tưởng của bạn là gì?",
    hint:"Hãy tưởng tượng nơi bạn làm việc vui nhất",
    opts:[
      {icon:"🏥",text:"Bệnh viện, phòng khám — tiếp xúc nhiều người",sub:"Môi trường y tế",val:"S"},
      {icon:"🖥️",text:"Văn phòng yên tĩnh với máy tính và dữ liệu",sub:"Kỹ thuật & Phân tích",val:"I"},
      {icon:"🏗️",text:"Công trường, nhà máy, ngoài trời — làm việc tay chân",sub:"Thực địa",val:"R"},
      {icon:"🎭",text:"Studio, agency, không gian sáng tạo tự do",sub:"Sáng tạo",val:"A"},
    ]
  },
  {
    q:"Điều gì khiến bạn tự hào nhất về bản thân?",
    hint:"Chọn điểm mạnh nổi trội nhất của bạn",
    opts:[
      {icon:"🧩",text:"Khả năng giải quyết vấn đề phức tạp, logic",sub:"Tư duy hệ thống",val:"I"},
      {icon:"💬",text:"Kỹ năng giao tiếp, nói chuyện thuyết phục",sub:"Giao tiếp",val:"E"},
      {icon:"🤲",text:"Sự đồng cảm, biết lắng nghe và chia sẻ",sub:"Cảm xúc & Hỗ trợ",val:"S"},
      {icon:"📐",text:"Sự tỉ mỉ, ngăn nắp và làm việc có kế hoạch",sub:"Tổ chức",val:"C"},
    ]
  },
  {
    q:"Nếu có thể làm bất cứ việc gì, bạn muốn tạo ra điều gì?",
    hint:"Câu cuối cùng — hãy chọn theo trái tim",
    opts:[
      {icon:"🚀",text:"Một sản phẩm công nghệ giúp hàng triệu người",sub:"Công nghệ & Đổi mới",val:"I"},
      {icon:"🏫",text:"Một trường học hay tổ chức giáo dục tốt hơn",sub:"Giáo dục & Xã hội",val:"S"},
      {icon:"🎬",text:"Một tác phẩm nghệ thuật, phim hay cuốn sách",sub:"Sáng tạo & Nghệ thuật",val:"A"},
      {icon:"🏢",text:"Một công ty kinh doanh thành công",sub:"Kinh doanh & Lãnh đạo",val:"E"},
    ]
  }
];

const hollandProfiles = {
  "I": {type:"Nhóm I — Investigative",name:"Nhà Phân tích & Nghiên cứu",emoji:"🔬",desc:"Bạn yêu thích khám phá, tư duy logic và giải quyết vấn đề phức tạp. Bạn làm việc tốt nhất khi có thời gian suy nghĩ sâu và làm việc độc lập.",careers:["Kỹ sư phần mềm","Data Scientist","Nhà khoa học","Bác sĩ","Nghiên cứu viên"],majors:[{n:"Công nghệ thông tin",m:"95%"},{n:"Khoa học máy tính",m:"92%"},{n:"Toán – Tin học",m:"88%"},{n:"Y khoa",m:"80%"}]},
  "S": {type:"Nhóm S — Social",name:"Người Kết nối & Hỗ trợ",emoji:"🤝",desc:"Bạn có khả năng đồng cảm và giao tiếp xuất sắc. Bạn tìm thấy ý nghĩa khi giúp đỡ người khác và xây dựng cộng đồng.",careers:["Giáo viên","Tâm lý học","Nhân sự","Bác sĩ","Công tác xã hội"],majors:[{n:"Sư phạm",m:"94%"},{n:"Tâm lý học",m:"91%"},{n:"Quản trị Nhân sự",m:"85%"},{n:"Y tế Cộng đồng",m:"82%"}]},
  "A": {type:"Nhóm A — Artistic",name:"Người Sáng tạo & Nghệ thuật",emoji:"🎨",desc:"Bạn có tư duy sáng tạo và khả năng biểu đạt độc đáo. Bạn nảy sinh ý tưởng tốt và muốn tạo ra những thứ có giá trị thẩm mỹ.",careers:["UX/UI Designer","Kiến trúc sư","Content Creator","Đạo diễn","Nhà thiết kế"],majors:[{n:"Thiết kế đồ họa",m:"96%"},{n:"Kiến trúc",m:"90%"},{n:"Truyền thông đa phương tiện",m:"87%"},{n:"Mỹ thuật công nghiệp",m:"84%"}]},
  "E": {type:"Nhóm E — Enterprising",name:"Nhà Lãnh đạo & Kinh doanh",emoji:"🚀",desc:"Bạn có tố chất lãnh đạo và khả năng thuyết phục tự nhiên. Bạn thích thách thức, cạnh tranh và đặt ra những mục tiêu lớn.",careers:["Quản lý kinh doanh","Sales Manager","Entrepreneur","Marketing Director","CEO"],majors:[{n:"Quản trị Kinh doanh",m:"95%"},{n:"Marketing",m:"91%"},{n:"Kinh tế",m:"87%"},{n:"Luật",m:"80%"}]},
  "C": {type:"Nhóm C — Conventional",name:"Người Tổ chức & Hệ thống",emoji:"📐",desc:"Bạn làm việc cẩn thận, có tổ chức và tỉ mỉ. Bạn phù hợp với môi trường có quy trình rõ ràng và cần sự chính xác cao.",careers:["Kế toán","Kiểm toán","Quản lý dự án","Phân tích tài chính","Hành chính"],majors:[{n:"Kế toán – Kiểm toán",m:"94%"},{n:"Tài chính – Ngân hàng",m:"90%"},{n:"Quản lý Dự án",m:"85%"},{n:"Hành chính – Văn phòng",m:"80%"}]},
  "R": {type:"Nhóm R — Realistic",name:"Người Thực hành & Kỹ thuật",emoji:"🔧",desc:"Bạn thích làm việc với máy móc, công cụ và các vật thể thực tế. Bạn tư duy thực tế và thích thấy kết quả hữu hình từ công việc.",careers:["Kỹ sư cơ khí","Kỹ sư điện","Kỹ thuật xây dựng","Công nghệ ô tô","Điện tử"],majors:[{n:"Kỹ thuật Cơ khí",m:"93%"},{n:"Kỹ thuật Điện – Điện tử",m:"90%"},{n:"Xây dựng & Kiến trúc",m:"85%"},{n:"Kỹ thuật Hóa học",m:"80%"}]},
};

// ===== INITIALIZATION FOR MULTI-PAGE =====
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('all-schools-grid')) renderSchools('all');
  if (document.getElementById('career-grid')) renderMajors('all');
  if (document.getElementById('salary-start')) renderSalary();
});

// ===== NAV =====
function showPage(id) {
  const map = {
    home: 'index.html',
    schools: 'truong-dai-hoc.html',
    quiz: 'dinh-huong.html',
    career: 'nhom-nganh.html',
    salary: 'xu-huong-luong.html'
  };
  if (map[id]) {
    window.location.href = map[id];
  }
}

// ===== HERO SEARCH =====
function doHeroSearch() {
  const v = document.getElementById('hero-search').value.trim();
  if (!v) return;
  showPage('schools');
}

// ===== SCHOOLS =====
function renderSchools(city) {
  const grid = document.getElementById('all-schools-grid');
  const list = city === 'all' ? schools : schools.filter(s => s.city === city);
  const schoolLinks = {
    'HUST': 'University/hust-detail.html',
    'FPT Uni': 'University/fpt-detail.html',
    'NEU': 'University/neu-detail.html',
    'VNUHCM': 'University/vnuhcm-detail.html',
    'HMU': 'University/hmu-detail.html',
    'FTU': 'University/ftu-detail.html',
    'TDTU': 'University/tdtu-detail.html',
    'UEH': 'University/ueh-detail.html',
    'HNUE': 'University/hnue-detail.html',
    'UET': 'University/uet-detail.html',
    'UEB': 'University/ueb-detail.html',
    'HUS': 'University/hus-detail.html',
    'USSH': 'University/ussh-detail.html',
    'ULIS': 'University/ulis-detail.html',
    'VNU-Law': 'University/vnu-ul.html',
    'UMP': 'University/ump.html',
    'IDN': 'University/idn-detail.html',
    'VINH': 'University/vinh-detail.html',
    'PITI': 'University/piti-detail.html',
    'HLU': 'University/nlu-detail.html',
    'UIT': 'University/uit-detail.html',
    'HCMUT': 'University/bk-hcm-detail.html',
    'HCMUS': 'University/khtn-hcm-detail.html',
    'USSH-HCM': 'University/ussh-hcm-detail.html',
    'UEL': 'University/uel-detail.html',
    'HCMUTE': 'University/hcm-ute-detail.html',
    'UMP-HCM': 'University/hcmc-detail.html',
    'DUT': 'University/bkdn-detail.html',
    'KMA': 'University/kma-detail.html',
    'NDA': 'University/hvqp-detail.html',
    'PPA': 'University/csnd-detail.html',
    'PPA-Police': 'University/dhcs-detail.html',
    'HPU': 'University/dhks-detail.html'
  };
  grid.innerHTML = list.map(s => {
    const link = schoolLinks[s.short];
    if (link) {
      return `<div class="school-card" onclick="window.location.href='${link}'" style="cursor:pointer;">
    <div class="school-logo"><img src="${s.logo}" alt="${s.name}"></div>
    <div class="school-info">
      <div class="school-name">${s.name}</div>
      <div class="school-short">${s.short} — ${s.region}</div>
      <div class="school-tags"><span class="score-badge score-high">${s.score} điểm</span><span class="score-badge score-low">${s.majors}</span></div>
    </div>
  </div>`;
    } else {
      return `<div class="school-card" style="opacity:0.6;">
    <div class="school-logo"><img src="${s.logo}" alt="${s.name}"></div>
    <div class="school-info">
      <div class="school-name">${s.name}</div>
      <div class="school-short">${s.short} — ${s.region}</div>
      <div class="school-tags"><span class="score-badge score-high">${s.score} điểm</span><span class="score-badge score-low">${s.majors}</span></div>
    </div>
  </div>`;
    }
  }).join('');
}

function filterSchool(city, btn) {
  document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderSchools(city);
}

// ===== QUIZ =====
let qIdx = 0, qAnswers = [];
function initQuiz() {
  qIdx = 0; qAnswers = [];
  renderQuestion();
  document.getElementById('quiz-main').style.display = 'block';
  document.getElementById('quiz-result-wrap').style.display = 'none';
}
function renderQuestion() {
  const q = quizQuestions[qIdx];
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-hint').textContent = q.hint;
  document.getElementById('q-label').textContent = `Câu ${qIdx+1} / ${quizQuestions.length}`;
  document.getElementById('q-pct').textContent = `${Math.round(qIdx/quizQuestions.length*100)}% hoàn thành`;
  document.getElementById('q-bar').style.width = (qIdx/quizQuestions.length*100)+'%';
  document.getElementById('q-back').style.visibility = qIdx > 0 ? 'visible' : 'hidden';
  document.getElementById('q-next').disabled = true;
  document.getElementById('q-next').textContent = qIdx < quizQuestions.length-1 ? 'Tiếp theo →' : 'Xem kết quả 🎉';
  const sel = qAnswers[qIdx];
  document.getElementById('q-options').innerHTML = q.opts.map((o,i) =>
    `<button class="quiz-option ${sel===i?'selected':''}" onclick="selectOption(${i},this)">
      <div class="quiz-option-icon">${o.icon}</div>
      <div><div class="quiz-option-text">${o.text}</div><div class="quiz-option-sub">${o.sub}</div></div>
    </button>`
  ).join('');
  if (sel !== undefined) document.getElementById('q-next').disabled = false;
}
function selectOption(i, el) {
  document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  qAnswers[qIdx] = i;
  document.getElementById('q-next').disabled = false;
}
function quizNext() {
  if (qAnswers[qIdx] === undefined) return;
  if (qIdx < quizQuestions.length-1) { qIdx++; renderQuestion(); }
  else showQuizResult();
}
function quizBack() { if (qIdx > 0) { qIdx--; renderQuestion(); } }
function showQuizResult() {
  const tally = {};
  qAnswers.forEach((ai, qi) => {
    const v = quizQuestions[qi].opts[ai].val;
    tally[v] = (tally[v]||0)+1;
  });
  const top = Object.entries(tally).sort((a,b)=>b[1]-a[1])[0][0];
  const p = hollandProfiles[top] || hollandProfiles['I'];
  document.getElementById('quiz-main').style.display = 'none';
  document.getElementById('q-bar').style.width = '100%';
  document.getElementById('quiz-result-wrap').innerHTML = `
    <div class="quiz-result">
      <div class="result-icon">${p.emoji}</div>
      <div class="result-type">${p.type}</div>
      <div class="result-name">${p.name}</div>
      <div class="result-desc">${p.desc}</div>
      <div class="result-careers">${p.careers.map(c=>`<span class="career-tag">${c}</span>`).join('')}</div>
      <div class="result-majors">
        <h4>Ngành học phù hợp với bạn</h4>
        ${p.majors.map(m=>`<div class="major-row"><div class="major-dot"></div><div class="major-name">${m.n}</div><div class="major-match">${m.m} phù hợp</div></div>`).join('')}
      </div>
      <button class="btn-retake" onclick="initQuiz()">Làm lại</button>
      <button class="btn-explore" onclick="showPage('career')">Khám phá nghề nghiệp →</button>
    </div>`;
  document.getElementById('quiz-result-wrap').style.display = 'block';
}

// ===== MAJOR (NHÓM NGÀNH) =====
function renderMajors(cat) {
  const list = cat === 'all' ? majors : majors.filter(m => m.cat === cat);
  const trendLabel = {up:'↑ Tăng mạnh', stable:'→ Ổn định', down:'↓ Cần chú ý'};
  const trendClass = {up:'trend-up', stable:'trend-stable', down:'trend-down'};
  const iconBg = {tech:'var(--green-100)',business:'var(--blue-100)',health:'#fce7f3',creative:'var(--purple-100)',edu:'var(--amber-100)'};
  document.getElementById('career-grid').innerHTML = list.map(m => {
    const majorSlug = m.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-').replace(/:/g, '');
    return `
    <div class="career-card" onclick="window.location.href='career-detail.html?major=${majorSlug}'" style="cursor:pointer;">
      <div class="career-header">
        <div class="career-icon-wrap" style="background:${iconBg[m.cat]||'var(--gray-100)'}">${m.icon}</div>
        <span class="trend-badge ${trendClass[m.trend]}">${trendLabel[m.trend]}</span>
      </div>
      <div class="career-name">${m.name}</div>
      <div class="career-industry">${m.shortName}</div>
      <div class="career-salary"><span class="salary-label">Điểm chuẩn TB</span><span class="salary-value">${m.avgScore}</span></div>
      <div class="career-skills">${m.careers.slice(0,4).map(c=>`<span class="skill-tag">${c}</span>`).join('')}</div>
    </div>`;
  }).join('');
}

function showCareerDetail(careerIndex) {
  const m = majors[careerIndex];
  const majorSlug = m.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-').replace(/:/g, '');
  window.location.href = `career-detail.html?major=${majorSlug}`;
}

function filterCareer(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMajors(cat);
}

// ===== SALARY =====
function renderSalary() {
  const maxStart = Math.max(...salaryData.map(d=>d.start));
  const maxSenior = Math.max(...salaryData.map(d=>d.senior));
  document.getElementById('salary-start').innerHTML = salaryData.map(d => `
    <div class="salary-bar-item">
      <div class="salary-bar-header"><span class="salary-bar-name">${d.name}</span><span class="salary-bar-value">${d.start} tr</span></div>
      <div class="salary-track"><div class="salary-fill" style="width:${d.start/maxStart*100}%"></div></div>
    </div>`).join('');
  document.getElementById('salary-senior').innerHTML = salaryData.map(d => `
    <div class="salary-bar-item">
      <div class="salary-bar-header"><span class="salary-bar-name">${d.name}</span><span class="salary-bar-value">${d.senior} tr</span></div>
      <div class="salary-track"><div class="salary-fill" style="width:${d.senior/maxSenior*100}%"></div></div>
    </div>`).join('');
}

// ===== INIT =====
renderSchools('all');
initQuiz();
