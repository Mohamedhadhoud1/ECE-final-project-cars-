    (document.getElementById("body")).insertAdjacentHTML('afterbegin', ` <div class="ww">
    <button class="btn active" style="display: block;">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div></button>

    <ul>
        <div class="w">
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li></li>
            <a href="2.html"><img style="width:48px;height:48px; float:right;" src="img/android-chrome-192x192.jpg"></a>
            <a href="3.html"><img style="width:48px;height:48px; float:right;" src="img/bugattilogo.jpg"></a>
        </div>
    </ul>

</div>`);

    (document.getElementById("style")).insertAdjacentHTML('afterbegin', `ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        
    }
    
    li,
    .btn {
        float: left;
    }
    
    .btn {
        display: inline-block;
        color: white;
        text-align: center;
        text-decoration: none;
    }
    .w{
        display:block;
    }
    li a {
        z-index=1;
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    li a:hover {
        background-color: #111;
    }
    
    .active {
        background-color: rgb(73, 70, 70);
    }
    
    div.icon {
        width: 35px;
        height: 5.5px;
        background-color: rgb(165, 161, 161);
        margin: 6px 0;
    }
    
    @media only screen and (max-width: 768px) {
        .w {
            display: none;
        }
        .ww:hover .w {
            display: block;
        }
    }`);