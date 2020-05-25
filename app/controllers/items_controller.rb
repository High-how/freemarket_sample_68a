class ItemsController < ApplicationController
  before_action :authenticate_user!, except: [:show]
  def index
  end

  def new
    @item = Item.new
    @parents = Category.all.order("id ASC").limit(13)
  end

  def create
    @item = Item.new(item_params)
    @parents = Category.all.order("id ASC").limit(13)
    if @item.save
      redirect_to root_path
    else
      redirect_to new_item_path
    end
  end

  def category_search
    respond_to do |format|
      format.html
      format.json do
        if params[:parent_id]
          @children = Category.find(params[:parent_id]).children
        else
          @grand_children = Category.find(params[:child_id]).children
        end
      end
    end
  end

  private
  def item_params
    params.require(:item).permit(:name, :size, :introduction, :trading_status, :postage_payer, :postage_type,:shipping_area, :shipping_date, :price, :brand, :category_id).merge(user_id: current_user.id)
  end
  
end
