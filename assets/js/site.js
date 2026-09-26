/* webnwillow — shared header, footer, icons and small behaviours for every page. */
(function () {
  // ===== Edit these before going live =====
  var SITE = {
    email: 'hello@webnwillow.com',
    social: {
      instagram: 'https://www.instagram.com/webnwillow/',
      facebook: 'https://www.facebook.com/share/1CJVi62Sjr/',
      linkedin: 'https://www.linkedin.com/company/web-n-willow/'
    }
  };
  // ========================================

  var PAGES = [
    { id: 'home', href: 'index.html', label: 'Home' },
    { id: 'about', href: 'about.html', label: 'About' },
    { id: 'work', href: 'index.html#work', label: 'Work' },
    { id: 'web', href: 'web-development.html', label: 'Web', icon: 'code' },
    { id: 'apps', href: 'app-development.html', label: 'Apps', icon: 'phone' },
    { id: 'marketing', href: 'digital-marketing.html', label: 'Marketing', icon: 'megaphone' },
    { id: 'it', href: 'it-support.html', label: 'IT Support', icon: 'headset' },
    { id: 'blog', href: 'blog.html', label: 'Blog' },
    { id: 'contact', href: 'contact.html', label: 'Contact', icon: 'mail' }
  ];

  // Line icons, 24x24. Stroke width follows --sw so big icons can go thinner.
  var ICONS = {
    code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    megaphone: '<path d="M3 10v4h4l8 4.5v-13L7 10H3z"/><path d="M18.5 9a4 4 0 0 1 0 6"/><path d="M6 14l1.5 5.5h3L9.5 15"/>',
    headset: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20a3 3 0 0 1-3 2h-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    bag: '<path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/>',
    page: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8.5 7h7M8.5 11h7M8.5 15h4"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    cart: '<path d="M2.5 4h2.3l2.4 11h10.6L20.5 8H6.1"/><circle cx="9" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/>',
    tag: '<path d="M3 12.2V4h8.2L21 13.8 13.8 21 3 12.2z"/><circle cx="7.5" cy="8.5" r="1.4"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L3.5 17.5 6.5 20.5l5.9-5.9a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.8-.5-.5-2.8 2.8-2.5z"/>',
    android: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.2 8.5l4.3 3-4.3 3z"/>',
    ios: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 5.5h3"/><circle cx="12" cy="18" r="1"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 16.5l9 5 9-5"/>',
    desktop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8.5 20h7M12 16v4"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.8-3.5M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.8 3.5M20 20v-4h-4"/>',
    server: '<rect x="4" y="3.5" width="16" height="7" rx="1.5"/><rect x="4" y="13.5" width="16" height="7" rx="1.5"/><path d="M8 7h.01M8 17h.01M12 7h4M12 17h4"/>',
    bug: '<rect x="8" y="7" width="8" height="12" rx="4"/><path d="M12 11v8M4 13h4M16 13h4M5 8l3 1.5M19 8l-3 1.5M5 18.5l3-1.5M19 18.5l-3-1.5M9.5 5l1 2M14.5 5l-1 2"/>',
    shield: '<path d="M12 3l8 3v6c0 4.8-3.4 8-8 9-4.6-1-8-4.2-8-9V6l8-3z"/><path d="M8.8 12l2.2 2.2 4.2-4.4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
    chat: '<path d="M4 5h16v11H9.5L4 20V5z"/><path d="M8 9.5h8M8 12.5h5"/>',
    sprout: '<path d="M12 21v-8"/><path d="M12 13c0-4-3-6.5-7.5-6.5C4.5 11 7.5 13 12 13z"/><path d="M12 10.5c0-3.8 2.8-6 7-6 0 4.1-2.8 6-7 6z"/>',
    bloom: '<circle cx="12" cy="9" r="2"/><circle cx="12" cy="4.8" r="2.3"/><circle cx="16.2" cy="9" r="2.3"/><circle cx="7.8" cy="9" r="2.3"/><circle cx="12" cy="13.2" r="2.3"/><path d="M12 15.5V21M12 19c1.5-1.8 3.3-2.3 5-2.1-.6 1.8-2.6 2.7-5 2.1z"/>',
    tree: '<path d="M8.5 15.5H7A4.5 4.5 0 0 1 6 6.6 6 6 0 0 1 17.6 6.4 4.5 4.5 0 0 1 17 15.5h-1.5"/><path d="M12 21v-9.5M12 15l-2.5-2M12 13.5l2.5-2"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    arrow: '<path d="M5 12h13M12 5l7 7-7 7"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.5A6.5 6.5 0 0 1 21.5 20"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    pen: '<path d="M4 20l1-4.5L15.5 5a2.1 2.1 0 0 1 3 3L8 18.5 4 20z"/><path d="M13.5 7l3 3"/>',
    rocket: '<path d="M12 15l-3-3c1.5-4.5 4.5-8 10-8.5-.5 5.5-4 8.5-7 11.5z"/><path d="M9 12H5.5L8 8.5h4M12 15v3.5l3.5-2.5v-4"/><path d="M6.5 16.5c-1.5.5-2.5 2-2.5 3.5 1.5 0 3-1 3.5-2.5"/>',
    heart: '<path d="M12 20s-8-4.6-8-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 8 2.4C20 15.4 12 20 12 20z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/>',
    facebook: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M15.5 7.5H14a2.5 2.5 0 0 0-2.5 2.5v11M9 13.5h5.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3.5"/><path d="M7.5 10.5v6M7.5 7.5v.01M11 16.5v-6M11 13.5a2.8 2.8 0 0 1 5.5 0v3"/>',
    pinterest: '<circle cx="12" cy="12" r="9"/><path d="M11.2 12.8l-1.8 7.5"/><path d="M8.3 14.2a4 4 0 0 1-.8-2.5c0-2.7 2.1-4.7 4.8-4.7 2.6 0 4.2 1.7 4.2 4 0 2.6-1.4 4.6-3.3 4.6-1 0-1.8-.8-1.5-1.8l.8-3"/>'
  };

  // Sticker icons (64x64, multi-colour, ink outline) for services, packages and features.
  var I = '#17193F', B = '#0036FF', L = '#B5F800', Y = '#F2F29A', N = '#363B96', P = '#FFFEF4';
  function face(x, y, c) { // two dot eyes + smile
    return '<circle cx="' + (x - 4) + '" cy="' + y + '" r="1.6" fill="' + c + '" stroke="none"/><circle cx="' + (x + 4) + '" cy="' + y + '" r="1.6" fill="' + c + '" stroke="none"/>' +
      '<path d="M' + (x - 3.5) + ' ' + (y + 4) + 'q3.5 3 7 0" fill="none" stroke="' + c + '" stroke-width="2"/>';
  }
  function spark(x, y, r, c) { // four-point sparkle
    var k = r * 0.22;
    return '<path d="M' + x + ' ' + (y - r) + 'Q' + (x + k) + ' ' + (y - k) + ' ' + (x + r) + ' ' + y + 'Q' + (x + k) + ' ' + (y + k) + ' ' + x + ' ' + (y + r) +
      'Q' + (x - k) + ' ' + (y + k) + ' ' + (x - r) + ' ' + y + 'Q' + (x - k) + ' ' + (y - k) + ' ' + x + ' ' + (y - r) + 'Z" fill="' + c + '"/>';
  }
  var STICKERS = {
    bag: '<path d="M13 22h38l-3 31a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z" fill="' + L + '"/><path d="M42 22h9l-3 31a4 4 0 0 1-4 4h-2z" fill="' + B + '"/><path d="M24 22v-4a8 8 0 0 1 16 0v4" fill="none" stroke-width="3.5"/>' +
      '<path d="M28 32l2.4 5 5.6.7-4 3.9 1 5.4-5-2.7-5 2.7 1-5.4-4-3.9 5.6-.7z" fill="' + Y + '"/>' + spark(54, 10, 7, Y),
    page: '<rect x="7" y="10" width="50" height="44" rx="6" fill="' + P + '"/><path d="M13 10h38a6 6 0 0 1 6 6v5H7v-5a6 6 0 0 1 6-6z" fill="' + B + '"/>' +
      '<circle cx="14" cy="15.5" r="1.8" fill="' + Y + '" stroke="none"/><circle cx="20" cy="15.5" r="1.8" fill="' + L + '" stroke="none"/><circle cx="26" cy="15.5" r="1.8" fill="' + P + '" stroke="none"/>' +
      '<rect x="13" y="26" width="38" height="12" rx="3" fill="' + L + '"/><path d="M13 44h18M13 49h12" fill="none"/><rect x="37" y="42" width="14" height="8" rx="4" fill="' + N + '"/>',
    layout: '<rect x="18" y="5" width="40" height="32" rx="5" fill="' + Y + '"/><path d="M18 13h40" fill="none"/><rect x="6" y="18" width="44" height="40" rx="5" fill="' + P + '"/><path d="M11 18h34a5 5 0 0 1 5 5v3H6v-3a5 5 0 0 1 5-5z" fill="' + N + '"/>' +
      '<rect x="11" y="31" width="10" height="21" rx="2" fill="' + B + '"/><rect x="25" y="31" width="20" height="10" rx="2" fill="' + L + '"/><rect x="25" y="44" width="20" height="8" rx="2" fill="' + Y + '"/>' + spark(56, 50, 7, L),
    cart: '<rect x="20" y="8" width="13" height="13" rx="2" fill="' + L + '" transform="rotate(-12 26 14)"/><rect x="33" y="10" width="13" height="11" rx="2" fill="' + Y + '"/>' +
      '<path d="M15 20h44l-6 22H20z" fill="' + B + '"/><path d="M4 12h8l8 30h33" fill="none" stroke-width="3.5"/><path d="M28 26v10M38 26v10M48 26v10" fill="none" stroke="' + P + '"/>' +
      '<circle cx="23" cy="51" r="5" fill="' + N + '"/><circle cx="48" cy="51" r="5" fill="' + N + '"/>',
    tag: '<path d="M33 5h22v22L28 54 7 33z" fill="' + L + '"/><circle cx="46" cy="14" r="4" fill="' + P + '"/><path d="M20 33l12-12M25 38l12-12" fill="none" stroke-width="3"/>' +
      '<path d="M52 52l7 7" fill="none" stroke-width="7"/><path d="M52 52l7 7" fill="none" stroke="' + B + '" stroke-width="3"/><circle cx="45" cy="45" r="9" fill="' + P + '"/><circle cx="45" cy="45" r="4.5" fill="' + Y + '"/>',
    wrench: '<circle cx="21" cy="43" r="13" fill="none" stroke-width="7" stroke-dasharray="5 5.2"/><circle cx="21" cy="43" r="11" fill="' + Y + '"/><circle cx="21" cy="43" r="4" fill="' + P + '"/>' +
      '<path d="M50 6a11 11 0 0 0-11 14L22 37a5 5 0 1 0 7 7l17-17a11 11 0 0 0 14-11l-6 5-6-1-1-6z" fill="' + L + '"/>' + spark(55, 45, 7, B),
    android: '<rect x="15" y="4" width="34" height="56" rx="8" fill="' + B + '"/><rect x="19.5" y="11" width="25" height="40" rx="3" fill="' + L + '"/><path d="M27 22l13 9-13 9z" fill="' + P + '"/><path d="M29 55.5h6" fill="none" stroke="' + P + '"/>' +
      '<circle cx="50" cy="12" r="7" fill="' + Y + '"/><path d="M50 8.5v4M50 15.5v.01" fill="none" stroke-width="2.5"/>',
    ios: '<rect x="15" y="4" width="34" height="56" rx="9" fill="' + N + '"/><rect x="19.5" y="10" width="25" height="44" rx="4" fill="' + Y + '"/><path d="M28 13.5h8" fill="none" stroke-width="3"/>' +
      '<rect x="23" y="19" width="8" height="8" rx="2.5" fill="' + B + '"/><rect x="33" y="19" width="8" height="8" rx="2.5" fill="' + L + '"/><rect x="23" y="30" width="8" height="8" rx="2.5" fill="' + P + '"/><rect x="33" y="30" width="8" height="8" rx="2.5" fill="' + B + '"/>' +
      '<rect x="23" y="42" width="18" height="6" rx="3" fill="' + N + '"/>' + spark(55, 50, 7, L),
    layers: '<g transform="rotate(-14 20 34)"><rect x="7" y="13" width="25" height="42" rx="6" fill="' + L + '"/><rect x="11.5" y="19" width="16" height="28" rx="2" fill="' + P + '"/></g>' +
      '<g transform="rotate(12 44 30)"><rect x="31" y="7" width="25" height="42" rx="6" fill="' + B + '"/><rect x="35.5" y="13" width="16" height="28" rx="2" fill="' + P + '"/></g>' +
      '<circle cx="32" cy="50" r="10" fill="' + Y + '"/><path d="M29 46l-4 4 4 4M35 46l4 4-4 4" fill="none" stroke-width="2.8"/>',
    desktop: '<rect x="5" y="7" width="54" height="38" rx="5" fill="' + N + '"/><rect x="10" y="12" width="44" height="28" rx="2" fill="' + P + '"/>' +
      '<rect x="15" y="26" width="7" height="10" fill="' + B + '"/><rect x="25" y="20" width="7" height="16" fill="' + L + '"/><rect x="35" y="16" width="7" height="20" fill="' + B + '"/><rect x="45" y="23" width="5" height="13" fill="' + Y + '"/>' +
      '<path d="M26 45l-2 9h16l-2-9z" fill="' + Y + '"/><path d="M17 57h30" fill="none" stroke-width="3.5"/>',
    refresh: '<rect x="22" y="15" width="20" height="34" rx="5" fill="' + Y + '"/><rect x="25.5" y="20" width="13" height="22" rx="2" fill="' + L + '"/><path d="M29 45.5h6" fill="none"/>' +
      '<path d="M10 30A22 22 0 0 1 46 11" fill="none" stroke-width="8"/><path d="M10 30A22 22 0 0 1 46 11" fill="none" stroke="' + B + '" stroke-width="4"/><path d="M41 4l7 7-8 4z" fill="' + B + '"/>' +
      '<path d="M54 34a22 22 0 0 1-36 19" fill="none" stroke-width="8"/><path d="M54 34a22 22 0 0 1-36 19" fill="none" stroke="' + B + '" stroke-width="4"/><path d="M23 60l-7-7 8-4z" fill="' + B + '"/>',
    server: '<rect x="9" y="6" width="46" height="15" rx="4" fill="' + B + '"/><rect x="9" y="24.5" width="46" height="15" rx="4" fill="' + N + '"/><rect x="9" y="43" width="46" height="15" rx="4" fill="' + L + '"/>' +
      '<circle cx="17" cy="13.5" r="2.4" fill="' + L + '"/><circle cx="17" cy="32" r="2.4" fill="' + Y + '"/><circle cx="17" cy="50.5" r="2.4" fill="' + B + '"/>' +
      '<path d="M34 13.5h14M34 32h14M34 50.5h14" fill="none" stroke-width="3"/>',
    bug: '<path d="M32 22V9M24 11l-3-5M40 11l3-5" fill="none"/><path d="M12 30l8 3M52 30l-8 3M10 42h9M54 42h-9M13 54l8-4M51 54l-8-4" fill="none" stroke-width="3"/>' +
      '<ellipse cx="32" cy="40" rx="14" ry="17" fill="' + L + '"/><circle cx="32" cy="19" r="8.5" fill="' + N + '"/><circle cx="29" cy="18" r="1.8" fill="' + P + '" stroke="none"/><circle cx="35" cy="18" r="1.8" fill="' + P + '" stroke="none"/>' +
      '<path d="M32 28v29" fill="none"/><circle cx="25" cy="36" r="3" fill="' + B + '"/><circle cx="39" cy="44" r="3.5" fill="' + B + '"/><circle cx="26" cy="48" r="2.3" fill="' + B + '"/>',
    shield: '<path d="M32 4l22 8v17c0 14-9 24-22 30C19 53 10 43 10 29V12z" fill="' + B + '"/><path d="M32 11l15 5.5V29c0 9.5-6 17-15 21.5" fill="' + N + '"/>' +
      '<path d="M21 31l8 8 15-16" fill="none" stroke-width="9"/><path d="M21 31l8 8 15-16" fill="none" stroke="' + L + '" stroke-width="5"/>' + spark(55, 8, 7, Y),
    globe: '<circle cx="25" cy="25" r="19" fill="' + B + '"/><ellipse cx="25" cy="25" rx="8" ry="19" fill="none" stroke="' + P + '" stroke-width="2"/><path d="M6 25h38M9 15h32M9 35h32" fill="none" stroke="' + P + '" stroke-width="2"/><circle cx="25" cy="25" r="19" fill="none"/>' +
      '<rect x="30" y="35" width="28" height="21" rx="3.5" fill="' + L + '"/><path d="M31 37l13 9 13-9" fill="none"/>',
    chat: '<path d="M6 12a6 6 0 0 1 6-6h26a6 6 0 0 1 6 6v15a6 6 0 0 1-6 6H21l-9 8v-8a6 6 0 0 1-6-6z" fill="' + Y + '"/><path d="M14 16h20M14 23h13" fill="none" stroke-width="3"/>' +
      '<path d="M26 30h26a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-1v7l-8-7H26a6 6 0 0 1-6-6V36a6 6 0 0 1 6-6z" fill="' + B + '"/>' +
      '<circle cx="31" cy="42" r="2.6" fill="' + L + '"/><circle cx="39" cy="42" r="2.6" fill="' + L + '"/><circle cx="47" cy="42" r="2.6" fill="' + L + '"/>',
    code: '<rect x="5" y="9" width="54" height="46" rx="6" fill="' + N + '"/><path d="M11 9h42a6 6 0 0 1 6 6v5H5v-5a6 6 0 0 1 6-6z" fill="' + Y + '"/>' +
      '<circle cx="12" cy="14.5" r="1.8" fill="' + B + '" stroke="none"/><circle cx="18" cy="14.5" r="1.8" fill="' + B + '" stroke="none"/>' +
      '<path d="M22 29l-8 8 8 8M42 29l8 8-8 8M36 26l-8 22" fill="none" stroke="' + L + '" stroke-width="4.5"/>',
    phone: '<rect x="14" y="4" width="32" height="56" rx="8" fill="' + B + '"/><rect x="18.5" y="11" width="23" height="42" rx="3" fill="' + P + '"/>' +
      '<rect x="22" y="15" width="16" height="12" rx="2" fill="' + L + '"/><rect x="22" y="30" width="16" height="6" rx="2" fill="' + Y + '"/><rect x="22" y="39" width="10" height="6" rx="2" fill="' + Y + '"/>' +
      '<path d="M52 22s-7-4.3-7-8.8a3.6 3.6 0 0 1 7-1.2 3.6 3.6 0 0 1 7 1.2C59 17.7 52 22 52 22z" fill="' + L + '"/>',
    megaphone: '<path d="M8 25h7v14H8a2 2 0 0 1-2-2V27a2 2 0 0 1 2-2z" fill="' + N + '"/><path d="M15 25l26-13v40L15 39z" fill="' + Y + '"/><path d="M41 12c4 0 6.5 9 6.5 20S45 52 41 52z" fill="' + B + '"/>' +
      '<path d="M19 39l4 14h7l-3-12.5" fill="' + N + '"/><path d="M53 23c3 3 3 15 0 18M58 17c6 6 6 24 0 30" fill="none" stroke="' + B + '" stroke-width="3.5"/>' + spark(55, 8, 6, L),
    headset: '<path d="M12 38v-7a20 20 0 0 1 40 0v7" fill="none" stroke-width="9"/><path d="M12 38v-7a20 20 0 0 1 40 0v7" fill="none" stroke="' + N + '" stroke-width="4.5"/>' +
      '<rect x="5" y="32" width="13" height="19" rx="5" fill="' + L + '"/><rect x="46" y="32" width="13" height="19" rx="5" fill="' + L + '"/>' +
      '<path d="M52 50c0 6-6 9-13 9" fill="none" stroke-width="3"/><rect x="31" y="55" width="9" height="7" rx="3.5" fill="' + B + '"/>',
    mail: '<path d="M8 24l24-16 24 16v28a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z" fill="' + B + '"/><rect x="15" y="12" width="34" height="28" rx="2" fill="' + P + '"/><path d="M21 20h22M21 26h14" fill="none"/>' +
      '<path d="M8 28l24 16 24-16v24a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z" fill="' + L + '"/>',
    pin: '<ellipse cx="32" cy="56" rx="16" ry="5" fill="' + Y + '"/><path d="M32 54S13 37 13 23a19 19 0 0 1 38 0c0 14-19 31-19 31z" fill="' + B + '"/><circle cx="32" cy="23" r="8" fill="' + L + '"/>',
    heart: '<path d="M32 55S7 41 7 23a12.5 12.5 0 0 1 25-4 12.5 12.5 0 0 1 25 4c0 18-25 32-25 32z" fill="' + B + '"/><path d="M15 21a6 6 0 0 1 6-6" fill="none" stroke="' + P + '" stroke-width="3"/>' +
      '<rect x="22" y="28" width="22" height="9" rx="4.5" fill="' + L + '" transform="rotate(-30 33 32.5)"/>' + spark(55, 9, 7, Y),
    clock: '<circle cx="14" cy="13" r="7" fill="' + B + '"/><circle cx="50" cy="13" r="7" fill="' + B + '"/><path d="M17 52l-5 7M47 52l5 7" fill="none" stroke-width="3.5"/>' +
      '<circle cx="32" cy="35" r="21" fill="' + Y + '"/><circle cx="32" cy="35" r="15" fill="' + P + '"/><path d="M32 25v10l7 5" fill="none" stroke-width="3.5"/><circle cx="32" cy="35" r="2" fill="' + I + '"/>',
    users: '<circle cx="17" cy="21" r="8" fill="' + N + '"/><path d="M3 45a14 14 0 0 1 28 0z" fill="' + N + '"/><circle cx="47" cy="21" r="8" fill="' + B + '"/><path d="M33 45a14 14 0 0 1 28 0z" fill="' + B + '"/>' +
      '<circle cx="32" cy="27" r="10" fill="' + L + '"/><path d="M14 58a18 18 0 0 1 36 0z" fill="' + L + '"/>' + face(32, 26, I),
    search: '<path d="M41 41l15 15" fill="none" stroke-width="12"/><path d="M41 41l15 15" fill="none" stroke="' + B + '" stroke-width="7"/><circle cx="26" cy="26" r="18" fill="' + Y + '"/><circle cx="26" cy="26" r="12" fill="' + P + '"/><path d="M19 22a8 8 0 0 1 7-6" fill="none" stroke="' + B + '" stroke-width="3"/>',
    pen: '<g transform="rotate(-45 32 32)"><rect x="14" y="25" width="32" height="14" fill="' + L + '"/><path d="M14 30h32" fill="none" stroke-width="1.5"/><rect x="46" y="25" width="11" height="14" rx="3" fill="' + B + '"/><path d="M14 25L2 32l12 7z" fill="' + Y + '"/><path d="M2 32l4.5-2.6v5.2z" fill="' + I + '"/></g>' + spark(50, 50, 8, B),
    sprout: '<path d="M32 36V21" fill="none" stroke-width="3.5"/><path d="M32 24c-1-10-9-14-17-12 1 9 8 13 17 12z" fill="' + L + '"/><path d="M32 22c1.5-9 9-12 16-10-1 8-8 12-16 10z" fill="' + L + '"/>' +
      '<path d="M17 38h30l-4 21H21z" fill="' + B + '"/><rect x="14" y="33" width="36" height="8" rx="3" fill="' + N + '"/>' + face(32, 47, P),
    bloom: '<path d="M32 42V27" fill="none" stroke-width="3"/><path d="M32 38c3-5 8-6 12-5-2 5-7 7-12 5z" fill="' + L + '"/>' +
      '<g fill="' + Y + '"><circle cx="32" cy="8" r="6"/><circle cx="44" cy="15" r="6"/><circle cx="44" cy="28" r="6"/><circle cx="32" cy="34" r="6"/><circle cx="20" cy="28" r="6"/><circle cx="20" cy="15" r="6"/></g>' +
      '<circle cx="32" cy="21" r="9" fill="' + L + '"/>' + face(32, 19.5, I) +
      '<path d="M20 44h24l-3 16H23z" fill="' + B + '"/><rect x="17" y="40" width="30" height="7" rx="3" fill="' + N + '"/>',
    bulb: '<path d="M4 22h5M55 22h5M10 7l4 4M54 7l-4 4M32 1v4" fill="none" stroke="' + B + '" stroke-width="3.5"/>' +
      '<path d="M32 9a16 16 0 0 0-9.5 28.9c1.9 1.5 2.5 3.3 2.5 5.6V46h14v-2.5c0-2.3.6-4.1 2.5-5.6A16 16 0 0 0 32 9z" fill="' + Y + '"/>' +
      '<path d="M22 20a11 11 0 0 1 7-6" fill="none" stroke="' + P + '" stroke-width="3"/>' + face(32, 24, I) +
      '<rect x="24" y="46" width="16" height="5" rx="1.5" fill="' + N + '"/><rect x="25" y="51" width="14" height="5" rx="2" fill="' + N + '"/><path d="M28.5 56h7l-1.5 4h-4z" fill="' + I + '"/>',
    palette: '<path d="M31 6C16 6 5 16 5 29c0 11 8 16 15 14 4-1 6 2 4 6-2 4 1 9 8 9 15 0 26-12 26-27S46 6 31 6z" fill="' + P + '"/>' +
      '<circle cx="19" cy="22" r="5" fill="' + B + '"/><circle cx="31" cy="14" r="5" fill="' + L + '"/><circle cx="44" cy="19" r="5" fill="' + Y + '"/><circle cx="49" cy="32" r="5" fill="' + N + '"/>' +
      '<circle cx="21" cy="35" r="4" fill="' + Y + '"/>' +
      '<g transform="rotate(38 44 44)"><rect x="41" y="34" width="7" height="26" rx="3.5" fill="' + B + '"/><rect x="41" y="29" width="7" height="6" fill="' + N + '"/><path d="M41 29c0-7 3.5-11 3.5-11S48 22 48 29z" fill="' + L + '"/></g>',
    blocks: '<path d="M33 2v9" fill="none" stroke-width="3"/><path d="M33 11a4 4 0 1 0 4 4" fill="none" stroke-width="3"/>' +
      '<rect x="6" y="40" width="24" height="19" rx="2" fill="' + B + '"/><rect x="11" y="45" width="8" height="8" rx="1.5" fill="' + P + '"/>' +
      '<rect x="32" y="40" width="24" height="19" rx="2" fill="' + L + '"/><path d="M38 50h12" fill="none" stroke="' + N + '" stroke-width="3"/>' +
      '<g transform="rotate(-8 32 28)"><rect x="20" y="18" width="24" height="20" rx="2" fill="' + Y + '"/>' + face(32, 26, I) + '</g>' + spark(58, 12, 6, L),
    water: '<path d="M52 30c9 0 10 16-1 18" fill="none" stroke-width="4"/>' +
      '<path d="M26 36L9 19l4-4 16 15z" fill="' + B + '"/><path d="M4 16l6-6 5.5 5.5-6 6z" fill="' + N + '"/>' +
      '<path d="M24 26h28l-3 26a3 3 0 0 1-3 3H30a3 3 0 0 1-3-3z" fill="' + B + '"/><rect x="22" y="21" width="32" height="6" rx="3" fill="' + N + '"/>' + face(38, 38, P) +
      '<path d="M7 26c0 3-3 5-3 7a3 3 0 0 0 6 0c0-2-3-4-3-7z" fill="#B8BBEE"/><path d="M13 33c0 2.5-2.5 4-2.5 6a2.5 2.5 0 0 0 5 0c0-2-2.5-3.5-2.5-6z" fill="#B8BBEE"/>' +
      '<path d="M12 62v-9" fill="none" stroke-width="3"/><path d="M12 55c-1-5-5-7-9-6 1 4 4 6 9 6z" fill="' + L + '"/><path d="M12 54c1-4 5-6 9-5-1 4-5 5-9 5z" fill="' + L + '"/>' + spark(58, 9, 5, Y),
    packet: '<path d="M13 22h38v33a5 5 0 0 1-5 5H18a5 5 0 0 1-5-5z" fill="' + B + '"/><path d="M13 22l5-7h28l5 7z" fill="' + N + '"/>' +
      '<rect x="19" y="31" width="26" height="20" rx="4" fill="' + P + '"/>' + face(32, 38, I) +
      '<path d="M32 15V5" fill="none" stroke-width="3.5"/><path d="M32 10c-2-6-8-8-14-6 1 5 7 8 14 6z" fill="' + L + '"/><path d="M32 8c2-5 8-7 13-5-1 5-7 7-13 5z" fill="' + L + '"/>' + spark(56, 44, 6, Y),
    bouquet: '<path d="M32 44L17 22M32 44V14M32 44l15-22" fill="none" stroke-width="3.5"/>' +
      '<circle cx="15" cy="20" r="10" fill="' + B + '"/><circle cx="15" cy="20" r="4" fill="' + Y + '"/>' +
      '<circle cx="49" cy="20" r="10" fill="#B8BBEE"/><circle cx="49" cy="20" r="4" fill="' + Y + '"/>' +
      '<circle cx="32" cy="12" r="10" fill="' + L + '"/><circle cx="32" cy="12" r="4" fill="' + Y + '"/>' +
      '<path d="M20 38h24l-5 22H25z" fill="' + N + '"/><path d="M24 44l-9 6M40 44l9 6" fill="none" stroke="' + L + '" stroke-width="4"/><circle cx="32" cy="44" r="4" fill="' + L + '"/>',
    forest: '<path d="M3 59h58" fill="none" stroke-width="3.5"/>' +
      '<path d="M13 59v-8M51 59v-8M32 59v-7" fill="none" stroke-width="3"/>' +
      '<path d="M13 16L2 51h22z" fill="' + B + '"/><path d="M51 16L40 51h22z" fill="' + N + '"/>' +
      '<circle cx="32" cy="34" r="16" fill="' + L + '"/>' + face(32, 32, I) + spark(32, 6, 6, Y),
    tree: '<path d="M28 36l-3 21h14l-3-21z" fill="' + N + '"/><path d="M13 39a11 11 0 0 1-2-21 14 14 0 0 1 26-9 12 12 0 0 1 19 10 11 11 0 0 1-5 20z" fill="' + L + '"/>' +
      '<path d="M40 14a8 8 0 0 1 8 5" fill="none" stroke="' + P + '" stroke-width="2.5"/>' + face(32, 25, I) + '<path d="M12 58h40" fill="none" stroke-width="3.5"/>' + spark(7, 50, 5, B) + spark(57, 49, 6, Y)
  };

  var sprite = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    Object.keys(ICONS).map(function (k) {
      return '<symbol id="i-' + k + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--sw,2)">' + ICONS[k] + '</symbol>';
    }).join('') +
    Object.keys(STICKERS).map(function (k) {
      return '<symbol id="s-' + k + '" viewBox="0 0 64 64"><g stroke="' + I + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' + STICKERS[k] + '</g></symbol>';
    }).join('') +
    '<symbol id="logo" viewBox="1.2 1.2 371.0 58.0"><path fill="currentColor" d="M73.2 59.1C64.8 58.3 58.4 51.8 57.1 42.7C54.7 26.3 64.7 13.9 78.6 16C86.6 17.1 91.9 22.3 93.3 30.4C93.7 32.6 94.1 38.6 93.9 39.2L93.9 39.4L79 39.4L64.1 39.4L64.1 40.3C64.8 49.1 68.7 53.4 76 53.2L77.8 53.1L78.7 52.9C82.4 51.9 85 49.4 86.3 45.7C86.5 45.3 86.7 44.9 86.7 44.9C86.9 44.8 92.8 44.8 93.2 44.9L93.4 44.9L93.2 45.6C91.6 54.2 83 60 73.2 59.1ZM295.3 59.1C283.9 58.1 277.5 48.3 278.9 34.4C280.3 21.8 288.7 14.4 300.2 15.6C311.7 16.9 318.3 27 316.5 40.7C314.8 53.4 307 60.2 295.3 59.1ZM115.2 58.9C111.5 58.4 108.6 56.7 106.1 53.4C105.3 52.4 105.3 52.3 105.3 55.2L105.3 57.7L102.2 57.7L99 57.7L99 29.5L99 1.3L99.2 1.3C99.4 1.2 105.3 1.2 105.5 1.3L105.7 1.3L105.7 11.4C105.7 17 105.7 21.5 105.8 21.5C105.8 21.5 106 21.3 106.2 21C110.8 15.1 120.9 13.8 127.6 18.4C132.6 21.8 135 27.3 135.2 35.7C135.2 37.2 135.3 38.4 135.3 38.4C135.4 38.4 135.8 37.8 137.6 35.5C138.3 34.5 140 32.4 141.2 30.8C142.4 29.2 144.2 27 145.1 25.9C148.5 21.5 150.6 19.4 152.5 18.5L153.2 18.2L154.2 18.2L155.2 18.2L155.9 18.5C156.7 18.9 157.4 19.7 157.7 20.5L157.9 21.1L157.9 22.4L157.9 23.6L157.7 24.6C157.1 26.5 155.6 29.8 153.9 33C153.5 33.8 153.1 34.6 153.1 34.6C153.1 34.7 154.4 33.4 156 31.8C162.8 24.9 167.8 20.9 172.2 19.1C176.2 17.5 179.5 18.1 180.5 20.7L180.7 21.2L180.7 22.5L180.7 23.8L180.5 24.7C179.5 28.3 176.6 33.7 172 40.5C166 49.2 163.6 53.5 163.4 55.4L163.4 56L163.6 56.2L163.8 56.5L164.5 56.4C168.1 56.3 172.7 52.9 179.3 45.2C180.4 44 182.2 42 183.4 40.6C184.6 39.3 185.8 37.9 186.1 37.5L186.6 36.8L183.7 26.8C182.1 21.3 180.8 16.7 180.8 16.7C180.8 16.7 182.5 16.7 184.5 16.7L188.3 16.7L188.3 16.8C188.4 16.9 190.1 24.1 192.2 32.8C194.4 41.5 196.1 48.7 196.2 48.7C196.2 48.8 197 45.7 198 41.8C198.9 38 200.7 30.8 202 25.8L204.2 16.7L208.1 16.7L212 16.7L215.9 32.6C219.3 46 220.1 49.1 220.1 48.6C220.1 48.5 228.3 17.2 228.4 16.9L228.4 16.7L231.8 16.7L235.2 16.7L235.2 16.8C235.2 16.9 232.5 26.1 229.3 37.3C226.1 48.5 223.4 57.6 223.4 57.7C223.4 57.7 221.8 57.7 219.8 57.7L216.2 57.7L216.1 57.1C216 56.8 214.2 49.9 212.1 41.9C209.9 33.8 208.1 26.9 208 26.6L207.9 26.1L207.8 26.3C207.7 26.5 199.8 57.5 199.8 57.6C199.8 57.7 198.2 57.7 196.2 57.7L192.6 57.7L192.6 57.5C192.5 57.4 191.3 53.1 189.8 48C188.3 42.8 187.1 38.5 187 38.5C187 38.4 186 39.6 184.8 41.1C175.5 52.9 169.1 58.1 163.8 58.1C156.6 58.1 154.5 54.4 158 47.5C160 43.6 162.4 40.2 171.1 29.4C176.8 22.3 178.1 19.5 175.4 19.7C170.1 20.3 162.1 26.9 150.2 40.4L148.3 42.5L147.3 44.1C145.1 47.5 138.8 57.1 138.2 57.9L138 58.1L133.1 58.1L128.2 58L128.6 57.5C128.9 56.9 134.6 49.1 140.8 40.5C145.1 34.7 152.8 23.3 153.7 21.5C154.1 20.6 154.2 20 153.9 19.8C153.1 19.2 150.8 21.2 146.8 26.1C145.8 27.3 135.7 40.3 135.1 41.2C135 41.4 134.8 41.9 134.6 42.9C132.4 53.9 124.8 60.2 115.2 58.9ZM13 57.5C12.9 57.4 10.3 48.3 7.1 37.2C3.9 26.1 1.3 17 1.2 16.9L1.2 16.7L5 16.7L8.7 16.8L12.6 32.7C14.8 41.5 16.5 48.7 16.6 48.7C16.6 48.8 17.4 45.9 18.3 42.3C19.2 38.7 21 31.5 22.3 26.2L24.6 16.7L28.5 16.7L32.4 16.7L36.3 32.6C40.4 48.7 40.4 48.7 40.4 48.6C40.5 48.6 42.3 41.5 44.6 32.8C46.9 24.1 48.7 17 48.8 16.9L48.8 16.7L52.2 16.7L55.6 16.7L55.6 16.8C55.6 16.9 52.9 26.1 49.7 37.3C46.5 48.5 43.8 57.6 43.8 57.7C43.8 57.7 42.2 57.7 40.2 57.7L36.6 57.7L36.5 57.1C36.4 56.8 34.6 49.9 32.4 41.9C30.3 33.8 28.5 26.9 28.4 26.6L28.3 26.1L28.2 26.2C28.1 26.4 20.2 57.5 20.2 57.6C20.2 57.7 18.6 57.7 16.6 57.7L13 57.7L13 57.5ZM238.7 37.3L238.7 16.9L242.1 16.9L245.6 16.9L245.6 17.1C245.7 17.3 245.7 57.3 245.6 57.5L245.6 57.7L242.1 57.7L238.7 57.7L238.7 37.3ZM253.2 57.5C253.1 57.3 253.1 1.8 253.2 1.6L253.2 1.4L256.6 1.4L260 1.4L260 29.6L260 57.7L256.6 57.7L253.2 57.7L253.2 57.5ZM267.5 57.5C267.4 57.3 267.4 1.8 267.5 1.6L267.5 1.4L270.9 1.4L274.3 1.4L274.3 29.6L274.3 57.7L270.9 57.7L267.5 57.7L267.5 57.5ZM329.5 57.5C329.4 57.3 328.5 54.1 327.4 50.3C319.2 21.8 317.8 16.9 317.8 16.8L317.8 16.7L321.5 16.7L325.3 16.7L329.1 32.6C331.3 41.4 333.1 48.6 333.1 48.7C333.2 48.9 332.7 50.6 337.3 32.5C339.4 23.9 341.1 16.8 341.2 16.8C341.2 16.7 342.9 16.7 345.1 16.7L348.9 16.7L349 17.1C349 17.3 350.8 24.4 352.9 32.9C355.1 41.4 356.8 48.4 356.9 48.5L356.9 48.6L357 48.5C357 48.4 358.9 41.2 361.2 32.5L365.3 16.7L368.8 16.7L372.2 16.7L372.1 16.9C372.1 17 369.4 26.3 366.2 37.4L360.3 57.6L356.8 57.7C354.9 57.7 353.2 57.7 353.2 57.6C353.1 57.6 351.3 50.5 349 41.9C346.7 33.3 344.9 26.2 344.8 26.2C344.8 26.1 344.6 26.7 340.8 41.8C338.6 50.4 336.8 57.4 336.7 57.5L336.7 57.7L333.1 57.7L329.6 57.7L329.5 57.5ZM300.1 53C303.6 52.5 305.9 50.7 307.4 47.2C308.9 43.8 309.4 40.9 309.4 36.5L309.4 33.5L309.3 32.4C308.2 25.9 305.2 22.5 299.9 21.6C291.3 20.3 285.9 26.6 285.9 37.9C285.9 48.7 291.3 54.5 300.1 53ZM119.8 52.6C130.4 50 131.3 26.1 121 22.4C116.1 20.7 110.3 22.6 107.6 26.9C104.2 32 104.6 43.7 108.2 48.8C110.6 52.1 115.4 53.7 119.8 52.6ZM86.8 33.4C85.9 25.4 82.1 21.6 75.2 21.8C69.2 22 64.3 27.2 64.3 33.4L64.3 33.9L75.6 33.9L86.9 33.9L86.8 33.4ZM238.7 5.3L238.7 1.4L242.1 1.4L245.6 1.4L245.6 1.5C245.7 1.7 245.7 8.8 245.6 9L245.6 9.2L242.1 9.2L238.7 9.2L238.7 5.3Z"/></symbol>' +
    '<symbol id="logo-full" viewBox="1.2 1.2 386.4 59.0"><path fill="currentColor" d="M22.8 60.1C22.6 60 1.2 1.4 1.3 1.3C1.5 1.2 16.9 1.2 17.1 1.3C17.1 1.3 21.3 12.6 26.4 26.2C36.1 52.4 35.9 51.9 35.9 51.8C36.1 51.7 42.8 33.3 42.8 33.1C42.8 33 40.2 25.8 37 17.1C33.1 6.6 31.3 1.3 31.3 1.3C31.5 1.2 46.9 1.2 47.1 1.3C47.2 1.3 51.4 12.6 56.5 26.4C61.5 40.1 65.8 51.5 65.8 51.6L65.9 51.8L66 51.7C66.1 51.6 67.6 47.4 69.5 42.3L72.9 33.2L67.1 17.3C63.9 8.5 61.3 1.4 61.3 1.3C61.4 1.2 76.6 1.2 77 1.3L77.2 1.3L79.5 7.5C80.7 10.9 81.7 13.7 81.7 13.7C81.7 13.8 77.9 24.3 73.2 37L64.8 60.1L64.6 60.1C64.2 60.2 53 60.2 52.8 60.1C52.8 60.1 50.7 54.6 48.3 47.9C45.8 41.2 43.8 35.8 43.8 35.8C43.7 35.8 41.7 41.2 39.2 47.9C36.7 54.6 34.7 60 34.6 60.1C34.4 60.2 23 60.3 22.8 60.1ZM151.2 53.5C143 52.6 137.8 45.2 138.5 35.3C138.8 30.7 140.1 27.3 142.6 24.3C149.5 16 163.8 18.5 166.8 28.6C167.5 30.9 168.2 37.1 167.8 37.8L167.7 38L156 38L144.3 38L144.3 39C144.7 44.2 147 47.7 150.8 48.6L151.7 48.8L153.3 48.8L154.9 48.8L155.9 48.6C158.7 47.8 161 45.6 161.9 42.9L162 42.3L164.7 42.3L167.4 42.3L167.3 42.7C166.1 49.6 159 54.4 151.2 53.5ZM326.6 53.5C318.6 52.7 313.9 46.5 313.9 36.9C313.9 25.9 319.6 19.2 328.9 19.2C338.4 19.2 344.2 25.9 343.8 36.5C343.3 48.1 336.8 54.5 326.6 53.5ZM185.1 53.4C181.9 53.1 179.4 51.6 177.3 48.9C176.8 48.2 176.8 48.3 176.8 50.5L176.8 52.4L174.3 52.4L171.8 52.4L171.8 30.1L171.8 7.8L174.5 7.8L177.1 7.8L177.1 15.8C177.1 20.2 177.1 23.8 177.1 23.8C177.2 23.8 177.6 23.3 178.2 22.8C184 16.9 194.1 18.4 198.2 25.6C199.7 28.2 200.6 32.7 200.4 36.4L200.4 37.2L200.7 36.9C200.9 36.7 201.5 35.9 202.1 35.1C203.1 33.8 206.4 29.6 208.7 26.6C212.8 21.5 215.2 20.2 217.3 21.8C219.2 23.3 218.8 25.6 215.7 31.9C215.1 33.1 214.6 34.1 214.6 34.2C214.6 34.2 215.8 33 217.2 31.6C224.2 24.5 229.1 21.3 232.9 21.3L234 21.2L234.6 21.6C238 23.2 236.7 28.1 230.1 37.9C222.6 49.1 221.5 51.4 223.6 51.4C226.3 51.4 230.1 48.5 234.8 43.1C235.7 42.1 237.2 40.4 238.2 39.3C240.9 36.1 241 36 241 35.8C240.9 35.6 239.9 32.1 238.7 27.9C237.5 23.7 236.5 20.2 236.5 20.1L236.5 20L239.4 20L242.3 20L242.4 20.2C242.4 20.3 243.9 26 245.5 32.9C247.2 39.7 248.6 45.3 248.6 45.3C248.6 45.3 249.8 40.9 251.1 35.5C252.4 30.1 253.8 24.5 254.2 22.9L254.9 20.1L258 20.1L261.1 20.1L264.2 32.5C267.3 44.8 267.4 45.3 267.4 45.2C267.5 45.2 268.9 39.5 270.7 32.7C272.5 25.8 274 20.1 274.1 20.1C274.1 20 275.3 20 276.8 20L279.4 20L279.4 20.3C279.3 20.5 277.2 27.7 274.7 36.4C272.2 45.2 270.1 52.3 270.1 52.3C270.1 52.4 268.8 52.4 267.2 52.4C265.7 52.4 264.4 52.4 264.4 52.4C264.4 52.3 257.9 27.7 257.9 27.6C257.8 27.5 257.7 27.6 254.6 40L251.4 52.4L248.6 52.4L245.8 52.4L243.6 45C242.5 41 241.5 37.5 241.5 37.4L241.4 37.2L241.2 37.3C241.2 37.4 240.3 38.4 239.3 39.7C233.4 47.2 228.4 51.6 224.8 52.5L224 52.7L222.4 52.7C216.4 52.5 215.5 48.8 219.7 42C221.2 39.7 222.9 37.5 228.1 30.9C231.7 26.5 233.1 24.3 233.3 23.1L233.3 22.7L233.1 22.5L232.8 22.4L232.2 22.4C228 22.9 221.4 28.3 212.2 38.9L210.8 40.5L209.4 42.6C208.7 43.8 206.9 46.5 205.4 48.7L202.8 52.6L198.9 52.7C196.1 52.7 195 52.7 195 52.6C195 52.4 195.2 52.1 202.4 42.2C206.9 36.1 207.7 35 211.3 29.6C215.2 23.7 215.7 22.8 215.2 22.5C214.4 22.1 212.8 23.5 209.6 27.4C207.5 30 200.3 39.5 200.2 39.7C200.1 39.8 200 40.5 199.9 41.2C198.3 48.8 192.4 54 186.2 53.5C186.1 53.5 185.6 53.4 185.1 53.4ZM103.8 51.9C103.7 51.6 101.6 44.3 99.1 35.7C96.6 27.1 94.6 20.1 94.6 20.1C94.6 20 95.9 20 97.5 20L100.5 20L100.6 20.4C100.7 20.6 102.1 26.3 103.7 33C105.4 39.8 106.7 45.4 106.7 45.4C106.8 45.4 106.7 46 110 32.5C111.7 25.8 113 20.3 113.1 20.2L113.1 20L116.2 20L119.2 20L119.3 20.4C119.3 20.6 120.7 26.2 122.4 32.8C124.1 39.4 125.4 44.9 125.5 45L125.6 45.2L125.6 45.1C125.7 45 127.1 39.6 128.8 33C130.5 26.4 132 20.8 132.1 20.5L132.2 20L134.9 20C136.4 20 137.6 20 137.6 20.1C137.6 20.1 135.5 27.4 132.9 36.2L128.2 52.4L125.4 52.4L122.5 52.4L119.4 40.3C116 27.3 116 27.5 115.9 27.5C115.9 27.6 109.6 52.2 109.6 52.4C109.6 52.4 108.3 52.4 106.8 52.4L103.9 52.4L103.8 51.9ZM282.2 52.2C282.1 52 282.1 20.6 282.2 20.4L282.2 20.2L284.9 20.2L287.6 20.2L287.6 20.4C287.7 20.6 287.7 52 287.6 52.2L287.6 52.4L284.9 52.4L282.2 52.4L282.2 52.2ZM293.6 30.2L293.6 8L296.3 8L299 8L299 30.2L299 52.4L296.3 52.4L293.6 52.4L293.6 30.2ZM304.9 30.2L304.9 8L307.6 8L310.3 8L310.3 30.2L310.3 52.4L307.6 52.4L304.9 52.4L304.9 30.2ZM353.9 52.4C353.9 52.3 351.8 45.1 349.2 36.2C346.7 27.3 344.6 20.1 344.6 20C344.6 20 345.9 20 347.6 20L350.5 20.1L353.6 32.6C355.3 39.5 356.7 45.2 356.7 45.3C356.8 45.4 356.7 45.9 360 32.7C361.6 25.9 363 20.3 363.1 20.2L363.1 20L366.2 20L369.2 20L369.3 20.4C369.3 20.6 370.7 26.2 372.4 32.8C374.1 39.4 375.4 44.9 375.5 45L375.6 45.2L375.6 45.1C375.7 45 377.1 39.4 378.9 32.6C380.7 25.9 382.1 20.3 382.2 20.2L382.2 20L384.9 20C386.4 20 387.6 20 387.6 20.1C387.6 20.1 385.5 27.4 382.9 36.2L378.2 52.4L375.4 52.4L372.6 52.4L369.4 40.3C366 27.4 366 27.5 365.9 27.5C365.9 27.6 359.6 52.3 359.6 52.4C359.6 52.4 358.3 52.4 356.8 52.4C355.2 52.4 353.9 52.4 353.9 52.4ZM330.4 48.8C334.3 48.3 336.5 45.6 337.7 40.2C339.3 32.2 336.8 25.5 331.6 24.2C324.3 22.3 319.4 27.4 319.4 36.8C319.4 45.2 323.6 49.7 330.4 48.8ZM188.2 48.4C192.4 47.4 194.8 42.9 194.8 36L194.8 34L194.6 32.7C193.6 26.7 190.1 23.5 185.2 24.1C178.7 24.9 175.6 31.2 177.2 40.3C178.2 46.5 182.6 49.7 188.2 48.4ZM162.2 33.2C162.2 29.2 159.6 25.3 156.2 24.4C150.3 22.8 145.1 26.5 144.4 32.9L144.4 33.6L153.3 33.6L162.2 33.6L162.2 33.2ZM282.2 14C282.1 14 282.1 8.4 282.2 8.2L282.2 8L284.9 8L287.6 8L287.6 8.2C287.7 8.2 287.7 9.5 287.7 11.1C287.7 12.6 287.7 13.9 287.6 13.9L287.6 14.1L284.9 14.1C283.4 14.1 282.2 14.1 282.2 14Z"/></symbol>' +
    '<symbol id="wmark" viewBox="1.2 1.2 80.6 59.0"><path d="M22.8 60.1L22.7 60L12 30.7L1.2 1.4L1.3 1.3L1.4 1.2L9.2 1.2L16.9 1.2L17.1 1.3L17.2 1.4L26.4 26.2L35.6 51.1L35.8 51.5L35.9 51.8L35.9 51.8L36 51.7L39.4 42.5L42.8 33.4L42.8 33.1L42.8 33L37 17.1L31.2 1.4L31.3 1.3L31.4 1.2L39.2 1.2L47 1.2L47.1 1.3L47.2 1.4L56.5 26.4L65.7 51.4L65.8 51.6L65.9 51.8L66 51.7L66.1 51.5L69.5 42.3L72.9 33.2L67.1 17.3L61.3 1.4L61.3 1.3L61.4 1.2L69.1 1.2L76.8 1.2L77 1.3L77.2 1.3L79.5 7.5L81.7 13.6L81.7 13.7L81.7 13.9L73.2 37L64.8 60.1L64.6 60.1L64.3 60.2L58.6 60.2L53 60.2L52.8 60.1L52.7 60L48.3 47.9L43.8 35.8L43.8 35.8L43.7 35.8L39.2 47.9L34.8 60L34.6 60.1L34.5 60.2L28.7 60.2L22.9 60.2L22.8 60.1Z"/></symbol>' +
    '<symbol id="flower" viewBox="0 0 100 100"><g fill="#B8BBEE" stroke="#17193F" stroke-width="2">' +
      '<ellipse cx="50" cy="20" rx="12" ry="18"/><ellipse cx="50" cy="80" rx="12" ry="18"/><ellipse cx="20" cy="50" rx="18" ry="12"/><ellipse cx="80" cy="50" rx="18" ry="12"/>' +
      '<ellipse cx="29" cy="29" rx="12" ry="18" transform="rotate(-45 29 29)"/><ellipse cx="71" cy="71" rx="12" ry="18" transform="rotate(-45 71 71)"/>' +
      '<ellipse cx="71" cy="29" rx="12" ry="18" transform="rotate(45 71 29)"/><ellipse cx="29" cy="71" rx="12" ry="18" transform="rotate(45 29 71)"/></g>' +
      '<circle cx="50" cy="50" r="19" fill="#F2F29A" stroke="#17193F" stroke-width="2"/><circle cx="43" cy="46" r="3" fill="#17193F"/><circle cx="57" cy="46" r="3" fill="#17193F"/>' +
      '<path d="M41 54 q9 9 18 0" stroke="#17193F" stroke-width="2.5" fill="#363B96" stroke-linecap="round"/></symbol>' +
    '<symbol id="spark" viewBox="0 0 100 100"><path d="M50 2 C54 36 64 46 98 50 C64 54 54 64 50 98 C46 64 36 54 2 50 C36 46 46 36 50 2Z" fill="#363B96"/>' +
      '<path d="M50 18 C52 40 60 48 82 50 C60 52 52 60 50 82 C48 60 40 52 18 50 C40 48 48 40 50 18Z" fill="#FFFEF4" transform="rotate(45 50 50)"/><circle cx="50" cy="50" r="7" fill="#363B96"/></symbol>' +
    '</defs></svg>';
  document.body.insertAdjacentHTML('afterbegin', sprite);

  function icon(name, cls) { return '<svg class="' + (cls || 'i') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }
  var logo = '<svg class="logo-full" role="img" aria-label="webnwillow"><use href="#logo-full"/></svg>';
  var current = document.body.getAttribute('data-page') || 'home';

  // ----- header -----
  var tick = 'Web <svg><use href="#wmark"/></svg> Mobile apps <svg><use href="#wmark"/></svg> Digital marketing <svg><use href="#wmark"/></svg> IT support <svg><use href="#wmark"/></svg> UAE · India · beyond <svg><use href="#wmark"/></svg>';
  var navLinks = PAGES.map(function (p) {
    return '<a class="pill" href="' + p.href + '"' + (p.id === current ? ' aria-current="page"' : '') + '>' + p.label + '</a>';
  }).join('');
  var header =
    '<div class="ticker" aria-hidden="true"><div class="ticker-track"><span>' + tick + '</span><span>' + tick + '</span></div></div>' +
    '<header class="nav wrap">' +
      '<a class="brand" href="index.html" aria-label="webnwillow home">' + logo + '</a>' +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="primary-nav">' + icon('menu') + '<span>Menu</span></button>' +
      '<nav class="pills main" id="primary-nav" aria-label="Primary">' + navLinks + '</nav>' +
      '<a class="corner shape-scallop" href="contact.html"><span>Let\'s<br>talk</span></a>' +
    '</header>';
  var h = document.getElementById('site-header');
  if (h) h.outerHTML = header;

  // ----- footer -----
  var socialLabels = { instagram: 'Instagram', facebook: 'Facebook', linkedin: 'LinkedIn', pinterest: 'Pinterest' };
  var socials = Object.keys(SITE.social).map(function (k) {
    return '<a href="' + SITE.social[k] + '" target="_blank" rel="noopener" aria-label="' + socialLabels[k] + '" title="' + socialLabels[k] + '">' + icon(k) + '</a>';
  }).join('');
  var serviceLinks = PAGES.filter(function (p) { return p.icon && p.id !== 'contact'; }).map(function (p) {
    return '<li><a href="' + p.href + '">' + ({ web: 'Web development', apps: 'App development', marketing: 'Digital marketing', it: 'IT support' })[p.id] + '</a></li>';
  }).join('');
  var footer =
    '<footer class="wrap">' +
      '<div class="f-about"><a class="brand" href="index.html" aria-label="webnwillow home">' + logo + '</a>' +
        '<p>Web, mobile apps, digital marketing and IT support for businesses across the UAE, India &amp; beyond.</p></div>' +
      '<div><h4>Services</h4><ul>' + serviceLinks + '</ul></div>' +
      '<div><h4>Studio</h4><ul><li><a href="about.html">About us</a></li><li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact us</a></li></ul></div>' +
      '<div><h4>Follow along</h4><div class="socials">' + socials + '</div>' +
        '<a class="f-mail" href="mailto:' + SITE.email + '">' + SITE.email + '</a></div>' +
      '<div class="fine"><span>© ' + new Date().getFullYear() + ' webnwillow</span><span>Web · Apps · Marketing · IT Support</span></div>' +
    '</footer>';
  var f = document.getElementById('site-footer');
  if (f) f.outerHTML = footer;

  // ----- fill email + social placeholders anywhere on the page -----
  document.querySelectorAll('[data-email]').forEach(function (el) {
    el.textContent = SITE.email;
    if (el.tagName === 'A') el.href = 'mailto:' + SITE.email;
  });
  document.querySelectorAll('[data-socials]').forEach(function (el) {
    el.innerHTML = Object.keys(SITE.social).map(function (k) {
      return '<a href="' + SITE.social[k] + '" target="_blank" rel="noopener">' + icon(k) + socialLabels[k] + '</a>';
    }).join('');
  });

  // ----- home splash: logo intro, once per session -----
  var intro = document.getElementById('intro');
  var root = document.documentElement;
  if (intro && root.classList.contains('intro-on')) {
    var done = false, timer;
    var finish = function () {
      if (done) return;
      done = true;
      clearTimeout(timer);
      try { sessionStorage.setItem('wnw-intro', '1'); } catch (e) {}
      intro.classList.add('out');
      setTimeout(function () { intro.remove(); root.classList.remove('intro-on'); }, 600);
    };
    intro.classList.add('go');
    timer = setTimeout(finish, 2400);
    intro.addEventListener('click', finish);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') finish(); });
  }

  // ----- generated shapes: starbursts and scalloped circles -----
  function poly(n, fn) {
    var pts = [];
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2, r = fn(i, a);
      pts.push((50 + r * Math.cos(a)).toFixed(2) + '% ' + (50 + r * Math.sin(a)).toFixed(2) + '%');
    }
    return 'polygon(' + pts.join(',') + ')';
  }
  var root = document.documentElement.style;
  root.setProperty('--burst', poly(44, function (i) { return i % 2 ? 41 : 50; }));
  root.setProperty('--scallop', poly(180, function (i, a) { return 46 + 4 * Math.abs(Math.cos(a * 7)); }));

  // ----- pause looping animations while they are off-screen -----
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('is-offscreen', !e.isIntersecting); });
    }, { rootMargin: '100px' });
    document.querySelectorAll('.ticker, .tagband, .hero, .cta, .spark, .flower, .hang-phone').forEach(function (el) { io.observe(el); });
  }

  // ----- mobile menu -----
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('primary-nav');
  if (btn && nav) btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
  });

  // ----- copy email -----
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var label = b.textContent;
      function done(msg) { b.textContent = msg; setTimeout(function () { b.textContent = label; }, 1800); }
      try { navigator.clipboard.writeText(SITE.email).then(function () { done('Copied'); }, function () { done(SITE.email); }); }
      catch (e) { done(SITE.email); }
    });
  });

  // ----- contact form: prefill service from ?service=, send via the visitor's email app -----
  var form = document.getElementById('contactForm');
  if (form) {
    var want = new URLSearchParams(location.search).get('service');
    if (want) {
      var opt = Array.prototype.find.call(form.service.options, function (o) { return o.value === want; });
      if (opt) form.service.value = want;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = form.elements;
      var body = 'Name: ' + d.name.value + '\nEmail: ' + d.email.value + (d.phone.value ? '\nPhone: ' + d.phone.value : '') +
        '\nService: ' + (d.service.value || 'Not sure yet') + '\n\n' + d.message.value;
      location.href = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent('Project enquiry: ' + (d.service.value || 'General')) + '&body=' + encodeURIComponent(body);
    });
  }
})();
