# Luxe — ثيم سلة الاحترافي

<div align="center">
  <img src="https://img.shields.io/badge/Salla-Twilight%20Engine-blueviolet?style=flat-square" alt="Twilight Engine">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/license-Commercial-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/RTL-Arabic%20First-orange?style=flat-square" alt="RTL">
  <img src="https://img.shields.io/badge/Dark%20Mode-Supported-darkgray?style=flat-square" alt="Dark Mode">
</div>

<br>

> ثيم سلة احترافي بتصميم عصري وأداء عالي، مبني بمحرك Twilight مع دعم كامل للعربية والوضع المظلم وتخصيص واسع من لوحة التحكم.

---

## ✨ المميزات

| الميزة | التفاصيل |
|--------|----------|
| 🎨 **تصميم عصري** | واجهة حديثة مع تجربة مستخدم متميزة |
| 📱 **Mobile First** | مصمم أولاً للجوال ومتجاوب مع جميع الشاشات |
| 🌙 **Dark Mode** | وضع مظلم كامل مع حفظ تفضيل المستخدم |
| 🌐 **RTL / Arabic First** | دعم كامل للغة العربية من اليمين لليسار |
| ⚡ **أداء عالي** | Core Web Vitals Friendly مع تحسين كامل للسرعة |
| 🔍 **SEO Optimized** | Structured Data, Open Graph, Canonical URLs |
| 🎛️ **تخصيص واسع** | 30+ إعداد قابل للتخصيص من لوحة التحكم |
| ♿ **Accessibility** | متوافق مع WCAG 2.1 ومعايير الوصولية |
| 🛒 **Cart Drawer** | سلة تسوق جانبية سلسة دون إعادة تحميل الصفحة |
| 🔎 **بحث متقدم** | بحث لحظي مع اقتراحات |

---

## 📁 هيكل المشروع

```
salla-theme-luxe/
├── twilight.json              # إعدادات الثيم الرئيسية
├── package.json
├── webpack.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── assets/
    │   ├── js/
    │   │   └── theme.js       # JavaScript الرئيسي
    │   └── styles/
    │       └── main.scss      # CSS الرئيسي
    ├── locales/
    │   ├── ar.json            # ترجمة عربي
    │   └── en.json            # ترجمة إنجليزي
    └── views/
        ├── layouts/
        │   └── master.twig    # Layout الرئيسي
        ├── components/
        │   ├── header/        # مكونات الهيدر
        │   ├── footer/        # مكونات الفوتر
        │   ├── home/          # مكونات الصفحة الرئيسية
        │   ├── partials/      # مكونات مشتركة
        │   └── comments.twig  # مكوّن التعليقات
        └── pages/
            ├── index.twig           # الصفحة الرئيسية
            ├── cart.twig            # صفحة السلة
            ├── search.twig          # صفحة البحث
            ├── thank-you.twig       # شكراً على طلبك
            ├── loyalty.twig         # برنامج المكافآت
            ├── page-single.twig     # صفحة مقالة ثابتة
            ├── landing-page.twig    # الصفحة الترويجية
            ├── 404.twig             # صفحة الخطأ 404
            ├── 500.twig             # صفحة الخطأ 500
            ├── maintenance.twig     # صفحة الصيانة
            ├── product/
            │   ├── index.twig       # قائمة المنتجات
            │   └── single.twig      # صفحة المنتج الفردي
            ├── customer/
            │   ├── profile.twig     # الملف الشخصي
            │   ├── wishlist.twig    # المفضلة
            │   ├── notifications.twig
            │   └── orders/
            │       ├── index.twig   # قائمة الطلبات
            │       └── single.twig  # تفاصيل الطلب
            ├── blog/
            │   ├── index.twig       # قائمة المقالات
            │   └── single.twig      # المقال الفردي
            └── brands/
                ├── index.twig       # قائمة العلامات
                └── single.twig      # علامة تجارية
```

---

## 🚀 البدء السريع

### المتطلبات

- Node.js >= 18
- Salla CLI مثبّت
- حساب على Salla Partners Portal

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/ibrahemalessa/salla-theme-luxe.git
cd salla-theme-luxe

# تثبيت الاعتماديات
npm install

