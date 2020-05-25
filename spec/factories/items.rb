FactoryBot.define do

  factory :item do
    name           {"服"}
    introduction   {"新品です"}
    postage_type   {"未定"}
    shipping_area  {"北海道"}
    trading_status {"未使用に近い"}
    shipping_date  {"１〜２日で発送"}
    postage_payer  {"送料込み(発送者負担)"}
    price          {"300"}
    user_id        {"1"}
  end

end
