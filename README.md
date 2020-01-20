# README

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|
|mail|string|null: false|

### Association
- has_many :groups_users
- has_many :group, through: :groups_users
- has_many :message

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|referebce|null: false, foreign_key: true|
|group_id|referebce|null: false, foreign_key: true|

### Association
- has_many :groups_users
- has_many :user, through: :groups_users
- has_many :message

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|referebce|null: false, foreign_key: true|
|group_id|referebce|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

























