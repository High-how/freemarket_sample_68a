class Size < ActiveHash::Base
  self.data = [
      {id: 1, size: 'XXS'}, {id: 2, size: 'XS'}, {id: 3, size: 'S'},
      {id: 4, size: 'M'}, {id: 5, size: 'L'}, {id: 6, size: 'XL'}, {id: 7, size: '2XL'}, {id: 8, size: '3XL'}, {id: 9, size: '4XL'}, {id: 10, size: 'FREE SIZE'}
  ]
end
