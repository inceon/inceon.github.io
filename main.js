$(function() {
	$("input[value='Run']").on("click", function(){
		var code = $(this).parent().find("textarea[name='code']").val();
		if(code.search(/(\S+)/gmi)!=-1){
			var reg = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var err = [];
			var s = code.match(/(\S+)/gmi);
			var c = s.length;
			var re = /(.)\((\d)\s?,?\s?(\d)?\s?,?\s?(\d)?\)/;
			
				//var m = code.match(/(\S+)/g);
				//m[0] = m[0].match(/([z,Z,s,S,t,T,j,J])\((\d)\s?,?\s?(\d)?\s?,?\s?(\d)?\)/gmi);
				
			for(var i=0;i<c;i++){
				var m = re.exec(s[i]);
				if(m)
				{
					var x = m[1].toString().toUpperCase();
					if(x!='Z' && x!='S' && x!='T' && x!='J') err.push((i+1)+': '+x);
					else if(x=='Z') reg[m[2]] = 0;
					else if(x=='S') reg[m[2]]++;
					else if(x=='T') reg[m[3]] = reg[m[2]];
					else if(x=='J') if(reg[m[3]] == reg[m[2]]) if(m[4]-2<=c) i = m[4]-2; else i=c;
					//else err.push(i+': '+x);
					/*
					console.log(m.length+'\n----------------------');
					for(var j=1;j<c;j++) console.log(m[j]);
					*/
				}else err.push((i+1)+': '+s[i]);
			}
			console.log(err);
			console.log(reg);
			if(err.length==0){
				$("#info").text('');
				for(var i=0;i<32;i++) $("#info").append(reg[i]+' | ');
			}else for(var i=0;i<err.length;i++) $("#info").append('Error in line '+err[i]+'<br>');
			//console.log(reg.length); //32 register
		}
	});
});