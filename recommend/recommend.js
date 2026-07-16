// 1. DỮ LIỆU CẤU HÌNH CÁC PHÒNG LAB (10 phòng LAB hiện tại)
const quickRoutes = [
  {
    id: "ai",
    name: "CNTT: Trí tuệ nhân tạo & Khoa học dữ liệu (AI Engineer)",
    validSubjects: ["Toán", "Vật lý", "Tiếng Anh", "Tin học"],
    hollandTypes: ["I"], // Investigative
    labUrl: "LAB/huong-nghiep-ai-lab.html",
    icon: "bot",
    description: "Huấn luyện mô hình học máy, phân tích dữ liệu xác suất và phát triển mạng neural để giải quyết các bài toán thông minh."
  },
  {
    id: "cs",
    name: "CNTT: Khoa học máy tính (Lập trình viên)",
    validSubjects: ["Toán", "Vật lý", "Tiếng Anh", "Tin học"],
    hollandTypes: ["I", "R"], // Investigative, Realistic
    labUrl: "LAB/huong-nghiep-khoa-hoc-may-tinh-lab.html",
    icon: "monitor",
    description: "Thiết kế giải thuật, debug mã nguồn logic, tối ưu hóa thuật toán và xây dựng giao diện ứng dụng di động chuẩn UX/UI."
  },
  {
    id: "y_khoa",
    name: "Y học & Sức khỏe (Bác sĩ Lâm sàng)",
    validSubjects: ["Toán", "Hóa học", "Sinh học"],
    hollandTypes: ["S", "I"], // Social, Investigative
    labUrl: "LAB/huong-nghiep-y-te-lab.html",
    icon: "stethoscope",
    description: "Chẩn đoán bệnh lý thông qua triệu chứng sinh hiệu, thống kê dịch tễ học và rèn luyện kỹ năng giao tiếp y khoa thấu cảm."
  },
  {
    id: "kinh_te",
    name: "Kinh tế & Tài chính (Chuyên viên Đầu tư)",
    validSubjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Địa lý"],
    hollandTypes: ["E", "C"], // Enterprising, Conventional
    labUrl: "LAB/huong-nghiep-kinh-te-lab.html",
    icon: "bar-chart-3",
    description: "Phân tích quy luật cung cầu thị trường, tính toán tỷ suất lãi suất kép đầu tư và dự báo rủi ro ngoại tệ."
  },
  {
    id: "giao_duc",
    name: "Giáo dục & Sư phạm (Giáo viên)",
    validSubjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Lịch sử", "Địa lý", "Vật lý", "Hóa học", "Sinh học"],
    hollandTypes: ["S"], // Social
    labUrl: "LAB/huong-nghiep-giao-duc-lab.html",
    icon: "school",
    description: "Thiết kế bài giảng tương tác sáng tạo, phân tích phổ điểm học tập và tổ chức phương pháp thảo luận nhóm."
  },
  {
    id: "phap_luat",
    name: "Pháp luật (Luật sư Tranh tụng)",
    validSubjects: ["Ngữ văn", "Lịch sử", "Tiếng Anh"],
    hollandTypes: ["E", "S"], // Enterprising, Social
    labUrl: "LAB/huong-nghiep-phap-luat-lab.html",
    icon: "scale",
    description: "Lập luận bào chữa bảo vệ thân chủ, phân tích bằng chứng pháp lý và soạn thảo điều khoản hợp đồng kinh tế."
  },
  {
    id: "co_khi",
    name: "Kỹ thuật Cơ khí (Mechanical Engineer)",
    validSubjects: ["Toán", "Vật lý", "Hóa học"],
    hollandTypes: ["R"], // Realistic
    labUrl: "LAB/huong-nghiep-co-khi-lab.html",
    icon: "settings",
    description: "Phân tích biểu đồ lực cơ học, lựa chọn tính chất vật liệu chịu tải và mô phỏng chi tiết lắp ráp chuyển động cơ học."
  },
  {
    id: "ky_thuat_dien",
    name: "Kỹ thuật Điện & Tự động hóa",
    validSubjects: ["Toán", "Vật lý", "Tin học"],
    hollandTypes: ["R", "I"], // Realistic, Investigative
    labUrl: "LAB/huong-nghiep-ky-thuat-lab.html",
    icon: "zap",
    description: "Vẽ sơ đồ mạch điện, tính toán công suất tiêu thụ định luật Ohm và tối ưu mạng lưới điện an toàn."
  },
  {
    id: "nong_nghiep",
    name: "Nông nghiệp Công nghệ cao",
    validSubjects: ["Sinh học", "Hóa học", "Địa lý"],
    hollandTypes: ["R", "S"], // Realistic, Social (helping community/nature)
    labUrl: "LAB/huong-nghiep-nong-nghiep-lab.html",
    icon: "wheat",
    description: "Tính toán tỷ lệ phân bón hóa học NPK, thiết kế hệ thống tưới tự động nhà màng và dự toán năng suất mùa vụ."
  }
];

