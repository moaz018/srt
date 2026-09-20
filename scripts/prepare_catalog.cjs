const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

const srcDir = path.join(__dirname, '..', 'images cataloge');
const publicCatalogDir = path.join(__dirname, '..', 'public', 'catalog');

if (!fs.existsSync(publicCatalogDir)) {
  fs.mkdirSync(publicCatalogDir, { recursive: true });
}

// Remove any lingering sample image from public folder
const samplePublic = path.join(publicCatalogDir, 'sample-book-wgr.jpg');
if (fs.existsSync(samplePublic)) {
  fs.unlinkSync(samplePublic);
}

// Map of the user's actual design files to clean filenames and metadata
const designs = [
  {
    id: 'SRT-3DR-001',
    src: 'Gemini_Generated_Image_ppmk7bppmk7bppmk.jpg.jpeg',
    dest: 'design-srt-3dr-001.jpg',
    title: 'Royal Golden Feather & White Magnolia Blossom',
    collection: '3D Sculpted Baroque & Gold Relief',
    category: 'bedsheets',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Poly-Sateen',
    tags: ['3D Relief', 'Gold Leaf', 'Magnolia', 'Luxury Bedding'],
  },
  {
    id: 'SRT-3DR-002',
    src: 'Gemini_Generated_Image_4qvf694qvf694qvf.jpg.jpeg',
    dest: 'design-srt-3dr-002.jpg',
    title: 'Golden Tree of Life with Sculpted Pearl Flowers',
    collection: '3D Sculpted Baroque & Gold Relief',
    category: 'bedsheets',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Poly-Sateen',
    tags: ['Tree of Life', 'Pearl Embellished', 'Gold Trunk', 'Wall Hanging'],
  },
  {
    id: 'SRT-3DR-003',
    src: 'Gemini_Generated_Image_u56waiu56waiu56w.jpg.jpeg',
    dest: 'design-srt-3dr-003.jpg',
    title: 'Baroque Porcelain Blue Rose & Golden Vintage Clocks',
    collection: '3D Sculpted Baroque & Gold Relief',
    category: 'bedsheets',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Swiss Voile',
    tags: ['Cobalt Blue', 'Vintage Clock', 'Gilded Frame', 'Porcelain Rose'],
  },
  {
    id: 'SRT-3DR-004',
    src: 'Gemini_Generated_Image_mrbg5fmrbg5fmrbg.jpg.jpeg',
    dest: 'design-srt-3dr-004.jpg',
    title: 'Faceted 3D Gold Heart in Carved Baroque Marbled Frame',
    collection: '3D Sculpted Baroque & Gold Relief',
    category: 'bedsheets',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Dhanak',
    tags: ['Faceted Heart', 'Zebra Marble', 'Baroque Frame', 'Royal Gold'],
  },
  {
    id: 'SRT-3DR-005',
    src: 'Gemini_Generated_Image_gf0vcigf0vcigf0v.jpg.jpeg',
    dest: 'design-srt-3dr-005.jpg',
    title: 'Quilted Rose Velvet Love with Carved Filigree Border',
    collection: '3D Romantic & Velvet',
    category: 'apparel',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Dhanak & Brushed Poly-Fleece',
    tags: ['Quilted Velvet', 'Love Monogram', 'Pink Rose', 'Baroque Filigree'],
  },
  {
    id: 'SRT-3DR-006',
    src: 'Gemini_Generated_Image_m4ptaim4ptaim4pt.jpg.jpeg',
    dest: 'design-srt-3dr-006.jpg',
    title: 'Mint Green Satin Silk Ribbon & Floral Heart Bouquet',
    collection: '3D Romantic & Velvet',
    category: 'bedsheets',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Swiss Lawn',
    tags: ['Mint Satin', 'Silk Ribbon', 'Pastel Pom-Poms', 'Bridal Bedding'],
  },
  {
    id: 'SRT-3DR-007',
    src: 'Gemini_Generated_Image_ltiihpltiihpltii.jpg.jpeg',
    dest: 'design-srt-3dr-007.jpg',
    title: 'Sapphire Crystal Floral Vine with Prismatic Gem Hearts',
    collection: '3D Jewel & Crystal',
    category: 'apparel',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Swiss Lawn & Poly-Interlock',
    tags: ['Sapphire Blue', 'Crystal Hearts', 'Prismatic Gems', 'Summer Lawn'],
  },
  {
    id: 'SRT-3DR-008',
    src: 'Gemini_Generated_Image_9cz7rt9cz7rt9cz7.jpg.jpeg',
    dest: 'design-srt-3dr-008.jpg',
    title: 'Pink Braided Rose Typography with Quilted Black Hearts',
    collection: '3D Romantic & Velvet',
    category: 'apparel',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Poly-Interlock & Dhanak',
    tags: ['Braided Yarn', 'Quilted Hearts', 'Matte Pink', 'Fashion Apparel'],
  },
  {
    id: 'SRT-3DR-009',
    src: 'Gemini_Generated_Image_e3h00ie3h00ie3h0.jpg.jpeg',
    dest: 'design-srt-3dr-009.jpg',
    title: 'Fluffy Pastel Cloud Rainbows & Pearl Starscape (Kids Bedding)',
    collection: '3D Kids & Whimsical',
    category: 'bedsheets',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin (Bedsheets)',
    tags: ['Rainbow Arch', 'Fluffy Clouds', 'Kids Bedroom', 'Pastel Dreams'],
  },
];

