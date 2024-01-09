const cards = [
  {
    productName: 'Nothing',
    price: '$999',
    ratings: '4.5',
    imageUrl: nothingPhoneImage,
    color:'#E3F7F4',
    actualamount:'$1009',
    type: 'phone',
  },
  {
    productName: 'OPPO',
    price: '$179',
    ratings: '4.3',
    imageUrl: oppophone,
    color:'#EBF5F3',
    actualamount:'$189',
    type: 'phone',
  },
  {
    productName: 'Redmi ',
    price: '$199',
    ratings: '3.8',
    imageUrl: redmi,
    color: '#F7F7ED',
    actualamount:'$209',
    type: 'phone',
  },
  {
    productName: 'Vivo X90',
    price: '$299',
    ratings: '4.4',
    imageUrl: vivo,
    color: '#EBF5F3',
    actualamount:'$309',
    type: 'phone',
  },
  {
    productName: 'Realme',
    price: '$149',
    ratings: '3.8',
    imageUrl: realme,
    color: '#E3F7F4',
    actualamount:'$159',
    type: 'phone',
  },
  {
    productName: 'Oneplus 11R',
    price: '$159',
    ratings: '4.4',
    imageUrl: oneplus,
    color: '#F7F7ED',
    actualamount:'$169',
    type: 'phone',
  },
  {
    productName: 'Pixel 8A',
    price: '$649',
    ratings: '4.6',
    imageUrl: pixel,
    color: '#F7F7ED',
    actualamount:'$659',
    type: 'phone',
  },
  {
    productName: 'samsung S23',
    price: '$749',
    ratings: '4.9',
    imageUrl: samsung,
    color: '#E3F7F4',
    actualamount:'$759',
    type: 'phone',
  },
  {
    productName: 'Iphone 15 Pro',
    price: '$849',
    ratings: '4.8',
    imageUrl: iphone15,
    color: '#F7F7ED',
    actualamount:'$859',
    type: 'phone',
  },
  {
    productName: 'Iphone 14 pro ',
    price: '$549',
    ratings: '4.2',
    imageUrl: iphone14,
    color: '#E3F7F4',
    actualamount:'$559',
    type: 'phone',
  },
  {
    productName: 'Moto g22',
    price: '$249',
    ratings: '3.8',
    imageUrl: moto,
    color: '#EBF5F3',
    actualamount:'$349',
    type: 'phone',
  },
  {
    productName: 'Techo 20',
    price: '$129',
    ratings: '3.4',
    imageUrl: techno,
    color: '#F7F7ED',
    actualamount:'$139',
    type: 'phone'

  },
  {
    productName: 'Airpod Pro',
    price: '$200',
    ratings: '4.9',
    imageUrl: apple1,
    color: '#F7F7ED',
    actualamount:'$210',
    type: 'headphone'

  },
  {
    productName: 'Samsung Buds',
    price: '$180',
    ratings: '4.6',
    imageUrl: samsungbuds,
    color: '#F7F7ED',
    actualamount:'$190',
    type: 'headphone'

  },
  {
    productName: 'Sony Buds',
    price: '$200',
    ratings: '4.5',
    imageUrl: sony,
    color: '#F7F7ED',
    actualamount:'$210',
    type: 'headphone'

  },
  {
    productName: 'Nothing buds',
    price: '$160',
    ratings: '4.2',
    imageUrl: nothingbuds,
    color: '#F7F7ED',
    actualamount:'$170',
    type: 'headphone'

  },
  {
    productName: 'Boat',
    price: '$100',
    ratings: '4.4',
    imageUrl: boat,
    color: '#F7F7ED',
    actualamount:'$110',
    type: 'headphone'

  },
  {
    productName: 'JBL buds',
    price: '$120',
    ratings: '4.3',
    imageUrl: jbl,
    color: '#F7F7ED',
    actualamount:'$130',
    type: 'headphone'

  },
  {
    productName: 'Oneplus Buds Pro',
    price: '$155',
    ratings: '4.6',
    imageUrl: oneplusbuds,
    color: '#F7F7ED',
    actualamount:'$165',
    type: 'headphone'

  },
  {
    productName: 'Mi Buds',
    price: '$105',
    ratings: '4.0',
    imageUrl: mi,
    color: '#F7F7ED',
    actualamount:'$115',
    type: 'headphone'

  },
  {
    productName: 'Vivo Buds',
    price: '$90',
    ratings: '3.8',
    imageUrl: vivobuds,
    color: '#F7F7ED',
    actualamount:'$100',
    type: 'headphone'

  },
];

fetch('https://657fb88b6ae0629a3f538d87.mockapi.io/project', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ cards }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data stored successfully:', data);
  })
  .catch(error => {
    console.error('There was a problem storing the data:', error);
  });

export default cards;