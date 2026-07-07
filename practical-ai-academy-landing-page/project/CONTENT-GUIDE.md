# AIYUBOVAN Site — Where To Edit What

## The one file for data: `site-content.js`
Registration on/off switch, all dates, week cards, checklists, reviews (testimonials), FAQ answers. Edit → save → refresh.

## Home page sections (each is its own file)
| File | Section |
|---|---|
| `Home 01 - Hero.dc.html` | "Learn to use AI... work smarter" |
| `Home 02 - The Problem.dc.html` | "හැමෝම AI ගැන කතා කරනවා..." cards |
| `Home 03 - The Solution.dc.html` | Solution card |
| `Home 04 - Who Am I.dc.html` | Ruwantha intro |
| `Home 05 - What You Will Learn.dc.html` | 10-week cards *(text lives in site-content.js)* |
| `Home 06 - What Is Included.dc.html` | Checklist *(text lives in site-content.js)* |
| `Home 07 - Who Is This For.dc.html` | Students/teachers/workers cards |
| `Home 08 - Testimonials.dc.html` | Reviews *(text lives in site-content.js)* |
| `Home 09 - Pricing.dc.html` | Rs. 9,900 card |
| `Home 10 - Guarantee.dc.html` | Money-back promise |
| `Home 11 - FAQ.dc.html` | Home page Q&A *(text lives in site-content.js)* |
| `Home 12 - Final CTA.dc.html` | "අදම පටන් ගනිමු" closing |

## "What You Will Learn" page sections
`Learn 01 - Hook` → `Learn 17 - Final Word`, in page order:
Hook, The Story, Old Way vs New Way, A Note From Ruwantha, Video 1 Explainer,
What You Learn In Detail, What Is Included, YouTube Proof, Live Demo Video 2,
Pricing, Guarantee, Who Is This For, Who Is This NOT For, Your 3 Options,
How To Register, FAQ, Final Word.

**The two FAQs:** `Home 11 - FAQ` = home page questions (answers in site-content.js).
`Learn 16 - FAQ` = the sales-page questions (text directly in that file).

## Other pages
`Application Guide.dc.html` (Tally form embedded), `One-to-One Consultation.dc.html`,
`Book Consultation.dc.html` (Cal.com calendar), `Courses.dc.html` (coming soon),
`Nav.dc.html`, `Footer.dc.html`, Terms, Privacy.

## Don't touch
`support.js` (page engine), `vendor/` (React/Babel), `vercel.json` & `_headers` (security).
