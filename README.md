<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TESTING GLOW</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        body {
            background: radial-gradient(circle, rgb(19, 1, 1) 0%, rgba(8,0,0,1) 48%, rgb(10, 10, 10) 100%);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
            overflow: hidden;
        }

        .glow-text {
            font-size: 5rem;
            font-family: 'Press Start 2P', monospace;
            position: relative;
            color: #fff;
            text-shadow: 0 0 10px #0ff, 0 0 20px rgb(255, 0, 234), 0 0 30px #0ff, 0 0 40px #0ff;
            animation: flicker 2s infinite;
            transform: scale(1.5); 
            image-rendering: pixelated;
        }
        .glow-text::before,
        .glow-text::after {
            content: 'WELCOME';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            color: #fff;
            background: transparent;
            clip-path: polygon(0 20%, 100% 20%, 100% 30%, 0 30%);
            opacity: 0.6;
            animation: distort 1.9s infinite ease-in-out;
        }

        .glow-text::after {
            clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
            opacity: 0.3;
        }

        @keyframes flicker {
            0%, 100% {
                text-shadow: 0 0 10px rgb(109, 248, 248), 0 0 20px rgb(242, 142, 255), 0 0 30px rgb(109, 248, 248), 0 0 40px rgb(109, 248, 248);
            }
            50% {
                text-shadow: 0 0 5px rgb(109, 248, 248), 0 0 10px rgb(109, 248, 248), 0 0 15px rgb(109, 248, 248), 0 0 20px rgb(211, 144, 202);
            }
        }

        @keyframes distort {
            0%, 100% {
                transform: translateX(1px) skewX(-1deg);
            }
            10% {
                transform: translateY(-5px) skewX(-10deg);
            }
            20% {
                transform: translateX(-6px) skewX(-5deg);
            }
            35% {
                transform: translateX(-5px) skewX(-10deg);
            }
            40% {
                transform: translateX(6px) skewX(5deg);
            }
            55% {
                transform: translateY(5px) skewX(10deg);
            }
            60% {
                    transform: translateX(-5px) skewX(-10deg);
            }
            85% {
                transform: translateX(5px) skewX(10deg);
            }
            90% {
                transform: translateY(-6px) skewX(-5deg);
            }
        }

        @media (max-width: 768px) {
            .glow-text {
                font-size: 3rem;
                transform: scale(1.2);
            }
        }

        @media (max-width: 480px) {
            .glow-text {
                font-size: 2rem;
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <div class="glow-text" style="text-align:center;">CLICK<br>ME&thinsp;!</div>
</body>
</html>