import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

import ProductsTable from "../components/products/ProductsTable";

const ProductsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Track Shipment' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>


				<ProductsTable />


			</main>
		</div>
	);
};
export default ProductsPage;
