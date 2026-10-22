/* News posts. Product posts are taken from Webbebetter-MCP/lib/projects.ts
   (with their real publish dates); the guides and the studio note are built
   from the service and process copy in lib/site.ts, and the free-kit post from
   lib/freeKit.ts (Thai original, English translated). Posts without a known
   date carry `date: null`. Each post's `th` block holds its Thai version. */
const POSTS = [
  {
    slug: "itsme",
    th: {
      label: "เปิดตัวผลิตภัณฑ์",
      title: "itsme. — ลิงก์เดียวที่เป็นตัวคุณจริงๆ",
      excerpt: "หน้าลิงก์ในไบโอที่ปรับแต่งได้จริง ทั้งสี ไล่เฉดสี รูป วิดีโอ เพลง และฟอนต์ 16 แบบรวมฟอนต์ไทย ใช้ฟรี และพร้อมใช้ในไม่ถึงสองนาที",
      link: "เข้าชม itsme.media",
      html: `<p>itsme. คือเครื่องมือสร้างหน้าลิงก์ในไบโอจาก Bebetter รวมทุกลิงก์ที่คุณมี ทั้งโซเชียล เพลง และวิดีโอ ไว้ในหน้าเดียว แต่งจนเป็นตัวคุณ แล้วแชร์ทั้งหมดด้วย URL เดียว</p>
<h2>ปรับแต่งอะไรได้บ้าง</h2>
<p>สี ไล่เฉดสี รูปภาพ วิดีโอ แบนเนอร์ และเพลงพื้นหลัง ฟอนต์สำหรับชื่อคุณ 16 แบบ รวมฟอนต์ไทยอย่าง Prompt, Kanit และ Sarabun</p>
<blockquote><p>ลิงก์เดียวที่เป็นตัวคุณจริงๆ</p></blockquote>
<h2>มีอะไรติดมาให้</h2>
<ul><li><strong>วิดเจ็ต</strong>: ฝัง Spotify และ YouTube ลงในหน้าได้เลย</li><li><strong>สถิติ</strong>: ยอดเข้าชมหน้าและยอดคลิกลิงก์บนแดชบอร์ด</li><li><strong>QR และ vCard</strong>: แชร์ด้วย QR code หรือให้คนบันทึกคุณลงรายชื่อติดต่อได้ทันที</li><li><strong>ล็อกอินแบบที่ชอบ</strong>: อีเมลกับรหัสผ่าน หรือ GitHub</li></ul>
<h2>ลองใช้</h2>
<p>ใช้ฟรี และตั้งค่าเสร็จในไม่ถึงสองนาที</p>`,
    },
    kind: "product",
    label: "product launch",
    date: "2026-10-19",
    title: "itsme. — one link that is actually you",
    excerpt: "A link-in-bio page you can really customise: colours, gradients, images, video, music and 16 fonts including Thai. Free, and live in under two minutes.",
    cover: { img: "assets/projects/itsme-card.jpg", wide: "assets/projects/itsme-wide.jpg", bg: "#f8f5ec" },
    tint: "#e6c9ff",
    link: { href: "https://itsme.media/", label: "Visit itsme.media" },
    html: `<p>itsme. is a link-in-bio builder from Bebetter. Put every link you have, socials, music, video, on a single page, style it until it looks like you, and share the whole thing with one URL.</p>
<h2>What you can change</h2>
<p>Colours, gradients, images, video, banners and background music. Sixteen fonts for your name, Thai faces among them (Prompt, Kanit, Sarabun).</p>
<blockquote><p>One link that is actually you.</p></blockquote>
<h2>What is built in</h2>
<ul><li><strong>Widgets</strong>: embed Spotify and YouTube straight into the page.</li><li><strong>Analytics</strong>: page views and link clicks on a dashboard.</li><li><strong>QR and vCard</strong>: share by QR code, or let people save you straight to their contacts.</li><li><strong>Sign in your way</strong>: email and password, or GitHub.</li></ul>
<h2>Try it</h2>
<p>Free, and set up in under two minutes.</p>`,
  },
  {
    slug: "ghozt",
    th: {
      label: "เปิดตัวผลิตภัณฑ์",
      title: "Ghozt — Dynamic Island สำหรับ Claude Code บน Mac",
      excerpt: "Ghozt เปลี่ยนรอยบากบนจอ MacBook ให้เป็นแถบสถานะของ Claude Code สั่งงานแล้วไปทำอย่างอื่นได้เลย รอยบากจะบอกเมื่อถึงคิวคุณ",
      link: "ดาวน์โหลด Ghozt",
      html: `<p>Ghozt เปลี่ยนรอยบากบนจอ MacBook ให้เป็นแถบสถานะของ Claude Code สั่งงานแล้วไปทำอย่างอื่นได้เลย รอยบากจะบอกเมื่องานเสร็จหรือเมื่อต้องการคุณ ไม่ต้องสลับหน้าต่างไปมา</p>
<h2>รอยบากบอกอะไรบ้าง</h2>
<ul><li><strong>งานที่กำลังทำ</strong>: ผีตัวเล็กเดินอยู่ข้างรอยบากพร้อมตัวจับเวลา ถ้าเปิดหลายงานจะนับงานที่ยังไม่เสร็จนานที่สุด</li><li><strong>งานเบื้องหลัง</strong>: ตัวเลขสีฟ้าแปลว่ายังมี agent หรือคำสั่ง shell ทำงานอยู่ คำว่า "เสร็จ" จึงหมายถึงเสร็จจริงๆ</li><li><strong>เสร็จแล้ว และแก้อะไรไปบ้าง</strong>: ขึ้นเครื่องหมายถูกเมื่องานเสร็จ พร้อมจำนวนไฟล์ที่ถูกแก้</li><li><strong>อนุญาตหรือปฏิเสธจากรอยบาก</strong>: ตอบคำขอสิทธิ์ได้โดยไม่ต้องกลับไปที่ Terminal</li><li><strong>ติดตามโควตา</strong>: ใช้ไปเท่าไรแล้วในรอบ 5 ชั่วโมงและ 7 วัน พร้อมเวลารีเซ็ตและการเตือนก่อนเต็ม (Pro / Max)</li><li><strong>ถามด่วน</strong>: กด Ctrl-Option-Space จากแอปไหนก็ได้ พิมพ์คำถามสั้นๆ แล้วอ่านคำตอบบนรอยบาก</li><li><strong>กระโดดไปที่เซสชัน</strong>: ผีหนึ่งตัวต่อหนึ่งเซสชัน ทั้งใน Terminal, Ghostty, iTerm และ VS Code คลิกที่ผีเพื่อสลับไปแท็บนั้น</li></ul>
<blockquote><p>สั่งงานแล้วเดินไปทำอย่างอื่นได้เลย รอยบากจะบอกเอง</p></blockquote>
<h2>ติดตั้ง</h2>
<p>ใช้ฟรี รองรับทั้ง Apple Silicon และ Intel ติดตั้งด้วยคำสั่งเดียวใน Terminal หรือดาวน์โหลดไฟล์ .dmg ข้อมูลของคุณอยู่ในเครื่องคุณเท่านั้น</p>`,
    },
    kind: "product",
    label: "product launch",
    date: "2026-10-19",
    title: "Ghozt — a Dynamic Island for Claude Code on your Mac",
    excerpt: "Ghozt turns the notch on your MacBook into a status bar for Claude Code. Start a task, go do something else, and the notch tells you when it needs you.",
    cover: { img: "assets/projects/ghozt-card.jpg", bg: "#f8f5ec" },
    tint: "#9fb3ff",
    link: { href: "https://ghozt.vercel.app/", label: "Get Ghozt" },
    html: `<p>Ghozt turns the notch on your MacBook into a status bar for Claude Code. Start a task, go do something else, and the notch tells you when it has finished or when it needs you. No window switching.</p>
<h2>What the notch shows</h2>
<ul><li><strong>Work in progress</strong>: a small ghost walks beside the notch with a running timer. With several tasks open it counts the longest one still unfinished.</li><li><strong>Background work</strong>: a blue number means an agent or shell command is still running, so "done" means actually done.</li><li><strong>Done, and what changed</strong>: a checkmark when the task finishes, plus how many files were edited.</li><li><strong>Allow or deny from the notch</strong>: answer permission prompts without going back to Terminal.</li><li><strong>Limit tracking</strong>: how much of the 5-hour and 7-day window you have used, with reset times and a warning before you hit it (Pro / Max).</li><li><strong>Quick ask</strong>: press Ctrl-Option-Space from any app, type a short question, read the answer on the notch.</li><li><strong>Jump to a session</strong>: one ghost per session across Terminal, Ghostty, iTerm and VS Code. Click a ghost to switch to that tab.</li></ul>
<blockquote><p>Start a task, walk away. The notch will tell you.</p></blockquote>
<h2>Install</h2>
<p>Free, on Apple Silicon and Intel. One command in Terminal, or download the .dmg. Your data stays on your machine.</p>`,
  },
  {
    slug: "publio",
    th: {
      label: "เปิดตัวผลิตภัณฑ์",
      title: "publio — คอนเทนต์ของร้านคุณ เขียน ออกแบบ และโพสต์ให้ครบ",
      excerpt: "publio เรียนรู้แบรนด์คุณ เขียนแคปชันไทยในน้ำเสียงคุณ สร้างภาพจากรูปสินค้าจริง และโพสต์เมื่อคุณอนุมัติ",
      link: "นัดดูเดโม 15 นาที",
      html: `<p>publio เรียนรู้แบรนด์คุณ เขียนแคปชันไทยในน้ำเสียงคุณ สร้างภาพจากรูปสินค้าจริงของคุณ และโพสต์ลงช่องทางต่างๆ เมื่อคุณอนุมัติ ทีมเราดูแลให้ คุณแค่ตรวจแล้วกดตกลง</p>
<blockquote><p>ไม่ใช่ AI ทั่วไปที่รู้ทุกอย่างบนอินเทอร์เน็ต แต่เป็น AI ที่รู้จักร้านคุณ</p></blockquote>
<h2>ปัญหาที่เจอ</h2>
<p>เจ้าของร้านเสียเวลากับคอนเทนต์ราว 5 ชั่วโมงต่อสัปดาห์ ส่วนใหญ่คือคืนวันอาทิตย์ จ้างฟรีแลนซ์ก็ตก ฿8,000 ต่อเดือนต่อแพลตฟอร์ม แถมโทนยังเพี้ยน AI ทั่วไปเขียนแคปชันได้ แต่ไม่รู้จักสินค้าหรือแบรนด์คุณ</p>
<p>สิ่งที่ต้องการจริงๆ ไม่ใช่คอนเทนต์ที่มากขึ้น แต่คือ <strong>คอนเทนต์ที่เป็นของคุณ สม่ำเสมอ โดยไม่ต้องเสียวันหยุด</strong></p>
<h2>ทำงานยังไง</h2>
<ol><li><strong>ตั้งค่าแบรนด์ครั้งเดียว</strong> น้ำเสียง คำที่ห้ามใช้ สไตล์ภาพ โลโก้ และสินค้าพร้อมรูปจริง ผู้ช่วยจะร่างให้จากโพสต์เก่าๆ ของเพจคุณ</li><li><strong>เขียนบรีฟบรรทัดเดียว</strong> เช่น "โปรโมตชาลาเต้ตัวใหม่" แล้วกด Generate</li><li><strong>ตรวจในราว 60 วินาที</strong> ได้แคปชันภาษาไทยเต็มๆ พร้อมภาพที่สร้างจากรูปสินค้าจริงของคุณ</li><li><strong>อนุมัติ</strong> publio โพสต์ตามเวลาที่ตั้งไว้ ไม่มีอะไรขึ้นโดยที่คุณไม่อนุมัติ</li></ol>
<h2>มีอะไรข้างใน</h2>
<h3>Brand DNA</h3><p>น้ำเสียง คำที่ชอบและคำต้องห้าม สไตล์ภาพ สี โลโก้ และแค็ตตาล็อกสินค้า ถูกใส่ในทุกคำสั่งของ AI ผลลัพธ์จึงฟังเหมือนคุณ ไม่ใช่หุ่นยนต์</p>
<h3>ปฏิทินที่ลากได้</h3><p>เห็นทั้งเดือนในหน้าเดียว แยกสีตามสถานะ ลากโพสต์ไปวันอื่นได้ในครั้งเดียว</p>
<h3>แคปชันที่คิดเป็นภาษาไทย</h3><p>ภาษาไทยที่เป็นธรรมชาติ ตามสไตล์โซเชียลไทย ไม่ใช่แปลจากภาษาอังกฤษ ได้ทั้งพาดหัว เนื้อหา และคำชวนในครั้งเดียว</p>
<h3>ภาพจากสินค้าจริง</h3><p>ใช้รูปสินค้าจริงของคุณเป็นฐาน publio จัดแสงและฉากให้เข้ากับแบรนด์ ลูกค้าจึงจำได้ว่ากำลังซื้ออะไร</p>
<h2>เหมาะกับใคร</h2>
<p><strong>เจ้าของ SME</strong> ที่ขายผ่าน Facebook, Instagram และ LINE OA มีสินค้า 1–20 รายการ และไม่มีทีมการตลาด <strong>เอเจนซีและฟรีแลนซ์</strong> ที่ดูแลลูกค้า 2–10 แบรนด์ และอยากได้แดชบอร์ดเดียวสำหรับทุกคน</p>`,
    },
    kind: "product",
    label: "product launch",
    date: "2026-09-03",
    title: "publio — your shop's content, written, designed and posted",
    excerpt: "publio learns your brand, writes Thai captions in your voice, builds images from your real product photos, and posts once you approve.",
    cover: { img: "assets/projects/publio-poster.jpg", bg: "#f8f5ec" },
    tint: "#c9d2ff",
    link: { href: "index.html#contact", label: "Book a 15-minute demo" },
    html: `<p>publio learns your brand, writes Thai captions in your voice, creates images from your real product photos, and posts to your channels once you approve. Our team runs it for you, so you just review and say yes.</p>
<blockquote><p>Not a generic AI that knows the internet. An AI that knows your shop.</p></blockquote>
<h2>The problem</h2>
<p>Shop owners lose about 5 hours a week to content, usually on Sunday night. Hiring a freelancer costs ฿8,000 a month per platform and the tone still drifts. Generic AI can write a caption, but it doesn't know your products or your brand.</p>
<p>The real need isn't more content. It's <strong>your content, consistently, without giving up your weekends.</strong></p>
<h2>How it works</h2>
<ol><li><strong>Set up your brand once.</strong> Your voice, words to avoid, image style, logo, and products with real photos. A helper drafts it from your page's past posts.</li><li><strong>Write a one-line brief.</strong> For example "Promote the new tea latte", then hit Generate.</li><li><strong>Review in about 60 seconds.</strong> You get a full Thai caption plus an image based on your real product photo.</li><li><strong>Approve.</strong> publio posts it at the scheduled time. Nothing goes live without your approval.</li></ol>
<h2>What's inside</h2>
<h3>Brand DNA</h3><p>Voice, preferred and banned words, image style, colors, logo, and product catalog go into every AI instruction. It sounds like you, not a robot.</p>
<h3>A calendar you can drag</h3><p>See the whole month at once, color-coded by status. Drag a post to another day in one move.</p>
<h3>Captions that think in Thai</h3><p>Natural Thai that follows Thai social conventions, not translated English. Headline, body, and call to action in one go.</p>
<h3>Images from your real products</h3><p>Your actual product photo is the base. publio sets the lighting and scene to match your brand, so customers recognize what they're buying.</p>
<h2>Who it's for</h2>
<p><strong>SME owners</strong> selling through Facebook, Instagram, and LINE OA with 1–20 products and no marketing team. <strong>Agencies and freelancers</strong> managing 2–10 client brands who want one dashboard for everyone.</p>`,
  },
  {
    slug: "free-kit",
    th: {
      label: "ชุดฟรี",
      title: "ทำคลิปแอนิเมชันให้ร้านคุณ แค่คุยกับ Claude ทีละคำถาม",
      excerpt: "ชุดฟรีจาก BeBetter: วิธีเดียวกับที่เราใช้ทำคลิปแมวและคลิปซูชิแซลมอน ตั้งแต่ยังไม่รู้จะเล่าอะไร จนได้บท สตอรีบอร์ด และไฟล์ไปทำคลิปต่อ",
      link: "รับชุดด้วย LINE",
      html: `<p>วิธีเดียวกับที่ BeBetter ใช้ทำคลิปแมวและคลิปซูชิแซลมอน ตั้งแต่ยังไม่รู้จะเล่าอะไร จนได้บท สตอรีบอร์ด และไฟล์ไปทำคลิปต่อ <strong>ไม่ต้องเขียนโค้ด ไม่ต้องตัดต่อเป็น</strong></p>
<blockquote><p>แจกฟรี ไม่มีเงื่อนไขซื้อ</p></blockquote>
<h2>ได้อะไรบ้าง</h2>
<ul><li>บทคลิปที่ Claude ช่วยคิดกับคุณทีละคำถาม ทุกข้อมีตัวเลือกให้กด</li><li>สตอรีบอร์ดทีละช็อต บอกขนาดภาพ การเคลื่อนกล้อง และเสียง</li><li>ไฟล์สำหรับเอาไปทำคลิปต่อ</li></ul>
<h2>คำถามที่ถามบ่อย</h2>
<h3>ต้องเขียนโค้ดเป็นไหม</h3><p>ไม่ต้อง Claude พาทำทีละคำถาม ทุกข้อมีตัวเลือกให้กด</p>
<h3>ทำไมต้องล็อกอินด้วย LINE</h3><p>เพื่อส่งลิงก์ดาวน์โหลดและอัปเดตชุดให้คุณในแชท และให้คุณขอความช่วยเหลือได้ในที่เดียว</p>
<h3>ไม่มี LINE ทำยังไง</h3><p>ทิ้งอีเมลไว้ เราจะแจ้งเมื่อเปิดทางอีเมลและชุดภาษาอังกฤษ</p>
<h3>เก็บข้อมูลอะไรของฉันบ้าง</h3><p>ชื่อ LINE ประเภทธุรกิจ และมาจากช่องทางไหน เพื่อส่งชุดและตอบคำถาม ขอลบได้ทุกเมื่อ</p>
<p>ล็อกอินด้วย LINE แล้วแอด BeBetter เป็นเพื่อน ดาวน์โหลดได้ทันที</p>`,
    },
    kind: "free",
    label: "free kit",
    date: null,
    title: "Make an animated clip for your shop, one question at a time with Claude",
    excerpt: "A free kit from BeBetter: the same method we used for our cat clip and our salmon-sushi clip, from no idea at all to a script, a storyboard and files to finish the clip.",
    cover: { img: "assets/projects/freekit-poster.jpg", bg: "#f8f5ec" },
    tint: "#ffb899",
    link: { href: "index.html#contact", label: "Get the kit on LINE" },
    html: `<p>The same method BeBetter used to make our cat clip and our salmon-sushi clip, from not knowing what story to tell to a script, a storyboard and files you can finish the clip with. <strong>No coding, no editing skills needed.</strong></p>
<blockquote><p>Free. Nothing to buy.</p></blockquote>
<h2>What you get</h2>
<ul><li>A clip script you work out with Claude one question at a time, with options to tap for every answer</li><li>A shot-by-shot storyboard with shot size, camera move and sound</li><li>Files to take into making the clip</li></ul>
<h2>Questions people ask</h2>
<h3>Do I need to know how to code?</h3><p>No. Claude walks you through one question at a time, and every question has options to tap.</p>
<h3>Why log in with LINE?</h3><p>So we can send the download link and kit updates to your chat, and you can ask for help in one place.</p>
<h3>No LINE?</h3><p>Leave your email and we'll tell you when email access and the English kit are ready.</p>
<h3>What data do you keep?</h3><p>Your LINE name, your type of business and where you came from, to send the kit and answer questions. Ask us to delete it any time.</p>
<p>Log in with LINE and add BeBetter as a friend to download straight away.</p>`,
  },
  {
    slug: "get-found",
    th: {
      label: "คู่มือ",
      title: "ให้ทั้งคนและ AI หาคุณเจอ: SEO, AEO และ Google Business",
      excerpt: "วันนี้ลูกค้าถามทั้ง Google และ ChatGPT มาดูว่าสามอย่างนี้ทำหน้าที่อะไร และธุรกิจเล็กๆ ควรเริ่มจากอันไหน",
      link: "ดูบริการ",
      html: `<p>เมื่อก่อนการถูกค้นเจอหมายถึงเรื่องเดียว คือติดอันดับบน Google แต่ทุกวันนี้ลูกค้ายังถามผู้ช่วย AI ด้วยว่าควรไปร้านไหน มีสามส่วนที่ต้องดูแล และแต่ละส่วนทำหน้าที่ต่างกัน</p>
<h2>SEO: ติดอันดับบน Google</h2>
<p>SEO ช่วยให้เว็บไซต์และบทความของคุณติดอันดับบน Google คนที่ค้นหาสิ่งที่คุณขายจะเจอหน้าของคุณ ไม่ใช่ของคู่แข่ง</p>
<h2>AEO: ให้ AI แนะนำคุณ</h2>
<p>AEO หรือ Answer Engine Optimization ทำให้ ChatGPT และผู้ช่วย AI อื่นๆ แนะนำธุรกิจคุณ เวลาลูกค้าถามหาคำแนะนำ</p>
<blockquote><p>ให้ทั้งคนและ AI หาคุณเจอ</p></blockquote>
<h2>Google Business: ดูดีบนแผนที่</h2>
<p>Google Business ช่วยให้ข้อมูลร้าน โพสต์ และรีวิวของคุณดูดีอยู่เสมอ ซึ่งมักเป็นสิ่งแรกที่ลูกค้าแถวนั้นเห็น</p>
<h2>เริ่มจากตรงไหนดี</h2>
<p>ถ้าคุณมีหน้าร้านที่ลูกค้าเดินเข้ามา เริ่มจาก Google Business ก่อน ถ้าขายออนไลน์ SEO กับ AEO ทำคู่กันได้ผลดีที่สุด ยังไม่แน่ใจ? นัดคุยฟรี 15 นาที แล้วเราจะบอกตรงๆ ว่าอะไรคุ้มที่จะทำก่อน</p>`,
    },
    kind: "guide",
    label: "guide",
    date: null,
    title: "Get found by people and by AI: SEO, AEO and Google Business",
    excerpt: "Customers now ask Google and ChatGPT. Here is what each of the three does, and which one a small business should start with.",
    cover: { img: "assets/projects/getfound-poster.jpg", bg: "#f8f5ec" },
    tint: "#bdeee8",
    link: { href: "index.html#services", label: "See the service" },
    html: `<p>Getting found used to mean one thing: ranking on Google. Today your customers also ask AI assistants which shop to visit. There are three pieces to keep in shape, and they do different jobs.</p>
<h2>SEO: rank on Google</h2>
<p>SEO keeps your website and articles ranking on Google, so people who search for what you sell land on your page and not a competitor's.</p>
<h2>AEO: get recommended by AI</h2>
<p>AEO, Answer Engine Optimization, makes ChatGPT and other AI assistants recommend your business when customers ask them for a suggestion.</p>
<blockquote><p>Get found, by people and by AI.</p></blockquote>
<h2>Google Business: look sharp on the map</h2>
<p>Google Business keeps your listing, posts and reviews looking sharp, which is often the first thing a nearby customer sees.</p>
<h2>Where to start</h2>
<p>If you have a shop people visit, start with your Google Business listing. If you sell online, SEO and AEO work best together. Not sure? Book a free 15-minute call and we'll tell you honestly what is worth doing first.</p>`,
  },
  {
    slug: "line-oa",
    th: {
      label: "คู่มือ",
      title: "LINE OA ที่ลูกค้าใช้จริง",
      excerpt: "ร้านค้า ริชเมนู แชตบอต และระบบสั่งซื้อ สิ่งที่เราสร้างบน LINE API และค่าใช้จ่ายของแต่ละแบบ",
      link: "ดูบริการ",
      html: `<p>สำหรับธุรกิจไทยจำนวนมาก LINE คือที่ที่ลูกค้าอยู่แล้ว เราพัฒนาบน LINE API ทั้งแชตบอต ริชเมนู ระบบสั่งซื้อ และการแจ้งเตือนที่ลูกค้าใช้งานจริง</p>
<h2>สิ่งที่เราตั้งค่าให้</h2>
<ul><li><strong>ร้านค้าบน LINE OA</strong>: ฿2,900 ครั้งเดียว</li><li><strong>LINE OA พร้อมริชเมนู</strong>: ฿3,900 ครั้งเดียว</li><li><strong>ริชเมนูอย่างเดียว</strong>: ฿1,290 ต่อชุด</li><li><strong>AI Rich Menu Pro</strong>: ฿6,900 หน้าเพิ่มหน้าละ ฿1,900 เมนูที่พาลูกค้าไปเจอคำตอบที่ถูกต้อง</li></ul>
<blockquote><p>ออเดอร์ ลีด และรายงาน ที่เดินเองได้</p></blockquote>
<h2>ระบบเบื้องหลัง</h2>
<p>LINE มักเป็นประตูหน้าร้าน เบื้องหลังเราเชื่อมเครื่องมือของคุณด้วยระบบอัตโนมัติ ให้ออเดอร์ ลีด และรายงานเดินเองได้ แทนที่จะต้องคัดลอกด้วยมือ ไม่ว่างานเล็กหรือใหญ่ เราวางขอบเขตตามงบของคุณและส่งงานไว</p>`,
    },
    kind: "guide",
    label: "guide",
    date: null,
    title: "A LINE OA your customers actually use",
    excerpt: "Storefronts, rich menus, chatbots and order flows: what we build on the LINE API, and what each setup costs.",
    cover: { img: "assets/projects/line-poster.jpg", bg: "#f8f5ec" },
    tint: "#d4ff94",
    link: { href: "index.html#services", label: "See the service" },
    html: `<p>For a lot of Thai businesses, LINE is where customers already are. We develop on the LINE API: chatbots, rich menus, order flows and notifications your customers actually use.</p>
<h2>What we set up</h2>
<ul><li><strong>LINE OA storefront</strong>: ฿2,900, one time.</li><li><strong>LINE OA with a Rich Menu</strong>: ฿3,900, one time.</li><li><strong>A Rich Menu on its own</strong>: ฿1,290 per set.</li><li><strong>AI Rich Menu Pro</strong>: ฿6,900, with extra pages at ฿1,900 each. Menus that route customers to the right answer.</li></ul>
<blockquote><p>Orders, leads and reports that move by themselves.</p></blockquote>
<h2>The plumbing behind it</h2>
<p>LINE is often the front door. Behind it we connect your tools with automations, so orders, leads and reports move by themselves instead of being copied by hand. Whatever the size, we scope it to your budget and ship fast.</p>`,
  },
  {
    slug: "how-we-work",
    th: {
      label: "บันทึกจากทีม",
      title: "ทำงานกับเรามีขั้นตอนยังไง ตั้งแต่คุยทาง Zoom จนถึงดูแลระบบ",
      excerpt: "4 ขั้นตอน ได้ใบเสนอราคาภายใน 3 วัน และไม่มีเซอร์ไพรส์เรื่องเวลาหรือค่าใช้จ่าย",
      link: "เริ่มโปรเจกต์",
      html: `<p>Bebetter คือดิจิทัลเอเจนซีในกรุงเทพฯ เริ่มต้นในปี 2026 ด้วยความคิดเดียว: งานดิจิทัลดีๆ ไม่ควรแพงเกินเอื้อม นี่คือหน้าตาของการทำงานกับเรา</p>
<h2>4 ขั้นตอน</h2>
<ol><li><strong>คุยทาง Zoom</strong> คุณเล่าเคสให้ฟัง เราถามถึงปัญหา</li><li><strong>วิธีแก้และ mock-up</strong> เรากลับมาพร้อมข้อเสนอที่คุณเห็นภาพได้ ไม่ใช่แค่อ่าน</li><li><strong>ระยะเวลาและค่าใช้จ่าย</strong> ตกลงกันทั้งสองเรื่องก่อนเริ่มสร้าง ไม่มีเซอร์ไพรส์</li><li><strong>ส่งมอบ แล้วดูแลต่อ</strong> เราส่งงาน แล้วอยู่ดูแลให้ระบบทำงานต่อไป</li></ol>
<p>ใบเสนอราคาจะกลับไปถึงคุณภายใน 3 วันหลังคุยกัน</p>
<blockquote><p>เราฟังก่อน แล้วค่อยออกแบบวิธีแก้ให้เข้ากับวิธีทำงานจริงของคุณ</p></blockquote>
<h2>ใครเป็นคนทำ</h2>
<p>เราเป็นทีมเล็กๆ แบ่งเป็นสามฝ่าย ฝ่ายการตลาดวางแผนแคมเปญ ฝ่ายคอนเทนต์เขียน ถ่าย และออกแบบ ส่วนฝ่าย Dev สร้างระบบเบื้องหลังทั้งหมด เราทำงานตรงไปตรงมาและรวดเร็ว ทำให้ใช้ง่าย และปรับตามคุณ ไม่ใช่ให้คุณมาปรับตามเรา</p>
<h2>สองเรื่องที่เราใส่ใจ</h2>
<p><strong>ราคา</strong>: เราคุมค่าใช้จ่ายให้ต่ำและส่งต่อความคุ้มค่านั้นให้คุณ ร้านเล็กจึงใช้เครื่องมือแบบเดียวกับแบรนด์ใหญ่ได้ <strong>การปรับให้เข้ากับคุณ</strong>: ไม่มีอะไรที่นี่เป็นสูตรเดียวใช้ทุกร้าน</p>`,
    },
    kind: "studio",
    label: "studio notes",
    date: null,
    title: "How a project with us goes, from Zoom call to maintenance",
    excerpt: "Four steps, a quote within three days, and no surprises on timeline or cost.",
    cover: { img: "assets/projects/howwework-poster.jpg", bg: "#f8f5ec" },
    tint: "#ffe08a",
    link: { href: "index.html#contact", label: "Start a project" },
    html: `<p>Bebetter is a digital agency in Bangkok, started in 2026 with one idea: good digital work shouldn't cost a fortune. Here is what working with us looks like.</p>
<h2>Four steps</h2>
<ol><li><strong>Zoom call.</strong> You show us the case, we ask about the problem.</li><li><strong>Solution and mock-up.</strong> We come back with a proposal you can see, not just read.</li><li><strong>Timeline and cost.</strong> We agree on both before anything gets built. No surprises.</li><li><strong>Delivery, then maintenance.</strong> We ship, then stay on to keep it running.</li></ol>
<p>A quote comes back within 3 days of the call.</p>
<blockquote><p>We listen first, then shape the solution around how you actually work.</p></blockquote>
<h2>Who does the work</h2>
<p>We're a small team in three parts: Marketing plans your campaigns, Content writes, shoots and designs, and Dev builds the systems behind it all. We work straightforward and fast, keep things easy to use, and adapt to you, not the other way around.</p>
<h2>Two things we care about</h2>
<p><strong>Price</strong>: we keep our overhead low and pass it on, so a small shop can afford the same tools a big brand uses. <strong>Customization</strong>: nothing here is one-size-fits-all.</p>`,
  },
];
