describe Creditcard do
  describe '#create' do
    it "全ての項目が存在すれば登録できること" do
      creditcard = build(:creditcard)
      expect(creditcard).to be_valid
    end
  end
end