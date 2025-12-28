export default function handler(req, res) {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta property="fc:frame" content="vNext" />

  <!-- GAMBAR BESAR (PREVIEW DI FEED) -->
  <meta property="fc:frame:image" content="https://bocchi-mu.vercel.app/frame.png" />

  <!-- TOMBOL PLAY -->
  <meta property="fc:frame:button:1" content="▶️ Play Dino Runner" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://bocchi-mu.vercel.app/" />
</head>
<body></body>
</html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.send(html);
}