// Copy each actual design file into public/catalog/
designs.forEach(d => {
  const s = path.join(srcDir, d.src);
  const t = path.join(publicCatalogDir, d.dest);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, t);
    console.log(`Copied ${d.src} -> ${d.dest}`);
  } else {
    console.warn(`Source not found: ${s}`);
  }
});

async function drawSpreadHeaderAndFooter(page, fontTimesBold, fontTimesItalic, fontHelveticaBold, fontHelvetica, pageNumber, totalPages) {
  const pageWidth = 1190.55;
  const pageHeight = 841.89;

  // Background light ivory tone matching sample layout
  page.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
    color: rgb(0.98, 0.98, 0.97),
  });

  // Top Title Bar
  page.drawText('Sabiha Ramzan Textile Pvt Ltd.', {
    x: 430,
    y: 796,
    size: 26,
    font: fontTimesBold,
    color: rgb(0.12, 0.12, 0.12),
  });

  page.drawText('——  Sample Book  ——', {
    x: 495,
    y: 769,
    size: 18,
    font: fontTimesBold,
    color: rgb(0.77, 0.61, 0.15), // Elegant Gold
  });

  page.drawText('3D Royal Collection  |  12 x 12 in  |  Home Textile Book', {
    x: 420,
    y: 746,
    size: 13,
    font: fontHelveticaBold,
    color: rgb(0.2, 0.2, 0.2),
  });

  // Top Right Tagline
  page.drawText('Designed for Elegant Living', {
    x: 935,
    y: 790,
    size: 16,
    font: fontTimesItalic,
    color: rgb(0.4, 0.35, 0.25),
  });
  page.drawText('PREMIUM TEXTILE DESIGNS FOR A BRIGHTER TOMORROW', {
    x: 900,
    y: 772,
    size: 7.5,
    font: fontHelvetica,
    color: rgb(0.5, 0.5, 0.5),
  });

  // Footer bar
  page.drawText('TIMELESS PRINTS   |   PREMIUM QUALITY   |   GLOBAL APPEAL', {
    x: 425,
    y: 42,
    size: 11,
    font: fontHelveticaBold,
    color: rgb(0.4, 0.35, 0.25),
  });

  page.drawText(`Direct Factory Orders: WhatsApp +92 323 6602316  •  Sialkot Industrial Facility  •  Page ${pageNumber} of ${totalPages}`, {
    x: 385,
    y: 25,
    size: 9,
    font: fontHelvetica,
    color: rgb(0.55, 0.55, 0.55),
  });
}

