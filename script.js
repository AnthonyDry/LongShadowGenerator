$(document).ready(function(){
				var textShadow = "";
				var bgColor = "#82B5C3";
				var textColor = "#ffffff";
				var shadowColor = "#577A84";
				var direction = 3;
				$('.direction').click(function(e){
					e.preventDefault();
					var a_ = e.currentTarget;
					direction = $(a_).data("typeValue");
					$('.direction').removeClass('active');
					$(a_).addClass('active');
					UpdateShadow();

				});
				//COLORBOXES
				$('#bgClick').click(function(e){
					e.preventDefault();
					var newV = $('#BgEnterColor').val();
					var patt = /^#(?:[0-9a-f]{3}){1,2}$/i;
					if(newV.match(patt)){
						bgColor = newV;
						$('.bgColor').css('background-color', newV);
						UpdateShadow();
					}
					else{
						$('#BgEnterColor').css('background-color', "#ff0000");
						setTimeout(function(){
							$('#BgEnterColor').css('background-color', "#dddddd");
						},1000);
					}
				});
				$('#BgColorPick').change(function(e){
					e.preventDefault();
					var newV = e.currentTarget;
					newV = $(newV).val();
					bgColor = newV;
					$('.bgColor').css('background-color', newV);
					$('#BgEnterColor').val(newV);
					UpdateShadow();
				});
			//COLORBOXES
				$('#shadowClick').click(function(e){
					e.preventDefault();
					var newV = $('#ShadowEnterColor').val();
					var patt = /^#(?:[0-9a-f]{3}){1,2}$/i;
					if(newV.match(patt)){
						shadowColor = newV;
						$('.shadowColor').css('background-color', newV);
						UpdateShadow();
					}
					else{
						$('#ShadowEnterColor').css('background-color', "#ff0000");
						setTimeout(function(){
							$('#ShadowEnterColor').css('background-color', "#dddddd");
						},1000);
					}
				});
				$('#ShadowColorPick').change(function(e){
					e.preventDefault();
					var newV = e.currentTarget;
					newV = $(newV).val();
					shadowColor = newV;
					$('.shadowColor').css('background-color', newV);
					$('#ShadowEnterColor').val(newV);
					UpdateShadow();
				});
				//COLORBOXES
				$('#textClick').click(function(e){
					e.preventDefault();
					var newV = $('#TextEnterColor').val();
					var patt = /^#(?:[0-9a-f]{3}){1,2}$/i;
					if(newV.match(patt)){
						textColor = newV;
						$('.textColor').css('background-color', newV);
						UpdateShadow();
					}
					else{
						$('#TextEnterColor').css('background-color', "#ff0000");
						setTimeout(function(){
							$('#TextEnterColor').css('background-color', "#dddddd");
						},1000);
					}
				});
				$('#TextColorPick').change(function(e){
					e.preventDefault();
					var newV = e.currentTarget;
					newV = $(newV).val();
					textColor = newV;
					$('.textColor').css('background-color', newV);
					$('#TextEnterColor').val(newV);
					UpdateShadow();
				});
				function UpdateShadow(){
					first = true;
					var textShadow = "";
					switch(direction){
						case 1:
							for(var i = 1; i < 300; i++ ){
								if(!first){
									textShadow += ","
								}
								textShadow += shadowColor+" "+-i+"px "+-i+"px";
								first = false;
							}
							break;
						case 2:
							for(var i = 1; i < 300; i++ ){
								if(!first){
									textShadow += ","
								}
								textShadow += shadowColor+" "+i+"px "+-i+"px";
								first = false;
							}
							break;
						case 3:
							for(var i = 1; i < 300; i++ ){
								if(!first){
									textShadow += ","
								}
								textShadow += shadowColor+" "+-i+"px "+i+"px";
								first = false;
							}
							break;
						case 4:
							for(var i = 1; i < 300; i++ ){
								if(!first){
									textShadow += ","
								}
								textShadow += shadowColor+" "+i+"px "+i+"px";
								first = false;
							}
							break;
					}
					$('.preview-window').css('color', textColor);
					$('.preview-window').css('background-color', bgColor);
					$('.preview-window').css('text-shadow', textShadow);
					var CSS = "/*background*/ background-color:"+bgColor+"; /*text color*/ color:"+textColor+"; /*shadow*/ text-shadow:"+textShadow+"; /*Generated by long shadow generator*/";
					$('.generated-code').text(CSS);
				}
				UpdateShadow();
			});
			// shadow += "rgba(45,63,68, 0.8) "+-i+"px "+i+"px";