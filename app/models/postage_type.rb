class PostageType < ActiveHash::Base
  self.data = [
      {id: 1, type: '未定'}, {id: 2, type: 'ゆうメール'}, {id: 3, type: 'レターパック'},
      {id: 4, type: '普通郵便(定形、定形外)'}, {id: 5, type: 'クロネコヤマト'}, {id: 6, type: 'ゆうパック'},
      {id: 7, type: 'クリックポスト'}, {id: 8, type: 'ゆうパケット'}
  ]
end