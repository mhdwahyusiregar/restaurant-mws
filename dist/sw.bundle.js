if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const f=e=>n(e,c),a={module:{uri:c},exports:r,require:f};i[c]=Promise.all(s.map((e=>a[e]||f(e)))).then((e=>(o(...e),r)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"b16d637743b960573620ea195dc28e53"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"178a0d7462e3a2df89811fdd865b4a09"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"48d713373563e7fc5ded91f9f73caaaf"},{url:"icon/man.png",revision:"5a32cc7e3f1f504b1f4444b78bbf1a79"},{url:"icons/icons-128x128.png",revision:"5c620b2491066de7fd01e1e7b58673ac"},{url:"icons/icons-144x144.png",revision:"8926b74676f92ff583c1eecf9e6d2bf6"},{url:"icons/icons-152x152.png",revision:"310686e552e8ea89a885d6e5233d299b"},{url:"icons/icons-192x192.png",revision:"48d713373563e7fc5ded91f9f73caaaf"},{url:"icons/icons-384x384.png",revision:"597a1e356aa7cdddcf2d73008b1a8d1c"},{url:"icons/icons-512x512.png",revision:"f9ff4c1679a948531b64444f29637955"},{url:"icons/icons-72x72.png",revision:"38990963b2c26e8077cb97cc2080875b"},{url:"icons/icons-96x96.png",revision:"40461005c167ef4173adc74214b563af"},{url:"images/aaa.png",revision:"f2a0ef39052f04b7926a329b3595fb15"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"index.html",revision:"825a0bf74c65b3726386a9fda56cb77d"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
