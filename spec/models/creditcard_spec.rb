describe Creditcard do
  describe '#create' do
    it "全ての項目が存在すれば登録できること" do
      creditcard = build(:creditcard)
      expect(creditcard).to be_valid
    end

    it "payjp_idがない場合は登録できないこと" do
      creditcard = build(:creditcard, payjp_id: nil)
      creditcard.valid?
      expect(creditcard.errors[:payjp_id]).to include("can't be blank")
    end

    it "card_idがない場合は登録できないこと" do
      creditcard = build(:creditcard, card_id: nil)
      creditcard.valid?
      expect(creditcard.errors[:card_id]).to include("can't be blank")
    end
  end
end