class PurchaseController < ApplicationController
  require 'payjp'

  def index
    #商品/ユーザー/クレジットカードの変数設定
    @user = current_user
    @creditcard = Creditcard.find_by(user_id: current_user.id)
    @address = Address.find_by(user_id: current_user.id)
    @item = Item.find(params[:id])

    if @creditcard.blank?
      #登録された情報がない場合にカード登録画面に移動
      redirect_to controller: "creditcards", action: "new"
    else
      Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
      #保管した顧客IDでpayjpから情報取得
      customer = Payjp::Customer.retrieve(@creditcard.payjp_id)
      @creditcard_information = customer.cards.retrieve(@creditcard.card_id)
    end
  end

  def pay
    #クレジットカードと製品の変数を設定
    @creditcard = Creditcard.find_by(user_id: current_user.id)
    @item = Item.find(params[:id])
    #Payjpの秘密鍵を取得
    Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
    #payjp経由で支払いを実行
    charge = Payjp::Charge.create(
      amount: @item.price,
      customer: Payjp::Customer.retrieve(@creditcard.payjp_id),
      currency: 'jpy'
    )
    #製品のbuyer_idを付与
    @item_buyer= Item.find(params[:id])
    @item_buyer.update( buyer_id: current_user.id)
    redirect_to root_path
  end

end
