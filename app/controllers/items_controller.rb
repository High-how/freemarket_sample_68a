class ItemsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_item, except: [:index, :new, :create, :category_search]

  def index
    @items = Item.all
  end

  def new
    @item = Item.new
    @item.images.new
    @parents = Category.all.order("id ASC").limit(13)
  end

  def create
    @item = Item.new(item_params)
    @parents = Category.all.order("id ASC").limit(13)
    logger.debug @item.errors.inspect
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

  def edit
    @parents = Category.all.order("id ASC").limit(13)
  end

  def update
    if @item.update(item_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @item.destroy
    redirect_to root_path
  end

  def show
    @parents = Category.all.order("id ASC").limit(13)
    @children = Category.find(params[:parent_id]).children
    @grand_children = Category.find(params[:child_id]).children
  end

  private
  def item_params
    params.require(:item).permit(:name, :introduction, :trading_status, :postage_payer, :postage_type, :shipping_area, :shipping_date, :price, :brand, :category_id, images_attributes: [:src, :_destroy, :id]).merge(seller_id: current_user.id)
  end

  def set_item
    @item = Item.find(params[:id])
  end

end
