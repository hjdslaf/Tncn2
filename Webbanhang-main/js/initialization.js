//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Nấm đùi gà xào cháy tỏi',
            img: './assets/img/products/nam-dui-ga-chay-toi.jpeg',
            category: 'Món mặn',
            price: 200000,
            desc: '54 Quan Hoa.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Rau xào ngũ sắc',
            img: './assets/img/products/rau-xao-ngu-sac.png',
            category: 'Món mặn',
            price: 180000,
            desc: '545 Nguyễn Khang'
        },
        {
            id: 3,
            status: 1, 
            title: 'Bánh lava phô mai nướng',
            img: './assets/img/products/banh_lava_pho_mai_nuong.jpeg',
            category: 'Món mặn',
            price: 180000,
            desc: '45 Nguyễn Trãi'
        },
        {
            id: 4,
            status: 1, title: 'Set lẩu thái Tomyum',
            img: './assets/img/products/lau_thai.jpg',
            category: 'Món mặn',
            price: 699000,
            desc: '457 Triều Khúc'
        },
        {
            id: 5,
            status: 1, 
            title: 'Cơm chiên cua',
            img: './assets/img/products/com_chien_cua.png',
            category: 'Món mặn',
            price: 280000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 6,
            status: 1, 
            title: 'Súp bào ngư hải sâm (1 phần)',
            img: './assets/img/products/sup-bao-ngu-hai-sam.jpeg',
            category: 'Món mặn',
            price: 540000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 7,
            status: 1, 
            title: 'Tai cuộn lưỡi',
            category: 'Món mặn',
            img: './assets/img/products/tai-cuon-luoi.jpeg',
            price: 340000,
            desc: '54 Quan Hoa.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Xíu mại tôm thịt 10 viên',
            img: './assets/img/products/xiu_mai_tom_thit_10_vien.jpg',
            category: 'Món mặn',
            price: 140000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 9,
            status: 1, 
            title: 'Trà phô mai kem sữa',
            category: "Nước uống",
            img: './assets/img/products/tra-pho-mai-kem-sua.jpg',
            price: 34000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 10,
            status: 1, 
            title: 'Trà đào chanh sả',
            category: "Nước uống",
            img: './assets/img/products/tra-dao-chanh-sa.jpg',
            price: 25000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 11,
            status: 1, 
            title: 'Bánh chuối nướng',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-chuoi-nuong.jpeg',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 12,
            status: 1, 
            title: 'Há cảo sò điệp (10 viên)',
            img: './assets/img/products/ha_cao.jpg',
            category: 'Món mặn',
            price: 140000,
            desc: '54 Quan Hoa.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Chả rươi (100gr)',
            img: './assets/img/products/thit_nuong.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 14,
            status: 1, 
            title: 'Nộm gà Hội An (1 phần)',
            img: './assets/img/products/nom_ga_hoi_an.png',
            category: 'Món mặn',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 15,
            status: 1, 
            title: 'Set bún cá (1 set 5 bát)',
            img: './assets/img/products/set_bun_ca.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 16,
            status: 1, 
            title: 'Bún cá (1 phần)',
            img: './assets/img/products/set_bun_ca.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: '54 Quan Hoa.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Xôi trắng hành phi (1 phần)',
            img: './assets/img/products/bun_ca_hanh_phi.jpeg',
            category: 'Món mặn',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 18,
            status: 1, 
            title: 'Tôm sú lột rang thịt (1 phần)',
            img: './assets/img/products/tom_su_luot_ran_thit.png',
            category: 'Món mặn',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 19,
            status: 1, 
            title: 'Bánh cookie dừa',
            img: './assets/img/products/banh_cookie_dua.jpeg',
            category: 'Món mặn',
            price: 130000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 20,
            status: 1, 
            title: 'Cá chiên giòn sốt mắm Thái',
            img: './assets/img/products/sot_mam_thai.jpeg',
            category: 'Món mặn',
            price: 130000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 21,
            status: 1, 
            title: 'Tôm sú rang muối (1 suất)',
            category: 'Món mặn',
            img: './assets/img/products/tom-su-rang-muoi.jpeg',
            price: 550000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 22,
            status: 1, 
            title: 'Tôm sú rang bơ tỏi (1 suất)',
            category: 'Món mặn',
            img: './assets/img/products/tom-su-rang-bo-toi.jpeg',
            price: 550000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 23,
            status: 1, 
            title: 'Combo Vịt quay và gỏi vịt',
            category: 'Món mặn',
            img: './assets/img/products/combo-vitquay-va-goivit.jpeg',
            price: 510000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 24,
            status: 1, 
            title: 'Set cá cơm tầm',
            img: './assets/img/products/set_ca_tam.jpg',
            category: 'Món mặn',
            price: 950000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 25,
            status: 1, 
            title: 'Chả ốc 1 phần',
            img: './assets/img/products/cha_oc_1_phan.jpeg',
            category: 'Món mặn',
            price: 350000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 26,
            status: 1, 
            title: 'Gà ủ muối thảo mộc (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ga-u-muoi-thao-moc.png',
            price: 450000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 27,
            status: 1, 
            title: 'Gà không lối thoát (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ga-khong-loi-thoat.png',
            price: 520000,
            desc: '54 Quan Hoa.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Cá chiên giòn mắm Thái (1 con)',
            category: 'Món mặn',
            img: './assets/img/products/ca-chien-gion-mam-thai.jpeg',
            price: 350000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 29,
            status: 1, 
            title: 'Chân giò chiên giòn mắm Thái',
            category: 'Món mặn',
            img: './assets/img/products/chan-gio-chien-gion-mam-thai.jpeg',
            price: 420000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 30,
            status: 1, 
            title: 'Chả cốm (500gr)',
            category: 'Món mặn',
            img: './assets/img/products/cha-com.png',
            price: 175000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 31,
            status: 1, 
            title: 'Vịt om sấu (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/vit-om-sau.jpeg',
            price: 350000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 32,
            status: 1, 
            title: 'Giò xào (1kg)',
            category: 'Món mặn',
            img: './assets/img/products/gio-xao.jpeg',
            price: 460000,
            desc: '54 Quan Hoa.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Nem tai (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/nem-tai.jpeg',
            price: 200000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 34,
            status: 1, 
            title: 'Canh dưa bò hầm (1 hộp)',
            category: 'Món mặn',
            img: './assets/img/products/canh-dua-bo-ham.jpeg',
            price: 270000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 35,
            status: 1, 
            title: 'Nạc nọng heo nướng kèm xôi trắng (500gr)',
            category: 'Món mặn',
            img: './assets/img/products/nac-nong-heo-nuong-kem-xoi-trang.jpeg',
            price: 300000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 36,
            status: 1, 
            title: 'Thịt quay (400gr)',
            category: 'Món mặn',
            img: './assets/img/products/thit-quay.jpeg',
            price: 280000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 37,
            status: 1, 
            title: 'Khâu nhục',
            category: 'Món mặn',
            img: './assets/img/products/khau-nhuc.jpeg',
            price: 280000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 38,
            status: 1, 
            title: 'Xíu mại tôm thịt ( 10 viên)',
            category: 'Món mặn',
            img: './assets/img/products/ha_cao_tom_thit.jpg',
            price: 140000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 39,
            status: 1, 
            title: 'Chè hương cốm lá dứa',
            category: 'Món tráng miệng',
            img: './assets/img/products/che-com-la-dua.jpeg',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 40,
            status: 1, 
            title: 'Bánh bông lan chanh dây',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-bong-lan-chanh-day.jpeg',
            price: 50000,
            desc: '45 Nguyễn Trãi'        },

        {
            id: 41,
            status: 1, 
            title: 'Chè bưởi',
            category: 'Món tráng miệng',
            img: './assets/img/products/che-buoi.jpeg',
            price: 50000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 42,
            status: 1, 
            title: 'Set lẩu Thái tomyum',
            category: "Món lẩu",
            img: './assets/img/products/lau-thai-tomyum.jpeg',
            price: 699000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 43,
            status: 1, 
            title: 'Set lẩu Thái nấm chay',
            category: "Món lẩu",
            img: './assets/img/products/lau-thai-nam-chay.png',
            price: 550000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 44,
            status: 1, 
            title: 'Đậu hũ xào nấm chay',
            category: "Món chay",
            img: './assets/img/products/dau-hu-xao-nam-chay.png',
            price: 220000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 45,
            status: 1, 
            title: 'Bún trộn chay (1 suất)',
            category: "Món chay",
            img: './assets/img/products/bun-tron-chay.png',
            price: 75000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 46,
            status: 1, 
            title: 'Bún riêu chay (1 suất)',
            category: "Món chay",
            img: './assets/img/products/bun-rieu-chay.png',
            price: 75000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 47,
            status: 1, 
            title: 'Miến xào rau củ chay',
            category: "Món chay",
            img: './assets/img/products/mien-xao-rau-cu-chay.png',
            price: 170000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 48,
            status: 1, 
            title: 'Cuốn nấm chay (10 cuốn)',
            category: "Món chay",
            img: './assets/img/products/cuon-nam-chay.png',
            price: 120000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 49,
            status: 1, 
            title: 'Xôi xéo',
            category: "Món chay",
            img: './assets/img/products/xoi-xeo.png',
            price: 80000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 50,
            status: 1, 
            title: 'Chả quế chay',
            category: "Món chay",
            img: './assets/img/products/cha-que-chay.png',
            price: 70000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 51,
            status: 1, 
            title: 'Nem chay',
            category: "Món chay",
            img: './assets/img/products/nem-chay.png',
            price: 160000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 52,
            status: 1, 
            title: 'Bánh tráng trộn',
            category: "Món ăn vặt",
            img: './assets/img/products/banh-trang-tron.jpg',
            price: 20000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 53,
            status: 1, 
            title: 'Bánh tráng nướng',
            category: "Món ăn vặt",
            img: './assets/img/products/banh-trang-nuong.jpg',
            price: 10000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 54,
            status: 1, 
            title: 'Ốc thập cẩm (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/oc-thap-cam.jpg',
            price: 50000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 55,
            status: 1, 
            title: 'Cơm cháy chà bông',
            category: "Món ăn vặt",
            img: './assets/img/products/com-chay-cha-bong.jpg',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 56,
            status: 1, 
            title: 'Phá lấu (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/pha-lau.jpg',
            price: 99000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 57,
            status: 1, 
            title: 'Bột chiên (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/bot-chien.jpg',
            price: 49000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 58,
            status: 1, 
            title: 'Gỏi khô bò (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/goi-bo-kho.jpg',
            price: 60000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 59,
            status: 1, 
            title: 'Hoành thánh tôm (10 viên)',
            img: './assets/img/products/hoanh_thanh.jpg',
            category: 'Món mặn',
            price: 130000,
            desc: '45 Nguyễn Trãi'        },
        {
            id: 60,
            status: 1, 
            title: 'Nước ép dâu tây',
            img: './assets/img/products/nuoc-ep-dau-tay.jpg',
            category: 'Nước uống',
            price: 100000,
            desc: '45 Nguyễn Trãi'        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Admin",
            phone: "admin",
            password: "admin",
            address: 'https://github.com/hgbaodev',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Ngô Văn Phúc",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();