module.exports = function main(s) {
	var a1 =["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
	var a2 =["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
	var a3 =["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
    var s1 = "";
    var s2 = "";
    var s3 = "";

    for(var i = s.length - 1;i>=0;--i){
    	var j = parseInt(s[i]);
        if(i<s.length -1){
            s1=" "+s1;
            s2=" "+s2;
            s3=" "+s3;
        }
    	s1 = a1[j]+s1;
    	s2 = a2[j]+s2;
    	s3 = a3[j]+s3;
    }

    s1+="\n";
    s2+="\n";
    s3+="\n";
    return s1+s2+s3;
};
