// This is a client-side script that demonstrates how to create a translucent preview
// In a production environment, you would use a server-side function

function createTranslucentPreview(imageUrl, opacity = 0.7, title = '') {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');
  
  // Create an image element
  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  // When the image loads, draw it on the canvas with reduced opacity
  img.onload = () => {
    // Fill background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw image with opacity
    ctx.globalAlpha = opacity;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    // Reset opacity for text
    ctx.globalAlpha = 1.0;
    
    // Add title text if provided
    if (title) {
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(title, canvas.width / 2, canvas.height / 2);
    }
    
    // Convert to data URL
    const dataUrl = canvas.toDataURL('image/jpeg');
    
    // Display the result
    const resultImg = document.createElement('img');
    resultImg.src = dataUrl;
    document.body.appendChild(resultImg);
  };
  
  // Set the source to start loading
  img.src = imageUrl;
}

// Example usage:
// createTranslucentPreview('https://example.com/image.jpg', 0.7, 'My Title');