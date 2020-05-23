FactoryBot.define do

  factory :address do
    family_name           {"山田"}
    first_name            {"太郎"}
    family_name_reading   {"ヤマダ"}
    first_name_reading    {"タロウ"}
    postal_code           {"000-0000"}
    prefecture            {"愛知県"}
    city                  {"名古屋市中区栄"}
    address               {"3丁目10番地"}
  end

end