import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-bold mb-6">ShoresTech Consulting</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Empowering businesses with expert Kubernetes and DevOps solutions.
                        Transform your infrastructure and accelerate your deployment pipeline with
                        enterprise-grade consulting services.
                    </p>
                    <a href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Schedule a Consultation
                        </motion.button>
                    </a>

                </motion.div>
            </div>
        </div>
    );
};

export default Hero; 