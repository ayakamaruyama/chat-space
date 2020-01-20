# README

## memberテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|referebce|null: false, foreign_key: true|
|group_id|referebce|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|
|mail|string|null: false|

### Association
- has_many :groups, through: members
- has_many :messages
- has_many :members


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|referebce|null: false, foreign_key: true|
|group_id|referebce|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :messages

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|user_id|referebce|null: false, foreign_key: true|
|group_id|referebce|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## group_userstテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group























