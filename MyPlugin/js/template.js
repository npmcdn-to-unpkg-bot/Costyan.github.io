var myTmpl =
'<div class="position">' +
'  <h2 class="fio-head"><%=user.fio%></h2>' +
'  <div>'+
'    <p><%=user.position%></p>' +
'  </div>' +
'</div>' +
'<div class="position">' +
'  <p>Хочу учить фронтенд, потому что:</p>' +
'  <ul>' +
'  <%for(var i = 0; i < user.reasons.length; i++) {%>' +
'    <li><%=user.reasons[i]%></li>' +
'  <%}%>' +
'  </ul>' +
'</div>' +
'<div class="position">' +
'<%for(var i = 0; i < user.contacts.length; i++) {%>' +
'  <div>' +
'   <%=user.contacts[i].title%>' +
'   <%if(user.contacts[i].source) {%>'+
'      <p><a href="<%=user.contacts[i].source%>" target="_blank"><%=user.contacts[i].value%></a></p>' +
'   <%} else {%>' +
'      <p><%=user.contacts[i].value%></p>' +
'   <%}%>' +
'  </div>' +
'<%}%>' +
'</div>' +
'<div class="position">' +
'  <p>Мой фидбек::</p>' +
'  <ul>' +
'  <%for(var i = 0; i < user.feedbacks.length; i++) {%>' +
'    <li><%=user.feedbacks[i]%></li>' +
'  <%}%>' +
'  </ul>' +
'</div>'
;
