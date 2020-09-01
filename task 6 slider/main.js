$('img').each(function(index){

    $(this).click(function(e){
        
        $('.frame').addClass('active');
        $('.content').html(`<img src="image-${index}.png">`);

    })
    $('#nxt').click(function(){
       
       if(index>3){
           index=0;
           $('.content').html(`<img src="image-${index}.png">`);

       }else{

           $('.content').html(`<img src="image-${index}.png">`);
       }
       index++;
    })
    $('#prev').click(function(){
              
               if(index<0){
                   index=3;
                   $('.content').html(`<img src="image-${index}.png">`);
        
               }else{
        
                   $('.content').html(`<img src="image-${index}.png">`);
               }
               index--;
            })
        
})