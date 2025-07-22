# AutoDev AI Hub – قوانين المشروع

## 1. التسمية (Naming)
- camelCase للمتغيرات والدوال
- PascalCase للكلاسات والـ components

## 2. المتغيرات البيئية (Env)
- ملفات: `.env` في gitignore، `.env.example` في repo
- لا تكشف القيم السرية

## 3. الإصدارات (Versioning)
- SemVer: MAJOR.MINOR.PATCH
- Git tags: vX.Y.Z

## 4. التوثيق (Docs)
- README, TECH_STACK.md, CHANGELOG.md
- مثال عملي لكل ميزة
- **تحديث `CHANGELOG.md` مع كل تغيير.**
- **إضافة تعليق في نهاية كل ملف يتم تعديله يحتوي على (تاريخ التحديث + اسم المهمة).**

## 5. الاختبارات (Tests)
- Unit + Integration لكل دفعة
- `npm test` يمرّ قبل كل merge
- **أي وكيل جديد يجب أن يكون مصحوبًا باختبارات تلقائية.**
- **التحقق المستمر من صحة نقاط النهاية.**

## 6. CI/CD
- Lint → Build → Test → (في دفعة 5: Deploy)

## 7. المراقبة (Monitoring)
- Endpoints: `/health`، `/metrics`
- Alerts عبر Slack/Email

## 8. Logging
- مستويات: info, warn, error
- إضافة requestId/agentId

## 9. جودة الكود
- No duplication
- no console.log in production code

## 10. مراجعة الكود
- 1 reviewer min
- لا merge قبل الحلول
