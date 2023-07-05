var gugu = '<table>';
for( var i = 0; i <=9; i++){
 gugu += '<tr>';
       for(var j=2; j<=9; j++){
         if(i==0){
           gugu += '<th>'+j+'단</th>';

         }else{
           gugu += '<td>'+i+' * '+j+' = '+(j*i)+'</td>';
         }
       }
       gugu += '</tr>'
   }
   gugu += '</table>'



   window.onload = function(){
    document.body.innerHTML += gugu;
  }
  // event property : 'on'+ eventName 식으로 작성하게 되면 이것이 이벤트 속성을 제공한다.
  // evebt handler : function(){...}