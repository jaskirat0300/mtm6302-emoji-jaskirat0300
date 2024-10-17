
const EmojiCodes = [
    { code: 128514, emoji: '&#128514;' },  
    { code: 128525, emoji: '&#128525;' },
    { code: 128076, emoji: '&#128076;' },  
    { code: 128079, emoji: '&#128079;' }, 
    { code: 128077, emoji: '&#128077;' }, 
    { code: 128078, emoji: '&#128078;' },  
    { code: 128591, emoji: '&#128591;' },  
    { code: 129392, emoji: '&#129392;' },  
    { code: 128556, emoji: '&#128556;' },  
    { code: 128526, emoji: '&#128526;' },  
    { code: 129315, emoji: '&#129315;' },  
    { code: 128293, emoji: '&#128293;' },  
    { code: 128170, emoji: '&#128170;' },  
    { code: 128512, emoji: '&#128512;' }   
  ];
  
  

  const gallery = document.getElementById('gallery');
  EmojiCodes.forEach(flag => {
    const item = document.createElement('div');
    item.classList.add('item');
    
    item.innerHTML = `
      <span>${flag.emoji}</span>
      <span class="code">${flag.code}</span>
    `;
    
    gallery.appendChild(item);
  });
  