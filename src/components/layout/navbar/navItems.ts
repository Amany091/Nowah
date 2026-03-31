interface NavItem {
    id: number;
    href: string;
    label: string;
    type: string;
    options?: {optionEn: string; optionAr: string; link: string; }[]
}

const navItems: NavItem[] = [
    { id: 1, href: '/', label: 'الرئيسية', type: 'home' },
    { id: 2, href: '/about', label: 'من نحن', type: 'whoUs' },
    { id: 3, href: '/services', label: 'خدماتنا', type: 'servises',
        options:[
            {optionEn: "Mobile App Development", optionAr: "تطوير تطبيقات الجوال", link: "/services/mobileDevelopment"},
            {optionEn: "UIUX Design", optionAr: "تصميم واجهات المستخدم", link: "/services/userInterface"},
            {optionEn: "Service Support", optionAr: "دعم الخدمات", link: "/services/serviceSupport"},
            {optionEn: "Business Management System", optionAr: "نظام إدارة الأعمال", link: "/services/businessManagementSystem"},
            {optionEn: "ecommerceDevelopment", optionAr: "تطوير التجارة الإلكترونية", link: "/services/ecommerceDevelopment"},
            {optionEn: "Website Development", optionAr: "تطوير المواقع الإلكترونية", link: "/services/websiteDevelopment"}
        ]},
    { id: 4, href: '/ourWorks', label: 'أعمالنا', type: 'works' },
    { id: 5, href: '/blog', label: 'المدونة', type: 'blog' },
    { id: 6, href: '/contact', label: 'تواصل معنا', type: 'contactus' },
];

export default navItems