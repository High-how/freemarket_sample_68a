FactoryBot.define do

  factory :user do
    nickname              {"abe"}
    email                 {"kkk@gmail.com"}
    password              {"00000000"}
    password_confirmation {"00000000"}
    family_name           {"山田"}
    first_name            {"太郎"}
    family_name_reading   {"ヤマダ"}
    first_name_reading    {"タロウ"}
    birth_year            {"2000"}
    birth_month           {"2"}
    birth_day             {"20"}
  end
end