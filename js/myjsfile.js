


//swiping left right


$(document).on('swipeleft swiperight', function (event) {
        
        if(event.type == 'swiperight') {
            var prevpage = '#' + $.mobile.activePage.prev('div[data-role="page"]')[0].id;
                if(prevpage == '#home'|| prevpage == '#info' || prevpage == '#glucose' 
                    || prevpage == '#bmi' || prevpage == '#mealplan' || prevpage == '#exercise' 
                    || prevpage == '#quiz'|| prevpage == '#aboutus'|| prevpage == '#login' || prevpage == '#signup'){
                    $.mobile.changePage(prevpage, {
                    transition: 'slide',
                    reverse: false
                });
            }    
        }

       
        if(event.type == 'swipeleft') {
            var nextpage = '#' + $.mobile.activePage.next('div[data-role="page"]')[0].id;
                if(nextpage == '#signup' || nextpage == '#login' || nextpage == '#aboutus' ||  nextpage == '#quiz'
                 || nextpage == '#exercise' ||  nextpage == '#mealplan' ||  nextpage == '#bmi' || nextpage =='#glucose' ||
                  nextpage == '#info' ||  nextpage == '#home'){
                    $.mobile.changePage(nextpage, {
                    transition: 'slide',
                    reverse: true
                });
            }
        }  

    });

// close swiping left right