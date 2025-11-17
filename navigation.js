/* navigation.js */

/* To Do:
    1. Make a list of the pages
    2. get the prevoius and next buttons
    3. figure out the prevoius and next pages
    4. put the links on the buttons
    */

    var pages =[
        "apple/apple.html",
        "basketball2d.html",
        "clock.html",
        "random-circles.html",
        "resistors.html",
        "tictaktoee.html",
        "tiles.html",
        "randomcolors.html",
        "4kids.html",
        "speed/speed.html",
        "icons/icons.html",
        "chocolate.html",
        "chinesezodiac.html",
        "currentevents/climatechange.html",
        "career/college.html",
    ];

    window.onload = setup;

    function get(id){
        return document.getElementById(id);
    }

    function setup(e) {
        var buttons = get('nav').getElementsByTagName('a');
        var previousButton = buttons[0];
        var homeButton = buttons[1];
        var nextButton = buttons[2];

        let link = document.location.href;
        // alert (link);
        let linkIndex = findLinkIndex(link);
        // alert(linkIndex);

        var previousLinkIndex = linkIndex-1;
        if(previousLinkIndex < 0){
            previousLinkIndex = pages.length-1;
        }
        var nextLinkIndex = (linkIndex+1) % pages.length;
        previousButton.href = pages[previousLinkIndex];
        nextButton.href = pages[nextLinkIndex];
        homeButton.href = "index.html";

        // in a folder
        // if (link.indexOf('/') !=-1){
        if(pages[linkIndex].indexOf('/') !=-1){
            previousButton.href ="../" + pages[previousLinkIndex];
            nextButton.href = "../" + pages [nextLinkIndex];
            homeButton.href = "../index.html";
        }
        
        }
    
    function findLinkIndex(link){
        for (var i=0; i<pages.length;i++){
            if(link.indexOf(pages[i])!= -1){
                return i;
            }
        }
    }

   
    

    