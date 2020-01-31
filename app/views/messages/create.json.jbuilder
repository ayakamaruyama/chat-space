json.sentence    @message.content
json.image      @message.image_url
json.created_at @message.created_at.datetime.to_s("%Y年%m月%d日 %H時%M分")
json.user_name @message.user.name
#idもデータとして渡す
json.id @message.id