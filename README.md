### users テーブル

| Column             | Type    | Options                   |
|--------------------|---------|---------------------------|
| name               | string  | null: false               |
| email              | string  | null: false, unique: true |
| encrypted_password | string  | null: false               |
| school             | string  | null: false               |
| department         | string  | null: false               |
| course             | string  |                           |
| grade              | integer | null: false               |

### Association

- has_many :schedules

### schedules テーブル

| Column      | Type       | Options                        |
|-------------|------------|--------------------------------|
| user        | references | null: false, foreign_key: true |
| title       | string     |                                |
| start       | datetime   | null: false                    |
| end         | datetime   | null: false                    |
| place       | string     |                                |
| description | text       |                                |

### Association

- belongs_to :user