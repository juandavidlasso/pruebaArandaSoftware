import React from 'react';
import ProductImage from './components/productImages';
import ProductCards from './components/productCards';
import ProductItems from './components/productItems';
import Footer from '../../components/Footer';

interface Props {}

const Home: React.FC<Props> = ({}) => {
    return (
        <>
            <ProductImage />
            <ProductItems />
            <ProductCards />
            <Footer />
        </>
    );
};

export default Home;
