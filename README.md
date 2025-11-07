# Card Movement Module

## 📦 الوصف

هذا الـ module مسؤول عن حركة الأوراق والأنيميشن في لعبة البلوت.

## 🎯 الوظائف الرئيسية

### حركة الأوراق

- توزيع الأوراق بشكل متحرك
- حركة الأوراق عند اللعب
- أنيميشن سحب الأوراق
- أنيميشن جمع الأوراق

## 📂 الهيكل

```
card_movement/
├── module/                   # الوحدات الأساسية
│   ├── types/               # تعريفات الأنواع
│   └── utils/               # دوال مساعدة
├── functions/               # دوال الحركة والأنيميشن
│   └── cardsAnimation.ts   # أنيميشن الأوراق
├── repeated_items/          # عناصر مشتركة
│   ├── components/         # مكونات React
│   ├── constants/          # ثوابت
│   ├── images/            # الصور
│   └── types/             # أنواع مشتركة
└── svg/                   # أيقونات SVG
```

## 🔗 الاستخدام

### الاستيراد من الـ module

```typescript
import { cardsAnimation } from './card_movement/functions/cardsAnimation';
```

## 🚀 التطوير

### إضافة ميزة جديدة

1. أضف الدالة في المجلد المناسب
2. Commit التغييرات
3. Push إلى repository

```bash
cd card_movement
git add .
git commit -m "Add new feature"
git push origin main
```

### تحديث في game-logic

بعد التغييرات في card_movement، قم بتحديث المرجع في game-logic:

```bash
cd ..
git add card_movement
git commit -m "Update card_movement submodule"
git push
```

## 📝 ملاحظات

- هذا الـ module هو submodule من `game-logic`
- له repository منفصل على GitHub
- التغييرات يجب أن تتم داخل المجلد وترفع بشكل منفصل

## 🔗 الروابط

- Repository: https://github.com/drdah123/card_movement
- Parent Project: https://github.com/drdah123/frontend_ballot_game
