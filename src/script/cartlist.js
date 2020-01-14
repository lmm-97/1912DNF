;(function($){
    class Details{
        constructor(){
            this.sid=location.search.substring(1).split('=')[1];
            

        }   
        init(){

        } 
    }
    new.Details().init();
})(jQuery)