// 2. BỘ 15 CÂU HỎI TRẮC NGHIỆM HOLLAND RIASEC CHI TIẾT
const quizQuestions = [
  {
    q: "Câu 1: Bạn thích dành thời gian rảnh để làm việc gì nhất?",
    hint: "Hãy chọn hoạt động gần nhất với sở thích tự nhiên của bạn",
    opts: [
      { icon: "palette", text: "Vẽ tranh, thiết kế đồ họa, viết truyện ngắn hoặc chơi nhạc cụ", val: "A" },
      { icon: "monitor", text: "Lập trình máy tính, giải toán đố logic hoặc mày mò phần mềm", val: "I" },
      { icon: "wrench", text: "Sửa chữa đồ điện gia dụng, tháo lắp xe cộ hoặc làm đồ thủ công gỗ", val: "R" },
      { icon: "users", text: "Trò chuyện, tâm sự lắng nghe và giúp đỡ bạn bè vượt qua khó khăn", val: "S" },
      { icon: "trending-up", text: "Lên ý tưởng kinh doanh, bán hàng online hoặc thuyết phục người khác mua đồ", val: "E" },
      { icon: "calendar", text: "Sắp xếp phòng ốc ngăn nắp, lập kế hoạch chi tiêu tuần hoặc lưu sổ sách", val: "C" }
    ]
  },
  {
    q: "Câu 2: Khi tiếp cận một thiết bị thông minh mới (robot, máy ảnh xịn), bạn sẽ làm gì đầu tiên?",
    hint: "Thói quen phản ứng tự nhiên của bạn là gì?",
    opts: [
      { icon: "microscope", text: "Đọc tài liệu phân tích sâu về cấu tạo và nguyên lý hoạt động của nó", val: "I" },
      { icon: "book-open", text: "Đọc kỹ sách hướng dẫn sử dụng và xếp đặt nó đúng nơi quy chuẩn", val: "C" },
      { icon: "hammer", text: "Tháo mở thử vỏ ngoài xem kết cấu cơ khí và lắp ráp thực tế", val: "R" },
      { icon: "camera", text: "Sử dụng nó để quay phim, chụp ảnh sáng tạo hoặc làm nội dung nghệ thuật", val: "A" },
      { icon: "rocket", text: "Tìm cách giới thiệu, quảng cáo tính năng hay để thương mại hóa sản phẩm", val: "E" },
      { icon: "presentation", text: "Tìm hiểu để hướng dẫn, chỉ dạy những người xung quanh cách dùng dễ dàng", val: "S" }
    ]
  },
  {
    q: "Câu 3: Môn học nào ở trường THPT khiến bạn cảm thấy hào hứng và tiếp thu tốt nhất?",
    hint: "Chọn môn học bạn thấy thích thú nhất khi học",
    opts: [
      { icon: "palette", text: "Ngữ văn, Mỹ thuật, Lịch sử nghệ thuật, Âm nhạc", val: "A" },
      { icon: "binary", text: "Toán học, Vật lý, Tin học, Hóa học nghiên cứu", val: "I" },
      { icon: "zap", text: "Công nghệ, Thể dục học, Giáo dục quốc phòng thực địa", val: "R" },
      { icon: "globe", text: "Giáo dục công dân, Ngoại ngữ, Hoạt động đoàn thể xã hội", val: "S" },
      { icon: "message-square", text: "Địa lý kinh tế, Hùng biện, các bài tập thảo luận thuyết phục", val: "E" },
      { icon: "file-text", text: "Tin học văn phòng, Soạn thảo văn bản, Thực hành biểu mẫu kế toán", val: "C" }
    ]
  },
  {
    q: "Câu 4: Nếu được giao làm đại sứ tình nguyện mùa hè xanh, bạn muốn chọn công việc nào?",
    hint: "Hoạt động đóng góp cộng đồng phù hợp với bạn",
    opts: [
      { icon: "heart", text: "Đứng lớp giảng dạy văn hóa, chăm sóc sức khỏe hoặc tư vấn tâm lý học đường", val: "S" },
      { icon: "palette", text: "Thiết kế băng rôn cổ động, vẽ tranh tường hoặc làm truyền thông hình ảnh", val: "A" },
      { icon: "bar-chart-3", text: "Thống kê ngân sách quỹ, quản lý phân phối đồ tiếp tế, lập sổ sách thu chi", val: "C" },
      { icon: "megaphone", text: "Làm trưởng đoàn điều phối nhân sự, thương thuyết xin tài trợ từ doanh nghiệp", val: "E" },
      { icon: "hammer", text: "Trực tiếp sửa sang bàn ghế hỏng, sơn quét lại phòng học hoặc làm vườn", val: "R" },
      { icon: "search", text: "Lập bản đồ số hóa nhu cầu hỗ trợ, phân tích dữ liệu phân phối cứu trợ", val: "I" }
    ]
  },
  {
    q: "Câu 5: Khả năng nào của bản thân khiến bạn cảm thấy tự hào và tự tin nhất?",
    hint: "Điểm mạnh nổi bật nhất của riêng bạn",
    opts: [
      { icon: "brain", text: "Tư duy phản biện logic, khả năng tìm kiếm bản chất nguồn gốc của vấn đề", val: "I" },
      { icon: "heart", text: "Kỹ năng giao tiếp thấu hiểu, lắng nghe chia sẻ và hòa giải mâu thuẫn", val: "S" },
      { icon: "lightbulb", text: "Trí tưởng tượng phong phú, luôn nảy ra các ý tưởng thiết kế độc lạ", val: "A" },
      { icon: "megaphone", text: "Khả năng thương lượng đàm phán, nói trước đám đông thuyết phục người khác", val: "E" },
      { icon: "clipboard-list", text: "Làm việc ngăn nắp tỉ mỉ, tuân thủ đúng giờ và sắp xếp biểu mẫu khoa học", val: "C" },
      { icon: "wrench", text: "Khéo léo thực hành lắp ráp đồ đạc, chế tạo sửa chữa cơ học nhanh chóng", val: "R" }
    ]
  },
  {
    q: "Câu 6: Môi trường làm việc lý tưởng trong tương lai sẽ khiến bạn làm việc năng suất nhất?",
    hint: "Tưởng tượng nơi làm việc đem lại cho bạn nhiều niềm vui nhất",
    opts: [
      { icon: "palette", text: "Studio thiết kế, agency sáng tạo tự do, không gò bó thời gian", val: "A" },
      { icon: "microscope", text: "Phòng thí nghiệm yên tính hoặc văn phòng viết mã độc lập", val: "I" },
      { icon: "building", text: "Công trường kỹ thuật, xưởng cơ khí chế tạo, hoặc làm ngoài thực địa", val: "R" },
      { icon: "school", text: "Trường học năng động, bệnh viện chăm sóc, hoặc tổ chức phi lợi nhuận", val: "S" },
      { icon: "building-2", text: "Văn phòng tập đoàn lớn, phòng họp đàm phán, startup cạnh tranh sôi nổi", val: "E" },
      { icon: "landmark", text: "Ngân hàng uy tín, cơ quan kiểm toán hành chính nhà nước có nguyên tắc", val: "C" }
    ]
  },
  {
    q: "Câu 7: Khi làm việc nhóm và phát sinh bất đồng ý kiến gay gắt, bạn sẽ giải quyết ra sao?",
    hint: "Lựa chọn phản ánh tư duy ứng xử của bạn",
    opts: [
      { icon: "users", text: "Tổ chức cuộc họp để chia sẻ cảm xúc, xoa dịu không khí và tìm tiếng nói chung", val: "S" },
      { icon: "trending-up", text: "Thu thập các số liệu thực tế để phân tích khách quan xem phương án nào có lý nhất", val: "I" },
      { icon: "palette", text: "Đề xuất một giải pháp sáng tạo mới trung hòa và làm hài lòng các bên về mặt thẩm mỹ", val: "A" },
      { icon: "zap", text: "Thuyết phục quyết liệt để mọi người đồng ý với quyết định định hướng của bạn", val: "E" },
      { icon: "scale", text: "Căn cứ vào quy chế hoạt động và biên bản ban đầu của nhóm để phân xử", val: "C" },
      { icon: "wrench", text: "Bắt tay vào làm thử nghiệm mô hình thực tế cả hai cách xem cái nào chạy được", val: "R" }
    ]
  },
  {
    q: "Câu 8: Bạn quan tâm và click vào xem những video hay sách báo có chủ đề nào nhất?",
    hint: "Sở thích tiếp cận thông tin tự nhiên của bạn",
    opts: [
      { icon: "rocket", text: "Bí mật vũ trụ vật lý, lập trình trí tuệ nhân tạo, giải mã khoa học dữ liệu", val: "I" },
      { icon: "trophy", text: "Tiểu sử các doanh nhân thành công, nghệ thuật lãnh đạo, đầu tư chứng khoán", val: "E" },
      { icon: "palette", text: "Thiết kế kiến trúc độc lạ, review nghệ thuật triển lãm, làm đồ thủ công mỹ thuật", val: "A" },
      { icon: "settings", text: "Chế tạo máy móc tự chế (DIY), sửa chữa điện tử, cải tiến máy nông nghiệp", val: "R" },
      { icon: "sprout", text: "Phát triển tâm lý bản thân, kỹ năng sư phạm truyền cảm hứng, câu chuyện xã hội", val: "S" },
      { icon: "bar-chart-3", text: "Mẹo quản lý thời gian biểu, phân tích dòng tiền cá nhân, mẹo Excel kế toán hành chính", val: "C" }
    ]
  },
  {
    q: "Câu 9: Khi đi du lịch tự túc cùng bạn bè, bạn thường thích nhận nhiệm vụ nào?",
    hint: "Vai trò bạn làm tốt nhất và thấy thoải mái nhất",
    opts: [
      { icon: "file-text", text: "Lập bảng kế hoạch chi tiết, đặt lịch xe/khách sạn và cân đối tiền chi tiêu chung", val: "C" },
      { icon: "tent", text: "Chịu trách nhiệm lái xe, dựng lều trại, sửa chữa đồ đạc hỏng hóc dọc đường", val: "R" },
      { icon: "camera", text: "Chọn góc chụp ảnh đẹp, quay video ngắn nghệ thuật và chỉnh sửa ảnh cho nhóm", val: "A" },
      { icon: "heart", text: "Quan tâm kết nối mọi người, giải hòa xích mích và chăm lo ăn uống cho nhóm", val: "S" },
      { icon: "dollar-sign", text: "Đại diện đàm phán mặc cả giá dịch vụ, tìm kiếm các ưu đãi ăn uống rẻ chất lượng", val: "E" },
      { icon: "map", text: "Nghiên cứu kỹ lịch sử, nguồn gốc văn hóa của các địa điểm để thuyết minh cho nhóm", val: "I" }
    ]
  },
  {
    q: "Câu 10: Nếu có cơ hội tự xây dựng một ứng dụng di động khởi nghiệp, bạn sẽ chọn làm gì?",
    hint: "Công việc bạn hứng thú đóng góp nhất trong dự án",
    opts: [
      { icon: "palette", text: "Thiết kế giao diện UI/UX, tạo logo và định hình màu sắc thương hiệu", val: "A" },
      { icon: "monitor", text: "Lập trình giải thuật cốt lõi phía máy chủ, thiết kế cơ sở dữ liệu hệ thống", val: "I" },
      { icon: "trending-up", text: "Lập kế hoạch marketing, kêu gọi nhà đầu tư rót vốn và giới thiệu ứng dụng", val: "E" },
      { icon: "search", text: "Lên danh sách tính năng kiểm thử lỗi (QA), quản lý tiến độ chạy thử hệ thống", val: "C" },
      { icon: "message-square", text: "Tìm hiểu trải nghiệm khách hàng, chăm sóc hỗ trợ người dùng giải quyết khó khăn", val: "S" },
      { icon: "monitor", text: "Cài đặt phần cứng máy chủ vật lý, cấu hình mạng kết nối hệ thống", val: "R" }
    ]
  },
  {
    q: "Câu 11: Một dự án nghiên cứu khoa học lý tưởng theo bạn cần đạt được điều gì quan trọng nhất?",
    hint: "Giá trị cốt lõi bạn hướng tới là gì?",
    opts: [
      { icon: "lightbulb", text: "Chứng minh được giả thuyết khoa học mới hoặc phát hiện ra quy luật tự nhiên", val: "I" },
      { icon: "wrench", text: "Chế tạo ra máy móc cơ khí cải tiến tăng năng suất thực tế rõ rệt", val: "R" },
      { icon: "heart", text: "Giúp đỡ cải thiện đời sống, giáo dục của trẻ em nghèo vùng sâu vùng xa", val: "S" },
      { icon: "dollar-sign", text: "Tạo ra bản quyền công nghệ có thể bán được hàng triệu USD cho các tập đoàn", val: "E" },
      { icon: "clipboard-list", text: "Xây dựng được quy trình tài liệu chuẩn hóa chặt chẽ áp dụng cho toàn ngành", val: "C" },
      { icon: "image", text: "Tạo ra một triển lãm khoa học thị giác đầy cảm hứng sáng tạo nghệ thuật", val: "A" }
    ]
  },
  {
    q: "Câu 12: Khi chuẩn bị phải thuyết trình báo cáo trước toàn trường, bạn chuẩn bị điều gì kỹ nhất?",
    hint: "Cách bạn kiểm soát sự thành công của buổi nói chuyện",
    opts: [
      { icon: "crown", text: "Luyện tập phong thái tự tin, cách đàm thoại cuốn hút để thuyết phục người nghe", val: "E" },
      { icon: "bar-chart-3", text: "Soạn lập hệ thống slide chặt chẽ logic, số liệu thống kê chuẩn xác và khoa học", val: "I" },
      { icon: "palette", text: "Thiết kế hình ảnh slide cực kỳ nghệ thuật bắt mắt, các chuyển động video ấn tượng", val: "A" },
      { icon: "settings", text: "Kiểm tra kỹ các thiết bị kỹ thuật: micro, loa kéo, máy chiếu xem vận hành ổn định không", val: "R" },
      { icon: "heart", text: "Lồng ghép những câu chuyện nhân văn chân thực để chạm tới cảm xúc học sinh", val: "S" },
      { icon: "clipboard-list", text: "In sẵn tài liệu tóm tắt phát cho ban giám hiệu đúng quy trình thủ tục ngăn nắp", val: "C" }
    ]
  },
  {
    q: "Câu 13: Bạn muốn nhận được món quà nào dưới đây nhất nhân dịp sinh nhật?",
    hint: "Món quà khiến bạn thực sự vui sướng",
    opts: [
      { icon: "wrench", text: "Một bộ tua vít đa năng hoặc bộ trồng cây thủy sinh công nghệ cao", val: "R" },
      { icon: "book", text: "Một cuốn sách giải thuật lập trình nâng cao hoặc khóa học online về AI", val: "I" },
      { icon: "palette", text: "Một chiếc máy ảnh lấy liền hoặc bộ bút vẽ mỹ thuật chuyên nghiệp", val: "A" },
      { icon: "ticket", text: "Vé tham gia sự kiện trại hè giao lưu kết nối kỹ năng lãnh đạo xã hội", val: "S" },
      { icon: "briefcase", text: "Cuốn sách chia sẻ bí quyết làm giàu từ tay trắng của các tỷ phú nổi tiếng", val: "E" },
      { icon: "calendar", text: "Một cuốn sổ tay lập kế hoạch da thật đi kèm lịch để bàn quản lý thời gian", val: "C" }
    ]
  },
  {
    q: "Câu 14: Phương châm sống nào dưới đây phản ánh gần nhất với tính cách thực tế của bạn?",
    hint: "Triết lý sống tự nhiên của bạn",
    opts: [
      { icon: "hammer", text: "Nói ít làm nhiều, hành động thực tế khéo léo tạo ra giá trị hữu hình", val: "R" },
      { icon: "search", text: "Luôn hoài nghi, đặt câu hỏi phản biện để tìm ra sự thật khách quan", val: "I" },
      { icon: "palette", text: "Cuộc sống thiếu đi sự sáng tạo nghệ thuật sẽ vô cùng tẻ nhạt và đơn điệu", val: "A" },
      { icon: "users", text: "Hạnh phúc lớn nhất là được sẻ chia, giúp đỡ đồng bào sống tốt đẹp hơn", val: "S" },
      { icon: "rocket", text: "Dám nghĩ dám làm, chấp nhận rủi ro để vươn lên dẫn đầu và chiến thắng", val: "E" },
      { icon: "ruler", text: "Mọi việc đều phải ngăn nắp, có quy tắc rõ ràng, đúng giờ và chính xác", val: "C" }
    ]
  },
  {
    q: "Câu 15: Dự án trong mơ mà bạn tự đứng ra thành lập sẽ thuộc lĩnh vực nào?",
    hint: "Chọn lĩnh vực bạn khao khát cống hiến nhất",
    opts: [
      { icon: "settings", text: "Xưởng chế tạo xe tự chế thông minh hoặc hệ thống cơ khí tiết kiệm năng lượng", val: "R" },
      { icon: "microscope", text: "Trung tâm nghiên cứu phân tích dữ liệu lớn và thuật toán học máy trí tuệ nhân tạo", val: "I" },
      { icon: "palette", text: "Studio thiết kế đồ họa game, phim hoạt hình 3D hoặc thời trang nghệ thuật", val: "A" },
      { icon: "school", text: "Mạng lưới lớp học miễn phí kết nối giáo dục và nâng đỡ trẻ em nghèo", val: "S" },
      { icon: "building-2", text: "Doanh nghiệp thương mại, sàn giao dịch sản phẩm dịch vụ kết nối toàn cầu", val: "E" },
      { icon: "folder-open", text: "Văn phòng cung cấp phần mềm kế toán hành chính doanh nghiệp chuẩn mực pháp lý", val: "C" }
    ]
  }
];

