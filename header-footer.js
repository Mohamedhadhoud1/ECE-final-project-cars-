    (document.getElementById("body")).insertAdjacentHTML('afterbegin', ` <div class="ww">
    <button class=" active icon-btn">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div></button>

    <ul>
        <div class="w">
        <!--<img style="width:48px;height:48px; " src="img/caricon1.gif">-->
            <li ><a id="lambo" href="2.html" >Lamborghini</a></li>
            <li><a  id="buga" href="3.html">Bugatti</a></li>
            <li><a  id="audi" href="4.html">Audi</a></li>
            <li><a id="ferr" href="5.html">Ferrari</a></li>
            <li><a id="other" href="gallery.html">Other Cars</a></li>
            <li><a  href="index.html">Log out</a></li>
            <li><a href="https://mohamedhadhoud1.github.io/portflio/">contact</li>
            
            <a href="2.html"><img style="width:48px;height:48px; float:right;" src="img/android-chrome-192x192.jpg"></a>
            <a href="3.html"><img style="width:48px;height:48px; float:right;" src="img/bugattilogo.jpg"></a>
            <a href="4.html"><img style="width:48px;height:48px; float:right;" src="img/audilogo3.jpg"></a>
            <a href="5.html"><img style="width:48px;height:48px; float:right;" src="img/ferarrilogo2.jpg"></a>
        </div>
    </ul>

</div>`);

    (document.getElementById("style")).insertAdjacentHTML('afterbegin', `ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        z-index: 100000;
        
    }
    
    li,
    .btn {
        float: left;
    }
    .icon,.icon-btn{
        display:none;
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
        background-color:#111;
    }
    
   
    
    @media only screen and (max-width: 768px) {
        .icon-btn{
            display: inline-block;
            
        float: left;
        }
        div.icon {
            display:block;
            width: 35px;
            height: 5.5px;
            background-color: rgb(165, 161, 161);
            margin: 6px 0;
        }
        .w {
            display: none;
        }
        .ww:hover .w {
            display: block;
        }
    }`);