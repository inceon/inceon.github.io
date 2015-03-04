$(function() {
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0]; 
		if (d.getElementById(id)) return; 
		js = d.createElement(s); 
		js.id = id; 
		js.src = "//vk.com/js/api/openapi.js"; 
		fjs.parentNode.insertBefore(js, fjs); 
	}(document, 'script', 'vk_openapi_js'));
	(function() {window.VK && VK.Widgets && VK.Widgets.Post && VK.Widgets.Post("vk_post_1_45616", 1, 45616, 'ZMk4b98xpQZMJJRXVsL1ig', {width: 300}) || setTimeout(arguments.callee, 50);	}());
	(function() {if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post("vk_post_181740986_1569", 181740986, 1569, 'fxXrqV7Aly9b-EvwrlmI5OvGeX8g', {width: 300})) setTimeout(arguments.callee, 50);}());
	(function() {    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post("vk_post_6814215_38298", 6814215, 38298, 'rx0xGGeVs6BKUm1ZH_emn3KZrBs3', {width: 300})) setTimeout(arguments.callee, 50);  }());
	for(var i=0;i<32;i++){
		$("#info").append('<textarea style="resize: none; border: black solid 1px; max-width: 1.2em; max-height: 1.2em; text-align: center; margin-right: 1px; font-size: 1.2em;">0</textarea>');
		if(i==15) break; // $("#info").append('<br /><br />');
	}
	$("input[value='Run']").on("click", function(){
		var code = $(this).parent().find("textarea[name='code']").val();
		//var code = $(this).parent().find("#redactor").html();
		if(code.search(/(\S+)/gmi)!=-1){
			//var reg = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var reg = [];
			for(var i=0;i<32;i++){
				reg.push(parseInt($("#info textarea:eq("+i+")").val()));
			}
			var err = [];
			var s = code.match(/(\S+)/gmi);
			var c = s.length;
			var re = /(.)\((\d)\s?,?\s?(\d)?\s?,?\s?(\d)?\)/;
			
				//var m = code.match(/(\S+)/g);
				//m[0] = m[0].match(/([z,Z,s,S,t,T,j,J])\((\d)\s?,?\s?(\d)?\s?,?\s?(\d)?\)/gmi);
			var cc = 0;
			for(var i=0;i<c;i++){
				var m = re.exec(s[i]);
				if(m)
				{
					var x = m[1].toString().toUpperCase();
					if(x!='Z' && x!='S' && x!='T' && x!='J') err.push((i+1)+': '+x);
					else if(x=='Z') reg[m[2]] = 0;
					else if(x=='S') reg[m[2]]++;
					else if(x=='T') reg[m[3]] = reg[m[2]];
					else if(x=='J') if(reg[m[3]] == reg[m[2]]) if(m[4]-2<=c){
						if(++cc>9999){
							err.push((i+1)+': Bad cycle');
							break;
						}
						i = m[4]-2; 
					}else i=c;
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
				for(var i=0;i<32;i++){
					$("#info textarea:eq("+i+")").val(reg[i].toString());
				}
			}else for(var i=0;i<err.length;i++) $("#info").append('Error in line '+err[i]+'<br>');
			//console.log(reg.length); //32 register
		}
	});
});