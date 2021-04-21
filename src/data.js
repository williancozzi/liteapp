import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

const data = {
    products: [
        {
            id: '1',
            description: 'Para as primeiras 1.000 consultas NFe',
            name: '1000 consultas - R$0,09/consulta',
            price: 0.09 * 1000,
            perConsultPrice: 0.09,
            image: img1,
        },
        {
            id: '2',
            description: 'Para as primeiras 2.000 consultas NFe',
            name: '2000 consultas - R$0,16/consulta',
            price: 0.16 * 2000,
            perConsultPrice: 0.09,
            image: img2,
        },
        {
            id: '3',
            description: 'Consulta única NFe',
            name: '1 consulta - R$0,24/consulta',
            price: 0.24,
            image: img3,
        },
    ],
};

export default data;