class Common{
    static init(){
        var s_home='I wanna be expert developer';
        var zero = 0;

        setInterval(function append_word(){
            if(zero<s_home.length){
                document.getElementById("s_h1").append(s_home[zero]);
                zero++;
            }
        },100);
    }
}