// 3. THUẬT TOÁN SO KHỚP CHUYÊN SÂU (Set Intersection + Holland Matching + Academic Score weights)
function getSuggestions(selectedSubjects, userGrades, hollandTally, gradeLevel) {
  // Sắp xếp nhóm Holland theo điểm số từ cao xuống thấp để lấy top 2 nhóm tính cách
  const sortedHolland = Object.entries(hollandTally).sort((a, b) => b[1] - a[1]);
  const topHollandType = sortedHolland[0] ? sortedHolland[0][0] : null;
  const secondHollandType = sortedHolland[1] ? sortedHolland[1][0] : null;

  let suggestions = [];

  quickRoutes.forEach(route => {
    let score = 0;
    let maxPossibleScore = 14; // 5 (Tính cách) + 6 (Môn học) + 3 (Điểm học tập)

    // 3.1. Tính điểm tính cách Holland (Tối đa 5 điểm)
    if (topHollandType && route.hollandTypes.includes(topHollandType)) {
      score += 5; // Trùng nhóm tính cách số 1
    } else if (secondHollandType && route.hollandTypes.includes(secondHollandType)) {
      score += 3; // Trùng nhóm tính cách số 2
    }

    // 3.2. Tính điểm trùng khớp môn học (Tối đa 6 điểm, tối đa 3 môn học sinh chọn)
    const matchedSubjects = route.validSubjects.filter(sub => selectedSubjects.includes(sub));
    // Mỗi môn học trùng khớp cộng 2 điểm
    score += matchedSubjects.length * 2;

    // 3.3. Tính điểm học thuật dựa trên điểm số thực tế của môn trùng khớp (Tối đa 3 điểm)
    if (matchedSubjects.length > 0) {
      let totalGrade = 0;
      let gradeCount = 0;

      matchedSubjects.forEach(sub => {
        const gradeObj = userGrades[sub];
        if (gradeObj) {
          if (gradeLevel === "10" || gradeLevel === "11") {
            // Lấy trung bình cộng 2 năm học của học bạ
            const y1 = parseFloat(gradeObj.year1) || 0;
            const y2 = parseFloat(gradeObj.year2) || 0;
            if (y1 > 0 && y2 > 0) {
              totalGrade += (y1 + y2) / 2;
              gradeCount++;
            } else if (y1 > 0 || y2 > 0) {
              totalGrade += (y1 || y2);
              gradeCount++;
            }
          } else {
            // Lớp 12+ lấy điểm thi tốt nghiệp
            const exam = parseFloat(gradeObj.exam) || 0;
            if (exam > 0) {
              totalGrade += exam;
              gradeCount++;
            }
          }
        }
      });

      const avgGrade = gradeCount > 0 ? (totalGrade / gradeCount) : 0;

      // Quy đổi điểm học thuật
      if (avgGrade >= 8.0) {
        score += 3; // Năng lực xuất sắc
      } else if (avgGrade >= 6.5) {
        score += 1.5; // Năng lực khá
      }
    }

    // Tính % độ phù hợp thực tế
    const matchPercentage = Math.round((score / maxPossibleScore) * 100);

    if (score > 0) {
      suggestions.push({
        ...route,
        totalScore: score,
        matchPercentage: matchPercentage,
        matchedSubjects: matchedSubjects,
        matchedHollandTypes: route.hollandTypes.filter(t => [topHollandType, secondHollandType].includes(t))
      });
    }
  });

  // Sắp xếp các gợi ý theo % phù hợp từ cao xuống thấp
  return suggestions.sort((a, b) => b.matchPercentage - a.matchPercentage);
}
