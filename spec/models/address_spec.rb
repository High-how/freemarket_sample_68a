require 'rails_helper'

describe Address do
  describe '#create' do
    it "全ての項目が存在すれば登録できること" do
      user = build(:address)
      expect(user).to be_valid
    end

    it "family_nameがない場合は登録できないこと" do
      user = build(:address, family_name: nil)
      user.valid?
      expect(user.errors[:family_name]).to include("can't be blank")
    end

    it "first_nameがない場合は登録できないこと" do
      user = build(:address, first_name: nil)
      user.valid?
      expect(user.errors[:first_name]).to include("can't be blank")
    end

    it "family_name_readingがない場合は登録できないこと" do
      user = build(:address, family_name_reading: nil)
      user.valid?
      expect(user.errors[:family_name_reading]).to include("can't be blank")
    end

    it "first_name_readingがない場合は登録できないこと" do
      user = build(:address, first_name_reading: nil)
      user.valid?
      expect(user.errors[:first_name_reading]).to include("can't be blank")
    end

    it "postal_codeがない場合は登録できないこと" do
      user = build(:address, postal_code: nil)
      user.valid?
      expect(user.errors[:postal_code]).to include("can't be blank")
    end

    it "prefectureがない場合は登録できないこと" do
      user = build(:address, prefecture: nil)
      user.valid?
      expect(user.errors[:prefecture]).to include("can't be blank")
    end

    it "cityがない場合は登録できないこと" do
      user = build(:address, city: nil)
      user.valid?
      expect(user.errors[:city]).to include("can't be blank")
    end

    it "addressがない場合は登録できないこと" do
      user = build(:address, address: nil)
      user.valid?
      expect(user.errors[:address]).to include("can't be blank")
    end

  end
end