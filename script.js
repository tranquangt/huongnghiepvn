// ===== DATA =====
const schools = [
  {code:"ANH", name:"Học Viện An Ninh Nhân Dân", short:"ANH", city:"other", abbr:"ANH", color:"#2c3e50", logo:"logos/anh.png", score:26.27, min:18.78, majors:"Ngành Công nghệ thông tin (Thí sinh Nam), Ngành Nghiệp vụ an ninh (Thí sinh Nam, vùng 1), Ngành Nghiệp vụ an ninh (Thí sinh Nam, vùng 2)", region:"Tỉnh khác"},
  {code:"ANS", name:"Trường Đại Học An Ninh Nhân Dân", short:"PPA", city:"hn", abbr:"PPA", color:"#006400", logo:"logos/ans.png", score:26.05, min:17.66, majors:"Nghiệp vụ An ninh (Thí sinh Nam, vùng 4), Nghiệp vụ An ninh (Thí sinh Nam, vùng 5), Nghiệp vụ An ninh (Thí sinh Nam, vùng 6)", region:"Hà Nội"},
  {code:"BKA", name:"Đại Học Bách Khoa Hà Nội", short:"HUST", city:"hn", abbr:"BK", color:"#c0392b", logo:"logos/bka.png", score:29.39, min:19.0, majors:"Kỹ thuật Thực phẩm (CT tiên tiến), Kỹ thuật Thực phẩm (CT tiên tiến), Kỹ thuật sinh học (CT tiên tiến)", region:"Hà Nội"},
  {code:"BMU", name:"Trường Đại học Y Dược Buôn Ma Thuột", short:"BMU", city:"other", abbr:"BMU", color:"#8e44ad", logo:"logos/bmu.jpg", score:22.0, min:16.0, majors:"Y khoa, Dược học, Điều dưỡng", region:"Tỉnh khác"},
  {code:"BPH", name:"Học Viện Biên Phòng", short:"BPH", city:"other", abbr:"BPH", color:"#27ae60", logo:"logos/bph.jpg", score:29.91, min:22.51, majors:"Luật (Thí sinh miền Bắc), Luật (Thí sinh miền Bắc), Luật (Thí sinh miền Bắc)", region:"Tỉnh khác"},
  {code:"BVH", name:"Học Viện Công Nghệ Bưu Chính Viễn Thông", short:"BVH", city:"other", abbr:"BVH", color:"#d35400", logo:"logos/bvh.jpg", score:26.21, min:21.0, majors:"Báo chí, Truyền thông đa phương tiện, Truyền thông đa phương tiện - Chương trình đào tạo chất lượng cao", region:"Tỉnh khác"},
  {code:"BVS", name:"Học Viện Công Nghệ Bưu Chính Viễn Thông (Cơ sở TP.HCM)", short:"BVS", city:"hcm", abbr:"BVS", color:"#c0392b", logo:"logos/bvs.jpg", score:24.0, min:16.25, majors:"Truyền thông đa phương tiện, Công nghệ đa phương tiện, Quản trị kinh doanh", region:"TP.HCM"},
  {code:"BVU", name:"Trường Đại Học Bà Rịa – Vũng Tàu", short:"BVU", city:"other", abbr:"BVU", color:"#16a085", logo:"logos/bvu.png", score:19.0, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Anh (Tiếng Anh biên - phiên dịch - Chương trình chuẩn, ngoại ngữ tiếng Anh/Nhật/Hàn/Trung), Ngôn ngữ Anh (Tiếng Anh du lịch - thương mại - Chương trình chuẩn, ngoại ngữ tiếng Anh/Nhật/Hàn/Trung)", region:"Tỉnh khác"},
  {code:"CCM", name:"Trường Đại học Công nghiệp và Thương mại Hà Nội", short:"CCM", city:"hn", abbr:"CCM", color:"#7f8c8d", logo:"logos/ccm.png", score:19.0, min:16.0, majors:"Thiết kế đồ họa, Thiết kế thời trang, Quản trị kinh doanh", region:"Hà Nội"},
  {code:"CEA", name:"Trường Đại học Nghệ An", short:"CEA", city:"other", abbr:"CEA", color:"#2c3e50", logo:"logos/cea.jpg", score:25.0, min:16.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung, Kinh tế", region:"Nghệ An"},
  {code:"CMC", name:"Trường Đại Học CMC", short:"CMC", city:"other", abbr:"CMC", color:"#34495e", logo:"logos/cmc.png", score:28.66, min:24.0, majors:"Trí tuệ Nhân tạo, Quản trị Kinh doanh, Ngôn ngữ Trung Quốc", region:"Tỉnh khác"},
  {code:"CSH", name:"Học Viện Cảnh Sát Nhân Dân", short:"CSH", city:"other", abbr:"CSH", color:"#1abc9c", logo:"logos/csh.png", score:26.01, min:18.67, majors:"Nhóm ngành nghiệp vụ Cảnh sát (Thí sinh Nam, vùng 1), Nhóm ngành nghiệp vụ Cảnh sát (Thí sinh Nam, vùng 2), Nhóm ngành nghiệp vụ Cảnh sát (Thí sinh Nam, vùng 3)", region:"Tỉnh khác"},
  {code:"CSS", name:"Trường Đại Học Cảnh Sát Nhân Dân", short:"PPA-Police", city:"hn", abbr:"CS", color:"#000080", logo:"logos/css.png", score:26.28, min:15.95, majors:"Nhóm ngành nghiệp vụ Cảnh sát (Thí sinh Nam, vùng 4), Nhóm ngành nghiệp vụ Cảnh sát (Thí sinh Nam, vùng 5), Nhóm ngành nghiệp vụ Cảnh sát (Thí sinh Nam, vùng 6)", region:"Hà Nội"},
  {code:"DAD", name:"Trường Đại Học Đông Á", short:"DAD", city:"other", abbr:"DAD", color:"#9b59b6", logo:"logos/dad.png", score:20.5, min:15.0, majors:"Đồ họa, Thiết kế thời trang, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"DBD", name:"Trường Đại Học Bình Dương", short:"DBD", city:"other", abbr:"DBD", color:"#2ecc71", logo:"logos/dbd.jpg", score:19.0, min:15.0, majors:"Ngôn ngữ Anh, Xã hội học, Hàn Quốc học", region:"Bình Dương"},
  {code:"DBG", name:"Trường Đại học Nông Lâm Bắc Giang", short:"DBG", city:"other", abbr:"DBG", color:"#e67e22", logo:"logos/dbg.jpg", score:18.75, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Kinh tế", region:"Tỉnh khác"},
  {code:"DBL", name:"Trường Đại Học Bạc Liêu", short:"DBL", city:"other", abbr:"DBL", color:"#e74c3c", logo:"logos/dbl.jpg", score:26.99, min:15.0, majors:"Giáo dục tiểu học, Tiếng Việt và văn hóa Việt Nam, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"DCH", name:"Trường Sĩ Quan Đặc Công", short:"DCH", city:"other", abbr:"DCH", color:"#16a085", logo:"logos/dch.jpg", score:22.5, min:21.5, majors:"Ngành Chỉ huy tham mưu Đặc công (Thí sinh Nam miền Bắc), Ngành Chỉ huy tham mưu Đặc công (Thí sinh Nam miền Nam)", region:"Tỉnh khác"},
  {code:"DCL", name:"Trường Đại Học Cửu Long", short:"DCL", city:"other", abbr:"DCL", color:"#95a5a6", logo:"logos/dcl.jpg", score:20.5, min:15.0, majors:"Thiết kế đồ họa, Tiếng Việt và Văn hóa Việt Nam, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"DCN", name:"Đại Học Công Nghiệp Hà Nội", short:"IDN", city:"hn", abbr:"IDN", color:"#f57c00", logo:"logos/dcn.jpg", score:26.27, min:18.0, majors:"Thiết kế thời trang, Ngôn ngữ Anh, Ngôn ngữ Trung Quốc", region:"Hà Nội"},
  {code:"DCQ", name:"Trường Đại Học Công Nghệ và Quản Lý Hữu Nghị", short:"DCQ", city:"other", abbr:"DCQ", color:"#00695c", logo:"logos/dcq.jpg", score:18.0, min:16.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Kinh tế quốc tế", region:"Tỉnh khác"},
  {code:"DCT", name:"Trường Đại Học Công Thương TPHCM", short:"DCT", city:"hcm", abbr:"DCT", color:"#004d40", logo:"logos/dct.jpg", score:24.5, min:16.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Quản trị kinh doanh", region:"TP.HCM"},
  {code:"DCV", name:"Trường Đại học Công nghiệp Vinh", short:"DCV", city:"other", abbr:"DCV", color:"#01579b", logo:"logos/dcv.jpg", score:28.5, min:15.0, majors:"Kế toán, Công nghệ thông tin, Công nghệ kỹ thuật điện điện tử", region:"Vinh"},
  {code:"DDF", name:"Trường Đại Học Ngoại Ngữ Đà Nẵng", short:"DDF", city:"dn", abbr:"DDF", color:"#0d47a1", logo:"logos/ddf.png", score:27.25, min:17.25, majors:"Sư phạm tiếng Anh, Sư phạm tiếng Pháp, Sư phạm tiếng Trung Quốc", region:"Đà Nẵng"},
  {code:"DDK", name:"Trường Đại Học Bách Khoa Đà Nẵng", short:"DUT", city:"dn", abbr:"DUT", color:"#004b87", logo:"logos/ddk.jpg", score:27.2, min:16.5, majors:"Công nghệ sinh học, Công nghệ sinh học, chuyên ngành Công nghệ sinh học Y Dược, Kỹ thuật máy tính", region:"Đà Nẵng"},
  {code:"DDL", name:"Trường Đại Học Điện Lực", short:"DDL", city:"other", abbr:"DDL", color:"#2c3e50", logo:"logos/ddl.png", score:23.33, min:16.5, majors:"Ngôn ngữ Anh, Quản trị kinh doanh, Marketing", region:"Tỉnh khác"},
  {code:"DDM", name:"Trường Đại Học Công Nghiệp Quảng Ninh", short:"DDM", city:"other", abbr:"DDM", color:"#18bc9c", logo:"logos/ddm.png", score:18.0, min:15.0, majors:"Quản trị kinh doanh, Tài chính ngân hàng, Kế toán", region:"Tỉnh khác"},
  {code:"DDN", name:"Trường Đại Học Đại Nam", short:"DDN", city:"other", abbr:"DDN", color:"#2980b9", logo:"logos/ddn.png", score:20.5, min:15.0, majors:"Thiết kế đồ hoạ, Ngôn ngữ Anh, Ngôn ngữ Trung Quốc", region:"Tỉnh khác"},
  {code:"DDP", name:"Phân Hiệu Đại Học Đà Nẵng tại Kon Tum", short:"DDP", city:"dn", abbr:"DDP", color:"#8e44ad", logo:"logos/ddp.png", score:24.6, min:15.0, majors:"Giáo dục mầm non, Giáo dục tiểu học, Ngôn ngữ Anh", region:"Đà Nẵng"},
  {code:"DDS", name:"Trường Đại Học Sư Phạm - Đại Học Đà Nẵng", short:"DDS", city:"dn", abbr:"DDS", color:"#27ae60", logo:"logos/dds.jpg", score:28.84, min:16.71, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Giáo dục Công dân", region:"Đà Nẵng"},
  {code:"DDT", name:"Đại Học Duy Tân", short:"DDT", city:"other", abbr:"DDT", color:"#d35400", logo:"logos/ddt.jpg", score:20.5, min:15.0, majors:"Ngành Thiết kế Đồ họa, Ngành Thiết kế đồ họa - Chương trình Việt - Nhật, Ngành Thiết kế Thời trang", region:"Tỉnh khác"},
  {code:"DDU", name:"Trường Đại Học Đông Đô", short:"DDU", city:"other", abbr:"DDU", color:"#c0392b", logo:"logos/ddu.png", score:19.0, min:14.0, majors:"Ngôn ngữ Trung Quốc, Ngôn ngữ Nhật, Ngôn Ngữ Hàn Quốc", region:"Tỉnh khác"},
  {code:"DDV", name:"Viện nghiên cứu và đào tạo Việt Anh - Đại học Đà Nẵng", short:"DDV", city:"dn", abbr:"DDV", color:"#16a085", logo:"logos/ddv.png", score:16.0, min:15.15, majors:"Kinh doanh quốc tế, Công nghệ sinh học, Khoa học y sinh", region:"Đà Nẵng"},
  {code:"DDY", name:"Trường Y Dược Đà Nẵng", short:"DDY", city:"dn", abbr:"DDY", color:"#7f8c8d", logo:"logos/ddy.png", score:23.23, min:16.5, majors:"Tâm lí học (Định hướng lâm sàng), Y khoa, Dược học", region:"Đà Nẵng"},
  {code:"DFA", name:"Trường Đại học Tài chính Quản trị kinh doanh", short:"DFA", city:"other", abbr:"DFA", color:"#2c3e50", logo:"logos/dfa.jpg", score:19.0, min:15.0, majors:"Kinh tế, Quản trị kinh doanh, Kinh doanh quốc tế", region:"Tỉnh khác"},
  {code:"DHA", name:"Trường Đại học Luật Huế", short:"DHA", city:"other", abbr:"DHA", color:"#34495e", logo:"logos/dha.jpg", score:22.0, min:22.0, majors:"Luật", region:"Huế"},
  {code:"DHD", name:"Trường Du Lịch - Đại Học Huế", short:"DHD", city:"other", abbr:"DHD", color:"#1abc9c", logo:"logos/dhd.jpg", score:21.5, min:15.0, majors:"Quản trị kinh doanh, Du lịch, Du lịch điện tử", region:"Huế"},
  {code:"DHE", name:"Khoa Kỹ thuật và Công nghệ - Đại học Huế", short:"DHE", city:"other", abbr:"DHE", color:"#3498db", logo:"logos/dhe.png", score:24.05, min:16.0, majors:"Khoa học dữ liệu và trí tuệ nhân tạo, Công nghệ kỹ thuật ô tô, Công nghệ kỹ thuật điện, điện tử", region:"Huế"},
  {code:"DHF", name:"Trường Đại Học Ngoại Ngữ Huế", short:"DHF", city:"other", abbr:"DHF", color:"#9b59b6", logo:"logos/dhf.jpg", score:30.0, min:15.0, majors:"Sư phạm Tiếng Anh, Sư phạm Tiếng Pháp, Sư phạm Tiếng Trung Quốc", region:"Huế"},
  {code:"DHI", name:"Khoa Quốc tế - Đại học Huế", short:"DHI", city:"other", abbr:"DHI", color:"#2ecc71", logo:"logos/dhi.png", score:21.5, min:15.0, majors:"Quan hệ quốc tế, Truyền thông đa phương tiện, Công nghệ kỹ thuật môi trường", region:"Huế"},
  {code:"DHK", name:"Trường Đại Học Kinh Tế - Đại Học Huế", short:"DHK", city:"other", abbr:"DHK", color:"#e67e22", logo:"logos/dhk.jpg", score:20.0, min:15.0, majors:"Kinh tế, Kinh tế (Đào tạo bằng Tiếng Anh), Kinh tế chính trị", region:"Huế"},
  {code:"DHL", name:"Trường Đại Học Nông Lâm Huế", short:"DHL", city:"other", abbr:"DHL", color:"#e74c3c", logo:"logos/dhl.jpg", score:19.5, min:15.0, majors:"Bất động sản, Công nghệ kỹ thuật cơ khí, Kỹ thuật cơ điện tử", region:"Huế"},
  {code:"DHN", name:"Trường Đại Học Nghệ Thuật Huế", short:"DHN", city:"other", abbr:"DHN", color:"#16a085", logo:"logos/dhn.jpg", score:20.5, min:18.0, majors:"Sư phạm Mỹ thuật, Hội hoạ, Điêu khắc", region:"Huế"},
  {code:"DHQ", name:"Phân Hiệu Đại Học Huế tại Quảng Trị", short:"DHQ", city:"other", abbr:"DHQ", color:"#95a5a6", logo:"logos/dhq.jpg", score:15.0, min:15.0, majors:"Kỹ thuật điện, Kỹ thuật điều kiển và tự động hoá, Kỹ thuật xây dựng", region:"Huế"},
  {code:"DHS", name:"Trường Đại Học Sư Phạm Huế", short:"DHS", city:"other", abbr:"DHS", color:"#4a148c", logo:"logos/dhs.jpg", score:28.9, min:17.5, majors:"Giáo dục mầm non, Giáo dục Tiểu học, Giáo dục Tiểu học (Đào tạo bằng Tiếng Anh)", region:"Huế"},
  {code:"DHT", name:"Trường Đại Học Khoa Học Huế", short:"DHT", city:"other", abbr:"DHT", color:"#00695c", logo:"logos/dht.jpg", score:22.0, min:15.0, majors:"Hán Nôm, Triết học, Lịch sử", region:"Huế"},
  {code:"DHV", name:"Trường Đại học Hùng Vương TPHCM", short:"DHV", city:"hcm", abbr:"DHV", color:"#004d40", logo:"logos/dhv.png", score:20.0, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Ngôn ngữ Nhật", region:"TP.HCM"},
  {code:"DHY", name:"Trường Đại Học Y Dược Huế", short:"DHY", city:"other", abbr:"DHY", color:"#01579b", logo:"logos/dhy.jpg", score:25.17, min:17.0, majors:"Y khoa, Y học dự phòng, Y học cổ truyền", region:"Huế"},
  {code:"DKB", name:"Trường Đại Học Kinh Tế Kỹ Thuật Bình Dương", short:"DKB", city:"other", abbr:"DKB", color:"#0d47a1", logo:"logos/dkb.jpg", score:19.0, min:14.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Hàn Quốc, Quan hệ công chúng", region:"Bình Dương"},
  {code:"DKC", name:"Trường Đại học Công Nghệ TPHCM", short:"DKC", city:"hcm", abbr:"DKC", color:"#1b5e20", logo:"logos/dkc.png", score:19.0, min:15.0, majors:"Thanh nhạc, Công nghệ điện ảnh, truyền hình, Thiết kế đồ họa", region:"TP.HCM"},
  {code:"DKH", name:"Trường Đại Học Dược Hà Nội", short:"DKH", city:"hn", abbr:"DKH", color:"#2c3e50", logo:"logos/dkh.jpg", score:24.5, min:20.0, majors:"Công nghệ sinh học, Hóa học, Dược học", region:"Hà Nội"},
  {code:"DKK", name:"Trường Đại Học Kinh Tế Kỹ Thuật Công Nghiệp", short:"DKK", city:"other", abbr:"DKK", color:"#18bc9c", logo:"logos/dkk.jpg", score:25.0, min:19.0, majors:"Ngôn ngữ Anh (CS Nam Định), Ngôn ngữ Anh (CS Hà Nội), Quản trị kinh doanh (CS Nam Định)", region:"Tỉnh khác"},
  {code:"DKS", name:"Trường Đại học Kiểm Sát", short:"HPU", city:"hn", abbr:"HPU", color:"#8b0000", logo:"logos/dks.jpg", score:27.2, min:20.17, majors:"Luật Kiểm Sát (GT: Nam, miền Bắc), Luật Kiểm Sát (GT: Nam, miền Bắc), Luật Kiểm Sát (GT: Nam, miền Bắc)", region:"Hà Nội"},
  {code:"DKT", name:"Trường Đại Học Hải Dương", short:"DKT", city:"other", abbr:"DKT", color:"#8e44ad", logo:"logos/dkt.jpg", score:26.83, min:15.0, majors:"Giáo dục Mầm non (CĐ), Giáo dục Mầm non (ĐH), Giáo dục Tiểu học", region:"Tỉnh khác"},
  {code:"DKY", name:"Trường Đại Học Kỹ Thuật Y Tế Hải Dương", short:"DKY", city:"other", abbr:"DKY", color:"#27ae60", logo:"logos/dky.jpg", score:23.8, min:21.0, majors:"Y khoa, Điều dưỡng, Kỹ thuật Xét nghiệm y học", region:"Tỉnh khác"},
  {code:"DLA", name:"Trường Đại Học Kinh Tế Công Nghiệp Long An", short:"DLA", city:"other", abbr:"DLA", color:"#d35400", logo:"logos/dla.jpg", score:18.56, min:15.0, majors:"Ngôn ngữ Anh, Quản trị Kinh doanh, Marketing", region:"Tỉnh khác"},
  {code:"DLH", name:"Trường Đại Học Lạc Hồng", short:"DLH", city:"other", abbr:"DLH", color:"#c0392b", logo:"logos/dlh.png", score:19.5, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Kinh doanh quốc tế", region:"Tỉnh khác"},
  {code:"DLS", name:"Trường Đại Học Lao Động – Xã Hội (Cơ sở II)", short:"DLS", city:"other", abbr:"DLS", color:"#16a085", logo:"logos/dls.jpg", score:24.75, min:14.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Anh, Kinh tế", region:"Tỉnh khác"},
  {code:"DLX", name:"Trường Đại Học Lao Động – Xã Hội", short:"DLX", city:"other", abbr:"DLX", color:"#7f8c8d", logo:"logos/dlx.png", score:24.3, min:14.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Anh, Kinh tế", region:"Tỉnh khác"},
  {code:"DMS", name:"Trường Đại Học Tài Chính Marketing", short:"DMS", city:"other", abbr:"DMS", color:"#2c3e50", logo:"logos/dms.png", score:29.21, min:22.1, majors:"Ngôn ngữ Anh (chương trình chuẩn), Kinh tế (chương trình chuẩn), Toán kinh tế (chương trình chuẩn)", region:"Tỉnh khác"},
  {code:"DMT", name:"Trường Đại học Tài Nguyên và Môi Trường Hà Nội", short:"DMT", city:"hn", abbr:"DMT", color:"#34495e", logo:"logos/dmt.png", score:26.65, min:15.0, majors:"Ngôn ngữ Anh, Quản trị kinh doanh, Marketing", region:"Hà Nội"},
  {code:"DNB", name:"Trường Đại Học Hoa Lư", short:"DNB", city:"other", abbr:"DNB", color:"#1abc9c", logo:"logos/dnb.jpg", score:27.07, min:16.0, majors:"Giáo dục Tiểu học, Sư phạm Toán học, Sư phạm Khoa học tự nhiên", region:"Tỉnh khác"},
  {code:"DNC", name:"Trường Đại học Nam Cần Thơ", short:"DNC", city:"other", abbr:"DNC", color:"#3498db", logo:"logos/dnc.jpg", score:20.5, min:15.0, majors:"Ngôn ngữ Anh, Truyền thông đa phương tiện, Quan hệ công chúng (PR)", region:"Cần Thơ"},
  {code:"DNT", name:"Trường Đại Học Ngoại Ngữ Tin Học TPHCM", short:"DNT", city:"hcm", abbr:"DNT", color:"#9b59b6", logo:"logos/dnt.jpg", score:17.0, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Ngôn ngữ Nhật", region:"TP.HCM"},
  {code:"DNU", name:"Trường Đại Học Đồng Nai", short:"DNU", city:"other", abbr:"DNU", color:"#2ecc71", logo:"logos/dnu.jpg", score:26.51, min:16.0, majors:"Giáo dục Tiểu học, Sư phạm Toán học, Sư phạm Ngữ văn", region:"Đồng Nai"},
  {code:"DPC", name:"Trường Đại Học Phan Châu Trinh", short:"DPC", city:"other", abbr:"DPC", color:"#e67e22", logo:"logos/dpc.jpg", score:21.75, min:15.0, majors:"Quản trị bệnh viện, Y khoa (Bác sĩ đa khoa), Điều dưỡng đa khoa", region:"Tỉnh khác"},
  {code:"DPD", name:"Trường Đại Học Phương Đông", short:"DPD", city:"other", abbr:"DPD", color:"#e74c3c", logo:"logos/dpd.jpg", score:18.0, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Ngôn ngữ Nhật", region:"Tỉnh khác"},
  {code:"DPQ", name:"Trường Đại Học Phạm Văn Đồng", short:"DPQ", city:"other", abbr:"DPQ", color:"#16a085", logo:"logos/dpq.jpg", score:27.25, min:15.0, majors:"Giáo dục Tiểu học, Sư phạm Toán học, Sư phạm Tin học", region:"Tỉnh khác"},
  {code:"DPX", name:"Trường Đại Học Phú Xuân", short:"DPX", city:"other", abbr:"DPX", color:"#95a5a6", logo:"logos/dpx.png", score:15.0, min:15.0, majors:"Ngôn ngữ Trung Quốc, Ngôn ngữ Anh, Quản trị kinh doanh", region:"Tỉnh khác"},
  {code:"DPY", name:"Trường Đại Học Phú Yên", short:"DPY", city:"other", abbr:"DPY", color:"#4a148c", logo:"logos/dpy.jpg", score:26.25, min:15.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Sư phạm Toán học", region:"Tỉnh khác"},
  {code:"DQB", name:"Trường Đại Học Quảng Bình", short:"DQB", city:"other", abbr:"DQB", color:"#00695c", logo:"logos/dqb.jpg", score:27.42, min:15.0, majors:"Giáo dục mầm non, Giáo dục mầm non, Giáo dục Tiểu học", region:"Tỉnh khác"},
  {code:"DQK", name:"Trường Đại Học Kinh Doanh và Công Nghệ Hà Nội", short:"DQK", city:"hn", abbr:"DQK", color:"#004d40", logo:"logos/dqk.jpg", score:21.5, min:17.0, majors:"Thiết kế đồ họa, Ngôn ngữ Anh, Ngôn ngữ Nga", region:"Hà Nội"},
  {code:"DQN", name:"Trường Đại Học Quy Nhơn", short:"DQN", city:"other", abbr:"DQN", color:"#01579b", logo:"logos/dqn.jpg", score:27.21, min:15.0, majors:"Quản lý Giáo dục, Giáo dục mầm non, Giáo dục Tiểu học", region:"Tỉnh khác"},
  {code:"DQT", name:"Trường Đại Học Quang Trung", short:"DQT", city:"other", abbr:"DQT", color:"#0d47a1", logo:"logos/dqt.png", score:17.0, min:13.0, majors:"Ngôn ngữ Anh, Quản trị Kinh doanh, Tài chính – Ngân hàng", region:"Tỉnh khác"},
  {code:"DQU", name:"Trường Đại Học Quảng Nam", short:"DQU", city:"other", abbr:"DQU", color:"#1b5e20", logo:"logos/dqu.jpg", score:26.27, min:14.0, majors:"Giáo dục Mầm non, Giáo dục Mầm non, Giáo dục Mầm non", region:"Tỉnh khác"},
  {code:"DSG", name:"Trường Đại Học Công Nghệ Sài Gòn", short:"DSG", city:"hcm", abbr:"DSG", color:"#2c3e50", logo:"logos/dsg.png", score:18.0, min:15.0, majors:"Thiết kế công nghiệp, Quản trị kinh doanh, Marketing", region:"TP.HCM"},
  {code:"DSK", name:"Trường Đại học Sư phạm Kỹ thuật - Đại học Đà Nẵng", short:"DSK", city:"dn", abbr:"DSK", color:"#18bc9c", logo:"logos/dsk.png", score:22.58, min:17.0, majors:"Sư phạm Kỹ thuật công nghiệp (chuyên ngành Công nghệ thông tin), Công nghệ thông tin, Công nghệ kỹ thuật kiến trúc", region:"Đà Nẵng"},
  {code:"DTB", name:"Trường Đại Học Thái Bình", short:"DTB", city:"other", abbr:"DTB", color:"#2980b9", logo:"logos/dtb.jpg", score:16.0, min:16.0, majors:"Kinh tế, Chính trị học, Quan hệ quốc tế", region:"Tỉnh khác"},
  {code:"DTC", name:"Trường Đại học Công Nghệ Thông Tin và Truyền Thông Thái Nguyên", short:"DTC", city:"other", abbr:"DTC", color:"#8e44ad", logo:"logos/dtc.png", score:22.0, min:18.0, majors:"Thiết kế đồ họa, Tiếng Anh truyền thông, Quản trị kinh doanh số", region:"Thái Nguyên"},
  {code:"DTD", name:"Trường Đại Học Tây Đô", short:"DTD", city:"other", abbr:"DTD", color:"#27ae60", logo:"logos/dtd.jpg", score:19.0, min:15.0, majors:"Thiết kế đồ họa, Ngôn ngữ Anh, Văn học", region:"Tỉnh khác"},
  {code:"DTE", name:"Trường Đại học Kinh tế và Quản trị kinh doanh Thái Nguyên", short:"DTE", city:"other", abbr:"DTE", color:"#d35400", logo:"logos/dte.png", score:19.5, min:17.0, majors:"Kinh tế, Kinh tế (học tại phân hiệu ĐHTN tại tỉnh Hà Giang), Kinh tế đầu tư", region:"Thái Nguyên"},
  {code:"DTF", name:"Trường Ngoại Ngữ Thái Nguyên", short:"DTF", city:"other", abbr:"DTF", color:"#c0392b", logo:"logos/dtf.png", score:27.07, min:19.35, majors:"Sư phạm Tiếng Anh, Sư phạm Tiếng Trung Quốc, Ngôn ngữ Anh", region:"Thái Nguyên"},
  {code:"DTG", name:"Phân hiệu Đại học Thái Nguyên tại Hà Giang", short:"DTG", city:"other", abbr:"DTG", color:"#16a085", logo:"logos/dtg.png", score:26.14, min:19.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Sư phạm Tiếng H’mong", region:"Thái Nguyên"},
  {code:"DTK", name:"Trường Đại Học Kỹ Thuật Công Nghiệp Thái Nguyên", short:"DTK", city:"other", abbr:"DTK", color:"#7f8c8d", logo:"logos/dtk.png", score:24.5, min:15.0, majors:"Ngôn ngữ Anh, Kỹ thuật máy tính, Công nghệ Kỹ thuật cơ khí", region:"Thái Nguyên"},
  {code:"DTL", name:"Trường Đại Học Thăng Long", short:"DTL", city:"other", abbr:"DTL", color:"#2c3e50", logo:"logos/dtl.jpg", score:25.75, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Anh, Ngôn ngữ Trung Quốc", region:"Tỉnh khác"},
  {code:"DTM", name:"Trường Đại học Tài Nguyên và Môi Trường TPHCM", short:"DTM", city:"hcm", abbr:"DTM", color:"#34495e", logo:"logos/dtm.png", score:20.0, min:15.0, majors:"Quản trị kinh doanh, Bất động sản, Địa chất học", region:"TP.HCM"},
  {code:"DTN", name:"Trường Đại Học Nông Lâm Thái Nguyên", short:"DTN", city:"other", abbr:"DTN", color:"#1abc9c", logo:"logos/dtn.png", score:15.0, min:15.0, majors:"Ngôn ngữ Anh, Quản lý kinh tế, Quản lý thông tin", region:"Thái Nguyên"},
  {code:"DTP", name:"Phân Hiệu Đại Học Thái Nguyên Tại Lào Cai", short:"DTP", city:"other", abbr:"DTP", color:"#3498db", logo:"logos/dtp.jpg", score:25.84, min:15.0, majors:"Giáo dục Mầm non (cao đẳng), Giáo dục Mầm non, Giáo dục Tiểu học", region:"Thái Nguyên"},
  {code:"DTQ", name:"Khoa Quốc Tế - Đại Học Thái Nguyên", short:"DTQ", city:"other", abbr:"DTQ", color:"#9b59b6", logo:"logos/dtq.jpg", score:17.0, min:16.0, majors:"Ngôn ngữ Anh, Quốc tế học, Quản trị kinh doanh và tài chính", region:"Thái Nguyên"},
  {code:"DTS", name:"Đại Học Sư Phạm Thái Nguyên", short:"DTS", city:"other", abbr:"DTS", color:"#2ecc71", logo:"logos/dts.png", score:28.17, min:21.25, majors:"Giáo dục học, Giáo dục học, Giáo dục học", region:"Thái Nguyên"},
  {code:"DTV", name:"Trường Đại Học Lương Thế Vinh", short:"DTV", city:"other", abbr:"DTV", color:"#e67e22", logo:"logos/dtv.jpg", score:19.0, min:15.0, majors:"Ngôn ngữ Anh, Quản trị kinh doanh, Tài chính - Ngân hàng", region:"Vinh"},
  {code:"DTY", name:"Trường Đại Học Y Dược Thái Nguyên", short:"DTY", city:"other", abbr:"DTY", color:"#e74c3c", logo:"logos/dty.jpg", score:26.15, min:18.3, majors:"Y khoa, Y học dự phòng, Dược học", region:"Thái Nguyên"},
  {code:"DTZ", name:"Trường Đại Học Khoa Học Thái Nguyên", short:"DTZ", city:"other", abbr:"DTZ", color:"#16a085", logo:"logos/dtz.jpg", score:20.25, min:15.65, majors:"Ngôn ngữ và văn hóa các dân tộc thiểu số Việt Nam, Ngôn ngữ Anh (Tiếng Anh ứng dụng), Song ngữ Anh - Hàn", region:"Thái Nguyên"},
  {code:"DVB", name:"Trường Đại Học Kinh tế công nghệ Thái Nguyên", short:"DVB", city:"other", abbr:"DVB", color:"#95a5a6", logo:"logos/dvb.jpg", score:15.0, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Hàn Quốc, Quản trị kinh doanh", region:"Thái Nguyên"},
  {code:"DVD", name:"Trường Đại Học Văn Hóa, Thể Thao Và Du Lịch Thanh Hóa", short:"DVD", city:"other", abbr:"DVD", color:"#4a148c", logo:"logos/dvd.png", score:27.32, min:15.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Giáo dục Thể chất", region:"Thanh Hóa"},
  {code:"DVH", name:"Trường Đại Học Văn Hiến", short:"DVH", city:"other", abbr:"DVH", color:"#00695c", logo:"logos/dvh.png", score:18.0, min:15.0, majors:"Thanh nhạc, Piano, Đạo diễn điện ảnh, truyền hình", region:"Tỉnh khác"},
  {code:"DVL", name:"Trường Đại Học Văn Lang", short:"DVL", city:"other", abbr:"DVL", color:"#004d40", logo:"logos/dvl.png", score:20.5, min:15.0, majors:"Thanh nhạc, Piano, Diễn viên kịch, điện ảnh - truyền hình", region:"Tỉnh khác"},
  {code:"DVT", name:"Đại Học Trà Vinh", short:"DVT", city:"other", abbr:"DVT", color:"#01579b", logo:"logos/dvt.png", score:22.5, min:14.0, majors:"Âm nhạc học, Biểu diễn nhạc cụ truyền thống, Ngôn ngữ Khmer", region:"Vinh"},
  {code:"DYD", name:"Trường Đại Học Yersin Đà Lạt", short:"DYD", city:"other", abbr:"DYD", color:"#0d47a1", logo:"logos/dyd.png", score:20.5, min:15.5, majors:"Ngôn ngữ Anh, Tâm lý học, Đông phương học", region:"Tỉnh khác"},
  {code:"ETU", name:"Trường Đại Học Hòa Bình", short:"ETU", city:"other", abbr:"ETU", color:"#1b5e20", logo:"logos/etu.jpg", score:20.5, min:15.0, majors:"Thiết kế đồ họa, Thiết kế thời trang, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"FBU", name:"Trường Đại Học Tài Chính Ngân Hàng Hà Nội", short:"FBU", city:"hn", abbr:"FBU", color:"#2c3e50", logo:"logos/fbu.jpg", score:24.25, min:17.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Tiếng Trung, Quản trị kinh doanh", region:"Hà Nội"},
  {code:"GDU", name:"Trường Đại Học Gia Định", short:"GDU", city:"other", abbr:"GDU", color:"#18bc9c", logo:"logos/gdu.jpg", score:20.5, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung quốc, Tâm lý học", region:"Tỉnh khác"},
  {code:"GHA", name:"Trường Đại Học Giao Thông Vận Tải", short:"GHA", city:"other", abbr:"GHA", color:"#2980b9", logo:"logos/gha.jpg", score:27.52, min:16.19, majors:"Ngôn ngữ Anh, Kinh tế (chuyên ngành: kinh tế và quản lý đầu tư, kinh tế bưu chính viễn thông), Quản trị kinh doanh", region:"Tỉnh khác"},
  {code:"GSA", name:"Trường Đại Học Giao Thông Vận Tải (Cơ sở 2)", short:"GSA", city:"other", abbr:"GSA", color:"#8e44ad", logo:"logos/gsa.jpg", score:27.38, min:15.06, majors:"Quản trị kinh doanh, Kinh doanh quốc tế, Tài chính - Ngân hàng", region:"Tỉnh khác"},
  {code:"GTA", name:"Trường Đại học Công nghệ Giao thông vận tải", short:"GTA", city:"other", abbr:"GTA", color:"#27ae60", logo:"logos/gta.png", score:24.5, min:16.0, majors:"An toàn dữ liệu và an ninh mạng, Quản lý; khai thác và bảo trì đường cao tốc, Mô hình thông tin công trình giao thông (BIM)", region:"Tỉnh khác"},
  {code:"HBT", name:"Học viện Báo chí và Tuyên truyền", short:"HBT", city:"other", abbr:"HBT", color:"#d35400", logo:"logos/hbt.png", score:28.12, min:22.96, majors:"Kinh tế, chuyên ngành Quản lý kinh tế, Kinh tế, chuyên ngành Quản lý kinh tế, Chính trị học, chuyên ngành Công tác tư tưởng - văn hóa", region:"Tỉnh khác"},
  {code:"HCA", name:"Học Viện Chính Trị Công An Nhân Dân", short:"HCA", city:"other", abbr:"HCA", color:"#c0392b", logo:"logos/hca.jpg", score:25.21, min:21.74, majors:"Xây dựng Đảng và chính quyền nhà nước (Thí sinh Nam, miền Bắc), Xây dựng Đảng và chính quyền nhà nước (Thí sinh Nam, miền Nam), Xây dựng Đảng và chính quyền nhà nước (Thí sinh Nữ, miền Bắc)", region:"Tỉnh khác"},
  {code:"HCB", name:"Học viện Kỹ thuật và Công nghệ an ninh (Phía Bắc)", short:"HCB", city:"other", abbr:"HCB", color:"#16a085", logo:"logos/hcb.png", score:25.21, min:19.05, majors:"Nhóm ngành Kỹ thuật - Hậu cần (Thí sinh Nam, miền Bắc), Nhóm ngành Kỹ thuật - Hậu cần (Thí sinh Nam, miền Nam), Nhóm ngành Kỹ thuật - Hậu cần (Thí sinh Nữ, miền Bắc)", region:"Nghệ An"},
  {code:"HCH", name:"Học Viện Hành Chính và Quản trị công", short:"HCH", city:"other", abbr:"HCH", color:"#7f8c8d", logo:"logos/hch.jpg", score:26.7, min:16.0, majors:"Ngôn ngữ Anh, Chuyên ngành Văn hóa Du lịch thuộc ngành Văn hóa học, Chuyên ngành Văn hóa Du lịch thuộc ngành Văn hóa học", region:"Tỉnh khác"},
  {code:"HCN", name:"Học viện Kỹ thuật và Công nghệ an ninh (Phía Nam)", short:"HCN", city:"other", abbr:"HCN", color:"#2c3e50", logo:"logos/hcn.png", score:25.21, min:19.05, majors:"Nhóm ngành Kỹ thuật - Hậu cần (Thí sinh Nam, miền Bắc), Nhóm ngành Kỹ thuật - Hậu cần (Thí sinh Nam, miền Nam), Nhóm ngành Kỹ thuật - Hậu cần (Thí sinh Nữ, miền Bắc)", region:"Nghệ An"},
  {code:"HCP", name:"Học Viện Chính Sách và Phát Triển", short:"HCP", city:"other", abbr:"HCP", color:"#34495e", logo:"logos/hcp.png", score:29.9, min:22.0, majors:"Ngành Ngôn ngữ Anh, Ngành Kinh tế, Ngành Kinh tế phát triển", region:"Tỉnh khác"},
  {code:"HCS", name:"Học Viện Hành Chính Và Quản Trị Công (phía Nam)", short:"HCS", city:"other", abbr:"HCS", color:"#1abc9c", logo:"logos/hcs.jpg", score:27.9, min:16.0, majors:"Kinh tế, Kinh tế, Xây dựng Đàng và chính quyền nhà nước", region:"Tỉnh khác"},
  {code:"HDT", name:"Trường Đại Học Hồng Đức", short:"HDT", city:"other", abbr:"HDT", color:"#3498db", logo:"logos/hdt.jpg", score:28.38, min:14.25, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Giáo dục thể chất", region:"Tỉnh khác"},
  {code:"HEH", name:"Học Viện Hậu Cần - Hệ Quân sự", short:"HEH", city:"other", abbr:"HEH", color:"#9b59b6", logo:"logos/heh.jpg", score:28.33, min:23.67, majors:"Hậu cần quân sự (Thí sinh Nam miền Bắc), Hậu cần quân sự (Thí sinh Nam miền Bắc), Hậu cần quân sự (Thí sinh Nam miền Bắc)", region:"Tỉnh khác"},
  {code:"HGH", name:"Trường Sĩ Quan Phòng Hóa", short:"HGH", city:"other", abbr:"HGH", color:"#2ecc71", logo:"logos/hgh.jpg", score:22.99, min:22.45, majors:"Ngành Chỉ huy Kỹ thuật hóa học (Thí sinh ở miền Bắc), Ngành Chỉ huy Kỹ thuật hóa học (Thí sinh ở miền Nam)", region:"Tỉnh khác"},
  {code:"HHA", name:"Trường Đại Học Hàng Hải Việt Nam", short:"HHA", city:"other", abbr:"HHA", color:"#e67e22", logo:"logos/hha.jpg", score:29.11, min:19.0, majors:"Quản lý kinh doanh và Marketing, Quản lý kinh doanh và Marketing, Quản lý kinh doanh và Marketing", region:"Tỉnh khác"},
  {code:"HHK", name:"Học Viện Hàng không Việt Nam", short:"HHK", city:"other", abbr:"HHK", color:"#e74c3c", logo:"logos/hhk.jpg", score:27.0, min:18.0, majors:"Ngôn ngữ Anh, Quản trị kinh doanh, Kinh doanh số (Ngành: QTKD)", region:"Tỉnh khác"},
  {code:"HHT", name:"Trường Đại Học Hà Tĩnh", short:"HHT", city:"other", abbr:"HHT", color:"#16a085", logo:"logos/hht.png", score:26.35, min:15.0, majors:"Giáo dục Tiểu học, Giáo dục Tiểu học, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"HIU", name:"Trường Đại Học Quốc Tế Hồng Bàng", short:"HIU", city:"other", abbr:"HIU", color:"#95a5a6", logo:"logos/hiu.jpg", score:20.5, min:15.0, majors:"Quản lý Giáo dục, Thiết kế đồ họa, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"HLU", name:"Trường Đại Học Hạ Long", short:"HLU", city:"hn", abbr:"HLU", color:"#8b4513", logo:"logos/hlu.jpg", score:27.32, min:15.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Sư phạm Toán học", region:"Hà Nội"},
  {code:"HNM", name:"Trường Đại học Thủ Đô Hà Nội", short:"HNM", city:"hn", abbr:"HNM", color:"#00695c", logo:"logos/hnm.jpg", score:28.13, min:20.86, majors:"Quản lí Giáo dục, Giáo dục Mầm non, Giáo dục Tiểu học", region:"Hà Nội"},
  {code:"HPN", name:"Học Viện Phụ Nữ Việt Nam", short:"HPN", city:"other", abbr:"HPN", color:"#004d40", logo:"logos/hpn.jpg", score:26.62, min:20.68, majors:"Kinh tế, Kinh tế, Kinh tế số", region:"Tỉnh khác"},
  {code:"HPU", name:"Trường Đại học Quản lý và Công nghệ Hải Phòng", short:"HPU", city:"hn", abbr:"HPU", color:"#8b0000", logo:"logos/hpupu.png", score:16.1, min:15.0, majors:"Ngôn ngữ Anh, Việt Nam học, Quản trị kinh doanh", region:"Hà Nội"},
  {code:"HQH", name:"Học Viện Hải Quân", short:"HQH", city:"other", abbr:"HQH", color:"#0d47a1", logo:"logos/hqh.jpg", score:23.96, min:23.08, majors:"Chỉ huy tham mưu Hải quân (Thí sinh miền Bắc), Chỉ huy tham mưu Hải quân (Thí sinh miền Bắc), Chỉ huy tham mưu Hải quân (Thí sinh miền Bắc)", region:"Tỉnh khác"},
  {code:"HQT", name:"Học Viện Ngoại Giao", short:"HQT", city:"other", abbr:"HQT", color:"#1b5e20", logo:"logos/hqt.jpg", score:26.09, min:24.17, majors:"Quan hệ quốc tế, Ngôn ngữ Anh, Kinh tế quốc tế", region:"Tỉnh khác"},
  {code:"HSU", name:"Trường Đại Học Hoa Sen", short:"HSU", city:"other", abbr:"HSU", color:"#2c3e50", logo:"logos/hsu.jpg", score:17.0, min:15.0, majors:"Thiết kế Đồ họa, Thiết kế Thời trang, Nghệ thuật số", region:"Tỉnh khác"},
  {code:"HTA", name:"Học viện Tòa án", short:"HTA", city:"other", abbr:"HTA", color:"#18bc9c", logo:"logos/hta.jpg", score:23.0, min:21.03, majors:"Luật (Thí sinh nam miền Bắc), Luật (Thí sinh nam miền Nam), Luật (Thí sinh nữ miền Bắc)", region:"Tỉnh khác"},
  {code:"HTC", name:"Học Viện Tài chính", short:"HTC", city:"other", abbr:"HTC", color:"#2980b9", logo:"logos/htc.png", score:26.6, min:21.0, majors:"Tiếng Anh tài chính kế toán, Kinh tế và quản lý nguồn lực tài chính, Kinh tế chính trị - tài chính", region:"Tỉnh khác"},
  {code:"HTN", name:"Học Viện Thanh Thiếu Niên Việt Nam", short:"HTN", city:"other", abbr:"HTN", color:"#8e44ad", logo:"logos/htn.jpg", score:25.8, min:17.5, majors:"Kinh tế, Xây dựng Đảng và Chính quyền Nhà nước, Xây dựng Đảng và Chính quyền Nhà nước - Đào tạo tại TPHCM", region:"Tỉnh khác"},
  {code:"HVC", name:"Học viện cán bộ TPHCM", short:"HVC", city:"hcm", abbr:"HVC", color:"#27ae60", logo:"logos/hvc.jpg", score:24.0, min:22.5, majors:"Chính trị học, Xây dựng Đảng và Chính quyền nhà nước, Quản lý nhà nước", region:"TP.HCM"},
  {code:"HVD", name:"Học Viện Dân Tộc", short:"HVD", city:"other", abbr:"HVD", color:"#d35400", logo:"logos/hvd.png", score:15.0, min:15.0, majors:"Kinh tế giáo dục vùng dân tộc thiểu số", region:"Tỉnh khác"},
  {code:"HVN", name:"Học Viện Nông Nghiệp Việt Nam", short:"HVN", city:"other", abbr:"HVN", color:"#c0392b", logo:"logos/hvn.jpg", score:24.1, min:17.0, majors:"Thú y, Chăn nuôi thú y - Thủy sản, Nông nghiệp và Cảnh quan", region:"Tỉnh khác"},
  {code:"HVQ", name:"Học Viện Quản Lý Giáo Dục", short:"HVQ", city:"other", abbr:"HVQ", color:"#16a085", logo:"logos/hvq.png", score:25.5, min:15.0, majors:"Giáo dục học (GD trẻ rối loạn phát triển), Quản lý giáo dục, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"HYD", name:"Học Viện Y Dược Học Cổ Truyền Việt Nam", short:"HYD", city:"other", abbr:"HYD", color:"#7f8c8d", logo:"logos/hyd.jpg", score:24.25, min:21.0, majors:"Y khoa, Y học cổ truyền, Dược học", region:"Tỉnh khác"},
  {code:"IUH", name:"Trường Đại Học Công Nghiệp TPHCM", short:"IUH", city:"hcm", abbr:"IUH", color:"#2c3e50", logo:"logos/iuh.jpg", score:26.5, min:16.0, majors:"Thiết kế thời trang, Nhóm ngành Ngôn ngữ gồm 02 ngành: Ngôn ngữ Anh; Ngôn ngữ Trung, Quản trị kinh doanh (Đào tạo tại Quảng Ngãi)", region:"TP.HCM"},
  {code:"KCC", name:"Trường Đại học Kỹ Thuật Công Nghệ Cần Thơ", short:"KCC", city:"other", abbr:"KCC", color:"#34495e", logo:"logos/kcc.png", score:24.68, min:20.15, majors:"Ngôn ngữ Anh, Quản trị kinh doanh, Tài chính - Ngân hàng", region:"Cần Thơ"},
  {code:"KCN", name:"Trường Đại Học Khoa Học Và Công Nghệ Hà Nội", short:"KCN", city:"hn", abbr:"KCN", color:"#1abc9c", logo:"logos/kcn.png", score:24.82, min:18.25, majors:"Công nghệ sinh học - Phát triển thuốc, Công nghệ sinh học - Phát triển thuốc (Song bằng), Hóa học", region:"Hà Nội"},
  {code:"KGH", name:"Trường Sĩ Quan Không Quân - Hệ Đại học", short:"KGH", city:"other", abbr:"KGH", color:"#3498db", logo:"logos/kgh.jpg", score:18.6, min:16.85, majors:"Chỉ huy tham mưu Không quân (Thiết bị bay không người lái), Chỉ huy tham mưu Không quân (Thiết bị bay không người lái) - Thí sinh miền Nam, Chỉ huy tham mưu không quân (Phi công quân sự)", region:"Tỉnh khác"},
  {code:"KHA", name:"Đại Học Kinh Tế Quốc Dân", short:"NEU", city:"hn", abbr:"NEU", color:"#da251d", logo:"logos/kha.jpg", score:28.83, min:23.0, majors:"Ngôn ngữ Anh, Kinh tế học (ngành Kinh tế), Kinh tế và quản lý đô thị (ngành Kinh tế)", region:"Hà Nội"},
  {code:"KMA", name:"Học Viện Kỹ Thuật Mật Mã", short:"PITI", city:"hn", abbr:"PITI", color:"#d32f2f", logo:"logos/kma.png", score:24.42, min:23.2, majors:"Công nghệ thông tin, An toàn thông tin, An toàn thông tin", region:"Hà Nội"},
  {code:"KQH", name:"Học Viện Kỹ Thuật Quân Sự - Hệ Quân sự", short:"KMA", city:"hn", abbr:"KMA", color:"#1a5490", logo:"logos/kqh.jpg", score:29.25, min:26.4, majors:"Kỹ sư quân sự  (miền Bắc, thí sinh Nam), Kỹ sư quân sự  (miền Nam, thí sinh Nam), Kỹ sư quân sự  (miền Bắc, thí sinh Nữ)", region:"Hà Nội"},
  {code:"KSA", name:"Đại Học Kinh Tế TPHCM", short:"UEH", city:"hcm", abbr:"UEH", color:"#005d4b", logo:"logos/ksa.png", score:27.7, min:22.8, majors:"Tiếng Anh thương mại, Kinh tế, Kinh tế chính trị", region:"TP.HCM"},
  {code:"KSV", name:"Đại học Kinh Tế TPHCM - Phân hiệu Vĩnh Long", short:"KSV", city:"hcm", abbr:"KSV", color:"#16a085", logo:"logos/ksv.png", score:22.0, min:17.0, majors:"Tiếng Anh Thương mại, Quản trị, Marketing", region:"TP.HCM"},
  {code:"KTA", name:"Trường Đại Học Kiến Trúc Hà Nội", short:"KTA", city:"hn", abbr:"KTA", color:"#95a5a6", logo:"logos/kta.jpg", score:22.0, min:16.1, majors:"Kinh tế đầu tư, Kinh tế phát triển, Công nghệ thông tin", region:"Hà Nội"},
  {code:"KTD", name:"Trường Đại Học Kiến Trúc Đà Nẵng", short:"KTD", city:"dn", abbr:"KTD", color:"#4a148c", logo:"logos/ktd.png", score:18.0, min:16.0, majors:"Thiết kế đồ họa, Ngôn ngữ Anh, Ngôn ngữ Trung Quốc", region:"Đà Nẵng"},
  {code:"KTS", name:"Trường Đại Học Kiến Trúc TPHCM", short:"KTS", city:"hcm", abbr:"KTS", color:"#00695c", logo:"logos/kts.png", score:24.43, min:17.01, majors:"Mỹ thuật đô thị, Thiết kế công nghiệp, Thiết kế đồ họa", region:"TP.HCM"},
  {code:"LAH", name:"Trường Sĩ Quan Lục Quân 1 - Đại học Trần Quốc Tuấn", short:"LAH", city:"other", abbr:"LAH", color:"#004d40", logo:"logos/lah.jpg", score:24.2, min:15.85, majors:"Chỉ huy Tham mưu Lục quân, Quân sự cơ sở - Quân khu 1, Quân sự cơ sở - Quân khu 2", region:"Tỉnh khác"},
  {code:"LBH", name:"Trường Sĩ Quan Lục Quân 2 - Đại học Nguyễn Huệ", short:"LBH", city:"other", abbr:"LBH", color:"#01579b", logo:"logos/lbh.jpg", score:23.72, min:21.75, majors:"Chỉ huy Tham mưu Lục quân (QK4), Chỉ huy Tham mưu Lục quân (QK5), Chỉ huy Tham mưu Lục quân (QK7)", region:"Tỉnh khác"},
  {code:"LCH", name:"Trường Sĩ Quan Chính Trị - Đại Học Chính Trị", short:"LCH", city:"other", abbr:"LCH", color:"#0d47a1", logo:"logos/lch.jpg", score:29.16, min:22.63, majors:"Xây dựng Đảng và Chính quyền Nhà nước (miền Bắc), Xây dựng Đảng và Chính quyền Nhà nước (miền Bắc), Xây dựng Đảng và Chính quyền Nhà nước (miền Bắc)", region:"Tỉnh khác"},
  {code:"LDA", name:"Trường Đại Học Công Đoàn", short:"LDA", city:"other", abbr:"LDA", color:"#1b5e20", logo:"logos/lda.png", score:25.25, min:18.2, majors:"Ngôn ngữ Anh, Kinh tế, Xã hội học", region:"Tỉnh khác"},
  {code:"LNH", name:"Trường Đại Học Lâm nghiệp", short:"LNH", city:"other", abbr:"LNH", color:"#2c3e50", logo:"logos/lnh.jpg", score:20.1, min:15.0, majors:"Kinh tế, Quản trị kinh doanh, Bất động sản", region:"Tỉnh khác"},
  {code:"LNS", name:"Phân hiệu Đại Học Lâm nghiệp tại Đồng Nai", short:"LNS", city:"other", abbr:"LNS", color:"#18bc9c", logo:"logos/lns.jpg", score:16.0, min:15.0, majors:"Quản trị kinh doanh, Tài chính ngân hàng, Kế toán", region:"Đồng Nai"},
  {code:"LPH", name:"Trường Đại Học Luật Hà Nội", short:"HLU", city:"hn", abbr:"HLU", color:"#8b4513", logo:"logos/lph.jpg", score:28.79, min:19.75, majors:"Ngôn ngữ Anh, Ngôn ngữ Anh, Luật", region:"Hà Nội"},
  {code:"LPS", name:"Trường Đại Học Luật TPHCM", short:"LPS", city:"hcm", abbr:"LPS", color:"#8e44ad", logo:"logos/lps.jpg", score:25.65, min:18.12, majors:"7340120, 7380101, 7340120", region:"TP.HCM"},
  {code:"MBS", name:"Trường Đại Học Mở TPHCM", short:"MBS", city:"hcm", abbr:"MBS", color:"#27ae60", logo:"logos/mbs.png", score:25.0, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Anh, Ngôn ngữ Anh Chương trình Tiên tiến", region:"TP.HCM"},
  {code:"MDA", name:"Trường Đại Học Mỏ Địa Chất", short:"MDA", city:"other", abbr:"MDA", color:"#d35400", logo:"logos/mda.jpg", score:25.5, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Quản trị kinh doanh", region:"Tỉnh khác"},
  {code:"MHN", name:"Trường Đại Học Mở Hà Nội", short:"MHN", city:"hn", abbr:"MHN", color:"#c0392b", logo:"logos/mhn.png", score:25.17, min:17.03, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Quản trị kinh doanh", region:"Hà Nội"},
  {code:"MIT", name:"Trường Đại học Công nghệ Miền Đông", short:"MIT", city:"other", abbr:"MIT", color:"#16a085", logo:"logos/mit.jpg", score:19.0, min:15.0, majors:"Thiết kế đồ họa, Ngôn ngữ Anh, Ngôn ngữ Trung", region:"Tỉnh khác"},
  {code:"MTS", name:"Trường Đại Học Mỹ Thuật TPHCM", short:"MTS", city:"hcm", abbr:"MTS", color:"#7f8c8d", logo:"logos/mts.png", score:24.25, min:18.5, majors:"Lý luận lịch sử và phê bình mỹ thuật, Hội họa, Đồ họa", region:"TP.HCM"},
  {code:"MTU", name:"Trường Đại Học Xây Dựng Miền Tây", short:"MTU", city:"other", abbr:"MTU", color:"#2c3e50", logo:"logos/mtu.png", score:15.0, min:15.0, majors:"Kế toán, Kỹ thuật phần mềm, Kỹ thuật môi trường", region:"Tỉnh khác"},
  {code:"NHB", name:"Học Viện Ngân Hàng (Phân Viện Bắc Ninh)", short:"NHB", city:"other", abbr:"NHB", color:"#34495e", logo:"logos/nhb.png", score:21.25, min:20.35, majors:"Kế toán, Ngân hàng, Quản trị kinh doanh", region:"Tỉnh khác"},
  {code:"NHF", name:"Trường Đại Học Hà Nội", short:"NHF", city:"hn", abbr:"NHF", color:"#1abc9c", logo:"logos/nhf.jpg", score:29.0, min:22.1, majors:"Ngôn ngữ Anh, Ngôn ngữ Anh - CTTT, Ngôn ngữ Nga", region:"Hà Nội"},
  {code:"NHH", name:"Học Viện Ngân Hàng", short:"NHH", city:"other", abbr:"NHH", color:"#3498db", logo:"logos/nhh.png", score:26.97, min:21.0, majors:"Chất lượng cao Kế toán, Kế toán, Kế toán Sunderland, Anh (Cấp song bằng)", region:"Tỉnh khác"},
  {code:"NHP", name:"Học Viện Ngân Hàng (Phân Viện Phú Yên)", short:"NHP", city:"other", abbr:"NHP", color:"#9b59b6", logo:"logos/nhp.png", score:15.0, min:15.0, majors:"Kế toán, Ngân hàng, Quản trị kinh doanh", region:"Tỉnh khác"},
  {code:"NHS", name:"Trường Đại Học Ngân Hàng TPHCM", short:"NHS", city:"hcm", abbr:"NHS", color:"#2ecc71", logo:"logos/nhs.jpg", score:23.6, min:18.35, majors:"Ngôn ngữ Anh (Chương trình Tiếng Anh thương mại, Chương trình Song ngữ Anh - Trung), Ngôn ngữ Anh - Chương trình đào tạo đặc biệt, Kinh tế quốc tế", region:"TP.HCM"},
  {code:"NLG", name:"Phân hiệu Đại học Nông Lâm TPHCM tại Gia Lai", short:"NLG", city:"hcm", abbr:"NLG", color:"#e67e22", logo:"logos/nlg.jpg", score:21.0, min:16.0, majors:"Quản trị kinh doanh (Phân hiệu Gia Lai), Kỹ thuật môi trường (Phân hiệu Gia Lai), Nông học (Phân hiệu Gia Lai)", region:"TP.HCM"},
  {code:"NLN", name:"Phân hiệu Đại học Nông Lâm TPHCM tại Ninh Thuận", short:"NLN", city:"hcm", abbr:"NLN", color:"#e74c3c", logo:"logos/nln.png", score:18.0, min:16.0, majors:"Ngôn ngữ Anh (Phân hiệu Ninh Thuận), Quản trị kinh doanh (Phân hiệu Ninh Thuận), Kế toán (Phân hiệu Ninh Thuận)", region:"TP.HCM"},
  {code:"NLS", name:"Trường Đại Học Nông Lâm TPHCM", short:"NLS", city:"hcm", abbr:"NLS", color:"#16a085", logo:"logos/NLU.png", score:24.9, min:16.0, majors:"Giáo dục Mầm non (Trình độ Cao đẳng), Giáo dục Mầm non (Trình độ Đại học), Sư phạm kỹ thuật nông nghiệp", region:"TP.HCM"},
  {code:"NQH", name:"Học Viện Khoa Học Quân Sự - Hệ Quân sự", short:"NQH", city:"other", abbr:"NQH", color:"#95a5a6", logo:"logos/nqh.png", score:30.0, min:24.19, majors:"Ngôn ngữ Anh (Thí sinh Nam), Ngôn ngữ Anh (Thí sinh Nữ), Ngôn ngữ Nga (Thí sinh Nam)", region:"Tỉnh khác"},
  {code:"NTH", name:"Trường Đại học Ngoại thương", short:"FTU", city:"hn", abbr:"FTU", color:"#b81b25", logo:"logos/nth.png", score:30.0, min:24.0, majors:"CT TC Kinh doanh quốc tế, CT TC Kinh doanh quốc tế, CT CLC Kinh doanh quốc tế", region:"Hà Nội"},
  {code:"NTS", name:"Trường Đại học Ngoại thương (Cơ sở II)", short:"NTS", city:"other", abbr:"NTS", color:"#00695c", logo:"logos/nts.png", score:28.3, min:25.45, majors:"CT ĐHNNQT Logistics và Quản lý chuỗi cung ứng, CT TC Kinh tế đối ngoại, CT TC Kinh tế đối ngoại", region:"Tỉnh khác"},
  {code:"NTT", name:"Trường Đại Học Nguyễn Tất Thành", short:"NTT", city:"other", abbr:"NTT", color:"#004d40", logo:"logos/ntt.jpg", score:20.5, min:15.0, majors:"Công nghệ giáo dục, Thanh Nhạc, Piano", region:"Tỉnh khác"},
  {code:"NTU", name:"Trường Đại Học Nguyễn Trãi", short:"NTU", city:"other", abbr:"NTU", color:"#01579b", logo:"logos/ntu.png", score:17.7, min:15.0, majors:"Thiết kế đồ họa, Ngôn ngữ Nhật, Ngôn ngữ Hàn Quốc", region:"Tỉnh khác"},
  {code:"PBH", name:"Trường Sĩ Quan Pháo Binh", short:"PBH", city:"other", abbr:"PBH", color:"#0d47a1", logo:"logos/pbh.jpg", score:24.4, min:22.25, majors:"Chỉ huy Tham mưu Pháo binh (miền Bắc), Chỉ huy Tham mưu Pháo binh (miền Nam)", region:"Tỉnh khác"},
  {code:"PCH", name:"Trường Đại Học Phòng Cháy Chữa Cháy (Phía Bắc)", short:"PCH", city:"other", abbr:"PCH", color:"#1b5e20", logo:"logos/pch.png", score:24.23, min:21.1, majors:"Phòng cháy chữa cháy và cứu nạn, cứu hộ (Thí sinh Nam, miền Bắc), Phòng cháy chữa cháy và cứu nạn, cứu hộ (Thí sinh Nữ, miền Bắc)", region:"Tỉnh khác"},
  {code:"PCS", name:"Trường Đại Học Phòng Cháy Chữa Cháy (phía Nam)", short:"PCS", city:"other", abbr:"PCS", color:"#2c3e50", logo:"logos/pcs.png", score:23.62, min:19.75, majors:"Phòng cháy chữa cháy và cứu nạn, cứu hộ (Thí sinh Nam, miền Nam), Phòng cháy chữa cháy và cứu nạn, cứu hộ (Thí sinh Nữ, miền Nam)", region:"Tỉnh khác"},
  {code:"PKA", name:"Đại Học Phenikaa", short:"PKA", city:"other", abbr:"PKA", color:"#18bc9c", logo:"logos/pka.jpg", score:25.5, min:17.0, majors:"Công nghệ sinh học, Khoa học y sinh, Kỹ thuật hóa học", region:"Tỉnh khác"},
  {code:"PKH", name:"Học Viện Phòng Không – Không Quân", short:"PKH", city:"other", abbr:"PKH", color:"#2980b9", logo:"logos/pkh.jpg", score:26.5, min:23.25, majors:"Ngành Kỹ thuật Hàng không (Thí sinh miền Bắc), Ngành Kỹ thuật Hàng không (Thí sinh miền Nam), Ngành Chỉ huy Tham mưu Phòng không, Không quân và Tác chiến điện tử (Thí sinh miền Bắc)", region:"Tỉnh khác"},
  {code:"PVU", name:"Trường Đại Học Dầu Khí Việt Nam", short:"PVU", city:"other", abbr:"PVU", color:"#8e44ad", logo:"logos/pvu.png", score:20.0, min:20.0, majors:"Kỹ thuật Hóa học (Lọc-Hóa dầu), Kỹ thuật Địa chất (Địa chất - Địa vật lý Dầu khí), Kỹ thuật Dầu khí (Khoan-Khai thác Mỏ Dầu khí)", region:"Tỉnh khác"},
  {code:"QHD", name:"Trường Quản Trị và Kinh Doanh - ĐHQG Hà Nội", short:"QHD", city:"hn", abbr:"QHD", color:"#27ae60", logo:"logos/qhd.png", score:21.5, min:19.0, majors:"Quản trị dịch vụ khách hàng và Chăm sóc sức khỏe, Quản trị An ninh phi truyền thống, Quản trị Doanh nghiệp và Công nghệ", region:"Hà Nội"},
  {code:"QHE", name:"Trường Đại Học Kinh Tế - ĐHQG Hà Nội", short:"UEB", city:"hn", abbr:"UEB", color:"#1e7a46", logo:"logos/qhe.jpg", score:25.72, min:24.2, majors:"Ngành Kinh tế, Ngành Kinh tế phát triển, Ngành Kinh tế quốc tế", region:"Hà Nội"},
  {code:"QHF", name:"Trường Đại Học Ngoại Ngữ - ĐH Quốc gia Hà Nội", short:"ULIS", city:"hn", abbr:"ULIS", color:"#ff6b6b", logo:"logos/qhf.jpg", score:30.0, min:15.06, majors:"Sư phạm tiếng Anh, Sư phạm tiếng Trung, Sư phạm tiếng Nhật", region:"Hà Nội"},
  {code:"QHI", name:"Trường Đại Học Công Nghệ – Đại Học Quốc Gia Hà Nội", short:"UET", city:"hn", abbr:"UET", color:"#e74c3c", logo:"logos/qhi.jpg", score:28.19, min:22.0, majors:"Công nghệ thông tin, Công nghệ nông nghiệp, Kỹ thuật điều khiển và tự động hóa", region:"Hà Nội"},
  {code:"QHK", name:"Trường Khoa học liên ngành và Nghệ thuật Hà Nội", short:"QHK", city:"hn", abbr:"QHK", color:"#7f8c8d", logo:"logos/qhk.jpg", score:27.1, min:21.6, majors:"Nhiếp ảnh nghệ thuật, Nghệ thuật truyền thông Đương đại, Thời trang và sáng tạo", region:"Hà Nội"},
  {code:"QHL", name:"Trường Đại học Luật – ĐHQG Hà Nội", short:"VNU-Law", city:"hn", abbr:"VNULaw", color:"#4a148c", logo:"logos/qhl.jpg", score:24.2, min:23.72, majors:"Luật học, Luật CLC, Luật Thương mại quốc tế", region:"Hà Nội"},
  {code:"QHQ", name:"Trường Quốc Tế  - ĐHQG Hà Nội", short:"QHQ", city:"hn", abbr:"QHQ", color:"#34495e", logo:"logos/qhq.jpg", score:22.0, min:19.0, majors:"Kinh doanh quốc tế, Kế toán, Phân tích và Kiểm toán, Hệ thống thông tin quản lý", region:"Hà Nội"},
  {code:"QHS", name:"Trường Đại Học Giáo Dục - ĐHQG Hà Nội", short:"QHS", city:"hn", abbr:"QHS", color:"#1abc9c", logo:"logos/qhs.jpg", score:29.84, min:25.37, majors:"Sư phạm Toán học, Sư phạm Vật lí, Sư phạm Hoá học", region:"Hà Nội"},
  {code:"QHT", name:"Trường Đại Học Khoa Học Tự Nhiên Hà Nội", short:"HUS", city:"hn", abbr:"HUS", color:"#0052a3", logo:"logos/qht.jpg", score:26.0, min:20.05, majors:"Toán học, Toán tin, Vật lý học", region:"Hà Nội"},
  {code:"QHX", name:"Trường Đại Học Khoa Học Xã Hội và Nhân Văn Hà Nội", short:"USSH", city:"hn", abbr:"USSH", color:"#8b4513", logo:"logos/qhx.jpg", score:29.0, min:21.75, majors:"Báo chí, Báo chí, Báo chí", region:"Hà Nội"},
  {code:"QHY", name:"Trường Đại học Y Dược - ĐHQG Hà Nội", short:"UMP", city:"hn", abbr:"UMP", color:"#00695c", logo:"logos/qhy.jpg", score:27.43, min:17.75, majors:"Y khoa, Y khoa, Dược học", region:"Hà Nội"},
  {code:"QSA", name:"Trường Đại Học An Giang", short:"QSA", city:"other", abbr:"QSA", color:"#e67e22", logo:"logos/qsa.png", score:28.75, min:16.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Giáo dục Tiểu học", region:"Tỉnh khác"},
  {code:"QSC", name:"Trường Đại Học Công Nghệ Thông Tin - ĐHQG TPHCM", short:"UIT", city:"hcm", abbr:"UIT", color:"#0066cc", logo:"logos/qsc.jpg", score:29.6, min:24.0, majors:"Truyền thông Đa phương tiện, Thương mại điện tử, Khoa học dữ liệu", region:"TP.HCM"},
  {code:"QSK", name:"Trường Đại học Kinh Tế Luật TPHCM", short:"UEL", city:"hcm", abbr:"UEL", color:"#c41e3a", logo:"logos/qsk.png", score:28.08, min:23.5, majors:"Kinh tế (Chuyên ngành Kinh tế học), Kinh tế (Chuyên ngành Kinh tế học), Kinh tế (Chuyên ngành Kinh tế và Quản lý công)", region:"TP.HCM"},
  {code:"QSQ", name:"Trường Đại Học Quốc Tế - ĐHQG TPHCM", short:"QSQ", city:"hcm", abbr:"QSQ", color:"#95a5a6", logo:"logos/qsq.png", score:26.0, min:17.5, majors:"Ngôn ngữ Anh (Chương trình liên kết với ĐH West of England (2+2, 3+1,4+0)), Kinh doanh – Quản lý – Kinh tế  (Quản trị kinh doanh (CTLK với ĐH Andrews) (4+0);  Quản trị kinh doanh (CTLK với ĐH Công nghệ Auckland) (1+2/1.5+1.5);  Quản trị kinh doanh (CTLK với ĐH Lakehead) (2+2);  Quản trị kinh doanh (CTLK với ĐH New South Wales) (2+2);  Quản trị kinh doanh (CTLK với ĐH Sydney) (2+2);  Quản trị kinh doanh (CTLK với ĐH West of England) (2+2);  Quản trị kinh doanh (CTLK với ĐH West of England) (4+0);  Quản trị kinh doanh (CTLK với ĐH Macquarie) (2+1);  Tài chính (CTLK với ĐH Macquarie), Toán – Tin học  (Công nghệ thông tin (CTLK với ĐH West of England) (4+0);  Công nghệ thông tin (CTLK với ĐH Macquarie) (2+1);  Khoa học máy tính (CTLK với ĐH West of England) (2+2);  Công nghệ thông tin (CTLK với ĐH Deakin) (2+2);  Công nghệ thông tin (CTLK với ĐH Deakin) (3+1))", region:"TP.HCM"},
  {code:"QST", name:"Trường Đại Học Khoa Học Tự Nhiên TPHCM", short:"HCMUS", city:"hcm", abbr:"KHTN", color:"#006633", logo:"logos/qst.png", score:29.92, min:17.0, majors:"Công nghệ giáo dục, Công nghệ giáo dục, Công nghệ giáo dục", region:"TP.HCM"},
  {code:"QSX", name:"Trường Đại Học Khoa Học Xã Hội và Nhân Văn TPHCM", short:"USSH-HCM", city:"hcm", abbr:"XHNV", color:"#8b4513", logo:"logos/qsx.jpg", score:28.55, min:20.0, majors:"Giáo dục học, Giáo dục học, Giáo dục học", region:"TP.HCM"},
  {code:"QSY", name:"Trường Đại học Khoa học sức khỏe TPHCM", short:"QSY", city:"hcm", abbr:"QSY", color:"#004d40", logo:"logos/qsy.png", score:25.6, min:18.0, majors:"7720201, 7720301, 7720501", region:"TP.HCM"},
  {code:"SDU", name:"Trường Đại học Sao Đỏ", short:"SDU", city:"other", abbr:"SDU", color:"#01579b", logo:"logos/sdu.png", score:26.1, min:15.0, majors:"Sư phạm Tiếng Trung Quốc, Sư phạm công nghệ, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"SGD", name:"Trường Đại Học Sài Gòn", short:"SGD", city:"hcm", abbr:"SGD", color:"#0d47a1", logo:"logos/sgd.png", score:29.27, min:18.02, majors:"Quản lý giáo dục, Quản lý giáo dục, Giáo dục Mầm non", region:"TP.HCM"},
  {code:"SIU", name:"Trường Đại học Tư thục Quốc Tế Sài Gòn", short:"SIU", city:"hcm", abbr:"SIU", color:"#1b5e20", logo:"logos/siu.png", score:18.0, min:15.0, majors:"Công nghệ giáo dục, Ngôn ngữ Anh, Tâm lý học", region:"TP.HCM"},
  {code:"SKH", name:"Trường Đại Học Sư Phạm Kỹ Thuật Hưng Yên", short:"SKH", city:"other", abbr:"SKH", color:"#2c3e50", logo:"logos/skh.png", score:26.7, min:15.0, majors:"Công nghệ giáo dục, Sư phạm Tiếng Anh, Sư phạm công nghệ", region:"Tỉnh khác"},
  {code:"SKN", name:"Trường Đại Học Sư Phạm Kỹ Thuật Nam Định", short:"SKN", city:"other", abbr:"SKN", color:"#18bc9c", logo:"logos/skn.png", score:14.0, min:14.0, majors:"Quản trị kinh doanh, Quản trị kinh doanh (Chuyên ngành Logistics), Kế toán", region:"Tỉnh khác"},
  {code:"SKV", name:"Trường Đại Học Sư Phạm Kỹ Thuật Vinh", short:"SKV", city:"other", abbr:"SKV", color:"#2980b9", logo:"logos/skv.jpg", score:19.5, min:16.0, majors:"Sư phạm công nghệ, Quản trị kinh doanh, Thương mại điện tử", region:"Vinh"},
  {code:"SP2", name:"Trường Đại Học Sư Phạm Hà Nội 2", short:"SP2", city:"hn", abbr:"SP2", color:"#8e44ad", logo:"logos/sp2.png", score:28.52, min:20.25, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Giáo dục Công dân", region:"Hà Nội"},
  {code:"SPD", name:"Trường Đại Học Đồng Tháp", short:"SPD", city:"other", abbr:"SPD", color:"#27ae60", logo:"logos/spd.png", score:29.95, min:14.57, majors:"Công nghệ Giáo dục, Công nghệ Giáo dục, Công nghệ Giáo dục", region:"Tỉnh khác"},
  {code:"SPH", name:"Trường Đại Học Sư Phạm Hà Nội", short:"HNUE", city:"hn", abbr:"HNUE", color:"#2c5aa0", logo:"logos/sph.png", score:29.06, min:19.0, majors:"Quản lí giáo dục, Giáo dục Mầm non, Giáo dục Mầm non - Sư phạm Tiếng Anh", region:"Hà Nội"},
  {code:"SPK", name:"Trường Đại Học Công nghệ Kỹ thuật TP HCM", short:"HCMUTE", city:"hcm", abbr:"SPKT", color:"#ff6600", logo:"logos/spk.png", score:29.93, min:20.32, majors:"Sư phạm tiếng Anh (đào tạo bằng tiếng Việt), Sư phạm tiếng Anh (đào tạo bằng tiếng Việt), Sư phạm tiếng Anh (đào tạo bằng tiếng Việt)", region:"TP.HCM"},
  {code:"SPS", name:"Trường Đại Học Sư Phạm TPHCM", short:"SPS", city:"hcm", abbr:"SPS", color:"#16a085", logo:"logos/sps.jpg", score:29.57, min:17.5, majors:"Giáo dục học, Giáo dục học, Giáo dục học", region:"TP.HCM"},
  {code:"STS", name:"Trường Đại Học Sư Phạm Thể Dục Thể Thao TPHCM", short:"STS", city:"hcm", abbr:"STS", color:"#7f8c8d", logo:"logos/sts.png", score:26.0, min:22.85, majors:"Giáo dục thể chất, Quản lý thể dục thể thao, Huấn luyện Thể thao", region:"TP.HCM"},
  {code:"TBD", name:"Trường Đại Học Thái Bình Dương", short:"TBD", city:"other", abbr:"TBD", color:"#2c3e50", logo:"logos/tbd.jpg", score:18.0, min:15.0, majors:"Thiết kế đồ họa, Ngôn ngữ Anh, Quản lý nhà nước", region:"Bình Dương"},
  {code:"TCT", name:"Đại Học Cần Thơ", short:"TCT", city:"other", abbr:"TCT", color:"#34495e", logo:"logos/tct.jpg", score:28.61, min:15.0, majors:"Giáo dục mầm non, Giáo dục Tiểu học, Giáo dục Công dân", region:"Cần Thơ"},
  {code:"TDB", name:"Trường Đại Học Thể Dục Thể Thao Bắc Ninh", short:"TDB", city:"other", abbr:"TDB", color:"#1abc9c", logo:"logos/tdb.png", score:27.39, min:18.0, majors:"Giáo dục thể chất, Y sinh học TDTT, Quản lý TDTT", region:"Tỉnh khác"},
  {code:"TDD", name:"Trường Đại học Thành Đô", short:"TDD", city:"other", abbr:"TDD", color:"#3498db", logo:"logos/tdd.png", score:19.0, min:16.0, majors:"Giáo dục học, Ngôn ngữ Anh, Ngôn ngữ Trung Quốc", region:"Tỉnh khác"},
  {code:"TDH", name:"Trường Đại Học Sư Phạm Thể Dục Thể Thao Hà Nội", short:"TDH", city:"hn", abbr:"TDH", color:"#9b59b6", logo:"logos/tdh.png", score:27.91, min:27.91, majors:"Giáo dục Quốc phòng và An ninh", region:"Hà Nội"},
  {code:"TDL", name:"Trường Đại Học Đà Lạt", short:"TDL", city:"other", abbr:"TDL", color:"#2ecc71", logo:"logos/tdl.png", score:28.5, min:16.0, majors:"Giáo dục Tiểu học, Sư phạm Toán học, Sư phạm Tin học", region:"Tỉnh khác"},
  {code:"TDM", name:"Trường Đại học Thủ Dầu Một", short:"TDM", city:"other", abbr:"TDM", color:"#e67e22", logo:"logos/tdm.jpg", score:26.86, min:15.0, majors:"Giáo dục học, Giáo dục Mầm non, Giáo dục Tiểu học", region:"Tỉnh khác"},
  {code:"TDS", name:"Trường Đại Học Thể Dục Thể Thao TPHCM", short:"TDS", city:"hcm", abbr:"TDS", color:"#e74c3c", logo:"logos/tds.jpg", score:26.52, min:21.0, majors:"Giáo dục thể chất, Y sinh học thể dục thể thao, Ọuản lý thể dục thể thao", region:"TP.HCM"},
  {code:"TDV", name:"Trường Đại Học Vinh", short:"VINH", city:"na", abbr:"VINH", color:"#2980b9", logo:"logos/tdv.jpg", score:28.4, min:16.0, majors:"Quản lý giáo dục, Giáo dục Tiểu học, Giáo dục Tiểu học", region:"Nghệ An"},
  {code:"TGH", name:"Trường Sĩ Quan Tăng - Thiết Giáp", short:"TGH", city:"other", abbr:"TGH", color:"#95a5a6", logo:"logos/tgh.png", score:24.05, min:22.36, majors:"Chỉ huy tham mưu Tăng Thiết giáp (Thí sinh nam miền Bắc), Chỉ huy tham mưu Tăng Thiết giáp (Thí sinh nam miền Nam)", region:"Tỉnh khác"},
  {code:"THP", name:"Trường Đại Học Hải Phòng", short:"THP", city:"other", abbr:"THP", color:"#4a148c", logo:"logos/thp.jpg", score:27.0, min:17.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Giáo dục Thể chất", region:"Hải Phòng"},
  {code:"THV", name:"Trường Đại Học Hùng Vương", short:"THV", city:"other", abbr:"THV", color:"#00695c", logo:"logos/thv.png", score:27.9, min:18.0, majors:"Giáo dục Tiểu học, Sư phạm Toán (Toán tin), Sư phạm Ngữ văn", region:"Tỉnh khác"},
  {code:"TKG", name:"Trường Đại học Kiên Giang", short:"TKG", city:"other", abbr:"TKG", color:"#004d40", logo:"logos/tkg.jpg", score:24.85, min:15.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Sư phạm Toán học", region:"Tỉnh khác"},
  {code:"TLA", name:"Trường Đại Học Thủy Lợi", short:"TLA", city:"other", abbr:"TLA", color:"#01579b", logo:"logos/tla.jpg", score:25.5, min:17.0, majors:"Xây dựng và quản lý công trình thủy (Kỹ thuật xây dựng công trình thủy), Kỹ thuật tài nguyên nước, Tài nguyên nước và môi trường (Thủy văn học)", region:"Tỉnh khác"},
  {code:"TLS", name:"Trường Đại Học Thủy Lợi (Cơ sở 2)", short:"TLS", city:"other", abbr:"TLS", color:"#0d47a1", logo:"logos/tls.jpg", score:21.0, min:15.0, majors:"Kỹ thuật xây dựng công trình thủy, Kỹ thuật tài nguyên nước, Nhóm ngành kỹ thuật xây dựng (kỹ thuật xây dựng dân dụng và công nghiệp; kỹ thuật xây dựng công trình giao thông; xây dựng và quản lý hạ tầng đô thị)", region:"Tỉnh khác"},
  {code:"TMU", name:"Trường Đại Học Thương Mại", short:"TMU", city:"other", abbr:"TMU", color:"#1b5e20", logo:"logos/tmu.jpg", score:27.8, min:22.5, majors:"Quản trị kinh doanh (Quản trị kinh doanh), Quản trị kinh doanh (Quản trị kinh doanh - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP), Quản trị kinh doanh (Khởi nghiệp và phát triển kinh doanh)", region:"Tỉnh khác"},
  {code:"TQU", name:"Trường Đại học Tân Trào", short:"TQU", city:"other", abbr:"TQU", color:"#2c3e50", logo:"logos/tqu.png", score:23.5, min:16.0, majors:"Quản lý văn hóa, Chính trị học, Tâm lý học", region:"Tỉnh khác"},
  {code:"TSN", name:"Trường Đại Học Nha Trang", short:"TSN", city:"other", abbr:"TSN", color:"#18bc9c", logo:"logos/tsn.jpg", score:25.47, min:18.87, majors:"Ngôn ngữ Anh (04 chuyên ngành: Biên - phiên dịch; Tiếng Anh du lịch; Giảng dạy Tiếng Anh; Song ngữ Anh -Trung), Ngôn ngữ Anh (04 chuyên ngành: Biên - phiên dịch; Tiếng Anh du lịch; Giảng dạy Tiếng Anh; Song ngữ Anh -Trung), Kinh tế (02 chuyên ngành: Kinh tế thủy sản; Quản lý kinh tế)", region:"Nha Trang"},
  {code:"TTB", name:"Trường Đại Học Tây Bắc", short:"TTB", city:"other", abbr:"TTB", color:"#2980b9", logo:"logos/ttb.png", score:28.11, min:15.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Giáo dục Chính trị", region:"Tỉnh khác"},
  {code:"TTD", name:"Trường Đại Học Thể Dục Thể Thao Đà Nẵng", short:"TTD", city:"dn", abbr:"TTD", color:"#8e44ad", logo:"logos/ttd.png", score:23.93, min:21.5, majors:"Quản lý TDTT, Huấn luyện thể thao", region:"Đà Nẵng"},
  {code:"TTG", name:"Trường Đại Học Tiền Giang", short:"TTG", city:"other", abbr:"TTG", color:"#27ae60", logo:"logos/ttg.jpg", score:18.0, min:15.0, majors:"Văn hoá học, Kinh tế, Quản trị kinh doanh", region:"Tỉnh khác"},
  {code:"TTH", name:"Trường Sĩ Quan Thông Tin - Hệ Quân sự - Đại Học Thông Tin Liên Lạc", short:"TTH", city:"other", abbr:"TTH", color:"#d35400", logo:"logos/tth.jpg", score:23.84, min:22.75, majors:"Chỉ huy - Tham mưu Thông tin (miền Bắc), Chỉ huy - Tham mưu Thông tin (miền Nam)", region:"Tỉnh khác"},
  {code:"TTN", name:"Trường Đại Học Tây Nguyên", short:"TTN", city:"other", abbr:"TTN", color:"#c0392b", logo:"logos/ttn.jpg", score:27.91, min:15.0, majors:"Giáo dục Mầm non, Giáo dục Tiểu học, Giáo dục Tiểu học – Tiếng Jrai", region:"Tỉnh khác"},
  {code:"TTU", name:"Trường Đại học Tân Tạo", short:"TTU", city:"other", abbr:"TTU", color:"#16a085", logo:"logos/ttu.png", score:20.5, min:15.0, majors:"Ngôn ngữ Anh, Quản trị kinh doanh, Digital Marketing", region:"Tỉnh khác"},
  {code:"TYS", name:"Trường Đại Học Y Khoa Phạm Ngọc Thạch", short:"TYS", city:"other", abbr:"TYS", color:"#7f8c8d", logo:"logos/tys.png", score:25.55, min:18.0, majors:"Y khoa, Y học cổ truyền, Dược học", region:"Tỉnh khác"},
  {code:"UEF", name:"Trường Đại Học Kinh Tế Tài Chính TPHCM", short:"UEF", city:"hcm", abbr:"UEF", color:"#2c3e50", logo:"logos/uef.jpg", score:16.0, min:15.0, majors:"Thiết kế đồ họa, Thiết kế đồ họa, Ngôn ngữ Anh", region:"TP.HCM"},
  {code:"UFA", name:"Trường Đại học Tài Chính Kế Toán", short:"UFA", city:"other", abbr:"UFA", color:"#34495e", logo:"logos/ufa.jpg", score:19.0, min:15.0, majors:"Quản trị kinh doanh, Quản trị kinh doanh, Kinh doanh quốc tế", region:"Tỉnh khác"},
  {code:"UKH", name:"Trường Đại học Khánh Hòa", short:"UKH", city:"other", abbr:"UKH", color:"#1abc9c", logo:"logos/ukh.png", score:26.41, min:15.0, majors:"Giáo dục Tiểu học, Sư phạm Toán học, Sư phạm Vật lý", region:"Tỉnh khác"},
  {code:"UMT", name:"Trường Đại học Quản lý và công nghệ TPHCM", short:"UMT", city:"hcm", abbr:"UMT", color:"#3498db", logo:"logos/umt.png", score:25.0, min:15.0, majors:"Thiết kế đồ họa, Truyền thông đa phương tiện, Quản trị kinh doanh", region:"TP.HCM"},
  {code:"VGU", name:"Trường Đại Học Việt Đức", short:"VGU", city:"other", abbr:"VGU", color:"#9b59b6", logo:"logos/vgu.jpg", score:26.5, min:18.0, majors:"Kinh tế học (BSE), Quản trị kinh doanh (BBA), Tài chính và Kế toán (BFA)", region:"Tỉnh khác"},
  {code:"VHD", name:"Trường Đại Học Công Nghiệp Việt - Hung", short:"VHD", city:"other", abbr:"VHD", color:"#2ecc71", logo:"logos/vhd.png", score:18.4, min:16.0, majors:"Kinh tế, Kinh tế số, Quản trị kinh doanh", region:"Tỉnh khác"},
  {code:"VHS", name:"Trường Đại Học Văn Hóa TPHCM", short:"VHS", city:"hcm", abbr:"VHS", color:"#e67e22", logo:"logos/vhs.png", score:26.75, min:24.1, majors:"Văn hóa các dân tộc thiểu số Việt Nam, Văn hóa học, chuyên ngành Văn hóa Việt Nam, Văn hóa học, chuyên ngành Công nghiệp Văn hóa", region:"TP.HCM"},
  {code:"VJU", name:"Trường Đại học Việt Nhật - ĐHQG Hà Nội", short:"VJU", city:"hn", abbr:"VJU", color:"#e74c3c", logo:"logos/vju.jpg", score:22.0, min:20.0, majors:"Đổi mới và Phát triển toàn cầu – BGDI, Nhật Bản học – BJS, Khoa học & Kỹ thuật máy tính – BCSE", region:"Hà Nội"},
  {code:"VKU", name:"Trường Đại học Công nghệ Thông tin và Truyền thông Việt Hàn - Đại học Đà Nẵng", short:"VKU", city:"dn", abbr:"VKU", color:"#16a085", logo:"logos/vku.png", score:24.0, min:18.0, majors:"Công nghệ truyền thông (cử nhân), Chuyên ngành Thiết kế Mỹ thuật số (cử nhân), Quản trị kinh doanh", region:"Đà Nẵng"},
  {code:"VLU", name:"Trường Đại Học Sư Phạm Kỹ Thuật Vĩnh Long", short:"VLU", city:"other", abbr:"VLU", color:"#95a5a6", logo:"logos/vlu.jpg", score:22.0, min:14.0, majors:"Giáo dục học, Sư phạm công nghệ, Ngôn ngữ Anh", region:"Tỉnh khác"},
  {code:"VUI", name:"Trường Đại Học Công Nghiệp Việt Trì", short:"VUI", city:"other", abbr:"VUI", color:"#4a148c", logo:"logos/vui.jpg", score:15.0, min:15.0, majors:"Ngôn ngữ Anh, Ngôn ngữ Trung Quốc, Quản trị kinh doanh", region:"Tỉnh khác"},
  {code:"XDA", name:"Trường Đại Học Xây Dựng Hà Nội", short:"XDA", city:"hn", abbr:"XDA", color:"#00695c", logo:"logos/xda.jpg", score:27.0, min:20.4, majors:"Mỹ thuật đô thị, CTĐT Nghệ thuật và thiết kế, Quản lý dự án", region:"Hà Nội"},
  {code:"XDN", name:"Phân hiệu Đại học Xây dựng miền Trung tại Đà Nẵng", short:"XDN", city:"dn", abbr:"XDN", color:"#004d40", logo:"logos/xdn.png", score:15.0, min:15.0, majors:"Quản trị kinh doanh, Thương mại điện tử, Kế toán", region:"Đà Nẵng"},
  {code:"XDT", name:"Trường Đại Học Xây Dựng Miền Trung", short:"XDT", city:"other", abbr:"XDT", color:"#01579b", logo:"logos/xdt.jpg", score:15.0, min:15.0, majors:"Quản trị kinh doanh, Thương mại điện tử, Tài chính - Ngân hàng", region:"Tỉnh khác"},
  {code:"YCT", name:"Trường Đại Học Y Dược Cần Thơ", short:"YCT", city:"other", abbr:"YCT", color:"#0d47a1", logo:"logos/yct.jpg", score:23.88, min:17.0, majors:"Kỹ thuật Y sinh, Y khoa, Y học dự phòng", region:"Cần Thơ"},
  {code:"YDN", name:"Trường Đại học Kỹ thuật Y Dược Đà Nẵng", short:"YDN", city:"dn", abbr:"YDN", color:"#1b5e20", logo:"logos/ydn.jpg", score:22.85, min:15.0, majors:"Y khoa, Dược học, Điều dưỡng đa khoa", region:"Đà Nẵng"},
  {code:"YDS", name:"Đại Học Y Dược TPHCM", short:"UMP-HCM", city:"hcm", abbr:"YHC", color:"#004d99", logo:"logos/yds.jpg", score:27.34, min:17.0, majors:"Y khoa, Y học dự phòng, Y học cổ truyền", region:"TP.HCM"},
  {code:"YHB", name:"Trường Đại Học Y Hà Nội", short:"HMU", city:"hn", abbr:"YHN", color:"#a32d2d", logo:"logos/yhb.jpg", score:28.7, min:17.0, majors:"Tâm lý học, Tâm lý học, Tâm lý học", region:"Hà Nội"},
  {code:"YKV", name:"Trường Đại Học Y Khoa Vinh", short:"YKV", city:"other", abbr:"YKV", color:"#2980b9", logo:"logos/ykv.jpg", score:22.1, min:17.25, majors:"Y khoa, Y học dự phòng, Dược học", region:"Vinh"},
  {code:"YPB", name:"Trường Đại Học Y Dược Hải Phòng", short:"YPB", city:"other", abbr:"YPB", color:"#8e44ad", logo:"logos/ypb.jpg", score:25.33, min:19.35, majors:"Y khoa, Y học dự phòng, Y học cổ truyền", region:"Hải Phòng"},
  {code:"YQH", name:"Học Viện Quân Y - Hệ Quân sự", short:"YQH", city:"other", abbr:"YQH", color:"#27ae60", logo:"logos/yqh.png", score:30.0, min:24.81, majors:"Ngành Y khoa (Bác sỹ đa khoa) (Thí sinh Nam, miền Bắc), Ngành Y khoa (Bác sỹ đa khoa) (Thí sinh Nam, miền Nam), Ngành Y khoa (Bác sỹ đa khoa) (Thí sinh Nữ, miền Bắc)", region:"Tỉnh khác"},
  {code:"YTB", name:"Trường Đại Học Y Dược Thái Bình", short:"YTB", city:"other", abbr:"YTB", color:"#d35400", logo:"logos/ytb.png", score:24.6, min:17.0, majors:"Y khoa, Y học dự phòng, Y học cổ truyền", region:"Tỉnh khác"},
  {code:"YTC", name:"Trường Đại Học Y Tế Công Cộng", short:"YTC", city:"other", abbr:"YTC", color:"#c0392b", logo:"logos/ytc.jpg", score:23.5, min:18.3, majors:"Khoa học dữ liệu, Dinh dưỡng, Kỹ thuật xét nghiệm y học", region:"Tỉnh khác"},
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
  if (document.getElementById('all-schools-grid') && !window.__schoolsPageUpgraded) renderSchools('all');
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

function getMajorRedirectUrl(majorSlug) {
  const normSlug = majorSlug.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase();
  
  if (normSlug === 'cntt-khoa-hoc-may-tinh') {
    const prefix = window.location.pathname.includes('/University/') ? '../' : '';
    return `${prefix}MAJORS/cntt-khoa-hoc-may-tinh.html`;
  } else if (normSlug === 'y-khoa') {
    const prefix = window.location.pathname.includes('/University/') ? '../' : '';
    return `${prefix}MAJORS/y-khoa.html`;
  } else {
    const prefix = window.location.pathname.includes('/University/') ? '../' : '';
    return `${prefix}nhom-nganh.html?major=${majorSlug}`;
  }
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
    <div class="career-card" onclick="window.location.href=getMajorRedirectUrl('${majorSlug}')" style="cursor:pointer;">
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
  window.location.href = getMajorRedirectUrl(majorSlug);
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
if (!window.__schoolsPageUpgraded && document.getElementById('all-schools-grid')) renderSchools('all');
if (document.getElementById('q-text')) initQuiz();
