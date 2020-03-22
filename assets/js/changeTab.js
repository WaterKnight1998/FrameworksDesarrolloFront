window.addEventListener("load",function(){
    window.addEventListener('hashchange', function(){
        $(window.location.hash+"-tab").click();
    });
});