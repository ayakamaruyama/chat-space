$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
    `<div class="message" data-message-id=${message.id}>
      <div class="messages__message">
      <div class="messages__message__upper-message">
        <div class="messages__message__upper-message__user-name">
        ${message.user_name}
        </div>
        <div class="messages__message__upper-message__user-date">
        ${message.created_at}
        </div>
      </div>
      <div class="messages__message__lower-message">
        <div class="lower-message__sentence">
        ${message.sentence}
        </div>
      <img src=${message.image} >
      </div>
      </div>
    </div>`
     return html;
   } else {
     var html =
     `<div class="message" data-message-id=${message.id}>
        <div class="messages__message">
        <div class="messages__message__upper-message">
          <div class="messages__message__upper-message__user-name">
          ${message.user_name}
          </div>
          <div class="messages__message__upper-message__user-date">
          ${message.created_at}
          </div>
        </div>
        <div class="messages__message__lower-message">
          <div class="lower-message__sentence">
          ${message.sentence}
          </div>
        </div>
        </div>
      </div>`
     return html;
   };
 }
 
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight}); 
        $('form')[0].reset();
        $('.box').animate({'height' : '200px'});
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
      })
      .always(function(){
        $('.form__box__button').prop('disabled', false);
      });
  });

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data("message-id");
    console.log(last_message_id);
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      //メッセージが入ったHTMLに、入れ物ごと追加
      $('.messages').append(insertHTML);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      
     }
    })
    .fail(function() {
      alert('error');
    });
  
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});



{/* <div class="message" data-message-id="36">
<div class="messages__message">
<div class="messages__message__upper-message">
<div class="messages__message__upper-message__user-name">
cat
</div>
<div class="messages__message__upper-message__user-date">
2020年02月03日 13時07分
</div>
</div>
<div class="messages__message__lower-message">
<div class="lower-message__sentence">
tets
</div>

</div>
</div>
</div> */}

// `<div class="message" data-message-id=${message.id}>
//   <div class="messages__message">
//     <div class="messages__message__upper-messagee">
//       <div class="messages__message__upper-message__user-name">
//         ${message.user_name}
//       </div>
//       <div class="messages__message__upper-message__user-date">
//         ${message.created_at}
//       </div>
//     </div>
//     <div class="messages__message__lower-message">
//       <p class="lower-message__sentence">
//         ${message.sentence}
//       </p>
//     </div>
//   </div>`
