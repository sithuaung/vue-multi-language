<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <h1>This is awesome SPA</h1>
        <router-link to="/">Home page</router-link>
        <router-link to="/about">About page</router-link>
        
        <router-view></router-view>
    </div>

<script src="/js/app.js"></script>
</body>
</html>