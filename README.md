<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Momentum App</title>
</head>

<body>
    <div class="container">
        <div id="weather">
            <span></span>
            <span></span>
        </div>
        <h2 id="clock">00:00:00</h2>
        <form id="login-form" class="hidden">
            <input id="whatName" maxlength="15" type="text" placeholder="What is your name?" required />
            <input id="nameSubmit" type="submit" value="Log In" />
        </form>
        <h1 id="greeting" class="hidden"></h1>
        <form id="todo-form">
            <input id="writeToDo" type="text" placeholder="Write a To Do and Press Enter" required" />
        </form>
        <ul id="todo-list"></ul>
        <div id="quote">
            <span></span>
            <span></span>
        </div>
    </div>
    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quotes.js"></script>
    <script src="js/background.js"></script>
    <script src="js/todo.js"></script>
    <script src="js/weather.js"></script>
</body>
