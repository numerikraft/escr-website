const fs = require('fs');
let css = fs.readFileSync('brandbook/brandbook.css', 'utf8');

// 1. Update .about-gradient-card to solid #7f2191, larger padding, border-radius 24px, site shadow
css = css.replace(/\.about-gradient-card\s*\{[^}]*\}/, `.about-gradient-card {
  background: #7f2191;
  color: #ffffff;
  padding: 36px 32px;
  border-radius: 24px;
  border: none;
  box-shadow: 0 0 25px rgba(80, 41, 142, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`);

// Update text sizes inside about cards
css = css.replace(/\.about-card-badge\s*\{[^}]*\}/, `.about-card-badge {
  font-family: var(--font-brand);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
}`);

css = css.replace(/\.about-card-stat\s*\{[^}]*\}/, `.about-card-stat {
  color: #ffffff;
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}`);

css = css.replace(/\.about-card-title\s*\{[^}]*\}/, `.about-card-title {
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 12px;
}`);

css = css.replace(/\.about-card-text\s*\{[^}]*\}/, `.about-card-text {
  font-size: 16px;
  color: #ffffff;
  line-height: 1.6;
  opacity: 0.95;
}`);

// 2. Update .mission-card to have border: none and shadow: 0 0 25px rgba(80, 41, 142, 0.18)
css = css.replace(/\.mission-card\s*\{[^}]*\}/, `.mission-card {
  background: #ffffff;
  border: none;
  border-radius: 24px;
  padding: 36px 32px;
  box-shadow: 0 0 25px rgba(80, 41, 142, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`);

// 3. Update .cro-spectrum-card to have border: none, shadow: 0 0 25px rgba(80, 41, 142, 0.18), border-radius: 24px
css = css.replace(/\.cro-spectrum-card\s*\{[^}]*\}/, `.cro-spectrum-card {
  background: #ffffff;
  border: none;
  border-radius: 24px;
  padding: 36px 40px;
  box-shadow: 0 0 25px rgba(80, 41, 142, 0.18);
}`);

// Update .cro-spectrum-row styling for a polished medical look
css = css.replace(/\.cro-spectrum-row\s*\{[^}]*\}/, `.cro-spectrum-row {
  display: flex;
  align-items: center;
  padding: 20px 24px;
  border-radius: 12px;
  margin-bottom: 12px;
  background: #fdfaff;
  transition: background 200ms ease;
}

.cro-spectrum-row:last-child {
  margin-bottom: 0;
}`);

css = css.replace(/\.cro-spectrum-left\s*\{[^}]*\}/, `.cro-spectrum-left {
  font-size: 14.5px;
  font-weight: 500;
  color: #8e7fa5;
  width: 190px;
  text-align: right;
  flex-shrink: 0;
}`);

css = css.replace(/\.cro-spectrum-track\s*\{[^}]*\}/, `.cro-spectrum-track {
  flex: 1;
  height: 8px;
  background: #eee6f6;
  border-radius: 9999px;
  position: relative;
  margin: 0 28px;
}`);

css = css.replace(/\.cro-spectrum-pip\s*\{[^}]*\}/, `.cro-spectrum-pip {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #50298e;
  border: 3px solid #ffffff;
  box-shadow: 0 2px 8px rgba(80, 41, 142, 0.5);
}`);

css = css.replace(/\.cro-spectrum-right\s*\{[^}]*\}/, `.cro-spectrum-right {
  font-size: 15.5px;
  font-weight: 600;
  color: #50298e;
  width: 210px;
  text-align: left;
  flex-shrink: 0;
}`);

// 4. Increase DNA grid size: icon box 96px, icon size larger, connecting line adjusted
css = css.replace(/\.dna-connecting-line\s*\{[^}]*\}/, `.dna-connecting-line {
  position: absolute;
  top: 56px;
  left: 96px;
  right: 96px;
  height: 2px;
  background: rgba(127, 33, 145, 0.22);
  z-index: 1;
}`);

css = css.replace(/\.dna-item-node\s*\{[^}]*\}/, `.dna-item-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  width: 200px;
}`);

css = css.replace(/\.dna-icon-outer\s*\{[^}]*\}/, `.dna-icon-outer {
  position: relative;
  padding: 10px;
  margin-bottom: 16px;
}`);

css = css.replace(/\.dna-icon-ring\s*\{[^}]*\}/, `.dna-icon-ring {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  border: 1px solid rgba(127, 33, 145, 0.18);
  transition: all 400ms ease;
}`);

css = css.replace(/\.dna-icon-box\s*\{[^}]*\}/, `.dna-icon-box {
  width: 96px;
  height: 96px;
  border-radius: 20px;
  background: radial-gradient(circle at 0% 0%, rgb(127, 33, 145) 0%, rgb(76, 0, 90) 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 28px -6px rgba(127, 33, 145, 0.42);
  transition: transform 300ms ease;
  position: relative;
  z-index: 2;
}`);

css = css.replace(/\.dna-item-label\s*\{[^}]*\}/, `.dna-item-label {
  font-size: 15px;
  font-weight: 600;
  color: #392874;
  line-height: 1.4;
  text-align: center;
  max-width: 190px;
}`);

// 5. Add Curtain & Zoom Scroll Reveal styles for the photo (exact About page effect)
const photoRevealStyles = `
/* Photographic Scroll Curtain & Zoom Reveal (Matching About Page) */
.about-hero-curtain-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 0 25px rgba(80, 41, 142, 0.18);
  width: 100%;
  margin-top: 36px;
  background: #ffffff;
  padding: 8px;
}

.about-hero-inner {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  width: 100%;
}

.about-hero-curtain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #620f78;
  z-index: 10;
  transform-origin: top;
  transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);
}

.about-hero-curtain-wrapper.revealed .about-hero-curtain {
  transform: scaleY(0);
}

.about-hero-img {
  width: 100%;
  height: auto;
  display: block;
  transform: scale(1.18);
  transition: transform 1.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.about-hero-curtain-wrapper.revealed .about-hero-img {
  transform: scale(1);
}
`;

css += '\n' + photoRevealStyles;

fs.writeFileSync('brandbook/brandbook.css', css, 'utf8');
console.log('Successfully updated brandbook.css!');
