/* =========================================================
   VELORA — PRODUCT DATABASE
   Single source of truth for every page (home, category,
   product detail, wishlist, cart, checkout).
========================================================= */

const PRODUCTS = [

  /* ---------------- MEN ---------------- */
  {
    id: "mn-01", category: "men", name: "Tailored Wool Overcoat",
    price: 248.00, oldPrice: 298.00,
    image: "https://blugiallo.com/wp-content/uploads/2025/09/OVERCOAT_Baby_Camel_0381-copy-scaled.jpg",
    images: [
      "https://blugiallo.com/wp-content/uploads/2025/09/OVERCOAT_Baby_Camel_0381-copy-scaled.jpg",
      "https://www.mrporter.com/variants/images/46376663162930387/in/w2000_q60.jpg"
    ],
    colors: ["#3b2e25", "#1d1d1d"], sizes: ["S","M","L","XL"],
    desc: "A masterfully tailored wool overcoat with a soft drape and clean silhouette — the kind of piece that elevates everything underneath it."
  },
  {
    id: "mn-02", category: "men", name: "Linen Blend Shirt",
    price: 59.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsoXM3tYgTP-bpC2_O_CV8zEA8x2S_RZb3m2JveUN0cu7ZT48d8n1yJo&s=10",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsoXM3tYgTP-bpC2_O_CV8zEA8x2S_RZb3m2JveUN0cu7ZT48d8n1yJo&s=10"],
    colors: ["#3b2e25", "#8a7158", "#cabba0"], sizes: ["S","M","L","XL"],
    desc: "Breathable linen-cotton blend with a relaxed collar and mother-of-pearl buttons. Built for warm days that still call for polish."
  },
  {
    id: "mn-03", category: "men", name: "Premium Polo T-Shirt",
    price: 44.99,
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1266689_alternate10?$plpDeskRF$",
    images: ["https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1266689_alternate10?$plpDeskRF$"],
    colors: ["#1d1d1d", "#8a7158"], sizes: ["S","M","L","XL"],
    desc: "Pima cotton polo with a structured collar and a clean drape. A quiet upgrade to a wardrobe staple."
  },
  {
    id: "mn-04", category: "men", name: "Tailored Trousers",
    price: 68.99,
    image: "https://showoffff.in/cdn/shop/files/JE-R107-Loose_Brown_1_de8b51f2-3b49-4af1-b9ff-0b6a6fcaafee.jpg?v=1778333128&width=1080",
    images: ["https://showoffff.in/cdn/shop/files/JE-R107-Loose_Brown_1_de8b51f2-3b49-4af1-b9ff-0b6a6fcaafee.jpg?v=1778333128&width=1080"],
    colors: ["#1d1d1d", "#3b2e25"], sizes: ["30","32","34","36"],
    desc: "Slim-tapered trousers in a heavyweight twill, finished with a clean break and a comfortable mid-rise."
  },
  {
    id: "mn-05", category: "men", name: "Suede Chelsea Boots",
    price: 189.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-LnhLWLjoineZGkeeBfh_goueOKsNimjn5531lC21dorXxMAWsCtqjzy&s=10",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-LnhLWLjoineZGkeeBfh_goueOKsNimjn5531lC21dorXxMAWsCtqjzy&s=10"],
    colors: ["#5b4636"], sizes: ["40","41","42","43","44"],
    desc: "Hand-finished suede Chelsea boots on a leather sole — the kind of boot that goes from boardroom to weekend without missing a step."
  },
  {
    id: "mn-06", category: "men", name: "Essential Hoodie",
    price: 64.99,
    image: "https://teetall.pk/cdn/shop/products/152405712ec359a967fb49ee569eae15.webp?v=1695122281&width=533",
    images: ["https://teetall.pk/cdn/shop/products/152405712ec359a967fb49ee569eae15.webp?v=1695122281&width=533"],
    colors: ["#3b2e25", "#1d1d1d"], sizes: ["S","M","L","XL"],
    desc: "Heavyweight French terry hoodie, brushed soft on the inside, garment-dyed for a worn-in look from day one."
  },

  /* ---------------- WOMEN ---------------- */
  {
    id: "wm-01", category: "women", name: "Belted Trench Coat",
    price: 228.00,
    image: "https://www2.assets-gap.com/webcontent/0057/903/759/cn57903759.jpg",
    images: ["https://www2.assets-gap.com/webcontent/0057/903/759/cn57903759.jpg"],
    colors: ["#cabba0", "#3b2e25"], sizes: ["XS","S","M","L"],
    desc: "A reimagined trench in water-resistant cotton twill, with a self-belt and clean storm flaps. Quietly classic."
  },
  {
    id: "wm-02", category: "women", name: "Silk Wrap Blouse",
    price: 89.00,
    image: "https://www.mashribofficial.com/cdn/shop/files/HSP_0047.jpg?v=1728929721",
    images: ["https://www.mashribofficial.com/cdn/shop/files/HSP_0047.jpg?v=1728929721"],
    colors: ["#cabba0", "#8a7158"], sizes: ["XS","S","M","L"],
    desc: "Fluid mulberry silk wrap blouse that moves with you — equally at home tucked into denim or tailored trousers."
  },
  {
    id: "wm-03", category: "women", name: "Tailored Blazer",
    price: 142.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5NG8YEDIVklAmtYIynk49JRAEhPCi_gkGFlXyB932Q&s=10",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5NG8YEDIVklAmtYIynk49JRAEhPCi_gkGFlXyB932Q&s=10"],
    colors: ["#1d1d1d", "#3b2e25"], sizes: ["XS","S","M","L"],
    desc: "Sharp-shouldered blazer with a nipped waist, cut from a soft Italian wool blend that holds its shape all day."
  },
  {
    id: "wm-04", category: "women", name: "Knit Midi Dress",
    price: 96.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzvuyG9aCFOtHY6asB4mJ4Ncx3XE4GJtSZT-WQCgFPEsLqMCPA7piI6w&s=10",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzvuyG9aCFOtHY6asB4mJ4Ncx3XE4GJtSZT-WQCgFPEsLqMCPA7piI6w&s=10"],
    colors: ["#3b2e25", "#cabba0"], sizes: ["XS","S","M","L"],
    desc: "A figure-following ribbed knit midi dress, soft against the skin and dressed up easily with the right coat."
  },
  {
    id: "wm-05", category: "women", name: "Cashmere Sweater",
    price: 158.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJn2vCGyWx9AJPzOxv8zJHElga-en6C0fH3CeTXXtSnPFgHo1rmTcoEA&s=10",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJn2vCGyWx9AJPzOxv8zJHElga-en6C0fH3CeTXXtSnPFgHo1rmTcoEA&s=10"],
    colors: ["#cabba0", "#8a7158"], sizes: ["XS","S","M","L"],
    desc: "Pure cashmere knit with a relaxed crew neck — the kind of softness that's hard to put down once you try it on."
  },
  {
    id: "wm-06", category: "women", name: "Pleated Wide-Leg Trousers",
    price: 98.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQph9tunhwAttz2agSx8Gq9rdTkCtZD94qSlSXF_xtYHScGKem6QHv7D3qp&s=10",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQph9tunhwAttz2agSx8Gq9rdTkCtZD94qSlSXF_xtYHScGKem6QHv7D3qp&s=10"],
    colors: ["#1d1d1d", "#3b2e25"], sizes: ["XS","S","M","L"],
    desc: "High-waisted, fluid wide-leg trousers with a soft front pleat — built for movement and a long, clean line."
  },

  /* ---------------- DENIM ---------------- */
  {
    id: "dn-01", category: "denim", name: "Slim Tapered Jeans",
    price: 89.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HzSc7vYUhIQvGTIbTMaeK1CEkK0BUNhMtEBYTaI2MPx_U4TadBZDNdzS&s=10",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HzSc7vYUhIQvGTIbTMaeK1CEkK0BUNhMtEBYTaI2MPx_U4TadBZDNdzS&s=10"],
    colors: ["#2c3a4a", "#1d1d1d"], sizes: ["30","32","34","36"],
    desc: "Rigid Japanese selvedge denim, cut slim through the thigh and tapered to the ankle. Built to mould to your shape over time."
  },
  {
    id: "dn-02", category: "denim", name: "Straight Leg Denim",
    price: 84.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVydrcuS4kHJ46G_j7pSx2atcyaReV0bRSKcaWgzlI7PzjACN3zjas-8&s=10",
    images: [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVydrcuS4kHJ46G_j7pSx2atcyaReV0bRSKcaWgzlI7PzjACN3zjas-8&s=10"],
    colors: ["#3c5068", "#1d1d1d"], sizes: ["28","30","32","34"],
    desc: "A timeless straight-leg cut in a mid-weight stretch denim, finished with a clean indigo wash."
  },
  {
    id: "dn-03", category: "denim", name: "Denim Trucker Jacket",
    price: 112.00,
    image: "https://img01.ztat.net/article/spp-media-p1/104a171db48f400d93b9ebbf7d78aed9/aa3d216c11b84ca0b8835964d3aa00b6.jpg?imwidth=1800&filter=packshot",
    images: ["https://img01.ztat.net/article/spp-media-p1/104a171db48f400d93b9ebbf7d78aed9/aa3d216c11b84ca0b8835964d3aa00b6.jpg?imwidth=1800&filter=packshot"],
    colors: ["#2c3a4a"], sizes: ["S","M","L","XL"],
    desc: "A boxy trucker jacket in rigid denim, built to be layered, worn-in, and never quite retired."
  },
  {
    id: "dn-04", category: "denim", name: "Wide-Leg Denim",
    price: 92.00,
    image: "https://www.meshki.com.au/cdn/shop/files/241008_MESHKI_Tranquility4_5_16_885.jpg?v=1729893040&width=1946",
    images: ["https://www.meshki.com.au/cdn/shop/files/241008_MESHKI_Tranquility4_5_16_885.jpg?v=1729893040&width=1946"],
    colors: ["#1d1d1d", "#3c5068"], sizes: ["26","28","30","32"],
    desc: "Relaxed wide-leg denim with a high rise and a clean, uncuffed hem — easy, unfussy, and endlessly wearable."
  },
  {
    id: "dn-05", category: "denim", name: "Denim Shirt Jacket",
    price: 98.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQDx8SEWfV3u8YGO476c9PCWXSoNIfkk-JIyfkY03qMVXhFeEhWm7vxA&s=10",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQDx8SEWfV3u8YGO476c9PCWXSoNIfkk-JIyfkY03qMVXhFeEhWm7vxA&s=10"],
    colors: ["#3c5068"], sizes: ["S","M","L","XL"],
    desc: "Lightweight denim shirt jacket, soft-washed for a broken-in feel right out of the box."
  },
  {
    id: "dn-06", category: "denim", name: "Skinny Stretch Jeans",
    price: 79.00,
    image: "https://i.ebayimg.com/images/g/aaEAAOSwpvdgaKX7/s-l400.jpg",
    images: ["https://i.ebayimg.com/images/g/aaEAAOSwpvdgaKX7/s-l400.jpg"],
    colors: ["#1d1d1d", "#2c3a4a"], sizes: ["26","28","30","32"],
    desc: "A close, stretch-engineered fit that holds its shape through the day without ever feeling restrictive."
  },

  /* ---------------- ACCESSORIES ---------------- */
  {
    id: "ac-01", category: "accessories", name: "Velora Signature Cap",
    price: 38.00,
    image: "https://cdn.dsmcdn.com/ty1851/prod/QC_PREP/20260405/13/8ea9daba-581b-355d-bda7-081ca7abe829/1_org_zoom.jpg",
    images: ["https://cdn.dsmcdn.com/ty1851/prod/QC_PREP/20260405/13/8ea9daba-581b-355d-bda7-081ca7abe829/1_org_zoom.jpg"],
    colors: ["#3b2e25", "#1d1d1d"], sizes: ["One Size"],
    desc: "Structured six-panel cap in brushed cotton twill with embroidered logo detail."
  },
  {
    id: "ac-02", category: "accessories", name: "Leather Belt",
    price: 58.00,
    image: "https://tibi.com/cdn/shop/products/AF22MB0174_MENSLEATHERBELT_BROWN_03.jpg?v=1720187512",
    images: ["https://tibi.com/cdn/shop/products/AF22MB0174_MENSLEATHERBELT_BROWN_03.jpg?v=1720187512"],
    colors: ["#5b4636", "#1d1d1d"], sizes: ["S","M","L"],
    desc: "Full-grain leather belt with a solid brass buckle — built to age into something better than new."
  },
  {
    id: "ac-03", category: "accessories", name: "Wool Scarf",
    price: 64.00,
    image: "https://scotlandhouseltd.com/cdn/shop/files/14710-char.jpg?v=1760989151&width=416",
    images: [ "https://scotlandhouseltd.com/cdn/shop/files/14710-char.jpg?v=1760989151&width=416"],
    colors: ["#8a7158", "#3b2e25"], sizes: ["One Size"],
    desc: "Brushed merino wool scarf, woven for warmth without weight. Finished with a fringed edge."
  },
  {
    id: "ac-04", category: "accessories", name: "Leather Crossbody Bag",
    price: 148.00,
    image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AP2516s.jpg?im=Resize,width=750",
    images: [ "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AP2516s.jpg?im=Resize,width=750"],
    colors: ["#5b4636"], sizes: ["One Size"],
    desc: "Hand-stitched leather crossbody bag with a structured base and adjustable strap."
  },
  {
    id: "ac-05", category: "accessories", name: "Aviator Sunglasses",
    price: 76.00,
    image: "https://eyemax.pk/cdn/shop/files/GeometricalAviatorThinGoldenSunglasses-202-2.jpg?v=1752326510&width=1445",
    images: ["https://eyemax.pk/cdn/shop/files/GeometricalAviatorThinGoldenSunglasses-202-2.jpg?v=1752326510&width=1445"],
    colors: ["#1d1d1d", "#5b4636"], sizes: ["One Size"],
    desc: "Polarized aviators with a thin metal frame and gradient lenses — built for everyday glare, designed for everyday wear."
  },
  {
    id: "ac-06", category: "accessories", name: "Knit Beanie",
    price: 32.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27-OUkbGwOoFvkHId343q3UuLBFb10GYW0TIa6tw8BIRHsRDm-1EZt8s&s=10",
    images: [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27-OUkbGwOoFvkHId343q3UuLBFb10GYW0TIa6tw8BIRHsRDm-1EZt8s&s=10"],
    colors: ["#3b2e25", "#1d1d1d", "#8a7158"], sizes: ["One Size"],
    desc: "Ribbed-knit beanie in a fine merino blend, finished with a subtle Velora label."
  }
];

const CATEGORY_META = {
  men: {
    title: "Menswear",
    tagline: "Tailored pieces built for the long run — structured, considered, made to last.",
    hero: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1600&auto=format&fit=crop"
  },
  women: {
    title: "Womenswear",
    tagline: "Fluid silhouettes and fine fabrics, designed to move through every part of your day.",
    hero: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1600&auto=format&fit=crop"
  },
  denim: {
    title: "Denim",
    tagline: "Rigid selvedge to soft stretch — denim built to wear in, not wear out.",
    hero: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1600&auto=format&fit=crop"
  },
  accessories: {
    title: "Accessories",
    tagline: "The finishing details — leather, wool, and metal, made to outlast the trend.",
    hero: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1600&auto=format&fit=crop"
  }
};

function getProductById(id){
  return PRODUCTS.find(p => p.id === id);
}
function getProductsByCategory(cat){
  return PRODUCTS.filter(p => p.category === cat);
}