# بدء التطوير مع المعاينة الحية
salla theme preview
```

### البناء للإنتاج

```bash
npm run build
```

---

## 🎛️ إعدادات التخصيص

يمكن تخصيص الثيم من لوحة تحكم سلة من خلال الإعدادات التالية:

### الهوية البصرية
| الإعداد | الوصف |
|---------|-------|
| `logo` | شعار المتجر |
| `favicon` | أيقونة المتصفح |
| `primary_color` | اللون الرئيسي |
| `secondary_color` | اللون الثانوي |
| `accent_color` | لون التمييز |
| `font_family` | نوع الخط (Tajawal / Cairo / Almarai / Noto Kufi) |
| `border_radius` | حدة الزوايا (حادة / خفيفة / متوسطة / دائرية) |
| `dark_mode` | تفعيل الوضع المظلم افتراضياً |

### الهيدر
| الإعداد | الوصف |
|---------|-------|
| `header_style` | نمط الهيدر (افتراضي / متوسط / مبسط) |
| `header_sticky` | ثبات الهيدر عند التمرير |
| `header_transparent` | هيدر شفاف في الصفحة الرئيسية |
| `show_topbar` | إظهار الشريط الإعلاني العلوي |
| `topbar_text` | نص الشريط العلوي |

### المنتجات
| الإعداد | الوصف |
|---------|-------|
| `products_per_row_desktop` | عدد المنتجات في الصف على سطح المكتب (3-5) |
| `products_per_row_mobile` | عدد المنتجات في الصف على الجوال (1-2) |
| `product_card_style` | نمط بطاقة المنتج |
| `show_product_quick_view` | إظهار العرض السريع |
| `show_product_wishlist` | إظهار زر المفضلة |

### النشرة البريدية والتواصل
| الإعداد | الوصف |
|---------|-------|
| `show_newsletter` | إظهار قسم النشرة البريدية |
| `show_whatsapp` | إظهار زر واتساب العائم |
| `whatsapp_number` | رقم واتساب للتواصل |
| `show_back_to_top` | زر العودة للأعلى |

---

## 🧩 مكونات الصفحة الرئيسية

### المكونات المدمجة (Twilight Built-in)
- `component-featured-products` — منتجات مميزة
- `component-products-slider` — شريط منتجات
- `component-latest-products` — أحدث المنتجات
- `component-testimonials` — آراء العملاء
- `component-fixed-banner` — بانر ثابت
- `component-parallax` — خلفية متحركة
- `component-photos-slider` — معرض صور
- `component-store-features` — مميزات المتجر
- `component-youtube` — فيديو يوتيوب
- `component-vertical-menu` — قائمة عمودية

### المكونات المخصصة (Luxe Custom)
| المكوّن | الوصف |
|---------|-------|
| `luxe-hero` | بانر رئيسي متحرك مع 2 شرائح |
| `luxe-categories` | تصنيفات بثلاثة أنماط (شبكة / شريط / متداخل) |
| `luxe-brands` | عرض العلامات التجارية |
| `luxe-promo-banner` | بانر ترويجي مزدوج |
| `luxe-countdown` | عرض مع عداد تنازلي |

---

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|-----------|
| **Twig** | محرك القوالب |
| **TailwindCSS v3** | تصميم الواجهة |
| **SCSS** | تنسيقات مخصصة |
| **Alpine.js v3** | تفاعلية خفيفة |
| **Swiper v11** | عروض شرائح |
| **Webpack 5** | بناء الأصول |
| **PostCSS + RTLCSS** | دعم RTL |

---

## 📊 الأداء

الثيم مُحسَّن لأعلى أداء:
- ✅ Lazy Loading للصور
- ✅ Critical CSS Inline
- ✅ Font Preload
- ✅ IntersectionObserver للتحريك
- ✅ Passive Event Listeners
- ✅ Code Splitting عبر Webpack
- ✅ Tree Shaking للـ JS

---

## 🤝 الدعم

- 📧 البريد: support@luxetheme.sa
- 🐛 [الإبلاغ عن مشكلة](https://github.com/ibrahemalessa/salla-theme-luxe/issues)
- 📖 [وثائق سلة الرسمية](https://docs.salla.dev)

---

## 📄 الترخيص

هذا الثيم مرخص للاستخدام التجاري عبر منصة سلة. يُمنع إعادة البيع أو التوزيع خارج المنصة.

---

<div align="center">
  <p>صُنع بـ ❤️ لتجّار سلة | Built for Salla merchants</p>
  <p>
    <a href="https://docs.salla.dev">وثائق سلة</a> ·
    <a href="https://salla.sa">منصة سلة</a>
  </p>
</div>