async function generatePdf() {
  console.log('Generating PDF Catalog using ONLY actual designs with the sample layout format...');
  const pdfDoc = await PDFDocument.create();

  const fontHelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontTimesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontTimesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const pageWidth = 1190.55;
  const pageHeight = 841.89;

  // PAGE 1: First 8 actual designs in 4x2 hanger card layout
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);
  await drawSpreadHeaderAndFooter(page1, fontTimesBold, fontTimesItalic, fontHelveticaBold, fontHelvetica, 1, 2);

  const marginX = 65;
  const colGap = 28;
  const swatchWidth = 245;
  const swatchHeight = 275;
  const startY1 = 430;
  const startY2 = 125;

  const page1Designs = designs.slice(0, 8);

  for (let i = 0; i < page1Designs.length; i++) {
    const item = page1Designs[i];
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = marginX + col * (swatchWidth + colGap);
    const y = row === 0 ? startY1 : startY2;

    // Card frame
    page1.drawRectangle({
      x: x,
      y: y,
      width: swatchWidth,
      height: swatchHeight,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.85, 0.8, 0.7),
      borderWidth: 1.5,
    });

    // Card Header Bar
    page1.drawRectangle({
      x: x,
      y: y + swatchHeight - 34,
      width: swatchWidth,
      height: 34,
      color: rgb(0.98, 0.97, 0.95),
      borderColor: rgb(0.88, 0.84, 0.75),
      borderWidth: 0.5,
    });

    // Metallic hole circle cutout (sample card hanger style)
    page1.drawCircle({
      x: x + swatchWidth / 2,
      y: y + swatchHeight - 17,
      size: 5,
      color: rgb(0.9, 0.89, 0.86),
      borderColor: rgb(0.75, 0.72, 0.65),
      borderWidth: 1,
    });

    page1.drawText('SRT', {
      x: x + 10,
      y: y + swatchHeight - 20,
      size: 12,
      font: fontTimesBold,
      color: rgb(0.77, 0.61, 0.15),
    });
    page1.drawText('Sabiha Ramzan Textile', {
      x: x + 10,
      y: y + swatchHeight - 29,
      size: 6.5,
      font: fontHelvetica,
      color: rgb(0.35, 0.35, 0.35),
    });

    page1.drawText('3D Royal Collection', {
      x: x + swatchWidth - 88,
      y: y + swatchHeight - 20,
      size: 7.5,
      font: fontHelveticaBold,
      color: rgb(0.25, 0.25, 0.25),
    });
    page1.drawText('12 x 12 in', {
      x: x + swatchWidth - 52,
      y: y + swatchHeight - 29,
      size: 7,
      font: fontHelvetica,
      color: rgb(0.45, 0.45, 0.45),
    });

    // Embed Design Image
    const imgPath = path.join(publicCatalogDir, item.dest);
    if (fs.existsSync(imgPath)) {
      try {
        const imgBytes = fs.readFileSync(imgPath);
        const embeddedImg = await pdfDoc.embedJpg(imgBytes);
        const imgAreaWidth = swatchWidth - 16;
        const imgAreaHeight = swatchHeight - 50;
        
        page1.drawImage(embeddedImg, {
          x: x + 8,
          y: y + 8,
          width: imgAreaWidth,
          height: imgAreaHeight,
        });

        // Design Number Tag Badge (Bottom Left)
        page1.drawRectangle({
          x: x + 14,
          y: y + 14,
          width: 92,
          height: 19,
          color: rgb(1, 1, 1),
          borderColor: rgb(0.77, 0.61, 0.15),
          borderWidth: 1.2,
        });
        page1.drawText(item.id, {
          x: x + 18,
          y: y + 19,
          size: 9.5,
          font: fontHelveticaBold,
          color: rgb(0.1, 0.1, 0.1),
        });
      } catch (err) {
        console.error(`Error embedding ${item.dest}:`, err.message);
      }
    }
  }

  // PAGE 2: 9th Design + Collection Specifications & Production Details
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);
  await drawSpreadHeaderAndFooter(page2, fontTimesBold, fontTimesItalic, fontHelveticaBold, fontHelvetica, 2, 2);

  const design9 = designs[8]; // SRT-3DR-009
  if (design9) {
    const x = marginX;
    const y = startY1;

    // Card frame for Design 9
    page2.drawRectangle({
      x: x,
      y: y,
      width: swatchWidth,
      height: swatchHeight,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.85, 0.8, 0.7),
      borderWidth: 1.5,
    });

    // Card Header Bar
    page2.drawRectangle({
      x: x,
      y: y + swatchHeight - 34,
      width: swatchWidth,
      height: 34,
      color: rgb(0.98, 0.97, 0.95),
      borderColor: rgb(0.88, 0.84, 0.75),
      borderWidth: 0.5,
    });

    page2.drawCircle({
      x: x + swatchWidth / 2,
      y: y + swatchHeight - 17,
      size: 5,
      color: rgb(0.9, 0.89, 0.86),
      borderColor: rgb(0.75, 0.72, 0.65),
      borderWidth: 1,
    });

    page2.drawText('SRT', {
      x: x + 10,
      y: y + swatchHeight - 20,
      size: 12,
      font: fontTimesBold,
      color: rgb(0.77, 0.61, 0.15),
    });
    page2.drawText('Sabiha Ramzan Textile', {
      x: x + 10,
      y: y + swatchHeight - 29,
      size: 6.5,
      font: fontHelvetica,
      color: rgb(0.35, 0.35, 0.35),
    });

    page2.drawText('3D Royal Collection', {
      x: x + swatchWidth - 88,
      y: y + swatchHeight - 20,
      size: 7.5,
      font: fontHelveticaBold,
      color: rgb(0.25, 0.25, 0.25),
    });
    page2.drawText('12 x 12 in', {
      x: x + swatchWidth - 52,
      y: y + swatchHeight - 29,
      size: 7,
      font: fontHelvetica,
      color: rgb(0.45, 0.45, 0.45),
    });

    const imgPath = path.join(publicCatalogDir, design9.dest);
    if (fs.existsSync(imgPath)) {
      const imgBytes = fs.readFileSync(imgPath);
      const embeddedImg = await pdfDoc.embedJpg(imgBytes);
      page2.drawImage(embeddedImg, {
        x: x + 8,
        y: y + 8,
        width: swatchWidth - 16,
        height: swatchHeight - 50,
      });

      page2.drawRectangle({
        x: x + 14,
        y: y + 14,
        width: 92,
        height: 19,
        color: rgb(1, 1, 1),
        borderColor: rgb(0.77, 0.61, 0.15),
        borderWidth: 1.2,
      });
      page2.drawText(design9.id, {
        x: x + 18,
        y: y + 19,
        size: 9.5,
        font: fontHelveticaBold,
        color: rgb(0.1, 0.1, 0.1),
      });
    }
  }

  // Right Side of Page 2: Official Specification & Ordering Panel
  const panelX = marginX + swatchWidth + colGap;
  const panelWidth = pageWidth - panelX - marginX;
  const panelHeight = 580;
  const panelY = 125;

  page2.drawRectangle({
    x: panelX,
    y: panelY,
    width: panelWidth,
    height: panelHeight,
    color: rgb(1, 1, 1),
    borderColor: rgb(0.85, 0.8, 0.7),
    borderWidth: 1.5,
  });

  // Panel Gold Header Banner
  page2.drawRectangle({
    x: panelX,
    y: panelY + panelHeight - 45,
    width: panelWidth,
    height: 45,
    color: rgb(0.77, 0.61, 0.15),
  });
  page2.drawText('PRODUCTION SPECIFICATIONS & ORDERING GUIDE', {
    x: panelX + 25,
    y: panelY + panelHeight - 30,
    size: 14,
    font: fontHelveticaBold,
    color: rgb(1, 1, 1),
  });

  // Specification items
  const specs = [
    { title: 'Standard Pattern Repeat:', desc: '12 x 12 in (Seamless Continuous Repeat across fabric roll width)' },
    { title: 'Printing Technology:', desc: 'High-Precision Industrial Sublimation Heat Transfer (Rotary Calender 205°C)' },
    { title: 'Recommended Substrates:', desc: 'Microfibre Peach Skin (120-150 GSM), Poly-Sateen, Swiss Voile, Dhanak & Poly-Interlock' },
    { title: 'Color Vibrancy & Fastness:', desc: 'Ultra-HD Pigments, Grade 4-5 Wash Fastness, Zero Peeling or Cracking' },
    { title: 'Target Applications:', desc: 'Luxury Bedsheets & Pillow Shams, Duvet Covers, Bridal Throws, Curtains & Cushions' },
    { title: 'Sampling & Bulk MOQ:', desc: 'Full custom sample swatches available. Flexible production from trial lots to container loads' },
  ];

  let specY = panelY + panelHeight - 80;
  for (const s of specs) {
    page2.drawText(s.title, {
      x: panelX + 25,
      y: specY,
      size: 11,
      font: fontHelveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    });
    page2.drawText(s.desc, {
      x: panelX + 25,
      y: specY - 16,
      size: 10,
      font: fontHelvetica,
      color: rgb(0.4, 0.4, 0.4),
    });
    specY -= 45;
  }

  // Summary Table of all 9 Design Codes
  page2.drawText('CATALOGUE DESIGN INDEX (QUOTE BY CODE)', {
    x: panelX + 25,
    y: specY - 10,
    size: 11,
    font: fontHelveticaBold,
    color: rgb(0.77, 0.61, 0.15),
  });

  let indexY = specY - 30;
  for (let idx = 0; idx < designs.length; idx++) {
    const d = designs[idx];
    const colX = idx < 5 ? panelX + 25 : panelX + (panelWidth / 2) + 10;
    const currentY = idx < 5 ? indexY - (idx * 20) : indexY - ((idx - 5) * 20);

    page2.drawText(`${d.id}:`, {
      x: colX,
      y: currentY,
      size: 9,
      font: fontHelveticaBold,
      color: rgb(0.15, 0.15, 0.15),
    });
    page2.drawText(d.title.slice(0, 36) + (d.title.length > 36 ? '...' : ''), {
      x: colX + 80,
      y: currentY,
      size: 8.5,
      font: fontHelvetica,
      color: rgb(0.35, 0.35, 0.35),
    });
  }

  // Bottom Box with Direct WhatsApp Call-to-action
  page2.drawRectangle({
    x: panelX + 20,
    y: panelY + 20,
    width: panelWidth - 40,
    height: 60,
    color: rgb(0.96, 0.98, 0.96),
    borderColor: rgb(0.2, 0.7, 0.3),
    borderWidth: 1,
  });

  page2.drawText('Direct Production Desk (WhatsApp): +92 323 6602316', {
    x: panelX + 35,
    y: panelY + 54,
    size: 12,
    font: fontHelveticaBold,
    color: rgb(0.1, 0.5, 0.2),
  });
  page2.drawText('Send any design code (e.g. "Quote for SRT-3DR-001 on Microfibre 130 GSM") for instantaneous pricing.', {
    x: panelX + 35,
    y: panelY + 36,
    size: 9,
    font: fontHelvetica,
    color: rgb(0.3, 0.3, 0.3),
  });

  const pdfBytes = await pdfDoc.save();
  const pdfFilePath = path.join(publicCatalogDir, 'SRT-Sample-Book-3D-Royal-Collection.pdf');
  fs.writeFileSync(pdfFilePath, pdfBytes);
  console.log('Successfully generated PDF catalog at:', pdfFilePath);
}

generatePdf().catch(console.error);
