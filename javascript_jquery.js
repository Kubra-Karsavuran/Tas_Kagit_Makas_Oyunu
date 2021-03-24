       var pictures=["url(taş.PNG)","url(makas.PNG)","url(kağıt.PNG)"];
       var a;
       var b;
       var deger;
       deger=prompt("Kaç olunca oyun bitsin",1);

       function deger_belirle(deger)
       {
          if (deger<=0) {
            deger=prompt("Verdiğiniz değerde bir sıkıntı var yeni değer giriniz",1);
            deger=deger_belirle(deger);
          }
          return deger;
       }

       deger=deger_belirle(deger);

        function random_number()  
        {
          var random=Math.round(Math.random()*2);
          return random;
        }

        function throw_away()
        {
        	a=pictures[random_number()];  // player1 resmı
        	b=pictures[random_number()]; // player 2 resmı

        	document.getElementById('img_1').style.backgroundImage=a;
        	document.getElementById('img_2').style.backgroundImage=b;
        }

        function skor_see()
        {
        	var x= Number(document.getElementById('skor_dablo_1').innerHTML);
        	var y= Number(document.getElementById('skor_dablo_2').innerHTML);

        	if (x<deger && y<deger) 
        	{

        		if (a =="url(taş.PNG)" && b =="url(makas.PNG)") {
        			document.getElementById('skor_dablo_1').innerHTML= x+1;
        		}
        		else if (a =="url(makas.PNG)" && b =="url(taş.PNG)") {
        			document.getElementById('skor_dablo_2').innerHTML= y+1;
        		}
        		else if (a =="url(makas.PNG)" && b =="url(kağıt.PNG)") {
        			document.getElementById('skor_dablo_1').innerHTML= x+1;
        		}
        		else if (a =="url(kağıt.PNG)" && b =="url(makas.PNG)") {
        			document.getElementById('skor_dablo_2').innerHTML= y+1;
        		}
        		else if (a =="url(taş.PNG)" && b =="url(kağıt.PNG)") {
        			document.getElementById('skor_dablo_2').innerHTML= y+1;
        		}
        		else if (a =="url(kağıt.PNG)" && b =="url(taş.PNG)") {
        			document.getElementById('skor_dablo_1').innerHTML= x+1;
        		}

        	}else if (x==deger || y==deger) {

                $(function(){
                    if (x==deger)
                    {   
                        $("#kazanan").slideDown(1000);
                        $("#kazanan").delay(2000);
                        $("#kazanan").slideUp(1000);
                        $("#kazanan").css({"background-color":"yellow"});
                        $("#kazanan_1").text("KAZANAN SARİ TAKİM");
                        $(".adam_2").slideUp(1000);
                    }
                    else if (y==deger)
                    {
                        $("#kazanan").slideDown(1000);
                        $("#kazanan").delay(2000);
                        $("#kazanan").slideUp(1000);
                        $("#kazanan").css({"background-color":"blue"});
                        $("#kazanan_1").text("KAZANAN MAVİ TAKİM");
                        $(".adam_1").slideUp(1000,function(){
                            $("#contant").css({
                                "margin-left":"470px"
                            });
                        });
                    }
                });
              }
            }

            function for_submit()
            {
               document.getElementById('kazanan').style.display="none";
               throw_away(); 
               skor_see();
            }

