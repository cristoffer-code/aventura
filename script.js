* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #2d2d2d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.game-container {
    text-align: center;
    width: 80%;
    max-width: 600px;
    background-color: #1c1c1c;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

#choices button {
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
}

#choices button:hover {
    background-color: #45a049;
}

.hidden {
    display: none;
}

#inventory {
    margin-top: 20px;
    background-color: #333;
    padding: 10px;
    border-radius: 8px;
}
