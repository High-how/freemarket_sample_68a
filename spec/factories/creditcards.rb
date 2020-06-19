FactoryBot.define do

  factory :creditcard do
    # id                 {"1"}
    # user_id            {"1"}
    # number             {"424242424242424242"}
    # exp_month          {"15"}
    # exp_year           {"29"}
    # cvc                {"123"}
    card_id               {"car_aaaaaaa"}
    payjp_id              {"cus_aaaaaaa"}
    user
    # created_at         {"2020-06-08 16:15:28"}
    # updated_at         {"2020-06-08 16:15:28"}
  end

end