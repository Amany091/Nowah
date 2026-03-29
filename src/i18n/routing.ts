import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
    locales: ['en', 'ar'],
    defaultLocale: 'ar'
});

export default routing;