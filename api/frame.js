export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).end(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://bocchi-mu.vercel.app/frame.png" />

  <meta property="fc:frame:button:1" content="▶️ Play Dino Runner" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://bocchi-mu.vercel.app/" />
</head>
<body></body>
</html>
  `);
}
