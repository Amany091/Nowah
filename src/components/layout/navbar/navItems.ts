interface NavItem {
    id: number;
    href: string;
    label: string;
    type: string;
    options?: {option: string; link: string}[]
}

const navItems: NavItem[] = [
    { id: 1, href: '/', label: 'الرئيسية', type: 'home' },
    { id: 2, href: '/about', label: 'من نحن', type: 'whoUs' },
    { id: 3, href: '/services', label: 'خدماتنا', type: 'servises',
        options:[
            {option: "Mobile App Development", link: "/services/mobileDevelopment"},
            {option: "UIUX Design", link: "/services/userInterface"},
            {option: "Service Support", link: "/services/serviceSupport"},
            {option: "Business Management System", link: "/services/businessManagementSystem"},
            {option: "ecommerceDevelopment", link: "/services/ecommerceDevelopment"},
        {option: "Website Development", link: "/services/websiteDevelopment"}]},
    { id: 4, href: '/ourWorks', label: 'أعمالنا', type: 'works' },
    { id: 5, href: '/blog', label: 'المدونة', type: 'blog' },
    { id: 6, href: '/contact', label: 'تواصل معنا', type: 'contactus' },
];

export default navItems